'use strict';
//
// const Controller = require('egg').Controller;
//
// class HomeController extends Controller {
//   async index() {
//     this.ctx.body = 'hi, egg';
//   }
// }
//
// module.exports = HomeController;
module.exports = app => {
  class HomeController extends app.Controller {
    * get() {
      // const id = this.ctx.query.id;
      const id = this.ctx.params.id;

      // console.log(id,'id');
      const result = yield this.service.phonecrud.get(id);
      var res = {
        success: true,
        mes: '',
        data: result
      }
      // console.log(result,'result');
      this.ctx.body = res
    }


  }
  return HomeController;
};
