'use strict';

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
  return config;
};
exports.security = {
  xframe: {
    enable: false,
  },
};
