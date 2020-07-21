import {inject, PLATFORM} from 'aurelia-framework';
import {WebAPI} from './api/web-api';

@inject(WebAPI)
export class App {
  constructor(api) {
    this.api = api;
  }

  configureRouter(config, router) {
    config.title = 'Contacts';
    config.options.pushState = true;
    config.options.root = '/';
    config.map([
      { route: '',              moduleId: PLATFORM.moduleName('no-selection/no-selection'),   title: 'Select'},
      { route: 'contacts/:id',  moduleId: PLATFORM.moduleName('contact/contact-detail'), name:'contacts' }
    ]);

    this.router = router;
  }
}
  

