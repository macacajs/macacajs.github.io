// node ./scripts/replace-image.js ./src/
var fs = require('fs');
var path = require('path');
var request = require('request');

var download = function(uri, filename, callback) {
  request.head(uri, function(err, res, body) {
    console.log(uri);
    console.log('content-type:', res.headers['content-type']);
    console.log('content-length:', res.headers['content-length']);

    request(uri)
      .pipe(fs.createWriteStream(filename))
      .on('close', callback);
  });
};

// List all files in a directory in Node.js recursively in a synchronous fashion
const walkSync = function(dir, fileList) {
  var fs = fs || require('fs'),
    files = fs.readdirSync(dir);
  fileList = fileList || [];
  files.forEach(function(file) {
    if (fs.statSync(dir + file).isDirectory()) {
      fileList = walkSync(dir + file + '/', fileList);
    } else {
      fileList.push(path.join(dir, file));
    }
  });
  return fileList;
};

if (process.argv.length <= 2) {
  console.log('Usage: ' + __filename + ' path/to/directory');
  process.exit(-1);
}

var targetPath = process.argv[2];

const fileList = walkSync(targetPath, []);
const mdList = fileList.filter(file => file.endsWith('.md'));

function replacer(match, p1, p2, p3, p4, p5, p6, p7, offset, string) {
  console.log(p1, p2, p3, p4, p5, p6, p7, match);
  download(
    match.startsWith('//') ? 'https:' + match : match,
    './src/.vuepress/public/assets/' + [p6, p7].join('.'),
    function() {
      console.log(match + ' done');
    }
  );
  return '/assets/' + [p6, p7].join('.');
}

mdList.forEach(file => {
  fs.readFile(file, 'utf8', function(err, data) {
    if (err) {
      return console.log(err);
    }
    // console.log(data);
    console.log(file);
    const matchRes = data.match(
      /(http(s?):)*\/\/([/.\w\s-])*(sinaimg\.cn\/)(large|square|mw1024)\/([\w]*)\.(jpg|gif|png)/g
    );
    // console.log(matchRes);
    var result = data.replace(
      /(http(s?):)*\/\/([/.\w\s-])*(sinaimg\.cn\/)(large|square|mw1024)\/([\w]*)\.(jpg|gif|png)/g,
      replacer
    );
    console.log(result);
    fs.writeFile(file, result, 'utf8', function (err) {
       if (err) return console.log(err);
    });
  });
});
