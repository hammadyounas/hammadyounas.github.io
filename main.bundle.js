webpackJsonp(["main"],{

/***/ "./src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_gendir lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoggerRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__configuration___ = __webpack_require__("./src/app/configuration/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__configuration_resolve_service__ = __webpack_require__("./src/app/configuration-resolve.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [
    {
        path: '',
        resolve: [__WEBPACK_IMPORTED_MODULE_3__configuration_resolve_service__["a" /* ConfigurationResolveService */]],
        pathMatch: 'prefix',
        children: [
            { path: '', redirectTo: 'configuration', pathMatch: 'full' },
            { path: 'configuration', component: __WEBPACK_IMPORTED_MODULE_2__configuration___["a" /* ConfigurationComponent */] }
        ]
    }
];
var LoggerRoutingModule = (function () {
    function LoggerRoutingModule() {
    }
    return LoggerRoutingModule;
}());
LoggerRoutingModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        // imports: [RouterModule.forRoot(routes,{enableTracing :true})],
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["RouterModule"].forRoot(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["RouterModule"]],
        providers: []
    })
], LoggerRoutingModule);

//# sourceMappingURL=app-routing.module.js.map

/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!--<div class=\"collapse navbar-collapse\">-->\r\n<nav class=\"navbar navbar-default\">\r\n\t<ul class=\"nav navbar-nav\">\r\n\t<li><a routerLink=\"/configuration\">Configuration</a></li>\r\n\t</ul>\r\n</nav>\r\n<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__configuration_service__ = __webpack_require__("./src/app/configuration.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared___ = __webpack_require__("./src/app/shared/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AppComponent = (function () {
    function AppComponent(titleService, configurationService, logService) {
        this.titleService = titleService;
        this.configurationService = configurationService;
        this.logService = logService;
        console.log('inside app component constructor');
    }
    AppComponent.prototype.ngOnInit = function () {
        console.log('inside app component on init');
        this.title = this.titleService.getTitle();
        this.logService.logRoute = 'core/log';
    };
    AppComponent.prototype.trigger = function () {
    };
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__("./src/app/app.component.html"),
        styles: [__webpack_require__("./src/app/app.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["Title"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["Title"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__configuration_service__["a" /* ConfigurationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__configuration_service__["a" /* ConfigurationService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__shared___["b" /* LogService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__shared___["b" /* LogService */]) === "function" && _c || Object])
], AppComponent);

var _a, _b, _c;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_animations__ = __webpack_require__("./node_modules/@angular/platform-browser/@angular/platform-browser/animations.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__("./node_modules/@angular/http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_primeng_primeng__ = __webpack_require__("./node_modules/primeng/primeng.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_primeng_primeng___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_primeng_primeng__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_routing_module__ = __webpack_require__("./src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__shared___ = __webpack_require__("./src/app/shared/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__configuration_resolve_service__ = __webpack_require__("./src/app/configuration-resolve.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__configuration_service__ = __webpack_require__("./src/app/configuration.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__configuration_configuration_component__ = __webpack_require__("./src/app/configuration/configuration.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





/*primeng module*/








var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_11__configuration_configuration_component__["a" /* ConfigurationComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["BrowserModule"],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormsModule"],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["ReactiveFormsModule"],
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_http__["c" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_7__app_routing_module__["a" /* LoggerRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_5_primeng_primeng__["ButtonModule"],
            __WEBPACK_IMPORTED_MODULE_5_primeng_primeng__["InputTextModule"],
            __WEBPACK_IMPORTED_MODULE_5_primeng_primeng__["RadioButtonModule"],
            __WEBPACK_IMPORTED_MODULE_5_primeng_primeng__["InputTextareaModule"],
            __WEBPACK_IMPORTED_MODULE_5_primeng_primeng__["CalendarModule"],
            __WEBPACK_IMPORTED_MODULE_5_primeng_primeng__["SelectButtonModule"],
            __WEBPACK_IMPORTED_MODULE_5_primeng_primeng__["DropdownModule"],
            __WEBPACK_IMPORTED_MODULE_5_primeng_primeng__["InputMaskModule"],
            __WEBPACK_IMPORTED_MODULE_5_primeng_primeng__["MessagesModule"]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_9__configuration_resolve_service__["a" /* ConfigurationResolveService */],
            __WEBPACK_IMPORTED_MODULE_10__configuration_service__["a" /* ConfigurationService */],
            __WEBPACK_IMPORTED_MODULE_8__shared___["b" /* LogService */],
            __WEBPACK_IMPORTED_MODULE_8__shared___["c" /* ZeusService */],
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["Title"],
            __WEBPACK_IMPORTED_MODULE_8__shared___["a" /* LOG_ERROR_HANDLER_PROVIDER */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "./src/app/configuration-resolve.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConfigurationResolveService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared___ = __webpack_require__("./src/app/shared/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__configuration_service__ = __webpack_require__("./src/app/configuration.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ConfigurationResolveService = (function () {
    function ConfigurationResolveService(configurationService, logService) {
        this.configurationService = configurationService;
        this.logService = logService;
        console.log('inside config resolve constructor');
    }
    ConfigurationResolveService.prototype.resolve = function (route) {
        var _this = this;
        console.log('inside resolve function');
        if (this.configurationService && this.configurationService.host) {
            return this.configurationService.host;
        }
        return this.configurationService.retrieveHostInfo().map(function (response) {
            if (response) {
                _this.configurationService.host = response;
                var configService = _this.configurationService;
                if (configService && configService.host) {
                    if (configService.host.host1) {
                        _this.logService.logHostPrimary = configService.host.host1;
                    }
                    if (configService.host.host2) {
                        _this.logService.logHostFailover = configService.host.host2;
                    }
                }
                return response;
            }
            else {
                //handle business logic if any
                return null;
            }
        });
    };
    return ConfigurationResolveService;
}());
ConfigurationResolveService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__configuration_service__["a" /* ConfigurationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__configuration_service__["a" /* ConfigurationService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__shared___["b" /* LogService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared___["b" /* LogService */]) === "function" && _b || Object])
], ConfigurationResolveService);

