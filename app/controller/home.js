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
      var data = yield this.app.mysql.query('SELECT * FROM demo');
      yield this.ctx.render('todoIndex.tpl', {task: data});
    }

    * add() {
      const result = yield this.service.mysql.add();
      this.ctx.redirect('/');

    }

    * edit() {
      const id = this.ctx.params.id;
      var task = yield this.app.mysql.get('demo', { id: id });
      yield this.ctx.render('edit.tpl', {todo: task});
    }
    * update() {
      const dataid = this.ctx.request.body.id;
      const t = this.ctx.request.body.task;
      var uptime = Date.now()
      yield this.app.mysql.query(`
        update
          demo
        set
          task = '${t}' , uptime = ${uptime}
        where
          id = ${dataid}`
      );
      this.ctx.redirect('/');
    }
    * delete() {
      const dataid = this.ctx.params.id;
      var task = yield this.app.mysql.query(`
        DELETE FROM
          demo
        WHERE
          id = ${dataid}`
        );
      this.ctx.redirect('/');
    }

    * complete() {
      const dataid = this.ctx.params.id;
      var task = yield this.app.mysql.get('demo', { id: dataid });
      var complete = !task.complete
      yield this.app.mysql.query('update demo set complete =  ? where id = ?', [complete, dataid]);
      this.ctx.redirect('/');

    }
  }
  return HomeController;
};
