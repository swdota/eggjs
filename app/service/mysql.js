module.exports = app => {
    return class User extends app.Service {
        * add() {
           // const data = this.ctx.params.data;
           const data = this.ctx.request.body
           console.log(data,'datadata');
           const result = yield this.app.mysql.insert('demo',{un:data.username,ps:data.password});
           console.log(result,'resultresultresult');
           if(result.serverStatus == 2){
                return "success";
           }else{
               return "fail";
           }
        }
    }
};
