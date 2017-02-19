export class App {
  configureRouter(config, router){
    this.router = router;
    config.title = 'Aurelia';
    config.map([
      { route: '', name: 'default', moduleId: 'default', nav: false, title: 'Default' }
    ]);
  }
}