var _a, _b;
//# sourceMappingURL=configuration-resolve.service.js.map

/***/ }),

/***/ "./src/app/configuration.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConfigurationService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ConfigurationService = (function () {
    function ConfigurationService(http) {
        this.http = http;
        this.baseUrl = '../config/hostConfig.json';
    }
    Object.defineProperty(ConfigurationService.prototype, "host", {
        get: function () {
            return this._host;
        },
        set: function (v) {
            this._host = v;
        },
        enumerable: true,
        configurable: true
    });
    ConfigurationService.prototype.retrieveHostInfo = function () {
        return this.http.get(this.baseUrl).map(function (response) { return response.json(); });
    };
    return ConfigurationService;
}());
ConfigurationService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], ConfigurationService);

var _a;
//# sourceMappingURL=configuration.service.js.map

/***/ }),

/***/ "./src/app/configuration/configuration.component.css":
/***/ (function(module, exports) {

module.exports = "[class*=\"col-\"] {\r\n  padding-left: 0;\r\n  padding-right: 0;\r\n}\r\n\r\n.row {\r\n  margin-left: 0;\r\n  margin-right: 0;\r\n}\r\n\r\n.fix-buttons {\r\n  background: #ffffff;\r\n  padding: 10px 0;\r\n  border-top: 3px solid #3498DB;\r\n  position: fixed;\r\n  z-index: 10;\r\n  bottom: 0;\r\n  left: 0;\r\n  width: 100%;\r\n}\r\n\r\n.fix-buttons .button-gen-wrapper {\r\n  width: 83.33333333%;\r\n  margin: 0 auto;\r\n}\r\n\r\ntextarea { resize: vertical; }\r\n\r\n.panel-body {\r\n  padding: 25px;\r\n}\r\n\r\n.container-main {\r\n  background-color: #ECECEC;\r\n  padding-top: 70px;\r\n  padding-bottom: 50px;\r\n}\r\n"

/***/ }),

