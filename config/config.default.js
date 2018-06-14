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
               password: '19900629',
               database: 'myone',
          },
          app: true,
          agent: false,
      }
  };
  config.keys = appInfo.name + '_1489393729180_4559';
  return config;
};
