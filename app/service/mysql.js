module.exports = app => {
    return class User extends app.Service {
        * add() {
           // const data = this.ctx.params.data;
           const data = this.ctx.request.body
           const cTime = Date.now()
           const uTime = Date.now()
           const complete = false
           const result = yield this.app.mysql.insert('demo',{
             task:data.task,
             // creatTime:cTime,
             // upTime:uTime,
             complete: complete,
           });
        }
    }
};
