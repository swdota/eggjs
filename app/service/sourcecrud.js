const Service = require('egg').Service;
class UserService extends Service {
  async souceradd() {
    const data = this.ctx.request.body
    console.log(data,'dadadadda');
    const result = await this.app.mysql.insert('goods',{
      title:data.goods.title,
      image:data.goods.image,
      crop:data.goods.crop,
      brand:data.goods.brand,
      variety:data.goods.variety,
      images:data.goods.images.join(','),
    });
    return result

  }


}
module.exports = UserService;
