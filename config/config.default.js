'use strict';
const path = require('path');
module.exports = appInfo => {
  const config = {
      view: {
          defaultViewEngine: 'nunjucks',
          mapping: {
              '.tpl': 'nunjucks',
          },
      },
      mysql: {
          client: {
            host: 'localhost',
               port: '3306',
               user: 'root',
               password: 'sw19900629',
               database: 'myone',
          },
          app: true,
          agent: false,
      }
  };
  config.keys = appInfo.name + '_1489393729180_4559';
  config.security = {
    csrf: {
      enable: false,
      ignoreJSON: true, // 默认为 false，当设置为 true 时，将会放过所有 content-type 为 `application/json` 的请求
    },
    methodnoallow: {
      enable: false
    },
    domainWhiteList: [ 'http://localhost:8080' , 'http://localhost:8081' ]
  };
  config.cors = {
    allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH,OPTIONS',
    credentials: true,
  }
  config.static = {
    prefix: '/static/',
    dir: path.join(appInfo.baseDir, 'app/public'),
  }
  // config.static = {
  //   prefix: '/public/',
  //   dir: path.join(appInfo.baseDir, 'app/public'),
  // }
  return config;
};
exports.security = {
  xframe: {
    enable: false,
  },
};
// module.exports = appInfo => ({
//   view: {
//     // 如果还有其他模板引擎，需要合并多个目录
//     root: path.join(appInfo.baseDir, 'app/static'),
//   },
// });