/***/ "./src/app/configuration/configuration.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"panel panel-default form-panel col-md-6\">\r\n    <div class=\"panel-body\">\r\n      <div class=\"form-container\" *ngIf=\"!submitted\">\r\n        <h2>Infrastructure Engineering Request Form </h2>\r\n        <hr>\r\n        <form [formGroup]=\"Form\" novalidate>\r\n          <div class=\"row\">\r\n            <h3>General Information </h3>\r\n          </div>\r\n          <div class=\"row form-row\">\r\n            <div class=\"col-sm-3\">\r\n              <label for=\"\">Stack</label>\r\n            </div>\r\n            <div class=\"col-sm-8 col-sm-offset-1\">\r\n              <p-dropdown [options]=\"stacks\" formControlName=\"stack_name\" placeholder=\"Select Stack\"></p-dropdown>\r\n            </div>\r\n          </div>\r\n          <div class=\"row form-row\">\r\n            <div class=\"col-sm-3\">\r\n              <label for=\"\">Application Type </label>\r\n            </div>\r\n            <div class=\"col-sm-8 col-sm-offset-1\">\r\n              <p-dropdown [options]=\"appTypes\" formControlName=\"type_name\" placeholder=\"Select Application Type\" [(ngModel)]=\"selectedApplicationType\"></p-dropdown>\r\n            </div>\r\n          </div>\r\n          <div [ngSwitch]=\"selectedApplicationType\">\r\n            <ng-template [ngSwitchCase]=\"'etl'\">\r\n              <div class=\"row form-row\">\r\n                <div class=\"col-sm-3\">\r\n                  <label for=\"\">Environment</label>\r\n                </div>\r\n                <div class=\"col-sm-8 col-sm-offset-1\">\r\n                  <p-dropdown [options]=\"environment\" formControlName=\"env\" placeholder=\"Select Environment\"></p-dropdown>\r\n                </div>\r\n              </div>\r\n              <div class=\"row form-row\">\r\n                <div class=\"col-sm-3\">\r\n                  <label for=\"\">Project Name</label>\r\n                </div>\r\n                <div class=\"col-sm-8 col-sm-offset-1\">\r\n                  <input type=\"text\" formControlName=\"project\" class=\"form-control\" pInputText placeholder=\"Enter project name\">\r\n                </div>\r\n              </div>\r\n              <div class=\"row form-row\">\r\n                <div class=\"col-sm-3\">\r\n                  <label for=\"\">Project Code</label>\r\n                </div>\r\n                <div class=\"col-sm-8 col-sm-offset-1\">\r\n                  <input type=\"text\" formControlName=\"project_code\" class=\"form-control\" pInputText placeholder=\"Enter project name\">\r\n                </div>\r\n              </div>\r\n              <div class=\"row form-row\">\r\n                <div class=\"col-sm-3\">\r\n                  <label for=\"\">Application Name</label>\r\n                </div>\r\n                <div class=\"col-sm-8 col-sm-offset-1\">\r\n                  <input type=\"text\" formControlName=\"application_name\" class=\"form-control\" pInputText placeholder=\"Enter Application name\">\r\n                </div>\r\n              </div>\r\n              <div class=\"row form-row\">\r\n                <div class=\"col-sm-3\">\r\n                  <label for=\"\">Bitbucket Repository Name</label>\r\n                </div>\r\n                <div class=\"col-sm-8 col-sm-offset-1\">\r\n                  <input type=\"text\" formControlName=\"bitbucket_repository_name\" class=\"form-control\" pInputText placeholder=\"Enter Bitbucket repository name\">\r\n                </div>\r\n              </div>\r\n              <div class=\"row form-row\">\r\n                <div class=\"col-sm-3\">\r\n                  <label for=\"\">Bitbucket Repository Url</label>\r\n                </div>\r\n                <div class=\"col-sm-8 col-sm-offset-1\">\r\n                  <input type=\"text\" formControlName=\"bitbucket_url_name\" class=\"form-control\" pInputText placeholder=\"Enter Bitbucket repository url\">\r\n                </div>\r\n              </div>\r\n              <div class=\"row form-row\">\r\n                <div class=\"col-sm-3\">\r\n                  <label for=\"\">JIRA Project Name</label>\r\n                </div>\r\n                <div class=\"col-sm-8 col-sm-offset-1\">\r\n                  <input type=\"text\" formControlName=\"jira_repository_name\" class=\"form-control\" pInputText placeholder=\"Enter JIRA project name\">\r\n                </div>\r\n              </div>\r\n              <div class=\"row form-row\">\r\n                <div class=\"col-sm-3\">\r\n                  <label for=\"\">JIRA Project Url</label>\r\n                </div>\r\n                <div class=\"col-sm-8 col-sm-offset-1\">\r\n                  <input type=\"text\" formControlName=\"jira_url_name\" class=\"form-control\" pInputText placeholder=\"Enter JIRA project url\">\r\n                </div>\r\n              </div>\r\n              <div class=\"row form-row\">\r\n                <div class=\"col-sm-3\">\r\n                  <label for=\"\">Business Analyst</label>\r\n                </div>\r\n                <div class=\"col-sm-8 col-sm-offset-1\">\r\n                  <input type=\"email\" formControlName=\"business_analyst\" class=\"form-control\" pInputText placeholder=\"Enter Business Analyst email\">\r\n                </div>\r\n              </div>\r\n              <div class=\"row form-row\">\r\n                <div class=\"col-sm-3\">\r\n                  <label for=\"\">Project Lead</label>\r\n                </div>\r\n                <div class=\"col-sm-8 col-sm-offset-1\">\r\n                  <input type=\"text\" formControlName=\"project_lead\" class=\"form-control\" pInputText placeholder=\"Enter Project Lead email\">\r\n                </div>\r\n              </div>\r\n              <div class=\"row form-row\">\r\n                <div class=\"col-sm-3\">\r\n                  <label for=\"\">Project Manager</label>\r\n                </div>\r\n                <div class=\"col-sm-8 col-sm-offset-1\">\r\n                  <input type=\"text\" formControlName=\"project_manager\" class=\"form-control\" pInputText placeholder=\"Enter Project Manager email\">\r\n                </div>\r\n              </div>\r\n              <div class=\"row form-row\">\r\n                <div class=\"col-sm-3\">\r\n                  <label for=\"\">Project Architect</label>\r\n                </div>\r\n                <div class=\"col-sm-8 col-sm-offset-1\">\r\n                  <input type=\"text\" formControlName=\"project_architect\" class=\"form-control\" pInputText placeholder=\"Enter Project Architect email\">\r\n                </div>\r\n              </div>\r\n              <div class=\"row form-row\">\r\n                <div class=\"col-sm-3\">\r\n                  <label for=\"\">Development Team</label>\r\n                </div>\r\n                <div class=\"col-sm-8 col-sm-offset-1\">\r\n                  <input type=\"text\" formControlName=\"development_team\" class=\"form-control\" pInputText placeholder=\"Enter development teams email\">\r\n                </div>\r\n              </div>\r\n            </ng-template>\r\n            <ng-template [ngSwitchCase]=\"'service'\">\r\n              <div class=\"row form-row\">\r\n                <div class=\"col-sm-3\">\r\n                  <label for=\"\">Environment</label>\r\n                </div>\r\n                <div class=\"col-sm-8 col-sm-offset-1\">\r\n                  <p-dropdown [options]=\"environment\" formControlName=\"env\" placeholder=\"Select Environment\"></p-dropdown>\r\n                </div>\r\n              </div>\r\n              <div class=\"row form-row\">\r\n                <div class=\"col-sm-3\">\r\n                  <label for=\"\">Project Name</label>\r\n                </div>\r\n                <div class=\"col-sm-8 col-sm-offset-1\">\r\n                  <input type=\"text\" formControlName=\"project\" class=\"form-control\" pInputText placeholder=\"Enter project name\">\r\n                </div>\r\n              </div>\r\n              <div class=\"row form-row\">\r\n                <div class=\"col-sm-3\">\r\n                  <label for=\"\">Project Code</label>\r\n                </div>\r\n                <div class=\"col-sm-8 col-sm-offset-1\">\r\n                  <input type=\"text\" formControlName=\"project_code\" class=\"form-control\" pInputText placeholder=\"Enter project name\">\r\n                </div>\r\n              </div>\r\n              <div class=\"row form-row\">\r\n                <div class=\"col-sm-3\">\r\n                  <label for=\"\">Application Name</label>\r\n                </div>\r\n                <div class=\"col-sm-8 col-sm-offset-1\">\r\n                  <input type=\"text\" formControlName=\"application_name\" class=\"form-control\" pInputText placeholder=\"Enter Application name\">\r\n                </div>\r\n              </div>\r\n              <div class=\"row form-row\">\r\n                <div class=\"col-sm-3\">\r\n                  <label for=\"\">Bitbucket Repository Name</label>\r\n                </div>\r\n                <div class=\"col-sm-8 col-sm-offset-1\">\r\n                  <input type=\"text\" formControlName=\"bitbucket_repository_name\" class=\"form-control\" pInputText placeholder=\"Enter Bitbucket repository name\">\r\n                </div>\r\n              </div>\r\n              <div class=\"row form-row\">\r\n                <div class=\"col-sm-3\">\r\n                  <label for=\"\">Bitbucket Repository Url</label>\r\n                </div>\r\n                <div class=\"col-sm-8 col-sm-offset-1\">\r\n                  <input type=\"text\" formControlName=\"bitbucket_url_name\" class=\"form-control\" pInputText placeholder=\"Enter Bitbucket repository url\">\r\n                </div>\r\n              </div>\r\n              <div class=\"row form-row\">\r\n                <div class=\"col-sm-3\">\r\n                  <label for=\"\">JIRA Project Name</label>\r\n                </div>\r\n                <div class=\"col-sm-8 col-sm-offset-1\">\r\n                  <input type=\"text\" formControlName=\"jira_repository_name\" class=\"form-control\" pInputText placeholder=\"Enter JIRA project name\">\r\n                </div>\r\n              </div>\r\n              <div class=\"row form-row\">\r\n                <div class=\"col-sm-3\">\r\n                  <label for=\"\">JIRA Project Url</label>\r\n                </div>\r\n                <div class=\"col-sm-8 col-sm-offset-1\">\r\n                  <input type=\"text\" formControlName=\"jira_url_name\" class=\"form-control\" pInputText placeholder=\"Enter JIRA project url\">\r\n                </div>\r\n              </div>\r\n              <div class=\"row form-row\">\r\n                <div class=\"col-sm-3\">\r\n                  <label for=\"\">Business Analyst</label>\r\n                </div>\r\n                <div class=\"col-sm-8 col-sm-offset-1\">\r\n                  <input type=\"email\" formControlName=\"business_analyst\" class=\"form-control\" pInputText placeholder=\"Enter Business Analyst email\">\r\n                </div>\r\n              </div>\r\n              <div class=\"row form-row\">\r\n                <div class=\"col-sm-3\">\r\n                  <label for=\"\">Project Lead</label>\r\n                </div>\r\n                <div class=\"col-sm-8 col-sm-offset-1\">\r\n                  <input type=\"text\" formControlName=\"project_lead\" class=\"form-control\" pInputText placeholder=\"Enter Project Lead email\">\r\n                </div>\r\n              </div>\r\n              <div class=\"row form-row\">\r\n                <div class=\"col-sm-3\">\r\n                  <label for=\"\">Project Manager</label>\r\n                </div>\r\n                <div class=\"col-sm-8 col-sm-offset-1\">\r\n                  <input type=\"text\" formControlName=\"project_manager\" class=\"form-control\" pInputText placeholder=\"Enter Project Manager email\">\r\n                </div>\r\n              </div>\r\n              <div class=\"row form-row\">\r\n                <div class=\"col-sm-3\">\r\n                  <label for=\"\">Project Architect</label>\r\n                </div>\r\n                <div class=\"col-sm-8 col-sm-offset-1\">\r\n                  <input type=\"text\" formControlName=\"project_architect\" class=\"form-control\" pInputText placeholder=\"Enter Project Architect email\">\r\n                </div>\r\n              </div>\r\n              <div class=\"row form-row\">\r\n                <div class=\"col-sm-3\">\r\n                  <label for=\"\">Development Team</label>\r\n                </div>\r\n                <div class=\"col-sm-8 col-sm-offset-1\">\r\n                  <input type=\"text\" formControlName=\"development_team\" class=\"form-control\" pInputText placeholder=\"Enter development teams email\">\r\n                </div>\r\n              </div>\r\n            </ng-template>\r\n            <ng-template [ngSwitchCase]=\"''\">\r\n              <div class=\"row form-row\">\r\n                <div class=\"col-sm-3\">\r\n                  <label for=\"\">Environment</label>\r\n                </div>\r\n                <div class=\"col-sm-8 col-sm-offset-1\">\r\n                  <p-dropdown [options]=\"environment\" formControlName=\"env\" placeholder=\"Select Environment\"></p-dropdown>\r\n                </div>\r\n              </div>\r\n              <div class=\"row form-row\">\r\n                <div class=\"col-sm-3\">\r\n                  <label for=\"\">Project Name</label>\r\n                </div>\r\n                <div class=\"col-sm-8 col-sm-offset-1\">\r\n                  <input type=\"text\" formControlName=\"project\" class=\"form-control\" pInputText placeholder=\"Enter project name\">\r\n                </div>\r\n              </div>\r\n              <div class=\"row form-row\">\r\n                <div class=\"col-sm-3\">\r\n                  <label for=\"\">Project Code</label>\r\n                </div>\r\n                <div class=\"col-sm-8 col-sm-offset-1\">\r\n                  <input type=\"text\" formControlName=\"project_code\" class=\"form-control\" pInputText placeholder=\"Enter project name\">\r\n                </div>\r\n              </div>\r\n              <div class=\"row form-row\">\r\n                <div class=\"col-sm-3\">\r\n                  <label for=\"\">Application Name</label>\r\n                </div>\r\n                <div class=\"col-sm-8 col-sm-offset-1\">\r\n                  <input type=\"text\" formControlName=\"application_name\" class=\"form-control\" pInputText placeholder=\"Enter Application name\">\r\n                </div>\r\n              </div>\r\n              <div class=\"row form-row\">\r\n                <div class=\"col-sm-3\">\r\n                  <label for=\"\">Bitbucket Repository Name</label>\r\n                </div>\r\n                <div class=\"col-sm-8 col-sm-offset-1\">\r\n                  <input type=\"text\" formControlName=\"bitbucket_repository_name\" class=\"form-control\" pInputText placeholder=\"Enter Bitbucket repository name\">\r\n                </div>\r\n              </div>\r\n              <div class=\"row form-row\">\r\n                <div class=\"col-sm-3\">\r\n                  <label for=\"\">Bitbucket Repository Url</label>\r\n                </div>\r\n                <div class=\"col-sm-8 col-sm-offset-1\">\r\n                  <input type=\"text\" formControlName=\"bitbucket_url_name\" class=\"form-control\" pInputText placeholder=\"Enter Bitbucket repository url\">\r\n                </div>\r\n              </div>\r\n              <div class=\"row form-row\">\r\n                <div class=\"col-sm-3\">\r\n                  <label for=\"\">JIRA Project Name</label>\r\n                </div>\r\n                <div class=\"col-sm-8 col-sm-offset-1\">\r\n                  <input type=\"text\" formControlName=\"jira_repository_name\" class=\"form-control\" pInputText placeholder=\"Enter JIRA project name\">\r\n                </div>\r\n              </div>\r\n              <div class=\"row form-row\">\r\n                <div class=\"col-sm-3\">\r\n                  <label for=\"\">JIRA Project Url</label>\r\n                </div>\r\n                <div class=\"col-sm-8 col-sm-offset-1\">\r\n                  <input type=\"text\" formControlName=\"jira_url_name\" class=\"form-control\" pInputText placeholder=\"Enter JIRA project url\">\r\n                </div>\r\n              </div>\r\n              <div class=\"row form-row\">\r\n                <div class=\"col-sm-3\">\r\n                  <label for=\"\">Business Analyst</label>\r\n                </div>\r\n                <div class=\"col-sm-8 col-sm-offset-1\">\r\n                  <input type=\"email\" formControlName=\"business_analyst\" class=\"form-control\" pInputText placeholder=\"Enter Business Analyst email\">\r\n                </div>\r\n              </div>\r\n              <div class=\"row form-row\">\r\n                <div class=\"col-sm-3\">\r\n                  <label for=\"\">Project Lead</label>\r\n                </div>\r\n                <div class=\"col-sm-8 col-sm-offset-1\">\r\n                  <input type=\"text\" formControlName=\"project_lead\" class=\"form-control\" pInputText placeholder=\"Enter Project Lead email\">\r\n                </div>\r\n              </div>\r\n              <div class=\"row form-row\">\r\n                <div class=\"col-sm-3\">\r\n                  <label for=\"\">Project Manager</label>\r\n                </div>\r\n                <div class=\"col-sm-8 col-sm-offset-1\">\r\n                  <input type=\"text\" formControlName=\"project_manager\" class=\"form-control\" pInputText placeholder=\"Enter Project Manager email\">\r\n                </div>\r\n              </div>\r\n              <div class=\"row form-row\">\r\n                <div class=\"col-sm-3\">\r\n                  <label for=\"\">Project Architect</label>\r\n                </div>\r\n                <div class=\"col-sm-8 col-sm-offset-1\">\r\n                  <input type=\"text\" formControlName=\"project_architect\" class=\"form-control\" pInputText placeholder=\"Enter Project Architect email\">\r\n                </div>\r\n              </div>\r\n              <div class=\"row form-row\">\r\n                <div class=\"col-sm-3\">\r\n                  <label for=\"\">Development Team</label>\r\n                </div>\r\n                <div class=\"col-sm-8 col-sm-offset-1\">\r\n                  <input type=\"text\" formControlName=\"development_team\" class=\"form-control\" pInputText placeholder=\"Enter development teams email\">\r\n                </div>\r\n              </div>\r\n            </ng-template>\r\n            <ng-template [ngSwitchCase]=\"'ui'\">\r\n              <br><br>\r\n                <p class=\"form-control alert-danger\">\r\n                  please select the applications type from dropdown\r\n                </p>\r\n            </ng-template>\r\n          </div>\r\n          <br>\r\n          <hr>\r\n          <div class=\"button-gen-wrapper\">\r\n            <div class=\"col-md-3\"></div>\r\n            <div class=\"col-md-6\">\r\n              <div class=\"col-md-6 button-container\">\r\n                <button type=\"submit\" pButton category=\"primary\" type=\"text\" label=\"Submit\" [disabled]=\"!Form.valid\"  (click)=\"save(Form.value, Form.valid)\"></button>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </form>\r\n      </div>\r\n      <div class=\"alert alert-success\" *ngIf=\"submitted\">\r\n          <strong>Success !</strong> form has submitted successfully.\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<hr>\r\n<div class=\"row\" #buttonWrapper>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/configuration/configuration.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConfigurationComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_shared__ = __webpack_require__("./src/app/shared/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ConfigurationComponent = (function () {
    function ConfigurationComponent(_fb, zeusService) {
        this._fb = _fb;
        this.zeusService = zeusService;
        this.selectedApplicationType = '';
        this.submitted = false;
        this.initialBuild();
    }
    ConfigurationComponent.prototype.initialBuild = function () {
        this.stacks = [];
        this.stacks.push({ label: 'Microservices', value: 'microservices' });
        this.stacks.push({ label: 'Other', value: 'other' });
        this.appTypes = [];
        this.appTypes.push({ label: 'ETL', value: 'etl' });
        this.appTypes.push({ label: 'Service', value: 'service' });
        this.appTypes.push({ label: 'UI', value: 'ui' });
        this.environment = [];
        this.environment.push({ label: 'Dev', value: 'dev' });
        this.environment.push({ label: 'Test', value: 'test' });
        this.environment.push({ label: 'QA', value: 'qa' });
        this.environment.push({ label: 'Production', value: 'prod' });
        this.environment.push({ label: 'Psup', value: 'psup' });
    };
    ConfigurationComponent.prototype.ngOnInit = function () {
        this.Form = this._fb.group({
            stack_name: [''],
            type_name: [''],
            env: [''],
            project: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required]],
            project_code: [{ value: 'project_123', disabled: true }],
            application_name: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required]],
            bitbucket_repository_name: [''],
            bitbucket_url_name: [''],
            jira_repository_name: [''],
            jira_url_name: [''],
            business_analyst: [''],
            project_lead: [''],
            project_manager: [''],
            project_architect: [''],
            development_team: ['']
        });
    };
    ConfigurationComponent.prototype.save = function (inputValue, isValid) {
        var _this = this;
        if (isValid) {
            console.log("Input values from the form ", inputValue);
            var configuration = {
                configuration_name: this.Form.controls['stack_name'].value,
                configuration_type: this.Form.controls['type_name'].value,
                configuration_content: JSON.stringify(inputValue)
            };
            this.zeusService.submitConfiguration(configuration).subscribe(function (response) {
                // handle response ,if any
                _this.submitted = true;
            }, function (error) {
                //handle error here
            });
        }
    };
    return ConfigurationComponent;
}());
ConfigurationComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-form',
        template: __webpack_require__("./src/app/configuration/configuration.component.html"),
        styles: [__webpack_require__("./src/app/configuration/configuration.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormBuilder"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormBuilder"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_app_shared__["c" /* ZeusService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_app_shared__["c" /* ZeusService */]) === "function" && _b || Object])
], ConfigurationComponent);

