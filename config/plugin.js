'use strict';

// had enabled by egg
// exports.static = true;
exports.nunjucks = {
    enable: true,
    package: 'egg-view-nunjucks'
};

exports.mysql = {
    enable: true,
    package: 'egg-mysql',
};
exports.cors = {
  enable: true,
  package: 'egg-cors',
};
exports.sendToWormhole = {
  enable: true,
  package: 'stream-wormhole',
};
