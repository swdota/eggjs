const Service = require('egg').Service;
const path = require('path');
const sendToWormhole = require('stream-wormhole');
const Controller = require('egg').Controller;

class UserService extends Service {
  async get(id) {
    // var list = await this.app.mysql.query('SELECT * FROM goods LIMIT 0,5');
    var certificate = await this.app.mysql.query(`SELECT * FROM certificate where goods_id = ${id}`);

    var goods = await this.app.mysql.get('goods', { 'goods_id': id });
    var base = await this.app.mysql.get('base', { 'goods_id': id });

    console.log(certificate,'certificate');
    // var farm = await this.app.mysql.get('farm', { 'goods_id': id });
    var farm = await this.app.mysql.query(`SELECT * FROM farm where goods_id = ${id}`);

    var monitor = await this.app.mysql.get('monitor', { 'goods_id': id });
    var order = await this.app.mysql.get('order', { 'goods_id': id });

    var goods_list = {
      goods: goods,
      base: base,
      certificate: certificate,
      farm: farm,
      monitor: monitor,
      order: order,
    }

    return goods_list
  }

}
module.exports = UserService;