var _a, _b;
//# sourceMappingURL=configuration.component.js.map

/***/ }),

/***/ "./src/app/configuration/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__configuration_component__ = __webpack_require__("./src/app/configuration/configuration.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__configuration_component__["a"]; });

//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./src/app/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__app_module__["a"]; });


//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./src/app/shared/error-handler.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export LogErrorHandler */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LOG_ERROR_HANDLER_PROVIDER; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__log_service__ = __webpack_require__("./src/app/shared/log.service.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LogErrorHandler = (function (_super) {
    __extends(LogErrorHandler, _super);
    function LogErrorHandler(logService, title) {
        var _this = _super.call(this, false) || this;
        _this.logService = logService;
        _this.title = title;
        return _this;
    }
    LogErrorHandler.prototype.handleError = function (error) {
        //send error to server
        try {
            var exception = {
                type: error.name,
                message: error.message,
                stack: error.stack,
                location: window.location.href
            };
            var logObject = { application: this.title.getTitle(),
                level: "ERROR",
                message: error.message,
                exception: exception,
                payload: " "
            };
            this.logService.logError(logObject);
        }
        catch (logError) {
            console.error(logError);
        }
    };
    return LogErrorHandler;
}(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ErrorHandler"]));
LogErrorHandler = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__log_service__["a" /* LogService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__log_service__["a" /* LogService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["Title"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["Title"]) === "function" && _b || Object])
], LogErrorHandler);

var LOG_ERROR_HANDLER_PROVIDER = [
    {
        provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ErrorHandler"],
        useClass: LogErrorHandler
    }
];
var _a, _b;
//# sourceMappingURL=error-handler.service.js.map

/***/ }),

