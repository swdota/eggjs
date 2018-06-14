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
    * index() {
      yield this.ctx.render('index.tpl');
    }

    * add() {
      // const data = this.ctx;
      // console.log(data,'data');
      const result = yield this.service.mysql.add();
      this.ctx.body = 'success';
    }
  }
  return HomeController;
};
