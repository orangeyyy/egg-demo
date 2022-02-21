'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.get('/green.css', controller.load.green);
  router.get('/blue.css', controller.load.blue);
  router.get('/one.js', controller.load.one);
};