/***/ "./src/app/shared/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__model_log__ = __webpack_require__("./src/app/shared/model/log.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__model_log___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__model_log__);
/* unused harmony reexport Log */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__model_logType__ = __webpack_require__("./src/app/shared/model/logType.ts");
/* unused harmony reexport LogType */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__model_exception__ = __webpack_require__("./src/app/shared/model/exception.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__model_exception___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__model_exception__);
/* unused harmony reexport Exception */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__log_service__ = __webpack_require__("./src/app/shared/log.service.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_3__log_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__model_host__ = __webpack_require__("./src/app/shared/model/host.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__model_host___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__model_host__);
/* unused harmony reexport Host */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__model_configuration__ = __webpack_require__("./src/app/shared/model/configuration.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__model_configuration___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__model_configuration__);
/* unused harmony reexport Configuration */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__zeus_service__ = __webpack_require__("./src/app/shared/zeus.service.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_6__zeus_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__error_handler_service__ = __webpack_require__("./src/app/shared/error-handler.service.ts");
/* unused harmony reexport LogErrorHandler */
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_7__error_handler_service__["a"]; });








//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./src/app/shared/log.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LogService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/@angular/http.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LogService = (function () {
    function LogService(http) {
        this.http = http;
    }
    Object.defineProperty(LogService.prototype, "logRoute", {
        get: function () {
            return this._logRoute;
        },
        set: function (v) {
            this._logRoute = v;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LogService.prototype, "logHostPrimary", {
        get: function () {
            return this._logHostPrimary;
        },
        set: function (v) {
            this._logHostPrimary = v;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LogService.prototype, "logHostFailover", {
        get: function () {
            return this._logHostFailover;
        },
        set: function (v) {
            this._logHostFailover = v;
        },
        enumerable: true,
        configurable: true
    });
    LogService.prototype.setHeaders = function () {
        var headersConfig = {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        };
        return new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */](headersConfig);
    };
    LogService.prototype.logError = function (logObject) {
        this.logToConsole(logObject);
        this.logToServer(logObject);
    };
    LogService.prototype.logToConsole = function (logObject) {
        if (console) {
            console.error(logObject.exception.message);
            console.error(logObject.exception.stack);
        }
    };
    LogService.prototype.logToServer = function (logObject) {
        var _this = this;
        // let logRoute = 'core/log';
        var payload = JSON.stringify(logObject);
        if (this._logHostPrimary) {
            this.http
                .post("" + this._logHostPrimary + this.logRoute, payload, { headers: this.setHeaders() })
                .subscribe(function (httpResponse) {
                // handle if any
            }, function (httpError) {
                // console.log(httpError);
                // call failover here ,can handle unlimited failover
                if (_this._logHostFailover) {
                    _this.http.post("" + _this._logHostFailover + _this.logRoute, payload, { headers: _this.setHeaders() }).subscribe(function (httpResponse) {
                    }, function (httpError) {
                    });
                }
                //end failover here
            });
        }
    };
    return LogService;
}());
LogService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], LogService);

