define('app',['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var App = exports.App = function () {
    function App() {
      _classCallCheck(this, App);
    }

    App.prototype.configureRouter = function configureRouter(config, router) {
      this.router = router;
      config.title = 'Aurelia';
      config.map([{ route: '', name: 'default', moduleId: 'default', nav: false, title: 'Default' }]);
    };

    return App;
  }();
});
define('default',['exports', 'aurelia-framework', './monsters/services/api'], function (exports, _aureliaFramework, _api) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.Default = undefined;

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    var _dec, _class;

    var Default = exports.Default = (_dec = (0, _aureliaFramework.inject)(_api.Api), _dec(_class = function () {
        function Default(api) {
            _classCallCheck(this, Default);

            this.api = api;
            this.test = 'TEST!';
        }

        Default.prototype.activate = function activate() {
            this.api.getMonsters({ adventure: 'Prince_of_the_Apoclaypse' });
        };

        return Default;
    }()) || _class);
});
define('environment',["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    debug: true,
    testing: true
  };
});
define('main',['exports', './environment'], function (exports, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.configure = configure;

  var _environment2 = _interopRequireDefault(_environment);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  Promise.config({
    warnings: {
      wForgottenReturn: false
    }
  });

  function configure(aurelia) {
    aurelia.use.standardConfiguration().feature('resources');

    if (_environment2.default.debug) {
      aurelia.use.developmentLogging();
    }

    if (_environment2.default.testing) {
      aurelia.use.plugin('aurelia-testing');
    }

    aurelia.start().then(function () {
      return aurelia.setRoot();
    });
  }
});
define('resources/index',["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.configure = configure;
  function configure(config) {}
});
define('shared/footerView',['exports'], function (exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    var FooterView = exports.FooterView = function FooterView() {
        _classCallCheck(this, FooterView);

        this.footer = 'FOOTER HERE!';
    };
});
define('shared/headerView',['exports'], function (exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    var HeaderView = exports.HeaderView = function HeaderView() {
        _classCallCheck(this, HeaderView);

        this.header = 'HEADER HERE!';
    };
});
define('monsters/services/api',['exports', 'aurelia-framework', 'aurelia-http-client'], function (exports, _aureliaFramework, _aureliaHttpClient) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.Api = undefined;

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    var _dec, _class;

    var Api = exports.Api = (_dec = (0, _aureliaFramework.inject)(_aureliaHttpClient.HttpClient), (0, _aureliaFramework.noView)(_class = _dec(_class = function () {
        function Api(httpClient) {
            _classCallCheck(this, Api);

            this.httpClient = httpClient;
            this.httpClient.configure(function (config) {
                config.withHeader('Content-Type', 'application/json');
            });
        }

        Api.prototype.getMonsters = function getMonsters(queryParams) {
            if (!queryParams) {
                queryParams.adventure = 'Prince_of_the_Apoclaypse';
            }
            this.httpClient.get('/resources/json/' + queryParams.adventure + '.json').then(function (response) {
                console.log(JSON.parse(response));
                return JSON.parse(response);
            });
        };

        return Api;
    }()) || _class) || _class);
});
define('text!app.html', ['module'], function(module) { module.exports = "<template><require from=\"bootstrap/css/bootstrap.css\"></require><require from=\"./shared/headerView\"></require><require from=\"./shared/footerView\"></require><div class=\"row\"><div class=\"col-sm-12\"><header-view></header-view></div></div><router-view></router-view><div class=\"row\"><div class=\"col-sm-12\"><footer-view></footer-view></div></div></template>"; });
define('text!default.html', ['module'], function(module) { module.exports = "<template>${test}</template>"; });
define('text!shared/footerView.html', ['module'], function(module) { module.exports = "<template>${footer}</template>"; });
define('text!shared/headerView.html', ['module'], function(module) { module.exports = "<template>${header}</template>"; });
//# sourceMappingURL=app-bundle.js.map