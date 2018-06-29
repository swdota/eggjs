'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  // const { router, controller } = app;
  // router.get('/', controller.home.index);
  app.get('/', 'home.index');
  app.post('/todoAdd','home.add');
  app.get('/todo/edit/:id','home.edit');
  app.post('/todo/update', 'home.update');
  app.get('/todo/delete/:id', 'home.delete');
  app.get('/todo/complete/:id', 'home.complete');

  app.post('/uuyradd', 'source.add');
  app.post('/upload', 'upload.uploadFile');
  app.get('/uuyrget', 'source.get');

  app.get('/phoneuuyr/:id', 'phone.get');

};