var _a;
//# sourceMappingURL=log.service.js.map

/***/ }),

/***/ "./src/app/shared/model/configuration.ts":
/***/ (function(module, exports) {

//# sourceMappingURL=configuration.js.map

/***/ }),

/***/ "./src/app/shared/model/exception.ts":
/***/ (function(module, exports) {

//# sourceMappingURL=exception.js.map

/***/ }),

/***/ "./src/app/shared/model/host.ts":
/***/ (function(module, exports) {

//# sourceMappingURL=host.js.map

/***/ }),

/***/ "./src/app/shared/model/log.ts":
/***/ (function(module, exports) {

//# sourceMappingURL=log.js.map

/***/ }),

/***/ "./src/app/shared/model/logType.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export LogType */
var LogType;
(function (LogType) {
    LogType[LogType["Error"] = 0] = "Error";
})(LogType || (LogType = {}));
//# sourceMappingURL=logType.js.map

/***/ }),

/***/ "./src/app/shared/zeus.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ZeusService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__configuration_service__ = __webpack_require__("./src/app/configuration.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_switchMap__ = __webpack_require__("./node_modules/rxjs/add/operator/switchMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_switchMap__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ZeusService = (function () {
    function ZeusService(http, configurationService) {
        this.configurationService = configurationService;
        this.http = http;
    }
    ZeusService.prototype.setHeaders = function () {
        var headersConfig = {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        };
        return new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */](headersConfig);
    };
    ZeusService.prototype.submitConfiguration = function (configurationData) {
        return this.http.post(this.configurationService.host.host1 + "commitConfiguration", JSON.stringify(configurationData), new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: this.setHeaders() })).map(function (response) { return response.json(); });
    };
    return ZeusService;
}());
ZeusService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__configuration_service__["a" /* ConfigurationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__configuration_service__["a" /* ConfigurationService */]) === "function" && _b || Object])
], ZeusService);

