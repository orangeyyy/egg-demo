'use strict';

const Controller = require('egg').Controller;

const wait = time =>
  new Promise(resolve => {
    setTimeout(resolve, time);
  });

class LoadController extends Controller {
  async green() {
    const { ctx } = this;
    await wait(3000);
    ctx.set('content-type', 'text/css; charset=UTF-8');
    ctx.body = '#card { background-color: green }';
  }

  async blue() {
    const { ctx } = this;
    await wait(5000);
    ctx.set('content-type', 'text/css; charset=UTF-8');
    ctx.body = '#card { background-color: blue }';
  }

  async one() {
    const { ctx } = this;
    ctx.set('content-type', 'application/javascript; charset=UTF-8');
    ctx.body = `console.log('hello world')`;
  }
}

module.exports = LoadController;
