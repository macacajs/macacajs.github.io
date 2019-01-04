'use strict';

module.exports = {
  dest: 'docs',
  base: '/',

  locales: {
    '/': {
      lang: 'en-US',
      title: 'Macaca',
      description: 'Solution for Automation Test with Ease',
    },
    '/zh/': {
      lang: 'zh-CN',
      title: 'Macaca',
      description: '面向多端的自动化测试',
    },
  },
  head: [
    ['link', {
      rel: 'icon',
      type: 'image/png',
      href: '/assets/favicon.ico'
    }],
    ['script', {
      async: true,
      src: 'https://www.googletagmanager.com/gtag/js?id=UA-49226133-2',
    }],
    ['script', {}, `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'UA-49226133-2');
    `],
    ['style', {}, `
      .clearfix{
        overflow: hidden;
      }
      video {
        width: 100%;
      }
      #who-use-list {
        list-style: none;
        clear: left;
        margin: 0;
      }
      #who-use-list li {
        float: left;
        text-align: center;
        padding: 20px;
        margin: 0;
      }
      #who-use-list img {
        width: 60px;
      }
      #who-use-list p {
        margin: 0;
        font-size: 14px;
        line-height: 1.5;
      }
    `]
  ],
  serviceWorker: true,
  themeConfig: {
    repo: 'alibaba/macaca',
    editLinks: true,
    docsDir: 'src',
    locales: {
      '/': {
        label: 'English',
        selectText: 'Languages',
        editLinkText: 'Edit this page on GitHub',
        lastUpdated: 'Last Updated',
        serviceWorker: {
          updatePopup: {
            message: 'New content is available.',
            buttonText: 'Refresh',
          },
        },
        nav: [
          {
            text: 'Guide',
            link: '/guide/'
          },
          {
            text: 'Ecosystem',
            items: [
              {
                text: 'Web Page Testing',
                items: [
                  {
                    text: 'UITest',
                    link: 'https://macacajs.github.io/uitest'
                  }
                ]
              }
            ]
          }
        ],
        sidebar: {
          '/guide/': genSidebarConfig(),
        }
      },
      '/zh/': {
        label: '简体中文',
        selectText: '选择语言',
        editLinkText: '在 GitHub 上编辑此页',
        lastUpdated: '上次更新',
        serviceWorker: {
          updatePopup: {
            message: '发现新内容可用',
            buttonText: '刷新',
          },
        },
        nav: [
          {
            text: '指南',
            link: '/zh/guide/'
          },
          {
            text: '生态成员',
            items: [
              {
                text: 'Web 测试框架',
                items: [
                  {
                    text: 'UITest',
                    link: 'https://macacajs.github.io/uitest/'
                  }
                ]
              }
            ]
          }
        ],
        sidebar: {
          '/zh/guide/': genSidebarConfig(true),
        }
      },
    },
  },
};

function genSidebarConfig(isZh) {
  const res = [
    {
      title: 'Guide',
      collapsable: false,
      children: [
        '',
        'environment-setup',
        'quick-start',
        'helpful-settings',
        'versioning',
      ],
    },
    {
      title: 'API',
      collapsable: false,
      children: [
        'nodejs',
        'java',
        'python'
      ],
    },
    {
      title: 'Advanced',
      collapsable: false,
      children: [
        'debugging',
        'inspector',
        'recorder',
        'datahub',
        'coverage',
        'nosmoke',
        'monkey-testing',
        'computer-vision',
        'browser',
        'run-with-docker',
        'master-deployment'
      ],
    },
    {
      title: 'Support',
      collapsable: false,
      children: [
        'roadmap',
        'contributing',
        'faq',
        'support'
      ],
    },
  ];

  if (!isZh) {
    return res;
  }

  const map = {
    guide: '使用指南',
    api: 'API文档',
    advanced: '高级进阶',
    support: '社区支持'
  };

  return res.map(item => {
    item.title = map[item.title.toLowerCase()];
    return item;
  });
}
