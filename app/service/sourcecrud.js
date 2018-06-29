const Service = require('egg').Service;
const path = require('path');
const sendToWormhole = require('stream-wormhole');
const Controller = require('egg').Controller;

class UserService extends Service {
  async souceradd() {
    const data = this.ctx.request.body
    // console.log(data,'dadadadda');
    await this.app.mysql.insert('goods',{
      title:data.goods.title,
      image:data.goods.image,
      crop:data.goods.crop,
      spec:data.goods.spec,
      brand:data.goods.brand,
      variety:data.goods.variety,
      images:data.goods.images.join(','),
    });

    var goods_id = await this.app.mysql.query('SELECT MAX(goods_id) AS "id" FROM goods');

    console.log(goods_id[0].id,'goods_id.id');
    // return goods_id
    for (var i = 0; i < data.farm.length; i++) {
      var item = data.farm[i]
      await this.app.mysql.insert('farm',{
        date:item.date,
        name:item.name,
        describe:item.describe,
        images:item.images.join(','),
        goods_id: goods_id[0].id,
      });
    }


    await this.app.mysql.insert('order',{
      company:data.order.company,
      date:data.order.date,
      cars: JSON.stringify(data.order.cars),
      goods_id: goods_id[0].id,

    });
    await this.app.mysql.insert('base',{
      name:data.base.name,
      type:data.base.type,
      head:data.base.head,
      phone:data.base.phone,
      areaTotal:data.base.areaTotal,
      productionTotal:data.base.productionTotal,
      personTotal:data.base.personTotal,
      poorTotal:data.base.poorTotal,
      summary:data.base.summary,
      images:data.base.images.join(','),
      persons:JSON.stringify(data.base.persons),
      goods_id: goods_id[0].id,
    });
    await this.app.mysql.insert('monitor',{
      title: data.monitor.title,
      type: data.monitor.type,
      number: data.monitor.number,
      person: data.monitor.person,
      result: data.monitor.result,
      images:data.monitor.images.join(','),
      goods_id: goods_id[0].id,

    });
    for (var i = 0; i < data.certificate.length; i++) {
      var item = data.certificate[i]
      await this.app.mysql.insert('certificate',{
        name:item.name,
        images:item.images.join(','),
        goods_id: goods_id[0].id,
      });
    }

  }

  async soucerget(offset,limit) {
    // var list = await this.app.mysql.query('SELECT * FROM goods LIMIT 0,5');
    var list = await this.app.mysql.query(`SELECT * FROM goods LIMIT ${offset},${limit}`);

    var count = await this.app.mysql.query('SELECT count(*) AS "num" FROM goods');
    var goods_list = {
      list: list,
      count: count[0].num,
    }

    return goods_list
  }

}
module.exports = UserService;
