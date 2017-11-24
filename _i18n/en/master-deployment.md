[Reliable](//reliablejs.github.io/){:target="_blank"} is a distributed reliable continuous delivery service.

In order to build and run the master server quickly, without considering about redis, mongodb, and other third-party tools.

Docker is the default and recommended way to deploy master.

![Macaca-Docker](http://ww2.sinaimg.cn/large/6d308bd9gw1f5scrp1p4rj20rs0gatbj.jpg)

## General Requirements

- [git](http://git-scm.com/){:target="_blank"} >= 2.0
- [docker](//www.docker.com/){:target="_blank"} >= 1.9.1
- [docker compose](//www.docker.com/products/docker-compose){:target="_blank"} >= 1.5.2

> Note: some requirements, like nodejs, mongodb, redis, can use docker to pull and run. With docker, you don't need to care.

## Basic Usage

Get the source code(if your system is windows，please exec 'git config --global core.autocrlf false' and remember to change back after erverthing is ok or download the code from the zip type), then you can use docker and docker-compose to setup `reliable`, just like:

Prepare basic docker image:

```bash
$ git clone https://github.com/reliablejs/reliable-docker-base --depth=1
$ cd reliable-docker-base
$ docker build -t="reliable-docker-base" .
```

Run `docker images`, you could find image named `reliable-docker-base`.

Prepare master `reliable-master` image:

```bash
$ git clone https://github.com/reliablejs/reliable-master --depth=1
$ cd reliable-master
$ docker build -t="reliable-master" .
```

Run `docker images`, you could find image named `reliable-master`.

Launch from compose file:

```bash
$ git clone https://github.com/reliablejs/reliable-macaca-docker-compose.git --depth=1
$ cd reliable-macaca-docker-compose
$ make start
```

Edit `docker-compose.yml` like this, in ordrer to config your master and slave.

```yml
reliable-master:
  container_name: "reliable-master"
  restart: "UNLESS-STOP"
  image: reliable-master
  ports:
    - "${RELIABLE_MASTER_PORT}:${RELIABLE_MASTER_PORT}"
  links:
    - mongo:mongo
    - redis:redis
  environment:
    - DB_SERVICE=mongo
    - DB_PORT=27017
    - DB_NAME=reliable_dev
  volumes:
    - /etc/localtime:/etc/localtime:ro
  command: /reliable-master/bin/reliable-master server -p ${RELIABLE_MASTER_PORT} --verbose

mongo:
  container_name: "reliable_mongo"
  restart: always
  image: mongo
  volumes:
    - /var/mongo/data/db:/data/db
    - /etc/localtime:/etc/localtime:ro

redis:
  container_name: "reliable_redis"
  restart: always
  image: redis
  volumes:
    - /etc/localtime:/etc/localtime:ro
```

## Configuring

`relibale` default configuration is in [config.js](//github.com/reliablejs/reliable-master/blob/master/common/config.js){:target="_blank"}, you could override it by add config file in root directory which need named `*.reliable.config.js`.

There is the relevant description:

> It's a good idea not to change configuration of MongoDB & Redis, because docker-compose will take care of them. If you need to change, please update [docker-compose.yml](//github.com/reliablejs/reliable-macaca-docker-compose/blob/master/docker-compose.yml){:target="_blank"} to satisfy.

- server
  Settings for Http server, like port.
- site
  Some preferences for your site, like title, baseurl, and so on.
- auth
  Third part token configuration, like [Github](//github.com/){:target="_blank"}, [Gitlab](//gitlab.com){:target="_blank"}.
- mail
  Mail service configuration, see [Nodemailer](//github.com/nodemailer/nodemailer){:target="_blank"}.

>##### Notice

Please allow a couple of minutes for the Reliable application to start.

### Add Administrator

Using `make adduser` in reliable-master container to add administrator for initialization.

### Running status

Using `make status` in reliable-slave container to get docker containers' running status.

### Data Backup

Using `make dump` in reliable-master container to dump data from MongoDB containers.

Using `make restore` in reliable-master container to restore data into MongoDB containers.

You can use `crontab` to backup data. See [scripts/cron.sh](//github.com/reliablejs/reliable-master/blob/master/scripts/cron.sh){:target="_blank"}, edit it for customization, and add it to your crontab script. Like:

```bash
$ crontab -e
```

Configuration:

- home - System user home path where you put repo.
- repo - Path of `reliable` source code folder.
- url - Url to get slaves info, `http://<hostname>:<port>/slaves`, like `http://localhost:3333/slaves`

## Integration With Service

Want to integration with other service like Gitlab-CI or Jenkins?

POST `macaca-host/api/task/create/gitlab-push.json` to submit a task.

More about the data schema, please check Gitlab documents.

## Screenshots

![reliable-1](http://ww1.sinaimg.cn/large/6d308bd9gw1f1ygp19gllj20xl0oldna.jpg)

![reliable-2](http://ww3.sinaimg.cn/large/6d308bd9gw1f1ygp26ocej20wr0j2tcz.jpg)

![reliable-3](http://ww4.sinaimg.cn/large/6d308bd9gw1f1yr1jy4ohj20qj0jzgn4.jpg)
