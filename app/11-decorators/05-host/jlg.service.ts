import { Injectable } from '@angular/core';

@Injectable()
export class JLGService {

  constructor() {
    console.log('JLGService: constructor');
  }

  doSomething() {
    console.log('JLGService: do something');
  }

}

@Injectable()
export class JLGModuleService implements JLGService {

  constructor() {
    console.log('JLGModuleService: constructor');
  }

  doSomething() {
    console.log('JLG1Service: do something better');
  }

}

@Injectable()
export class JLGHostService implements JLGService {

  constructor() {
    console.log('JLGParentService: constructor');
  }

  doSomething() {
    console.log('JLGParentService: do something better');
  }

}

@Injectable()
export class JLGChildService implements JLGService {

  constructor() {
    console.log('JLGChildService: constructor');
  }

  doSomething() {
    console.log('JLGChildService: do something better');
  }

}

@Injectable()
export class JLGAppService implements JLGService {

  constructor() {
    console.log('JLGAppService: constructor');
  }

  doSomething() {
    console.log('JLGAppService: do something even better');
  }

}

