module.exports = app => {
    return class User extends app.Service {
        * add() {
           // const data = this.ctx.params.data;
           const data = this.ctx.request.body
           const cTime = Date.now()
           const uTime = Date.now()
           const complete = false
           console.log(cTime,'cTime');
           const result = yield this.app.mysql.insert('demo',{
             task:data.task,
             crDate:cTime,
             uptime:uTime,
             complete: complete,
           });
        }
        // * souceradd() {
        //    // const data = this.ctx.params.data;
        //    const data = this.ctx.request.body
        //    console.log(data,'dadadadda');
        //    // const cTime = Date.now()
        //    // const uTime = Date.now()
        //    // const complete = false
        //    // console.log(cTime,'cTime');
        //    // const result = yield this.app.mysql.insert('demo',{
        //    //   task:data.task,
        //    //   crDate:cTime,
        //    //   uptime:uTime,
        //    //   complete: complete,
        //    // });
        // }

    }
};