var _a, _b;
//# sourceMappingURL=zeus.service.js.map

/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
var environment = {
    production: true
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__polyfills_ts__ = __webpack_require__("./src/polyfills.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app___ = __webpack_require__("./src/app/index.ts");





if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_4__app___["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ "./src/polyfills.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol__ = __webpack_require__("./node_modules/core-js/es6/symbol.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_object__ = __webpack_require__("./node_modules/core-js/es6/object.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_object___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_core_js_es6_object__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_function__ = __webpack_require__("./node_modules/core-js/es6/function.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_function___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_core_js_es6_function__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int__ = __webpack_require__("./node_modules/core-js/es6/parse-int.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float__ = __webpack_require__("./node_modules/core-js/es6/parse-float.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_number__ = __webpack_require__("./node_modules/core-js/es6/number.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_number___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_core_js_es6_number__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_math__ = __webpack_require__("./node_modules/core-js/es6/math.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_math___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_core_js_es6_math__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_string__ = __webpack_require__("./node_modules/core-js/es6/string.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_string___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_core_js_es6_string__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_date__ = __webpack_require__("./node_modules/core-js/es6/date.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_date___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_core_js_es6_date__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_array__ = __webpack_require__("./node_modules/core-js/es6/array.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_array___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_core_js_es6_array__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp__ = __webpack_require__("./node_modules/core-js/es6/regexp.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_js_es6_map__ = __webpack_require__("./node_modules/core-js/es6/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_js_es6_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_core_js_es6_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_set__ = __webpack_require__("./node_modules/core-js/es6/set.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_set___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_core_js_es6_set__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect__ = __webpack_require__("./node_modules/core-js/es6/reflect.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect__ = __webpack_require__("./node_modules/core-js/es7/reflect.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone__ = __webpack_require__("./node_modules/zone.js/dist/zone.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone__);
/**
 * This file includes polyfills needed by Angular and is loaded before the app.
 * You can add your own extra polyfills to this file.
 *
 * This file is divided into 2 sections:
 *   1. Browser polyfills. These are applied before loading ZoneJS and are sorted by browsers.
 *   2. Application imports. Files imported after ZoneJS that should be loaded before your main
 *      file.
 *
 * The current setup is for so-called "evergreen" browsers; the last versions of browsers that
 * automatically update themselves. This includes Safari >= 10, Chrome >= 55 (including Opera),
 * Edge >= 13 on the desktop, and iOS 10 and Chrome on mobile.
 *
 * Learn more in https://angular.io/docs/ts/latest/guide/browser-support.html
 */
/***************************************************************************************************
 * BROWSER POLYFILLS
 */
/** IE9, IE10 and IE11 requires all of the following polyfills. **/













/** IE10 and IE11 requires the following for NgClass support on SVG elements */
// import 'classlist.js';  // Run `npm install --save classlist.js`.
/** IE10 and IE11 requires the following to support `@angular/animation`. */
// import 'web-animations-js';  // Run `npm install --save web-animations-js`.
/** Evergreen browsers require these. **/


/** ALL Firefox browsers require the following to support `@angular/animation`. **/
// import 'web-animations-js';  // Run `npm install --save web-animations-js`.
/***************************************************************************************************
 * Zone JS is required by Angular itself.
 */
 // Included with Angular CLI.
/***************************************************************************************************
 * APPLICATION IMPORTS
 */
/**
 * Date, currency, decimal and percent pipes.
 * Needed for: All but Chrome, Firefox, Edge, IE11 and Safari 10
 */
// import 'intl';  // Run `npm install --save intl`.
//# sourceMappingURL=polyfills.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map