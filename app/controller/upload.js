'use strict';

const fs = require('fs');
const path = require('path');
const Controller = require('egg').Controller;
const awaitWriteStream = require('await-stream-ready').write;
const sendToWormhole = require('stream-wormhole');

class UploadFormController extends Controller {
  async show() {
    await this.ctx.render('page/form.html');
  }

  async uploadFile() {
    const stream = await this.ctx.getFileStream();
    const filename = Date.now().toString() + path.extname(stream.filename).toLowerCase();
    const target = path.join(this.config.baseDir, 'app/public/static/imgs', filename);
    const writeStream = fs.createWriteStream(target);
    try {
      await awaitWriteStream(stream.pipe(writeStream));
    } catch (err) {
      await sendToWormhole(stream);
      throw err;
    }
    var pathUrl = '/static/imgs/' + filename
    this.ctx.body = {
      url: pathUrl,
    }
  }
}

module.exports = UploadFormController;
