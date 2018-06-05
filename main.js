(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./package.json":
/*!**********************!*\
  !*** ./package.json ***!
  \**********************/
/*! exports provided: name, version, license, scripts, private, dependencies, devDependencies, default */
/***/ (function(module) {

module.exports = {"name":"pearacademy","version":"6.0.4","license":"MIT","scripts":{"ng":"ng","start":"ng serve --open","build":"ng build","test":"npm run lint && ng test","lint":"ng lint","e2e":"ng e2e","watch":"ng test --browsers ChromeHeadless --watch","build:prod":"ng build --prod --build-optimizer --vendor-chunk --common-chunk","clean":"rimraf ./dist/","server":"cd dist && http-server","prod":"npm run clean && npm run build:prod && npm run server","ci":"npm run clean && npm run prettier:ci && ng lint && ng test --browsers ChromeTravisCi && ng e2e && npm run build:prod -- --deploy-url /angular-ngrx-material-starter/ --base-href /angular-ngrx-material-starter","release":"standard-version && git push --follow-tags origin master","prettier":"prettier {src,e2e}/**/*.{ts,json,md,scss} --write","prettier:ci":"prettier {src,e2e}/**/*.{ts,json,md,scss} --list-different","analyze":"npm run clean && npm run build:prod -- --stats-json && webpack-bundle-analyzer ./dist/stats.json"},"private":true,"dependencies":{"@angular/animations":"6.0.0","@angular/cdk":"^6.0.0","@angular/common":"^6.0.0","@angular/compiler":"^6.0.0","@angular/core":"^6.0.0","@angular/flex-layout":"6.0.0-beta.15","@angular/forms":"6.0.0","@angular/http":"6.0.0","@angular/material":"^6.0.0","@angular/platform-browser":"^6.0.0","@angular/platform-browser-dynamic":"6.0.0","@angular/router":"6.0.0","@ngrx/effects":"^6.0.0-beta.1","@ngrx/store":"^6.0.0-beta.1","angular2-notifications":"^1.0.2","bootstrap":"^4.0.0","browser-detect":"^0.2.27","core-js":"^2.4.1","font-awesome":"^4.7.0","ng-shopping-cart":"^1.0.0-rc3","rxjs":"^6.0.0","uuid":"^3.1.0","web-animations-js":"^2.2.5","zone.js":"^0.8.20"},"devDependencies":{"@angular-devkit/build-angular":"~0.6.0","@angular/cli":"^6.0.0","@angular/compiler-cli":"6.0.0","@angular/language-service":"6.0.0","@types/jasmine":"~2.8.3","@types/node":"~9.4.0","codelyzer":"~4.1.0","enhanced-resolve":"~3.4.1","jasmine-core":"~2.99.1","jasmine-spec-reporter":"~4.2.1","karma":"~1.7.1","karma-chrome-launcher":"~2.2.0","karma-coverage-istanbul-reporter":"~1.4.2","karma-jasmine":"~1.1.0","karma-jasmine-html-reporter":"~0.2.2","karma-spec-reporter":"~0.0.31","ngrx-store-freeze":"^0.2.1","prettier":"^1.7.4","protractor":"~5.3.0","rimraf":"^2.6.2","standard-version":"^4.2.0","ts-node":"~5.0.0","tslint":"~5.9.1","typescript":"~2.7.2","webpack-bundle-analyzer":"^2.11.1"}};

/***/ }),

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"app/examples/examples.module": [
		"./src/app/examples/examples.module.ts",
		"app-examples-examples-module"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids) {
		return Promise.resolve().then(function() {
			var e = new Error('Cannot find module "' + req + '".');
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}
	return __webpack_require__.e(ids[1]).then(function() {
		var module = __webpack_require__(ids[0]);
		return module;
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _settings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./settings */ "./src/app/settings/index.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./register/register.component */ "./src/app/register/register.component.ts");
/* harmony import */ var _cart_cart_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./cart/cart.component */ "./src/app/cart/cart.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        redirectTo: 'about',
        pathMatch: 'full'
    },
    {
        path: 'settings',
        component: _settings__WEBPACK_IMPORTED_MODULE_2__["SettingsComponent"],
        data: {
            title: 'Settings'
        }
    },
    {
        path: 'register',
        component: _register_register_component__WEBPACK_IMPORTED_MODULE_4__["RegisterComponent"]
    },
    {
        path: 'cart',
        component: _cart_cart_component__WEBPACK_IMPORTED_MODULE_5__["CartComponent"]
    },
    {
        path: 'login',
        component: _login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"]
    },
    {
        path: 'examples',
        loadChildren: 'app/examples/examples.module#ExamplesModule'
    },
    {
        path: '**',
        redirectTo: 'about'
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            // useHash supports github.io demo page, remove in your app
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, { useHash: false })],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<simple-notifications [options]=\"options\"></simple-notifications>\r\n\r\n<mat-sidenav-container>\r\n\r\n  <mat-sidenav #sidenav mode=\"push\">\r\n    <div class=\"branding\"><img [src]=\"logo\"/> <span>Angular Starter</span></div>\r\n    <mat-nav-list>\r\n      <a mat-list-item *ngFor=\"let item of navigationSideMenu\" (click)=\"sidenav.close()\"\r\n         [routerLink]=\"[item.link]\" routerLinkActive=\"active\">\r\n        {{item.label}}\r\n      </a>\r\n      <a mat-list-item\r\n         href=\"https://github.com/tomastrajan/angular-ngrx-material-starter\"\r\n         target=\"_blank\">\r\n        Github\r\n      </a>\r\n    </mat-nav-list>\r\n  </mat-sidenav>\r\n\r\n  <div class=\"wrapper\">\r\n\r\n    <div class=\"toolbar\">\r\n      <mat-toolbar color=\"primary\">\r\n        <button mat-icon-button class=\"d-md-none\" (click)=\"sidenav.open()\">\r\n          <mat-icon>menu</mat-icon>\r\n        </button>\r\n\r\n        <span routerLink=\"\" class=\"branding spacer center d-inline d-sm-none\">\r\n          <img style=\"width:150px; height:90px\" [src]=\"logo\"/></span>\r\n        <span routerLink=\"\"\r\n              class=\"branding spacer center d-none d-sm-inline d-md-none\"><img\r\n          [src]=\"logo\"/> Angular Starter</span>\r\n        <span routerLink=\"\" class=\"branding spacer d-none d-md-inline\"><img style=\"width:150px; height:90px\"\r\n          [src]=\"logo\"/> Pear Academy</span>\r\n\r\n        <span class=\"d-none d-md-inline\">\r\n          <button mat-button class=\"nav-button\" *ngFor=\"let item of navigation\"\r\n              [routerLink]=\"[item.link]\" routerLinkActive=\"active\">\r\n            {{item.label}}\r\n          </button>\r\n        </span>\r\n\r\n        <button mat-button class=\"sign-in-button \"\r\n                *ngIf=\"!isAuthenticated\"\r\n                (click)=\"onLoginClick()\">\r\n          Sign in\r\n        </button>\r\n\r\n        <button *ngIf=\"isAuthenticated\"\r\n                mat-icon-button\r\n                [matMenuTriggerFor]=\"toolbarUserMenu\">\r\n          <mat-icon>person</mat-icon>\r\n        </button>\r\n        <mat-menu #toolbarUserMenu=\"matMenu\">\r\n          <button mat-menu-item (click)=\"onLogoutClick()\">\r\n            <mat-icon>power_settings_new</mat-icon>\r\n            <span>Logout</span>\r\n          </button>\r\n        </mat-menu>\r\n\r\n        <button mat-icon-button routerLink=\"cart\" class=\"d-none d-sm-inline\">\r\n          <mat-icon>shopping_cart\r\n            </mat-icon>\r\n        </button>\r\n<!--\r\n        <a matTooltip=\"Project Github Repository\"\r\n           matdTooltipPosition=\"before\"\r\n           mat-icon-button\r\n           class=\"link d-none d-sm-inline\"\r\n           href=\"https://github.com/tomastrajan/angular-ngrx-material-starter\"\r\n           target=\"_blank\">\r\n          <i class=\"fa fa-github fa-2x\"></i>\r\n        </a>-->\r\n\r\n      </mat-toolbar>\r\n    </div>\r\n\r\n    <div class=\"content\"\r\n         [@routerTransition]=\"o.isActivated && o.activatedRoute.routeConfig.path\">\r\n      <router-outlet #o=\"outlet\"></router-outlet>\r\n    </div>\r\n\r\n    <div class=\"footer\">\r\n      <div class=\"row\">\r\n        <div class=\"col-sm-12 links\">\r\n          <a href=\"https://www.github.com/tomastrajan\" target=\"_blank\">\r\n            <i class=\"fa fa-github fa-2x\" aria-hidden=\"true\"></i>\r\n            <span>Github</span>\r\n          </a>\r\n          <a href=\"https://www.medium.com/@tomastrajan\" target=\"_blank\">\r\n            <i class=\"fa fa-medium fa-2x\" aria-hidden=\"true\"></i>\r\n            <span>Medium</span>\r\n          </a>\r\n          <a href=\"https://www.twitter.com/tomastrajan\" target=\"_blank\">\r\n            <i class=\"fa fa-twitter fa-2x\" aria-hidden=\"true\"></i>\r\n            <span>Twitter</span>\r\n          </a>\r\n          <a href=\"https://www.youtube.com/channel/UC7XgRHIVoqnh3U5Vmly9ofQ\"\r\n             target=\"_blank\">\r\n            <i class=\"fa fa-youtube fa-2x\" aria-hidden=\"true\"></i>\r\n            <span>Youtube</span>\r\n          </a>\r\n          <a href=\"https://www.instagram.com/tomastrajan\" target=\"_blank\">\r\n            <i class=\"fa fa-instagram fa-2x\" aria-hidden=\"true\"></i>\r\n            <span>Instagram</span>\r\n          </a>\r\n          <a href=\"https://www.slides.com/tomastrajan\" target=\"_blank\">\r\n            <i class=\"fa fa-desktop fa-2x\" aria-hidden=\"true\"></i>\r\n            <span>Slides</span>\r\n          </a>\r\n        </div>\r\n      </div>\r\n      <div class=\"row\">\r\n        <div class=\"col-12 signature\">\r\n          &#169; <span class=\"year\">{{year}}</span> - Pear Academy\r\n          <br class=\"d-block d-sm-none\">\r\n          <a matTooltip=\"Show changelog\"\r\n             matTooltipPosition=\"before\"\r\n             href=\"https://github.com/tomastrajan/angular-ngrx-material-starter/blob/master/CHANGELOG.md\">\r\n            <i class=\"fa fa-rocket\"></i> {{version}} <span *ngIf=\"!isProd\">[{{envName}}]</span>\r\n          </a>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n  </div>\r\n\r\n</mat-sidenav-container>\r\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  height: 100%;\n  width: 100%; }\n\nmat-sidenav-container {\n  height: 100%;\n  width: 100%; }\n\nmat-sidenav-container .wrapper {\n    z-index: -2;\n    height: 100%;\n    width: 100%;\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-direction: column;\n        flex-direction: column;\n    position: relative;\n    overflow-y: auto; }\n\nmat-sidenav-container .wrapper .toolbar {\n      position: fixed;\n      width: 100%;\n      z-index: 1;\n      -ms-flex: 0 0 auto;\n          flex: 0 0 auto; }\n\nmat-sidenav-container .wrapper .toolbar mat-toolbar {\n        background: #111 !important;\n        color: white; }\n\nmat-sidenav-container .wrapper .toolbar .nav-button {\n        margin: 0 10px 0 0; }\n\nmat-sidenav-container .wrapper .toolbar .branding {\n        cursor: pointer;\n        padding-top: 4px; }\n\nmat-sidenav-container .wrapper .toolbar .branding.center {\n          text-align: center; }\n\nmat-sidenav-container .wrapper .toolbar .branding img {\n          position: relative;\n          top: -2px; }\n\nmat-sidenav-container .wrapper .toolbar .sign-in-button {\n        line-height: 35px;\n        margin-right: 10px; }\n\nmat-sidenav-container .wrapper .toolbar .spacer {\n        -ms-flex: 1 1 auto;\n            flex: 1 1 auto; }\n\n@media (max-width: 992px) {\n        mat-sidenav-container .wrapper .toolbar .nav-button {\n          min-width: 0;\n          padding: 0 10px; }\n        mat-sidenav-container .wrapper .toolbar .sign-in-button {\n          min-width: 0;\n          padding: 0 10px;\n          margin: 0 5px 0 0; } }\n\nmat-sidenav-container .wrapper .content {\n      padding-top: 64px;\n      -ms-flex: 1 0 auto;\n          flex: 1 0 auto;\n      position: relative; }\n\n@media (max-width: 576px) {\n      mat-sidenav-container .wrapper .content {\n        padding-top: 56px; } }\n\nmat-sidenav-container .wrapper .footer {\n      -ms-flex: 0 0 auto;\n          flex: 0 0 auto;\n      padding: 0 15px;\n      text-align: center;\n      z-index: 1;\n      color: white;\n      background-color: #005f37; }\n\nmat-sidenav-container .wrapper .footer .row {\n        padding: 10px 0; }\n\nmat-sidenav-container .wrapper .footer .row .links a {\n          transition: padding 0.5s;\n          display: inline-block;\n          padding: 20px 5px; }\n\nmat-sidenav-container .wrapper .footer .row .links a:hover {\n            text-decoration: none; }\n\nmat-sidenav-container .wrapper .footer .row .links a span {\n            display: inline-block;\n            width: 75px;\n            padding: 0 0 0 5px;\n            overflow: hidden;\n            text-align: left;\n            white-space: nowrap;\n            transition: width 0.5s; }\n\n@media (max-width: 768px) {\n          mat-sidenav-container .wrapper .footer .row .links a {\n            padding: 20px; }\n            mat-sidenav-container .wrapper .footer .row .links a span {\n              width: 0;\n              padding: 0; } }\n\n@media (max-width: 576px) {\n          mat-sidenav-container .wrapper .footer .row .links a {\n            padding: 20px 5px; } }\n\n@media (min-width: 576px) {\n          mat-sidenav-container .wrapper .footer .row .signature {\n            position: relative; }\n            mat-sidenav-container .wrapper .footer .row .signature a {\n              position: absolute;\n              right: 15px; } }\n\nmat-sidenav {\n  width: 250px; }\n\nmat-sidenav .branding {\n    height: 64px;\n    padding: 8px 10px;\n    font-size: 20px;\n    font-weight: 500; }\n\nmat-sidenav .branding img {\n      margin: 0 10px 0 0; }\n\nmat-sidenav .branding span {\n      position: relative;\n      top: 3px; }\n\nmat-sidenav .mat-nav-list {\n    padding-top: 0; }\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/overlay */ "./node_modules/@angular/cdk/esm5/overlay.es5.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _app_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @app/core */ "./src/app/core/index.ts");
/* harmony import */ var _env_environment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @env/environment */ "./src/environments/environment.ts");
/* harmony import */ var _settings__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./settings */ "./src/app/settings/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var AppComponent = /** @class */ (function () {
    function AppComponent(overlayContainer, store, router, titleService) {
        this.overlayContainer = overlayContainer;
        this.store = store;
        this.router = router;
        this.titleService = titleService;
        this.unsubscribe$ = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
        this.isProd = _env_environment__WEBPACK_IMPORTED_MODULE_8__["environment"].production;
        this.envName = _env_environment__WEBPACK_IMPORTED_MODULE_8__["environment"].envName;
        this.version = _env_environment__WEBPACK_IMPORTED_MODULE_8__["environment"].versions.app;
        this.year = new Date().getFullYear();
        this.logo = __webpack_require__(/*! ../assets/logo.png */ "./src/assets/logo.png");
        this.navigation = [
            { link: 'about', label: 'ABOUT US' },
            { link: 'coaching', label: 'COACHING' },
            { link: 'ielts', label: 'IELTS / OET / PTE' },
            { link: 'oettest', label: 'OET TEST' },
            { link: 'enrol', label: 'ENROL' },
            { link: 'consultancy', label: 'CONSULTANCY' },
            { link: 'contact', label: 'CONTACT' },
            { link: 'testimonials', label: 'TESTIMONIALS' }
        ];
        this.navigationSideMenu = this.navigation.concat([
            { link: 'settings', label: 'Settings' }
        ]);
        this.options = {
            position: ['top', 'right'],
            timeOut: 5000,
        };
    }
    AppComponent.prototype.ngOnInit = function () {
        this.subscribeToSettings();
        this.subscribeToIsAuthenticated();
        this.subscribeToRouterEvents();
    };
    AppComponent.prototype.ngOnDestroy = function () {
        this.unsubscribe$.next();
        this.unsubscribe$.complete();
    };
    AppComponent.prototype.onLoginClick = function () {
        this.router.navigateByUrl('login');
        // this.store.dispatch(new ActionAuthLogin());
    };
    AppComponent.prototype.onLogoutClick = function () {
        this.store.dispatch(new _app_core__WEBPACK_IMPORTED_MODULE_7__["ActionAuthLogout"]());
    };
    AppComponent.prototype.subscribeToIsAuthenticated = function () {
        var _this = this;
        this.store
            .select(_app_core__WEBPACK_IMPORTED_MODULE_7__["selectorAuth"])
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["takeUntil"])(this.unsubscribe$))
            .subscribe(function (auth) { return (_this.isAuthenticated = auth.isAuthenticated); });
    };
    AppComponent.prototype.subscribeToSettings = function () {
        var _this = this;
        this.store
            .select(_settings__WEBPACK_IMPORTED_MODULE_9__["selectorSettings"])
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["takeUntil"])(this.unsubscribe$))
            .subscribe(function (settings) { return _this.setTheme(settings); });
    };
    AppComponent.prototype.setTheme = function (settings) {
        var theme = settings.theme, autoNightMode = settings.autoNightMode;
        var hours = new Date().getHours();
        var effectiveTheme = (autoNightMode && (hours >= 20 || hours <= 6)
            ? _settings__WEBPACK_IMPORTED_MODULE_9__["NIGHT_MODE_THEME"]
            : theme).toLowerCase();
        this.componentCssClass = effectiveTheme;
        var classList = this.overlayContainer.getContainerElement().classList;
        var toRemove = Array.from(classList).filter(function (item) {
            return item.includes('-theme');
        });
        if (toRemove.length) {
            classList.remove.apply(classList, toRemove);
        }
        classList.add(effectiveTheme);
    };
    AppComponent.prototype.subscribeToRouterEvents = function () {
        var _this = this;
        this.router.events
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["filter"])(function (event) {
            return event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivationEnd"] || event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__["NavigationEnd"];
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["takeUntil"])(this.unsubscribe$))
            .subscribe(function (event) {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivationEnd"]) {
                _this.setPageTitle(event);
            }
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__["NavigationEnd"]) {
                _this.trackPageView(event);
            }
        });
    };
    AppComponent.prototype.setPageTitle = function (event) {
        var lastChild = event.snapshot;
        while (lastChild.children.length) {
            lastChild = lastChild.children[0];
        }
        var title = lastChild.data.title;
        this.titleService.setTitle(title ? title + " - " + _env_environment__WEBPACK_IMPORTED_MODULE_8__["environment"].appName : _env_environment__WEBPACK_IMPORTED_MODULE_8__["environment"].appName);
    };
    AppComponent.prototype.trackPageView = function (event) {
        window.ga('set', 'page', event.urlAfterRedirects);
        window.ga('send', 'pageview');
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["HostBinding"])('class'),
        __metadata("design:type", Object)
    ], AppComponent.prototype, "componentCssClass", void 0);
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'pear-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")],
            animations: [_app_core__WEBPACK_IMPORTED_MODULE_7__["routerTransition"]]
        }),
        __metadata("design:paramtypes", [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_1__["OverlayContainer"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_4__["Store"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["Title"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var _app_shared__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @app/shared */ "./src/app/shared/index.ts");
/* harmony import */ var _app_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @app/core */ "./src/app/core/index.ts");
/* harmony import */ var _settings__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./settings */ "./src/app/settings/index.ts");
/* harmony import */ var _static__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./static */ "./src/app/static/index.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./register/register.component */ "./src/app/register/register.component.ts");
/* harmony import */ var ng_shopping_cart__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ng-shopping-cart */ "./node_modules/ng-shopping-cart/esm5/ng-shopping-cart.js");
/* harmony import */ var _cart_cart_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./cart/cart.module */ "./src/app/cart/cart.module.ts");
/* harmony import */ var angular2_notifications__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! angular2-notifications */ "./node_modules/angular2-notifications/angular2-notifications.umd.js");
/* harmony import */ var angular2_notifications__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(angular2_notifications__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _cart_item__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./cart-item */ "./src/app/cart-item.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













 // <-- Import the module class



var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [
                // angular
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                // core & shared
                _app_core__WEBPACK_IMPORTED_MODULE_6__["CoreModule"],
                _app_shared__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__["FlexLayoutModule"],
                // features
                _static__WEBPACK_IMPORTED_MODULE_8__["StaticModule"],
                _settings__WEBPACK_IMPORTED_MODULE_7__["SettingsModule"],
                _cart_cart_module__WEBPACK_IMPORTED_MODULE_14__["CartModule"],
                // app
                _app_routing_module__WEBPACK_IMPORTED_MODULE_9__["AppRoutingModule"],
                ng_shopping_cart__WEBPACK_IMPORTED_MODULE_13__["ShoppingCartModule"].forRoot({
                    itemType: _cart_item__WEBPACK_IMPORTED_MODULE_16__["PearCartItem"],
                    serviceType: 'localStorage',
                    serviceOptions: {
                        storageKey: 'NgShoppingCart',
                        clearOnError: true
                    }
                }),
                angular2_notifications__WEBPACK_IMPORTED_MODULE_15__["SimpleNotificationsModule"].forRoot(),
            ],
            declarations: [_app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"], _login_login_component__WEBPACK_IMPORTED_MODULE_11__["LoginComponent"], _register_register_component__WEBPACK_IMPORTED_MODULE_12__["RegisterComponent"]],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/cart-item.ts":
/*!******************************!*\
  !*** ./src/app/cart-item.ts ***!
  \******************************/
/*! exports provided: PearCartItem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PearCartItem", function() { return PearCartItem; });
/* harmony import */ var ng_shopping_cart__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ng-shopping-cart */ "./node_modules/ng-shopping-cart/esm5/ng-shopping-cart.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var PearCartItem = /** @class */ (function (_super) {
    __extends(PearCartItem, _super);
    function PearCartItem(itemData) {
        if (itemData === void 0) { itemData = {}; }
        var _this = _super.call(this) || this;
        var identifier = itemData.identifier, label = itemData.label, cost = itemData.cost, amount = itemData.amount, description = itemData.description, country = itemData.country, photo = itemData.photo;
        _this.identifier = identifier || 0;
        _this.label = label || '';
        _this.cost = cost || 0;
        _this.amount = amount || 1;
        _this.description = description || '';
        _this.country = country || '';
        _this.photo = photo || '';
        return _this;
    }
    PearCartItem.prototype.getId = function () {
        return this.identifier;
    };
    PearCartItem.prototype.getName = function () {
        return this.label;
    };
    PearCartItem.prototype.getPrice = function () {
        return this.cost;
    };
    PearCartItem.prototype.getQuantity = function () {
        return this.amount;
    };
    PearCartItem.prototype.setQuantity = function (quantity) {
        this.amount = quantity;
    };
    PearCartItem.prototype.getImage = function () {
        return this.photo;
    };
    return PearCartItem;
}(ng_shopping_cart__WEBPACK_IMPORTED_MODULE_0__["CartItem"]));



/***/ }),

/***/ "./src/app/cart/cart-checkout-view/cart-checkout-view.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/cart/cart-checkout-view/cart-checkout-view.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h3>Cart view</h3>\n<div class=\"card\"> \n  <div class=\"card-body\">\n    <cart-view [display]=\"display\" [images]=\"showImages\" [customEmptyContent]=\"useCustom\">\n      <h1 style=\"text-align: center\">Empty cart</h1>\n    </cart-view>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/cart/cart-checkout-view/cart-checkout-view.component.scss":
/*!***************************************************************************!*\
  !*** ./src/app/cart/cart-checkout-view/cart-checkout-view.component.scss ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/cart/cart-checkout-view/cart-checkout-view.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/cart/cart-checkout-view/cart-checkout-view.component.ts ***!
  \*************************************************************************/
/*! exports provided: CartCheckoutViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartCheckoutViewComponent", function() { return CartCheckoutViewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CartCheckoutViewComponent = /** @class */ (function () {
    function CartCheckoutViewComponent() {
    }
    CartCheckoutViewComponent.prototype.ngOnInit = function () {
    };
    CartCheckoutViewComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'pear-cart-checkout-view',
            template: __webpack_require__(/*! ./cart-checkout-view.component.html */ "./src/app/cart/cart-checkout-view/cart-checkout-view.component.html"),
            styles: [__webpack_require__(/*! ./cart-checkout-view.component.scss */ "./src/app/cart/cart-checkout-view/cart-checkout-view.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], CartCheckoutViewComponent);
    return CartCheckoutViewComponent;
}());



/***/ }),

/***/ "./src/app/cart/cart-checkout/cart-checkout.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/cart/cart-checkout/cart-checkout.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\n  <div class=\"card-body\" >\n    <cart-checkout [custom]=\"custom\" [buttonText]=\"label || 'Checkout'\">\n      <button type=\"button\" [disabled]=\"disabled\" class=\"custom-checkout-button\">\n        Start checkout\n      </button>\n    </cart-checkout>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/cart/cart-checkout/cart-checkout.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/cart/cart-checkout/cart-checkout.component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".custom-checkout-button {\n  padding: 10px;\n  background-color: #607d8b;\n  color: white;\n  cursor: pointer;\n  border: solid 1px lightslategray;\n  border-radius: 10px; }\n  .custom-checkout-button:hover {\n    background-color: #7496a4; }\n  .custom-checkout-button[disabled] {\n    pointer-events: none;\n    background-color: dimgray;\n    color: lightgrey; }\n"

/***/ }),

/***/ "./src/app/cart/cart-checkout/cart-checkout.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/cart/cart-checkout/cart-checkout.component.ts ***!
  \***************************************************************/
/*! exports provided: CartCheckoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartCheckoutComponent", function() { return CartCheckoutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ng_shopping_cart__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-shopping-cart */ "./node_modules/ng-shopping-cart/esm5/ng-shopping-cart.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CartCheckoutComponent = /** @class */ (function () {
    function CartCheckoutComponent(cartService) {
        this.cartService = cartService;
        this.custom = false;
        this.label = 'Checkout';
        this.settingsCollapsed = false;
        this.resultsCollapsed = false;
        this.disabled = false;
    }
    CartCheckoutComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.checkService();
        this.serviceSubstription = this.cartService.onItemsChanged.subscribe(function () {
            _this.checkService();
        });
    };
    CartCheckoutComponent.prototype.checkService = function () {
        this.disabled = this.cartService.isEmpty();
    };
    CartCheckoutComponent.prototype.ngOnDestroy = function () {
        this.serviceSubstription.unsubscribe();
    };
    CartCheckoutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'pear-cart-checkout',
            template: __webpack_require__(/*! ./cart-checkout.component.html */ "./src/app/cart/cart-checkout/cart-checkout.component.html"),
            styles: [__webpack_require__(/*! ./cart-checkout.component.scss */ "./src/app/cart/cart-checkout/cart-checkout.component.scss")]
        }),
        __metadata("design:paramtypes", [ng_shopping_cart__WEBPACK_IMPORTED_MODULE_1__["CartService"]])
    ], CartCheckoutComponent);
    return CartCheckoutComponent;
}());



/***/ }),

/***/ "./src/app/cart/cart.component.html":
/*!******************************************!*\
  !*** ./src/app/cart/cart.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" style=\"padding-top:20px\">\n  <div class=\"mb-5\">\n    <pear-cart-checkout-view></pear-cart-checkout-view>\n  </div>\n  <div class=\"mb-5\">\n      <pear-cart-checkout></pear-cart-checkout>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/cart/cart.component.scss":
/*!******************************************!*\
  !*** ./src/app/cart/cart.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/cart/cart.component.ts":
/*!****************************************!*\
  !*** ./src/app/cart/cart.component.ts ***!
  \****************************************/
/*! exports provided: CartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartComponent", function() { return CartComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CartComponent = /** @class */ (function () {
    function CartComponent() {
    }
    CartComponent.prototype.ngOnInit = function () {
    };
    CartComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'pear-cart',
            template: __webpack_require__(/*! ./cart.component.html */ "./src/app/cart/cart.component.html"),
            styles: [__webpack_require__(/*! ./cart.component.scss */ "./src/app/cart/cart.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], CartComponent);
    return CartComponent;
}());



/***/ }),

/***/ "./src/app/cart/cart.module.ts":
/*!*************************************!*\
  !*** ./src/app/cart/cart.module.ts ***!
  \*************************************/
/*! exports provided: CartModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartModule", function() { return CartModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _cart_checkout_cart_checkout_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./cart-checkout/cart-checkout.component */ "./src/app/cart/cart-checkout/cart-checkout.component.ts");
/* harmony import */ var _cart_checkout_view_cart_checkout_view_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./cart-checkout-view/cart-checkout-view.component */ "./src/app/cart/cart-checkout-view/cart-checkout-view.component.ts");
/* harmony import */ var _cart_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./cart.component */ "./src/app/cart/cart.component.ts");
/* harmony import */ var ng_shopping_cart__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-shopping-cart */ "./node_modules/ng-shopping-cart/esm5/ng-shopping-cart.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var CartModule = /** @class */ (function () {
    function CartModule() {
    }
    CartModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                ng_shopping_cart__WEBPACK_IMPORTED_MODULE_6__["ShoppingCartModule"].forChild(),
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"]
            ],
            declarations: [_cart_checkout_cart_checkout_component__WEBPACK_IMPORTED_MODULE_3__["CartCheckoutComponent"],
                _cart_checkout_view_cart_checkout_view_component__WEBPACK_IMPORTED_MODULE_4__["CartCheckoutViewComponent"],
                _cart_component__WEBPACK_IMPORTED_MODULE_5__["CartComponent"]]
        })
    ], CartModule);
    return CartModule;
}());



/***/ }),

/***/ "./src/app/core/animations/router.transition.ts":
/*!******************************************************!*\
  !*** ./src/app/core/animations/router.transition.ts ***!
  \******************************************************/
/*! exports provided: ANIMATE_ON_ROUTE_ENTER, ROUTE_TRANSITION_IE, routerTransition, isNotIEorEdge, isIEorEdge */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ANIMATE_ON_ROUTE_ENTER", function() { return ANIMATE_ON_ROUTE_ENTER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ROUTE_TRANSITION_IE", function() { return ROUTE_TRANSITION_IE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routerTransition", function() { return routerTransition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isNotIEorEdge", function() { return isNotIEorEdge; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isIEorEdge", function() { return isIEorEdge; });
/* harmony import */ var browser_detect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! browser-detect */ "./node_modules/browser-detect/dist/browser-detect.es5.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");


var ANIMATE_ON_ROUTE_ENTER = 'route-enter-staggered';
var ROUTE_TRANSITION = [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["query"])(':enter > *', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: 0, position: 'fixed' }), {
        optional: true
    }),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["query"])(':enter .' + ANIMATE_ON_ROUTE_ENTER, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: 0 }), {
        optional: true
    }),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["sequence"])([
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["query"])(':leave > *', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'translateY(0%)', opacity: 1 }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('0.2s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'translateY(-3%)', opacity: 0 })),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ position: 'fixed' })
        ], { optional: true }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["query"])(':enter > *', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                transform: 'translateY(-3%)',
                opacity: 0,
                position: 'static'
            }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('0.5s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'translateY(0%)', opacity: 1 }))
        ], { optional: true })
    ]),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["query"])(':enter .' + ANIMATE_ON_ROUTE_ENTER, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["stagger"])(100, [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'translateY(15%)', opacity: 0 }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('0.5s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'translateY(0%)', opacity: 1 }))
    ]), { optional: true })
];
var ROUTE_TRANSITION_IE = [ROUTE_TRANSITION[1], ROUTE_TRANSITION[3]];
var routerTransition = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('routerTransition', [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])(isNotIEorEdge, ROUTE_TRANSITION),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])(isIEorEdge, ROUTE_TRANSITION_IE)
]);
function isNotIEorEdge() {
    return !isIEorEdge();
}
function isIEorEdge() {
    return ['ie', 'edge'].includes(Object(browser_detect__WEBPACK_IMPORTED_MODULE_0__["default"])().name);
}


/***/ }),

/***/ "./src/app/core/auth/auth-guard.service.ts":
/*!*************************************************!*\
  !*** ./src/app/core/auth/auth-guard.service.ts ***!
  \*************************************************/
/*! exports provided: AuthGuardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuardService", function() { return AuthGuardService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _auth_reducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth.reducer */ "./src/app/core/auth/auth.reducer.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuardService = /** @class */ (function () {
    function AuthGuardService(store) {
        var _this = this;
        this.store = store;
        this.isAuthenticated = false;
        this.store
            .select(_auth_reducer__WEBPACK_IMPORTED_MODULE_2__["selectorAuth"])
            .subscribe(function (auth) { return (_this.isAuthenticated = auth.isAuthenticated); });
    }
    AuthGuardService.prototype.canActivate = function () {
        return this.isAuthenticated;
    };
    AuthGuardService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"]])
    ], AuthGuardService);
    return AuthGuardService;
}());



/***/ }),

/***/ "./src/app/core/auth/auth.effects.ts":
/*!*******************************************!*\
  !*** ./src/app/core/auth/auth.effects.ts ***!
  \*******************************************/
/*! exports provided: AuthEffects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthEffects", function() { return AuthEffects; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm5/effects.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _local_storage_local_storage_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../local-storage/local-storage.service */ "./src/app/core/local-storage/local-storage.service.ts");
/* harmony import */ var _auth_reducer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./auth.reducer */ "./src/app/core/auth/auth.reducer.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var AuthEffects = /** @class */ (function () {
    function AuthEffects(actions$, localStorageService, router) {
        this.actions$ = actions$;
        this.localStorageService = localStorageService;
        this.router = router;
    }
    AuthEffects.prototype.login = function () {
        var _this = this;
        return this.actions$
            .ofType(_auth_reducer__WEBPACK_IMPORTED_MODULE_6__["AuthActionTypes"].LOGIN)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (action) {
            return _this.localStorageService.setItem(_auth_reducer__WEBPACK_IMPORTED_MODULE_6__["AUTH_KEY"], { isAuthenticated: true });
        }));
    };
    AuthEffects.prototype.logout = function () {
        var _this = this;
        return this.actions$.ofType(_auth_reducer__WEBPACK_IMPORTED_MODULE_6__["AuthActionTypes"].LOGOUT).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (action) {
            _this.router.navigate(['']);
            _this.localStorageService.setItem(_auth_reducer__WEBPACK_IMPORTED_MODULE_6__["AUTH_KEY"], { isAuthenticated: false });
        }));
    };
    __decorate([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])({ dispatch: false }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"])
    ], AuthEffects.prototype, "login", null);
    __decorate([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])({ dispatch: false }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"])
    ], AuthEffects.prototype, "logout", null);
    AuthEffects = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Actions"],
            _local_storage_local_storage_service__WEBPACK_IMPORTED_MODULE_5__["LocalStorageService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AuthEffects);
    return AuthEffects;
}());



/***/ }),

/***/ "./src/app/core/auth/auth.reducer.ts":
/*!*******************************************!*\
  !*** ./src/app/core/auth/auth.reducer.ts ***!
  \*******************************************/
/*! exports provided: AUTH_KEY, AuthActionTypes, ActionAuthLogin, ActionAuthLogout, initialState, selectorAuth, authReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AUTH_KEY", function() { return AUTH_KEY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthActionTypes", function() { return AuthActionTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActionAuthLogin", function() { return ActionAuthLogin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActionAuthLogout", function() { return ActionAuthLogout; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectorAuth", function() { return selectorAuth; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "authReducer", function() { return authReducer; });
var __assign = (undefined && undefined.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var AUTH_KEY = 'AUTH';
var AuthActionTypes;
(function (AuthActionTypes) {
    AuthActionTypes["LOGIN"] = "[Auth] Login";
    AuthActionTypes["LOGOUT"] = "[Auth] Logout";
})(AuthActionTypes || (AuthActionTypes = {}));
var ActionAuthLogin = /** @class */ (function () {
    function ActionAuthLogin() {
        this.type = AuthActionTypes.LOGIN;
    }
    return ActionAuthLogin;
}());

var ActionAuthLogout = /** @class */ (function () {
    function ActionAuthLogout() {
        this.type = AuthActionTypes.LOGOUT;
    }
    return ActionAuthLogout;
}());

var initialState = {
    isAuthenticated: false
};
var selectorAuth = function (state) { return state.auth; };
function authReducer(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case AuthActionTypes.LOGIN:
            return __assign({}, state, { isAuthenticated: true });
        case AuthActionTypes.LOGOUT:
            return __assign({}, state, { isAuthenticated: false });
        default:
            return state;
    }
}


/***/ }),

/***/ "./src/app/core/core.module.ts":
/*!*************************************!*\
  !*** ./src/app/core/core.module.ts ***!
  \*************************************/
/*! exports provided: metaReducers, CoreModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "metaReducers", function() { return metaReducers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreModule", function() { return CoreModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm5/effects.js");
/* harmony import */ var ngrx_store_freeze__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngrx-store-freeze */ "./node_modules/ngrx-store-freeze/index.js");
/* harmony import */ var ngrx_store_freeze__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(ngrx_store_freeze__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _env_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @env/environment */ "./src/environments/environment.ts");
/* harmony import */ var _meta_reducers_debug_reducer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./meta-reducers/debug.reducer */ "./src/app/core/meta-reducers/debug.reducer.ts");
/* harmony import */ var _meta_reducers_init_state_from_local_storage_reducer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./meta-reducers/init-state-from-local-storage.reducer */ "./src/app/core/meta-reducers/init-state-from-local-storage.reducer.ts");
/* harmony import */ var _local_storage_local_storage_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./local-storage/local-storage.service */ "./src/app/core/local-storage/local-storage.service.ts");
/* harmony import */ var _auth_auth_reducer__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./auth/auth.reducer */ "./src/app/core/auth/auth.reducer.ts");
/* harmony import */ var _auth_auth_effects__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./auth/auth.effects */ "./src/app/core/auth/auth.effects.ts");
/* harmony import */ var _auth_auth_guard_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./auth/auth-guard.service */ "./src/app/core/auth/auth-guard.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};













var metaReducers = [_meta_reducers_init_state_from_local_storage_reducer__WEBPACK_IMPORTED_MODULE_8__["initStateFromLocalStorage"]];
if (!_env_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].production) {
    metaReducers.unshift(_meta_reducers_debug_reducer__WEBPACK_IMPORTED_MODULE_7__["debug"], ngrx_store_freeze__WEBPACK_IMPORTED_MODULE_5__["storeFreeze"]);
}
var CoreModule = /** @class */ (function () {
    function CoreModule(parentModule) {
        if (parentModule) {
            throw new Error('CoreModule is already loaded. Import only in AppModule');
        }
    }
    CoreModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                // angular
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                // ngrx
                _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["StoreModule"].forRoot({
                    auth: _auth_auth_reducer__WEBPACK_IMPORTED_MODULE_10__["authReducer"]
                }, { metaReducers: metaReducers }),
                _ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["EffectsModule"].forRoot([_auth_auth_effects__WEBPACK_IMPORTED_MODULE_11__["AuthEffects"]])
            ],
            declarations: [],
            providers: [_local_storage_local_storage_service__WEBPACK_IMPORTED_MODULE_9__["LocalStorageService"], _auth_auth_guard_service__WEBPACK_IMPORTED_MODULE_12__["AuthGuardService"]]
        }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"])()),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["SkipSelf"])()),
        __metadata("design:paramtypes", [CoreModule])
    ], CoreModule);
    return CoreModule;
}());



/***/ }),

/***/ "./src/app/core/index.ts":
/*!*******************************!*\
  !*** ./src/app/core/index.ts ***!
  \*******************************/
/*! exports provided: LocalStorageService, ANIMATE_ON_ROUTE_ENTER, ROUTE_TRANSITION_IE, routerTransition, isNotIEorEdge, isIEorEdge, AUTH_KEY, AuthActionTypes, ActionAuthLogin, ActionAuthLogout, initialState, selectorAuth, authReducer, AuthGuardService, metaReducers, CoreModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _local_storage_local_storage_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./local-storage/local-storage.service */ "./src/app/core/local-storage/local-storage.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LocalStorageService", function() { return _local_storage_local_storage_service__WEBPACK_IMPORTED_MODULE_0__["LocalStorageService"]; });

/* harmony import */ var _animations_router_transition__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./animations/router.transition */ "./src/app/core/animations/router.transition.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ANIMATE_ON_ROUTE_ENTER", function() { return _animations_router_transition__WEBPACK_IMPORTED_MODULE_1__["ANIMATE_ON_ROUTE_ENTER"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ROUTE_TRANSITION_IE", function() { return _animations_router_transition__WEBPACK_IMPORTED_MODULE_1__["ROUTE_TRANSITION_IE"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "routerTransition", function() { return _animations_router_transition__WEBPACK_IMPORTED_MODULE_1__["routerTransition"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isNotIEorEdge", function() { return _animations_router_transition__WEBPACK_IMPORTED_MODULE_1__["isNotIEorEdge"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isIEorEdge", function() { return _animations_router_transition__WEBPACK_IMPORTED_MODULE_1__["isIEorEdge"]; });

/* harmony import */ var _auth_auth_reducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth/auth.reducer */ "./src/app/core/auth/auth.reducer.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AUTH_KEY", function() { return _auth_auth_reducer__WEBPACK_IMPORTED_MODULE_2__["AUTH_KEY"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AuthActionTypes", function() { return _auth_auth_reducer__WEBPACK_IMPORTED_MODULE_2__["AuthActionTypes"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ActionAuthLogin", function() { return _auth_auth_reducer__WEBPACK_IMPORTED_MODULE_2__["ActionAuthLogin"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ActionAuthLogout", function() { return _auth_auth_reducer__WEBPACK_IMPORTED_MODULE_2__["ActionAuthLogout"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return _auth_auth_reducer__WEBPACK_IMPORTED_MODULE_2__["initialState"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectorAuth", function() { return _auth_auth_reducer__WEBPACK_IMPORTED_MODULE_2__["selectorAuth"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "authReducer", function() { return _auth_auth_reducer__WEBPACK_IMPORTED_MODULE_2__["authReducer"]; });

/* harmony import */ var _auth_auth_guard_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth/auth-guard.service */ "./src/app/core/auth/auth-guard.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AuthGuardService", function() { return _auth_auth_guard_service__WEBPACK_IMPORTED_MODULE_3__["AuthGuardService"]; });

/* harmony import */ var _core_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./core.module */ "./src/app/core/core.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "metaReducers", function() { return _core_module__WEBPACK_IMPORTED_MODULE_4__["metaReducers"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CoreModule", function() { return _core_module__WEBPACK_IMPORTED_MODULE_4__["CoreModule"]; });








/***/ }),

/***/ "./src/app/core/local-storage/local-storage.service.ts":
/*!*************************************************************!*\
  !*** ./src/app/core/local-storage/local-storage.service.ts ***!
  \*************************************************************/
/*! exports provided: LocalStorageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocalStorageService", function() { return LocalStorageService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var APP_PREFIX = 'pear-';
var LocalStorageService = /** @class */ (function () {
    function LocalStorageService() {
    }
    LocalStorageService.loadInitialState = function () {
        return Object.keys(localStorage).reduce(function (state, storageKey) {
            if (storageKey.includes(APP_PREFIX)) {
                state = state || {};
                var stateKey_1 = storageKey
                    .replace(APP_PREFIX, '')
                    .toLowerCase()
                    .split('.');
                var currentStateRef_1 = state;
                stateKey_1.forEach(function (key, index) {
                    if (index === stateKey_1.length - 1) {
                        currentStateRef_1[key] = JSON.parse(localStorage.getItem(storageKey));
                        return;
                    }
                    currentStateRef_1[key] = currentStateRef_1[key] || {};
                    currentStateRef_1 = currentStateRef_1[key];
                });
            }
            return state;
        }, undefined);
    };
    LocalStorageService.prototype.setItem = function (key, value) {
        localStorage.setItem("" + APP_PREFIX + key, JSON.stringify(value));
    };
    LocalStorageService.prototype.getItem = function (key) {
        return JSON.parse(localStorage.getItem("" + APP_PREFIX + key));
    };
    LocalStorageService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], LocalStorageService);
    return LocalStorageService;
}());



/***/ }),

/***/ "./src/app/core/meta-reducers/debug.reducer.ts":
/*!*****************************************************!*\
  !*** ./src/app/core/meta-reducers/debug.reducer.ts ***!
  \*****************************************************/
/*! exports provided: debug */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "debug", function() { return debug; });
function debug(reducer) {
    return function (state, action) {
        var newState = reducer(state, action);
        console.log("[DEBUG] action: " + action.type, {
            payload: action.payload,
            oldState: state,
            newState: newState
        });
        return newState;
    };
}


/***/ }),

/***/ "./src/app/core/meta-reducers/init-state-from-local-storage.reducer.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/core/meta-reducers/init-state-from-local-storage.reducer.ts ***!
  \*****************************************************************************/
/*! exports provided: initStateFromLocalStorage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initStateFromLocalStorage", function() { return initStateFromLocalStorage; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _local_storage_local_storage_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../local-storage/local-storage.service */ "./src/app/core/local-storage/local-storage.service.ts");
var __assign = (undefined && undefined.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};


function initStateFromLocalStorage(reducer) {
    return function (state, action) {
        var newState = reducer(state, action);
        if ([_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["INIT"].toString(), _ngrx_store__WEBPACK_IMPORTED_MODULE_0__["UPDATE"].toString()].includes(action.type)) {
            return __assign({}, newState, _local_storage_local_storage_service__WEBPACK_IMPORTED_MODULE_1__["LocalStorageService"].loadInitialState());
        }
        return newState;
    };
}


/***/ }),

/***/ "./src/app/core/services/notification.service.ts":
/*!*******************************************************!*\
  !*** ./src/app/core/services/notification.service.ts ***!
  \*******************************************************/
/*! exports provided: PearNotificationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PearNotificationService", function() { return PearNotificationService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angular2_notifications__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angular2-notifications */ "./node_modules/angular2-notifications/angular2-notifications.umd.js");
/* harmony import */ var angular2_notifications__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(angular2_notifications__WEBPACK_IMPORTED_MODULE_1__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// https://jaspero.co/resources/projects/ng-notifications
var PearNotificationService = /** @class */ (function () {
    function PearNotificationService(notificationService) {
        this.notificationService = notificationService;
    }
    // Creates a success notification with the provided title and content.
    PearNotificationService.prototype.success = function (title, content, showprogressbar) {
        this.notificationService.success(title, content, {
            position: ['top', 'right'],
            timeOut: 5000,
            showProgressBar: showprogressbar,
            pauseOnHover: false,
            clickToClose: false,
        });
    };
    // Creates an alert notification with the provided title and content.
    PearNotificationService.prototype.alert = function (title, content, showprogressbar) {
        this.notificationService.alert(title, content, {
            position: ['top', 'right'],
            timeOut: 5000,
            showProgressBar: showprogressbar,
            pauseOnHover: false,
            clickToClose: false,
        });
    };
    // Creates an info notification with the provided title and content.
    PearNotificationService.prototype.info = function (title, content, showprogressbar) {
        this.notificationService.info(title, content, {
            position: ['top', 'right'],
            timeOut: 5000,
            showProgressBar: showprogressbar,
            pauseOnHover: false,
            clickToClose: false,
        });
    };
    // Creates a warn notification with the provided title and content.
    PearNotificationService.prototype.warn = function (title, content, showprogressbar) {
        this.notificationService.warn(title, content, {
            position: ['top', 'right'],
            timeOut: 5000,
            showProgressBar: showprogressbar,
            pauseOnHover: false,
            clickToClose: false,
        });
    };
    // Creates an error notification with the provided title and content.
    PearNotificationService.prototype.error = function (title, content, showprogressbar) {
        this.notificationService.error(title, content, {
            position: ['top', 'right'],
            timeOut: 5000,
            showProgressBar: showprogressbar,
            pauseOnHover: false,
            clickToClose: false,
        });
    };
    PearNotificationService.prototype.create = function (title, content, type, showprogressbar) {
        if (content === void 0) { content = ''; }
        if (type === void 0) { type = 'success'; }
        if (showprogressbar === void 0) { showprogressbar = false; }
        this.notificationService.create(title, content, type, {
            position: ['top', 'right'],
            timeOut: 5000,
            showProgressBar: showprogressbar,
            pauseOnHover: false,
            clickToClose: false,
        });
    };
    // Creates a bare notification with the provided title and content. This notification type is best used when adding custom html.
    PearNotificationService.prototype.bare = function (title, content, showprogressbar) {
        if (content === void 0) { content = ''; }
        if (showprogressbar === void 0) { showprogressbar = false; }
        this.notificationService.bare(title, content, {
            position: ['top', 'right'],
            timeOut: 5000,
            showProgressBar: showprogressbar,
            pauseOnHover: false,
            clickToClose: false,
        });
    };
    // Use this method to create a notification with custom html.
    PearNotificationService.prototype.html = function (html, type, showprogressbar) {
        if (type === void 0) { type = 'success'; }
        if (showprogressbar === void 0) { showprogressbar = false; }
        this.notificationService.html(html, type, {
            position: ['top', 'right'],
            timeOut: 5000,
            showProgressBar: showprogressbar,
            pauseOnHover: false,
            clickToClose: false,
        });
    };
    PearNotificationService.prototype.clear = function (id) {
        this.notificationService.remove(id);
    };
    PearNotificationService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root',
        }),
        __metadata("design:paramtypes", [angular2_notifications__WEBPACK_IMPORTED_MODULE_1__["NotificationsService"]])
    ], PearNotificationService);
    return PearNotificationService;
}());



/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"login\" fxLayout=\"column\" fxLayoutAlign=\"center center\">\r\n\r\n  <div id=\"login-form-wrapper\" fxLayout=\"column\">\r\n\r\n      <div id=\"login-form\">\r\n\r\n          <div class=\"logo\" >\r\n              <img style =\"width:150px\" src=\"http://pear.academy/wp-content/uploads/2016/07/1pear-1.png\">\r\n          </div>\r\n\r\n          <div class=\"title\">LOGIN TO YOUR ACCOUNT</div>\r\n\r\n          <form name=\"loginForm\" [formGroup]=\"loginForm\" novalidate>\r\n\r\n              <mat-form-field>\r\n                  <input matInput placeholder=\"Email\" formControlName=\"email\">\r\n                  <mat-error *ngIf=\"loginFormErrors.email.required\">\r\n                      Email is required\r\n                  </mat-error>\r\n                  <mat-error *ngIf=\"!loginFormErrors.email.required && loginFormErrors.email.email\">\r\n                      Please enter a valid email address\r\n                  </mat-error>\r\n              </mat-form-field>\r\n\r\n              <mat-form-field>\r\n                  <input matInput type=\"password\" placeholder=\"Password\" formControlName=\"password\">\r\n                  <mat-error *ngIf=\"loginFormErrors.password.required\">\r\n                      Password is required\r\n                  </mat-error>\r\n              </mat-form-field>\r\n\r\n              <div class=\"remember-forgot-password\" fxLayout=\"row\" fxLayout.xs=\"column\"\r\n                   fxLayoutAlign=\"space-between center\">\r\n                  <mat-checkbox class=\"remember-me\" aria-label=\"Remember Me\">\r\n                      Remember Me\r\n                  </mat-checkbox>\r\n\r\n                  <a class=\"forgot-password\" [routerLink]=\"'/pages/auth/forgot-password'\">\r\n                      Forgot Password?\r\n                  </a>\r\n              </div>\r\n\r\n              <button mat-raised-button color=\"accent\" class=\"submit-button\" aria-label=\"LOG IN\"\r\n                      [disabled]=\"loginForm.invalid\">\r\n                  LOGIN\r\n              </button>\r\n\r\n          </form>\r\n\r\n          <div class=\"separator\">\r\n              <span class=\"text\">OR</span>\r\n          </div>\r\n\r\n          <button mat-raised-button class=\"google\">\r\n              Log in with Google\r\n          </button>\r\n\r\n          <button mat-raised-button class=\"facebook\">\r\n              Log in with Facebook\r\n          </button>\r\n\r\n          <div class=\"register\" fxLayout=\"column\" fxLayoutAlign=\"center center\">\r\n              <span class=\"text\">Don't have an account?</span>\r\n              <a class=\"link\" [routerLink]=\"'/register'\">Create an account</a>\r\n          </div>\r\n\r\n      </div>\r\n\r\n  </div>\r\n\r\n</div>"

/***/ }),

/***/ "./src/app/login/login.component.scss":
/*!********************************************!*\
  !*** ./src/app/login/login.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host #login {\n  width: 100%;\n  overflow: auto; }\n  :host #login #login-form-wrapper {\n    -ms-flex: 1 0 auto;\n        flex: 1 0 auto;\n    padding: 32px; }\n  :host #login #login-form-wrapper #login-form {\n      width: 384px;\n      max-width: 384px;\n      padding: 32px;\n      background: #FFFFFF;\n      text-align: center; }\n  :host #login #login-form-wrapper #login-form .logo {\n        width: 128px;\n        margin: 32px auto; }\n  :host #login #login-form-wrapper #login-form .title {\n        font-size: 20px;\n        margin: 16px 0 32px 0; }\n  :host #login #login-form-wrapper #login-form form {\n        width: 100%;\n        text-align: left; }\n  :host #login #login-form-wrapper #login-form form mat-form-field {\n          width: 100%; }\n  :host #login #login-form-wrapper #login-form form mat-checkbox {\n          margin: 0; }\n  :host #login #login-form-wrapper #login-form form .remember-forgot-password {\n          font-size: 13px;\n          margin-top: 8px; }\n  :host #login #login-form-wrapper #login-form form .remember-forgot-password .remember-me {\n            margin-bottom: 16px; }\n  :host #login #login-form-wrapper #login-form form .remember-forgot-password .forgot-password {\n            font-size: 13px;\n            font-weight: 500;\n            margin-bottom: 16px; }\n  :host #login #login-form-wrapper #login-form form .submit-button {\n          width: 220px;\n          margin: 16px auto;\n          display: block; }\n  :host #login #login-form-wrapper #login-form .register {\n        margin: 32px auto 24px auto;\n        font-weight: 500; }\n  :host #login #login-form-wrapper #login-form .register .text {\n          margin-right: 8px; }\n  :host #login #login-form-wrapper #login-form .separator {\n        font-size: 15px;\n        font-weight: 600;\n        margin: 24px auto;\n        position: relative;\n        overflow: hidden;\n        width: 100px;\n        color: rgba(0, 0, 0, 0.54); }\n  :host #login #login-form-wrapper #login-form .separator .text {\n          display: -ms-inline-flexbox;\n          display: inline-flex;\n          position: relative;\n          padding: 0 8px;\n          z-index: 9999; }\n  :host #login #login-form-wrapper #login-form .separator .text:before, :host #login #login-form-wrapper #login-form .separator .text:after {\n            content: '';\n            display: block;\n            width: 30px;\n            position: absolute;\n            top: 10px;\n            border-top: 1px solid rgba(0, 0, 0, 0.12); }\n  :host #login #login-form-wrapper #login-form .separator .text:before {\n            right: 100%; }\n  :host #login #login-form-wrapper #login-form .separator .text:after {\n            left: 100%; }\n  :host #login #login-form-wrapper #login-form button.google, :host #login #login-form-wrapper #login-form button.facebook {\n        width: 192px;\n        text-transform: none;\n        color: #FFFFFF;\n        font-size: 13px; }\n  :host #login #login-form-wrapper #login-form button.google {\n        background-color: #D73D32;\n        margin-bottom: 8px; }\n  :host #login #login-form-wrapper #login-form button.facebook {\n        background-color: #3f5c9a; }\n"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LoginComponent = /** @class */ (function () {
    function LoginComponent(formBuilder) {
        this.formBuilder = formBuilder;
        this.loginFormErrors = {
            email: {},
            password: {}
        };
    }
    LoginComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.loginForm = this.formBuilder.group({
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email]],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        });
        this.loginForm.valueChanges.subscribe(function () {
            _this.onLoginFormValuesChanged();
        });
    };
    LoginComponent.prototype.onLoginFormValuesChanged = function () {
        for (var field in this.loginFormErrors) {
            if (!this.loginFormErrors.hasOwnProperty(field)) {
                continue;
            }
            // Clear previous errors
            this.loginFormErrors[field] = {};
            // Get the control
            var control = this.loginForm.get(field);
            if (control && control.dirty && !control.valid) {
                this.loginFormErrors[field] = control.errors;
            }
        }
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'pear-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.scss */ "./src/app/login/login.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/register/register.component.html":
/*!**************************************************!*\
  !*** ./src/app/register/register.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"register\" fxLayout=\"column\">\r\n\r\n    <div id=\"register-form-wrapper\" fxLayout=\"column\" fxLayoutAlign=\"center center\">\r\n\r\n        <div id=\"register-form\">\r\n\r\n            <div class=\"logo\">\r\n                <img style =\"width:150px\" src=\"http://pear.academy/wp-content/uploads/2016/07/1pear-1.png\">\r\n            </div>\r\n\r\n            <div class=\"title\">CREATE AN ACCOUNT</div>\r\n\r\n            <form name=\"registerForm\" [formGroup]=\"registerForm\" novalidate>\r\n\r\n                <mat-form-field>\r\n                    <input matInput placeholder=\"Name\" formControlName=\"name\">\r\n                    <mat-error *ngIf=\"registerFormErrors.name.required\">\r\n                        Name is required\r\n                    </mat-error>\r\n                </mat-form-field>\r\n\r\n                <mat-form-field>\r\n                    <input matInput placeholder=\"Email\" formControlName=\"email\">\r\n                    <mat-error *ngIf=\"registerFormErrors.email.required\">\r\n                        Email is required\r\n                    </mat-error>\r\n                    <mat-error *ngIf=\"!registerFormErrors.email.required && registerFormErrors.email.email\">\r\n                        Please enter a valid email address\r\n                    </mat-error>\r\n                </mat-form-field>\r\n\r\n                <mat-form-field>\r\n                    <input matInput type=\"password\" placeholder=\"Password\" formControlName=\"password\">\r\n                    <mat-error *ngIf=\"registerFormErrors.password.required\">\r\n                        Password is required\r\n                    </mat-error>\r\n                </mat-form-field>\r\n\r\n                <mat-form-field>\r\n                    <input matInput type=\"password\" placeholder=\"Password (Confirm)\" formControlName=\"passwordConfirm\">\r\n                    <mat-error *ngIf=\"registerFormErrors.passwordConfirm.required\">\r\n                        Password confirmation is required\r\n                    </mat-error>\r\n                    <mat-error *ngIf=\"registerFormErrors.passwordConfirm.passwordsNotMatch\">\r\n                        Passwords must match\r\n                    </mat-error>\r\n                </mat-form-field>\r\n\r\n                <div class=\"terms\" fxLayout=\"row\" fxLayoutAlign=\"center center\">\r\n                    <mat-checkbox name=\"terms\" aria-label=\"I read and accept\" required>\r\n                        <span>I read and accept</span>\r\n                    </mat-checkbox>\r\n                    <a href=\"#\">terms and conditions</a>\r\n                </div>\r\n\r\n                <button mat-raised-button color=\"accent\" class=\"submit-button\" aria-label=\"CREATE AN ACCOUNT\"\r\n                        [disabled]=\"registerForm.invalid\">\r\n                    CREATE AN ACCOUNT\r\n                </button>\r\n\r\n            </form>\r\n\r\n            <div class=\"register\" fxLayout=\"column\" fxLayoutAlign=\"center center\">\r\n                <span class=\"text\">Already have an account?</span>\r\n                <a class=\"link\" [routerLink]=\"'/login'\">Login</a>\r\n            </div>\r\n\r\n        </div>\r\n\r\n    </div>\r\n\r\n</div>"

/***/ }),

/***/ "./src/app/register/register.component.scss":
/*!**************************************************!*\
  !*** ./src/app/register/register.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host #register {\n  width: 100%;\n  overflow: auto;\n  background: url(\"https://github.com/munisravan/pear.academy/assets/images/backgrounds/dark-material-bg.jpg\") no-repeat;\n  background-size: cover; }\n  :host #register #register-form-wrapper {\n    -ms-flex: 1 0 auto;\n        flex: 1 0 auto;\n    padding: 32px; }\n  :host #register #register-form-wrapper #register-form {\n      width: 384px;\n      max-width: 384px;\n      padding: 32px;\n      background: #FFFFFF;\n      text-align: center; }\n  :host #register #register-form-wrapper #register-form .logo {\n        width: 128px;\n        margin: 32px auto; }\n  :host #register #register-form-wrapper #register-form .title {\n        font-size: 20px;\n        margin: 16px 0 32px 0; }\n  :host #register #register-form-wrapper #register-form form {\n        width: 100%;\n        text-align: left; }\n  :host #register #register-form-wrapper #register-form form mat-form-field {\n          width: 100%; }\n  :host #register #register-form-wrapper #register-form form mat-checkbox {\n          margin: 0; }\n  :host #register #register-form-wrapper #register-form form .terms {\n          margin: 16px 0 32px 0; }\n  :host #register #register-form-wrapper #register-form form .terms a {\n            font-size: 16px;\n            margin-left: 4px; }\n  :host #register #register-form-wrapper #register-form form .submit-button {\n          width: 220px;\n          margin: 16px auto;\n          display: block; }\n  :host #register #register-form-wrapper #register-form .register {\n        margin: 32px auto 24px auto;\n        font-weight: 500; }\n  :host #register #register-form-wrapper #register-form .register .text {\n          margin-right: 8px; }\n  :host #register #register-form-wrapper #register-form .separator {\n        font-size: 15px;\n        font-weight: 600;\n        margin: 24px auto;\n        position: relative;\n        overflow: hidden;\n        width: 100px;\n        color: rgba(0, 0, 0, 0.54); }\n  :host #register #register-form-wrapper #register-form .separator .text {\n          display: -ms-inline-flexbox;\n          display: inline-flex;\n          position: relative;\n          padding: 0 8px;\n          z-index: 9999; }\n  :host #register #register-form-wrapper #register-form .separator .text:before, :host #register #register-form-wrapper #register-form .separator .text:after {\n            content: '';\n            display: block;\n            width: 30px;\n            position: absolute;\n            top: 10px;\n            border-top: 1px solid rgba(0, 0, 0, 0.12); }\n  :host #register #register-form-wrapper #register-form .separator .text:before {\n            right: 100%; }\n  :host #register #register-form-wrapper #register-form .separator .text:after {\n            left: 100%; }\n  :host #register #register-form-wrapper #register-form button.google, :host #register #register-form-wrapper #register-form button.facebook {\n        width: 192px;\n        text-transform: none;\n        color: #FFFFFF;\n        font-size: 13px; }\n  :host #register #register-form-wrapper #register-form button.google {\n        background-color: #D73D32;\n        margin-bottom: 8px; }\n  :host #register #register-form-wrapper #register-form button.facebook {\n        background-color: #3f5c9a; }\n"

/***/ }),

/***/ "./src/app/register/register.component.ts":
/*!************************************************!*\
  !*** ./src/app/register/register.component.ts ***!
  \************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(formBuilder) {
        this.formBuilder = formBuilder;
        this.registerFormErrors = {
            name: {},
            email: {},
            password: {},
            passwordConfirm: {}
        };
    }
    RegisterComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.registerForm = this.formBuilder.group({
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email]],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            passwordConfirm: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, confirmPassword]]
        });
        this.registerForm.valueChanges.subscribe(function () {
            _this.onRegisterFormValuesChanged();
        });
    };
    RegisterComponent.prototype.onRegisterFormValuesChanged = function () {
        for (var field in this.registerFormErrors) {
            if (!this.registerFormErrors.hasOwnProperty(field)) {
                continue;
            }
            // Clear previous errors
            this.registerFormErrors[field] = {};
            // Get the control
            var control = this.registerForm.get(field);
            if (control && control.dirty && !control.valid) {
                this.registerFormErrors[field] = control.errors;
            }
        }
    };
    RegisterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'pear-register',
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.scss */ "./src/app/register/register.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]])
    ], RegisterComponent);
    return RegisterComponent;
}());

function confirmPassword(control) {
    if (!control.parent || !control) {
        return;
    }
    var password = control.parent.get('password');
    var passwordConfirm = control.parent.get('passwordConfirm');
    if (!password || !passwordConfirm) {
        return;
    }
    if (passwordConfirm.value === '') {
        return;
    }
    if (password.value !== passwordConfirm.value) {
        return {
            passwordsNotMatch: true
        };
    }
}


/***/ }),

/***/ "./src/app/settings/index.ts":
/*!***********************************!*\
  !*** ./src/app/settings/index.ts ***!
  \***********************************/
/*! exports provided: SettingsModule, SETTINGS_KEY, SettingsActionTypes, ActionSettingsChangeTheme, ActionSettingsChangeAutoNightMode, ActionSettingsPersist, NIGHT_MODE_THEME, initialState, selectorSettings, settingsReducer, SettingsEffects, SettingsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _settings_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./settings.module */ "./src/app/settings/settings.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SettingsModule", function() { return _settings_module__WEBPACK_IMPORTED_MODULE_0__["SettingsModule"]; });

/* harmony import */ var _settings_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./settings.reducer */ "./src/app/settings/settings.reducer.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SETTINGS_KEY", function() { return _settings_reducer__WEBPACK_IMPORTED_MODULE_1__["SETTINGS_KEY"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SettingsActionTypes", function() { return _settings_reducer__WEBPACK_IMPORTED_MODULE_1__["SettingsActionTypes"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ActionSettingsChangeTheme", function() { return _settings_reducer__WEBPACK_IMPORTED_MODULE_1__["ActionSettingsChangeTheme"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ActionSettingsChangeAutoNightMode", function() { return _settings_reducer__WEBPACK_IMPORTED_MODULE_1__["ActionSettingsChangeAutoNightMode"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ActionSettingsPersist", function() { return _settings_reducer__WEBPACK_IMPORTED_MODULE_1__["ActionSettingsPersist"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NIGHT_MODE_THEME", function() { return _settings_reducer__WEBPACK_IMPORTED_MODULE_1__["NIGHT_MODE_THEME"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return _settings_reducer__WEBPACK_IMPORTED_MODULE_1__["initialState"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectorSettings", function() { return _settings_reducer__WEBPACK_IMPORTED_MODULE_1__["selectorSettings"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "settingsReducer", function() { return _settings_reducer__WEBPACK_IMPORTED_MODULE_1__["settingsReducer"]; });

/* harmony import */ var _settings_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./settings.effects */ "./src/app/settings/settings.effects.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SettingsEffects", function() { return _settings_effects__WEBPACK_IMPORTED_MODULE_2__["SettingsEffects"]; });

/* harmony import */ var _settings_settings_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./settings/settings.component */ "./src/app/settings/settings/settings.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SettingsComponent", function() { return _settings_settings_component__WEBPACK_IMPORTED_MODULE_3__["SettingsComponent"]; });







/***/ }),

/***/ "./src/app/settings/settings.effects.ts":
/*!**********************************************!*\
  !*** ./src/app/settings/settings.effects.ts ***!
  \**********************************************/
/*! exports provided: SettingsEffects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsEffects", function() { return SettingsEffects; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm5/effects.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _app_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/core */ "./src/app/core/index.ts");
/* harmony import */ var _settings_reducer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./settings.reducer */ "./src/app/settings/settings.reducer.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var SettingsEffects = /** @class */ (function () {
    function SettingsEffects(actions$, localStorageService) {
        this.actions$ = actions$;
        this.localStorageService = localStorageService;
    }
    SettingsEffects.prototype.persistSettings = function () {
        var _this = this;
        return this.actions$
            .ofType(_settings_reducer__WEBPACK_IMPORTED_MODULE_5__["SettingsActionTypes"].PERSIST)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (action) {
            return _this.localStorageService.setItem(_settings_reducer__WEBPACK_IMPORTED_MODULE_5__["SETTINGS_KEY"], action.payload.settings);
        }));
    };
    __decorate([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Effect"])({ dispatch: false }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"])
    ], SettingsEffects.prototype, "persistSettings", null);
    SettingsEffects = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Actions"],
            _app_core__WEBPACK_IMPORTED_MODULE_4__["LocalStorageService"]])
    ], SettingsEffects);
    return SettingsEffects;
}());



/***/ }),

/***/ "./src/app/settings/settings.module.ts":
/*!*********************************************!*\
  !*** ./src/app/settings/settings.module.ts ***!
  \*********************************************/
/*! exports provided: SettingsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsModule", function() { return SettingsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm5/effects.js");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared */ "./src/app/shared/index.ts");
/* harmony import */ var _settings_reducer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./settings.reducer */ "./src/app/settings/settings.reducer.ts");
/* harmony import */ var _settings_effects__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./settings.effects */ "./src/app/settings/settings.effects.ts");
/* harmony import */ var _settings_settings_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./settings/settings.component */ "./src/app/settings/settings/settings.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var SettingsModule = /** @class */ (function () {
    function SettingsModule() {
    }
    SettingsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _shared__WEBPACK_IMPORTED_MODULE_3__["SharedModule"],
                _ngrx_store__WEBPACK_IMPORTED_MODULE_1__["StoreModule"].forFeature('settings', _settings_reducer__WEBPACK_IMPORTED_MODULE_4__["settingsReducer"]),
                _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["EffectsModule"].forFeature([_settings_effects__WEBPACK_IMPORTED_MODULE_5__["SettingsEffects"]])
            ],
            declarations: [_settings_settings_component__WEBPACK_IMPORTED_MODULE_6__["SettingsComponent"]]
        })
    ], SettingsModule);
    return SettingsModule;
}());



/***/ }),

/***/ "./src/app/settings/settings.reducer.ts":
/*!**********************************************!*\
  !*** ./src/app/settings/settings.reducer.ts ***!
  \**********************************************/
/*! exports provided: SETTINGS_KEY, SettingsActionTypes, ActionSettingsChangeTheme, ActionSettingsChangeAutoNightMode, ActionSettingsPersist, NIGHT_MODE_THEME, initialState, selectorSettings, settingsReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SETTINGS_KEY", function() { return SETTINGS_KEY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsActionTypes", function() { return SettingsActionTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActionSettingsChangeTheme", function() { return ActionSettingsChangeTheme; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActionSettingsChangeAutoNightMode", function() { return ActionSettingsChangeAutoNightMode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActionSettingsPersist", function() { return ActionSettingsPersist; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NIGHT_MODE_THEME", function() { return NIGHT_MODE_THEME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectorSettings", function() { return selectorSettings; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "settingsReducer", function() { return settingsReducer; });
var __assign = (undefined && undefined.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var SETTINGS_KEY = 'SETTINGS';
var SettingsActionTypes;
(function (SettingsActionTypes) {
    SettingsActionTypes["CHANGE_THEME"] = "[Settings] Change Theme";
    SettingsActionTypes["CHANGE_AUTO_NIGHT_AUTO_MODE"] = "[Settings] Change Auto Night Mode";
    SettingsActionTypes["PERSIST"] = "[Settings] Persist";
})(SettingsActionTypes || (SettingsActionTypes = {}));
var ActionSettingsChangeTheme = /** @class */ (function () {
    function ActionSettingsChangeTheme(payload) {
        this.payload = payload;
        this.type = SettingsActionTypes.CHANGE_THEME;
    }
    return ActionSettingsChangeTheme;
}());

var ActionSettingsChangeAutoNightMode = /** @class */ (function () {
    function ActionSettingsChangeAutoNightMode(payload) {
        this.payload = payload;
        this.type = SettingsActionTypes.CHANGE_AUTO_NIGHT_AUTO_MODE;
    }
    return ActionSettingsChangeAutoNightMode;
}());

var ActionSettingsPersist = /** @class */ (function () {
    function ActionSettingsPersist(payload) {
        this.payload = payload;
        this.type = SettingsActionTypes.PERSIST;
    }
    return ActionSettingsPersist;
}());

var NIGHT_MODE_THEME = 'BLACK-THEME';
var initialState = {
    theme: 'DEFAULT-THEME',
    autoNightMode: false
};
var selectorSettings = function (state) {
    return (state.settings || { theme: '' });
};
function settingsReducer(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case SettingsActionTypes.CHANGE_THEME:
            return __assign({}, state, { theme: action.payload.theme });
        case SettingsActionTypes.CHANGE_AUTO_NIGHT_AUTO_MODE:
            return __assign({}, state, { autoNightMode: action.payload.autoNightMode });
        default:
            return state;
    }
}


/***/ }),

/***/ "./src/app/settings/settings/settings.component.html":
/*!***********************************************************!*\
  !*** ./src/app/settings/settings/settings.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <div class=\"row\">\r\n    <div class=\"col-sm-12\"><h1>Settings</h1></div>\r\n  </div>\r\n  <br>\r\n  <div class=\"row\">\r\n    <div class=\"col-md-6 icon-form-field\">\r\n      <mat-icon color=\"accent\">color_lens</mat-icon>\r\n      <mat-form-field>\r\n        <mat-select placeholder=\"Color theme\"\r\n                    name=\"theme\"\r\n                    [ngModel]=\"settings?.theme\"\r\n                    (selectionChange)=\"onThemeSelect($event)\">\r\n          <mat-option *ngFor=\"let t of themes\" [value]=\"t.value\">\r\n            {{t.label}}\r\n          </mat-option>\r\n        </mat-select>\r\n      </mat-form-field>\r\n    </div>\r\n    <div class=\"col-md-6 icon-form-field\">\r\n      <mat-icon color=\"accent\">lightbulb_outline</mat-icon>\r\n      <mat-form-field>\r\n        <mat-select placeholder=\"Auto night mode (from 21:00 to 7:00)\"\r\n                    name=\"auto-night-mode\"\r\n                    [ngModel]=\"settings?.autoNightMode?.toString()\"\r\n                    (selectionChange)=\"onAutoNightModeSelect($event)\">\r\n          <mat-option value=\"false\">Off</mat-option>\r\n          <mat-option value=\"true\">On</mat-option>\r\n        </mat-select>\r\n      </mat-form-field>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/settings/settings/settings.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/settings/settings/settings.component.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n  margin-top: 20px; }\n\nh1 {\n  margin: 0 0 20px 0;\n  text-transform: uppercase; }\n\n.icon-form-field {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-align: center;\n      align-items: center; }\n\nmat-icon {\n  margin: 0 10px 0 0; }\n\nmat-form-field {\n  -ms-flex: 1 0 auto;\n      flex: 1 0 auto; }\n"

/***/ }),

/***/ "./src/app/settings/settings/settings.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/settings/settings/settings.component.ts ***!
  \*********************************************************/
/*! exports provided: SettingsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsComponent", function() { return SettingsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _settings_reducer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../settings.reducer */ "./src/app/settings/settings.reducer.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SettingsComponent = /** @class */ (function () {
    function SettingsComponent(store) {
        var _this = this;
        this.store = store;
        this.unsubscribe$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.themes = [
            { value: 'DEFAULT-THEME', label: 'Blue' },
            { value: 'LIGHT-THEME', label: 'Light' },
            { value: 'NATURE-THEME', label: 'Nature' },
            { value: 'BLACK-THEME', label: 'Dark' }
        ];
        store
            .select(_settings_reducer__WEBPACK_IMPORTED_MODULE_4__["selectorSettings"])
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this.unsubscribe$))
            .subscribe(function (settings) { return (_this.settings = settings); });
    }
    SettingsComponent.prototype.ngOnInit = function () { };
    SettingsComponent.prototype.ngOnDestroy = function () {
        this.unsubscribe$.next();
        this.unsubscribe$.complete();
    };
    SettingsComponent.prototype.onThemeSelect = function (_a) {
        var theme = _a.value;
        this.store.dispatch(new _settings_reducer__WEBPACK_IMPORTED_MODULE_4__["ActionSettingsChangeTheme"]({ theme: theme }));
        this.store.dispatch(new _settings_reducer__WEBPACK_IMPORTED_MODULE_4__["ActionSettingsPersist"]({ settings: this.settings }));
    };
    SettingsComponent.prototype.onAutoNightModeSelect = function (_a) {
        var autoNightMode = _a.value;
        this.store.dispatch(new _settings_reducer__WEBPACK_IMPORTED_MODULE_4__["ActionSettingsChangeAutoNightMode"]({
            autoNightMode: autoNightMode === 'true'
        }));
        this.store.dispatch(new _settings_reducer__WEBPACK_IMPORTED_MODULE_4__["ActionSettingsPersist"]({ settings: this.settings }));
    };
    SettingsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'pear-settings',
            template: __webpack_require__(/*! ./settings.component.html */ "./src/app/settings/settings/settings.component.html"),
            styles: [__webpack_require__(/*! ./settings.component.scss */ "./src/app/settings/settings/settings.component.scss")]
        }),
        __metadata("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"]])
    ], SettingsComponent);
    return SettingsComponent;
}());



/***/ }),

/***/ "./src/app/shared/big-input/big-input-action.component.html":
/*!******************************************************************!*\
  !*** ./src/app/shared/big-input/big-input-action.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<button mat-raised-button color=\"color\" [disabled]=\"disabled\" (click)=\"onClick()\">\r\n  <mat-icon *ngIf=\"icon\">{{icon}}</mat-icon>\r\n  <span *ngIf=\"label\">{{label}}</span>\r\n</button>\r\n"

/***/ }),

/***/ "./src/app/shared/big-input/big-input-action.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/shared/big-input/big-input-action.component.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "button {\n  padding: 0;\n  min-width: 36px;\n  margin-left: 10px; }\n"

/***/ }),

/***/ "./src/app/shared/big-input/big-input-action.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/shared/big-input/big-input-action.component.ts ***!
  \****************************************************************/
/*! exports provided: BigInputActionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BigInputActionComponent", function() { return BigInputActionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BigInputActionComponent = /** @class */ (function () {
    function BigInputActionComponent() {
        this.disabled = false;
        this.icon = '';
        this.label = '';
        this.color = '';
        this.action = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.hasFocus = false;
    }
    BigInputActionComponent.prototype.onClick = function () {
        this.action.emit();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], BigInputActionComponent.prototype, "disabled", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], BigInputActionComponent.prototype, "icon", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], BigInputActionComponent.prototype, "label", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], BigInputActionComponent.prototype, "color", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], BigInputActionComponent.prototype, "action", void 0);
    BigInputActionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'pear-big-input-action',
            template: __webpack_require__(/*! ./big-input-action.component.html */ "./src/app/shared/big-input/big-input-action.component.html"),
            styles: [__webpack_require__(/*! ./big-input-action.component.scss */ "./src/app/shared/big-input/big-input-action.component.scss")],
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
        })
    ], BigInputActionComponent);
    return BigInputActionComponent;
}());



/***/ }),

/***/ "./src/app/shared/big-input/big-input.component.html":
/*!***********************************************************!*\
  !*** ./src/app/shared/big-input/big-input.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card class=\"big-input\" [ngClass]=\"{ 'has-focus': hasFocus }\">\r\n  <input (focus)=\"hasFocus = true\" (blur)=\"hasFocus = false\"\r\n         [value]=\"value\"\r\n         [placeholder]=\"placeholder\"\r\n         [disabled]=\"disabled\" />\r\n  <ng-content></ng-content>\r\n</mat-card>\r\n"

/***/ }),

/***/ "./src/app/shared/big-input/big-input.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/shared/big-input/big-input.component.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".big-input {\n  width: 100%;\n  transition: all 0.5s;\n  display: -ms-flexbox;\n  display: flex;\n  padding: 10px 10px 10px 20px; }\n  .big-input input {\n    -ms-flex-positive: 1;\n        flex-grow: 1;\n    border: 0;\n    font-size: 20px;\n    min-width: 100px; }\n"

/***/ }),

/***/ "./src/app/shared/big-input/big-input.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/shared/big-input/big-input.component.ts ***!
  \*********************************************************/
/*! exports provided: BigInputComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BigInputComponent", function() { return BigInputComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BigInputComponent = /** @class */ (function () {
    function BigInputComponent() {
        this.value = '';
        this.disabled = false;
        this.hasFocus = false;
    }
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], BigInputComponent.prototype, "placeholder", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], BigInputComponent.prototype, "value", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], BigInputComponent.prototype, "disabled", void 0);
    BigInputComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'pear-big-input',
            template: __webpack_require__(/*! ./big-input.component.html */ "./src/app/shared/big-input/big-input.component.html"),
            styles: [__webpack_require__(/*! ./big-input.component.scss */ "./src/app/shared/big-input/big-input.component.scss")],
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
        })
    ], BigInputComponent);
    return BigInputComponent;
}());



/***/ }),

/***/ "./src/app/shared/index.ts":
/*!*********************************!*\
  !*** ./src/app/shared/index.ts ***!
  \*********************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shared.module */ "./src/app/shared/shared.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return _shared_module__WEBPACK_IMPORTED_MODULE_0__["SharedModule"]; });




/***/ }),

/***/ "./src/app/shared/shared.module.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm5/button.es5.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/esm5/toolbar.es5.js");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/menu */ "./node_modules/@angular/material/esm5/menu.es5.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/esm5/select.es5.js");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/tabs */ "./node_modules/@angular/material/esm5/tabs.es5.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm5/input.es5.js");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/progress-spinner */ "./node_modules/@angular/material/esm5/progress-spinner.es5.js");
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/chips */ "./node_modules/@angular/material/esm5/chips.es5.js");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/sidenav */ "./node_modules/@angular/material/esm5/sidenav.es5.js");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/checkbox */ "./node_modules/@angular/material/esm5/checkbox.es5.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/esm5/card.es5.js");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/esm5/list.es5.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm5/icon.es5.js");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/tooltip */ "./node_modules/@angular/material/esm5/tooltip.es5.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/esm5/snack-bar.es5.js");
/* harmony import */ var _big_input_big_input_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./big-input/big-input.component */ "./src/app/shared/big-input/big-input.component.ts");
/* harmony import */ var _big_input_big_input_action_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./big-input/big-input-action.component */ "./src/app/shared/big-input/big-input-action.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




















var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
                _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_4__["MatToolbarModule"],
                _angular_material_select__WEBPACK_IMPORTED_MODULE_6__["MatSelectModule"],
                _angular_material_tabs__WEBPACK_IMPORTED_MODULE_7__["MatTabsModule"],
                _angular_material_input__WEBPACK_IMPORTED_MODULE_8__["MatInputModule"],
                _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_9__["MatProgressSpinnerModule"],
                _angular_material_chips__WEBPACK_IMPORTED_MODULE_10__["MatChipsModule"],
                _angular_material_card__WEBPACK_IMPORTED_MODULE_13__["MatCardModule"],
                _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_11__["MatSidenavModule"],
                _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_12__["MatCheckboxModule"],
                _angular_material_list__WEBPACK_IMPORTED_MODULE_14__["MatListModule"],
                _angular_material_menu__WEBPACK_IMPORTED_MODULE_5__["MatMenuModule"],
                _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__["MatIconModule"],
                _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_16__["MatTooltipModule"],
                _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_17__["MatSnackBarModule"]
            ],
            declarations: [_big_input_big_input_component__WEBPACK_IMPORTED_MODULE_18__["BigInputComponent"], _big_input_big_input_action_component__WEBPACK_IMPORTED_MODULE_19__["BigInputActionComponent"]],
            exports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
                _angular_material_menu__WEBPACK_IMPORTED_MODULE_5__["MatMenuModule"],
                _angular_material_tabs__WEBPACK_IMPORTED_MODULE_7__["MatTabsModule"],
                _angular_material_chips__WEBPACK_IMPORTED_MODULE_10__["MatChipsModule"],
                _angular_material_input__WEBPACK_IMPORTED_MODULE_8__["MatInputModule"],
                _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_9__["MatProgressSpinnerModule"],
                _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_12__["MatCheckboxModule"],
                _angular_material_card__WEBPACK_IMPORTED_MODULE_13__["MatCardModule"],
                _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_11__["MatSidenavModule"],
                _angular_material_list__WEBPACK_IMPORTED_MODULE_14__["MatListModule"],
                _angular_material_select__WEBPACK_IMPORTED_MODULE_6__["MatSelectModule"],
                _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_4__["MatToolbarModule"],
                _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__["MatIconModule"],
                _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_16__["MatTooltipModule"],
                _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_17__["MatSnackBarModule"],
                _big_input_big_input_component__WEBPACK_IMPORTED_MODULE_18__["BigInputComponent"],
                _big_input_big_input_action_component__WEBPACK_IMPORTED_MODULE_19__["BigInputActionComponent"]
            ]
        })
    ], SharedModule);
    return SharedModule;
}());



/***/ }),

/***/ "./src/app/static/about/about.component.html":
/*!***************************************************!*\
  !*** ./src/app/static/about/about.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section id=\"content\" class=\"column onecol\">\r\n    <article class=\"post-14 page type-page status-publish hentry column onecol\" id=\"post-14\">\r\n<div class=\"entry\">\r\n\r\n  <header class=\"entry-header\">\r\n    <h1 class=\"entry-title\">ABOUT US</h1>\r\n  </header><!-- .entry-header -->\r\n  <div class=\"entry-content\">\r\n                  <h4 style=\"text-align: center;\"><span style=\"color: #01a777;\"><strong>Bridge the gap in soft skills and Employability </strong></span></h4>\r\n<p><span style=\"color: #000000;\"> Welcome to PEAR Academy Australia! PEAR is short for ‘Professional Education Academic Requirement’.</span></p>\r\n<p>PEAR Educators are experienced professionals having worked many years in the Health Science, Higher Education, Vocational, and Secondary Education sectors as educators and coaches. We have therefore a keen appreciation and understanding of the needs of students looking to improve their English language proficiency.</p>\r\n<p>The aim of PEAR’s coaching program is simple: students who undertake the course and complete it must be exceptionally well prepared to sit with confidence for the OET/PTE/IELTS examinations and succeed.</p>\r\n<p>The importance of the academic learning in the English language specific for use in the corporate world and the Health sector cannot be over-emphasised. We also teach you the etiquette that is necessary to build a career in foreign lands. The program is highly interactive involving group activities and in-class presentations. All of these activities are designed to help you gain confidence in improving your communication skills that will have a positive impact on your education journey and also assist you in successfully integrating into the work environment.</p>\r\n<p>We have pleasure in welcoming you on board. It is our aim to help all our students achieve their desired goal of enhancing their proficiency in all the four components of the English language; Reading, Writing, Listening and Speaking in order to successfully sit for and pass the IELTS/OET/PTE examinations for visa and immigration purposes.<br>\r\n</p>\r\n<p>Feedback from higher education academia, industry sectors, multicultural groups and international students laid the foundation for the development of course content. Our team of specialists collaborated to create programs based on the optimum methods of instruction and delivery to meet the individual needs.</p>\r\n<p>PEAR coaching will:</p>\r\n<ul>\r\n<li>Prepare you for OET/IELTS/PTE</li>\r\n<li>Lead to graduation success</li>\r\n<li>Increase productivity and performance</li>\r\n<li>Heighten professional development &amp; career prospects</li>\r\n<li>Help you to achieve your objective of obtaining registration and visa</li>\r\n</ul>\r\n    <div class=\"clear\"></div>\r\n  <!-- .entry-content -->\r\n            </div><!-- .entry -->\r\n\r\n\r\n</div></article><!-- .post -->\r\n</section>"

/***/ }),

/***/ "./src/app/static/about/about.component.scss":
/*!***************************************************!*\
  !*** ./src/app/static/about/about.component.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h1 {\n  text-align: center;\n  font-size: 3em;\n  text-transform: uppercase; }\n\nh2 {\n  font-size: 1.5em;\n  text-transform: uppercase; }\n\n.background {\n  padding: 80px 0 0 0;\n  position: relative; }\n\n.background .actions {\n    text-align: center;\n    margin: 50px;\n    z-index: 1; }\n\n.background .actions span {\n      display: inline-block;\n      font-weight: bold;\n      padding: 20px 10px 30px 10px; }\n\n.background .actions a {\n      margin: 0 5px 10px 0; }\n\n.background .actions a.actions-main {\n        text-transform: uppercase;\n        padding: 3px 24px; }\n\n.background .actions a i {\n        position: relative;\n        top: -1px; }\n\n.background .get-started {\n    max-width: 700px;\n    margin: 50px auto;\n    letter-spacing: 0.01px;\n    overflow-wrap: break-word;\n    z-index: 1;\n    overflow: hidden; }\n\n.background .get-started code {\n      font-size: 0.9em;\n      display: inline-block;\n      word-wrap: break-word;\n      white-space: normal;\n      margin: 0 0 10px 0; }\n\n.background::before {\n    position: absolute;\n    top: 0;\n    left: 0;\n    bottom: 0;\n    right: 0;\n    background: url('intro.jpg') no-repeat center top;\n    background-size: cover;\n    opacity: 0.7;\n    content: '';\n    z-index: 0; }\n\n.background .gradient::before {\n    position: absolute;\n    top: 50%;\n    left: 0;\n    bottom: 0;\n    right: 0;\n    content: '';\n    z-index: 0; }\n\n.background .container {\n    position: relative; }\n\n.follow-releases {\n  max-width: 700px;\n  margin: 0 auto 80px auto; }\n\n.follow-releases p {\n    line-height: 40px; }\n\n.follow-releases p a {\n      border-bottom: 3px solid; }\n\n.follow-releases img {\n    display: block;\n    max-width: 80%;\n    margin: 20px auto 0 auto;\n    border-radius: 5px;\n    box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12); }\n\n@media (max-width: 768px) {\n  .background .actions {\n    margin: 50px 0; }\n  .background .get-started {\n    width: auto; }\n  .follow-releases {\n    width: auto; }\n    .follow-releases img {\n      max-width: 100%; } }\n\n@media (max-width: 576px) {\n  .background {\n    padding: 40px 0 0 0; }\n    .background h1 {\n      line-height: 1em; }\n    .background .actions {\n      margin: 40px 0 0 0; }\n      .background .actions span {\n        padding: 10px 0 20px 0; }\n      .background .actions a {\n        width: 100%; }\n    .background .get-started {\n      width: auto;\n      margin: 40px auto 40px auto; }\n  .follow-releases {\n    margin: 0 auto 40px auto; } }\n"

/***/ }),

/***/ "./src/app/static/about/about.component.ts":
/*!*************************************************!*\
  !*** ./src/app/static/about/about.component.ts ***!
  \*************************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app/core */ "./src/app/core/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AboutComponent = /** @class */ (function () {
    function AboutComponent() {
        this.animateOnRouteEnter = _app_core__WEBPACK_IMPORTED_MODULE_1__["ANIMATE_ON_ROUTE_ENTER"];
        this.releaseButler = __webpack_require__(/*! ../../../assets/release-butler.png */ "./src/assets/release-butler.png");
    }
    AboutComponent.prototype.ngOnInit = function () { };
    AboutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'pear-about',
            template: __webpack_require__(/*! ./about.component.html */ "./src/app/static/about/about.component.html"),
            styles: [__webpack_require__(/*! ./about.component.scss */ "./src/app/static/about/about.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], AboutComponent);
    return AboutComponent;
}());



/***/ }),

/***/ "./src/app/static/features/features.component.html":
/*!*********************************************************!*\
  !*** ./src/app/static/features/features.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <div class=\"row\">\r\n    <div class=\"col-md-12\">\r\n      <h1 class=\"main-heading\">Features</h1>\r\n    </div>\r\n  </div>\r\n  <div class=\"row align-items-end\">\r\n    <div  class=\"col-md-6 col-lg-4\" [ngClass]=\"animateOnRouteEnter\">\r\n      <mat-card>\r\n        <mat-card-title><code>{{versions.angular}}</code>Angular</mat-card-title>\r\n        <mat-card-subtitle>\r\n          Modern powerful framework\r\n        </mat-card-subtitle>\r\n        <mat-card-actions>\r\n          <a mat-button href=\"https://angular.io/docs/ts/latest/\" target=\"_blank\">\r\n            <i class=\"fa fa-book fa-lg\"></i> Docs\r\n          </a>\r\n          <a mat-button href=\"https://github.com/angular/angular\" target=\"_blank\">\r\n            <i class=\"fa fa-github fa-lg\"></i> Github\r\n          </a>\r\n        </mat-card-actions>\r\n      </mat-card>\r\n    </div>\r\n    <div  class=\"col-md-6 col-lg-4\" [ngClass]=\"animateOnRouteEnter\">\r\n      <mat-card>\r\n        <mat-card-title><code>{{versions.material}}</code>Angular Material</mat-card-title>\r\n        <mat-card-subtitle>\r\n          Material design component library\r\n        </mat-card-subtitle>\r\n        <mat-card-actions>\r\n          <a mat-button href=\"https://material.angular.io/\" target=\"_blank\">\r\n            <i class=\"fa fa-book fa-lg\"></i> Docs\r\n          </a>\r\n          <a mat-button href=\"https://github.com/angular/material2/\" target=\"_blank\">\r\n            <i class=\"fa fa-github fa-lg\"></i> Github\r\n          </a>\r\n        </mat-card-actions>\r\n      </mat-card>\r\n    </div>\r\n    <div  class=\"col-md-6 col-lg-4\" [ngClass]=\"animateOnRouteEnter\">\r\n      <mat-card>\r\n        <mat-card-title><code>{{versions.angularCli}}</code>Angular Cli</mat-card-title>\r\n        <mat-card-subtitle>\r\n          Responsive layout from battle tested, world most famous UI library\r\n        </mat-card-subtitle>\r\n        <mat-card-actions>\r\n          <a mat-button href=\"https://github.com/angular/angular-cli/wiki/generate\" target=\"_blank\">\r\n            <i class=\"fa fa-book fa-lg\"></i> Docs\r\n          </a>\r\n          <a mat-button href=\"https://github.com/angular/angular-cli\" target=\"_blank\">\r\n            <i class=\"fa fa-github fa-lg\"></i> Github\r\n          </a>\r\n        </mat-card-actions>\r\n      </mat-card>\r\n    </div>\r\n    <div  class=\"col-md-6 col-lg-4\" [ngClass]=\"animateOnRouteEnter\">\r\n      <mat-card>\r\n        <mat-card-title><code>{{versions.ngrx}}</code>ngRx</mat-card-title>\r\n        <mat-card-subtitle>\r\n          One way data flow powered by RxJS Observables\r\n        </mat-card-subtitle>\r\n        <mat-card-actions>\r\n          <a mat-button href=\"https://github.com/ngrx/platform\" target=\"_blank\">\r\n            <i class=\"fa fa-github fa-lg\"></i> Github\r\n          </a>\r\n          <a mat-button href=\"https://github.com/ngrx/effects/blob/master/docs/testing.md\" target=\"_blank\">\r\n            <i class=\"fa fa-code fa-lg\"></i> Testing\r\n          </a>\r\n        </mat-card-actions>\r\n      </mat-card>\r\n    </div>\r\n    <div  class=\"col-md-6 col-lg-4\" [ngClass]=\"animateOnRouteEnter\">\r\n      <mat-card>\r\n        <mat-card-title><code>{{versions.rxjs}}</code>RxJS</mat-card-title>\r\n        <mat-card-subtitle>\r\n          Reactive programming with async collections using Observables.\r\n        </mat-card-subtitle>\r\n        <mat-card-actions>\r\n          <a mat-button href=\"http://reactivex.io/rxjs/\" target=\"_blank\">\r\n            <i class=\"fa fa-book fa-lg\"></i> Docs\r\n          </a>\r\n          <a mat-button href=\"https://github.com/ReactiveX/RxJS\" target=\"_blank\">\r\n            <i class=\"fa fa-github fa-lg\"></i> Github\r\n          </a>\r\n        </mat-card-actions>\r\n      </mat-card>\r\n    </div>\r\n    <div  class=\"col-md-6 col-lg-4\" [ngClass]=\"animateOnRouteEnter\">\r\n      <mat-card>\r\n        <mat-card-title><code>{{versions.bootstrap}}</code>Bootstrap</mat-card-title>\r\n        <mat-card-subtitle>\r\n          Responsive layout from battle tested, world most famous UI library\r\n        </mat-card-subtitle>\r\n        <mat-card-actions>\r\n          <a mat-button href=\"https://v4-alpha.getbootstrap.com/layout/grid/\" target=\"_blank\">\r\n            <i class=\"fa fa-book fa-lg\"></i> Docs\r\n          </a>\r\n          <a mat-button href=\"https://github.com/twbs/bootstrap\" target=\"_blank\">\r\n            <i class=\"fa fa-github fa-lg\"></i> Github\r\n          </a>\r\n        </mat-card-actions>\r\n      </mat-card>\r\n    </div>\r\n    <div  class=\"col-md-6 col-lg-4\" [ngClass]=\"animateOnRouteEnter\">\r\n      <mat-card>\r\n        <mat-card-title><code>{{versions.typescript}}</code> Typescript</mat-card-title>\r\n        <mat-card-subtitle>Superior developer experience, code completion, refactoring and less bugs</mat-card-subtitle>\r\n        <mat-card-actions>\r\n          <a mat-button href=\"https://github.com/Microsoft/TypeScript\" target=\"_blank\">\r\n            <i class=\"fa fa-github fa-lg\"></i> Github\r\n          </a>\r\n          <a mat-button href=\"https://www.typescriptlang.org/docs/home.html\" target=\"_blank\">\r\n            <i class=\"fa fa-book fa-lg\"></i> Docs\r\n          </a>\r\n        </mat-card-actions>\r\n      </mat-card>\r\n    </div>\r\n    <div  class=\"col-md-6 col-lg-4\" [ngClass]=\"animateOnRouteEnter\">\r\n      <mat-card>\r\n        <mat-card-title>Themes</mat-card-title>\r\n        <mat-card-subtitle>Flexible theming support for provided and custom components</mat-card-subtitle>\r\n        <mat-card-actions>\r\n          <a mat-button href=\"https://material.angular.io/guide/theming\" target=\"_blank\">\r\n            <i class=\"fa fa-book fa-lg\"></i> Docs\r\n          </a>\r\n          <a mat-button href=\"https://medium.com/@tomastrajan/the-complete-guide-to-angular-material-themes-4d165a9d24d1\" target=\"_blank\">\r\n            <i class=\"fa fa-medium fa-lg\"></i> Blog\r\n          </a>\r\n        </mat-card-actions>\r\n      </mat-card>\r\n    </div>\r\n    <div  class=\"col-md-6 col-lg-4\" [ngClass]=\"animateOnRouteEnter\">\r\n      <mat-card>\r\n        <mat-card-title>Lazy loading</mat-card-title>\r\n        <mat-card-subtitle>Faster startup time with lazy loaded feature modules</mat-card-subtitle>\r\n        <mat-card-actions>\r\n          <a mat-button href=\"https://angular.io/docs/ts/latest/guide/router.html#!#lazy-loading-route-config\" target=\"_blank\">\r\n            <i class=\"fa fa-book fa-lg\"></i> Docs\r\n          </a>\r\n        </mat-card-actions>\r\n      </mat-card>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/static/features/features.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/static/features/features.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n  margin-top: 20px; }\n\n.main-heading {\n  text-transform: uppercase;\n  margin: 0 0 20px 0; }\n\nmat-card {\n  margin: 0 0 20px 0; }\n\nmat-card mat-card-title {\n    position: relative; }\n\nmat-card mat-card-title code {\n      position: absolute;\n      top: 11px;\n      right: 0;\n      float: right;\n      font-size: 10px; }\n\nmat-card mat-card-subtitle {\n    min-height: 60px; }\n\n@media (max-width: 576px) {\n    mat-card mat-card-subtitle {\n      min-height: auto; } }\n\nmat-card a i {\n    position: relative;\n    top: -1px;\n    left: -3px; }\n"

/***/ }),

/***/ "./src/app/static/features/features.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/static/features/features.component.ts ***!
  \*******************************************************/
/*! exports provided: FeaturesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeaturesComponent", function() { return FeaturesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _env_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @env/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/core */ "./src/app/core/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var FeaturesComponent = /** @class */ (function () {
    function FeaturesComponent() {
        this.animateOnRouteEnter = _app_core__WEBPACK_IMPORTED_MODULE_2__["ANIMATE_ON_ROUTE_ENTER"];
        this.versions = _env_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].versions;
    }
    FeaturesComponent.prototype.ngOnInit = function () { };
    FeaturesComponent.prototype.openLink = function (link) {
        window.open(link, '_blank');
    };
    FeaturesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'pear-features',
            template: __webpack_require__(/*! ./features.component.html */ "./src/app/static/features/features.component.html"),
            styles: [__webpack_require__(/*! ./features.component.scss */ "./src/app/static/features/features.component.scss")]
        })
    ], FeaturesComponent);
    return FeaturesComponent;
}());



/***/ }),

/***/ "./src/app/static/index.ts":
/*!*********************************!*\
  !*** ./src/app/static/index.ts ***!
  \*********************************/
/*! exports provided: StaticRoutingModule, StaticModule, AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _static_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./static-routing.module */ "./src/app/static/static-routing.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "StaticRoutingModule", function() { return _static_routing_module__WEBPACK_IMPORTED_MODULE_0__["StaticRoutingModule"]; });

/* harmony import */ var _static_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./static.module */ "./src/app/static/static.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "StaticModule", function() { return _static_module__WEBPACK_IMPORTED_MODULE_1__["StaticModule"]; });

/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./about/about.component */ "./src/app/static/about/about.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return _about_about_component__WEBPACK_IMPORTED_MODULE_2__["AboutComponent"]; });






/***/ }),

/***/ "./src/app/static/oet-test/oet-test.component.html":
/*!*********************************************************!*\
  !*** ./src/app/static/oet-test/oet-test.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n      <h1 class=\"main-heading\">OET Courses</h1>\n    </div>\n  </div>\n  <div class=\"row align-items-end\">\n    <div class=\"col-md-6 col-lg-4\" [ngClass]=\"animateOnRouteEnter\">\n      <mat-card>\n        <mat-card-title>\n         OET EXAM 1</mat-card-title>\n        <mat-card-subtitle>\n            The English language test for healthcare professionals.\n        </mat-card-subtitle>\n        <mat-card-actions>\n          <div class=\"card-body\">\n            <add-to-cart (added)=\"addToCart($event)\" [item]=\"cartItem\" [custom]=\"custom\"\n                         [type]=\"editor\" [position]=\"position\" [quantity]=\"quantity\" [buttonText]=\"'Add to cart'\">\n              <button type=\"button\" class=\"custom-button\">\n                Click to add\n              </button>\n            </add-to-cart>\n          </div>\n        </mat-card-actions>\n      </mat-card>\n    </div>\n    <div class=\"col-md-6 col-lg-4\" [ngClass]=\"animateOnRouteEnter\">\n        <mat-card>\n          <mat-card-title>\n           OET EXAM 0</mat-card-title>\n          <mat-card-subtitle>\n              The English language test for healthcare professionals.\n          </mat-card-subtitle>\n          <mat-card-actions>\n            <div class=\"card-body\">\n              <add-to-cart (added)=\"addToCart($event)\" [item]=\"cartItem\" [custom]=\"custom\"\n                           [type]=\"editor\" [position]=\"position\" [quantity]=\"quantity\" [buttonText]=\"'Add to cart'\">\n                <button type=\"button\" class=\"custom-button\">\n                  Click to add\n                </button>\n              </add-to-cart>\n            </div>\n          </mat-card-actions>\n        </mat-card>\n      </div>    <div class=\"col-md-6 col-lg-4\" [ngClass]=\"animateOnRouteEnter\">\n          <mat-card>\n            <mat-card-title>\n             OET EXAM 2</mat-card-title>\n            <mat-card-subtitle>\n                The English language test for healthcare professionals.\n            </mat-card-subtitle>\n            <mat-card-actions>\n              <div class=\"card-body\">\n                <add-to-cart (added)=\"addToCart($event)\" [item]=\"cartItem\" [custom]=\"custom\"\n                             [type]=\"editor\" [position]=\"position\" [quantity]=\"quantity\" [buttonText]=\"'Add to cart'\">\n                  <button type=\"button\" class=\"custom-button\">\n                    Click to add\n                  </button>\n                </add-to-cart>\n              </div>\n            </mat-card-actions>\n          </mat-card>\n        </div>    <div class=\"col-md-6 col-lg-4\" [ngClass]=\"animateOnRouteEnter\">\n            <mat-card>\n              <mat-card-title>\n               OET EXAM 3</mat-card-title>\n              <mat-card-subtitle>\n                  The English language test for healthcare professionals.\n              </mat-card-subtitle>\n              <mat-card-actions>\n                <div class=\"card-body\">\n                  <add-to-cart (added)=\"addToCart($event)\" [item]=\"cartItem\" [custom]=\"custom\"\n                               [type]=\"editor\" [position]=\"position\" [quantity]=\"quantity\" [buttonText]=\"'Add to cart'\">\n                    <button type=\"button\" class=\"custom-button\">\n                      Click to add\n                    </button>\n                  </add-to-cart>\n                </div>\n              </mat-card-actions>\n            </mat-card>\n          </div>    <div class=\"col-md-6 col-lg-4\" [ngClass]=\"animateOnRouteEnter\">\n              <mat-card>\n                <mat-card-title>\n                 OET EXAM 4</mat-card-title>\n                <mat-card-subtitle>\n                    The English language test for healthcare professionals.\n                </mat-card-subtitle>\n                <mat-card-actions>\n                  <div class=\"card-body\">\n                    <add-to-cart (added)=\"addToCart($event)\" [item]=\"cartItem\" [custom]=\"custom\"\n                                 [type]=\"editor\" [position]=\"position\" [quantity]=\"quantity\" [buttonText]=\"'Add to cart'\">\n                      <button type=\"button\" class=\"custom-button\">\n                        Click to add\n                      </button>\n                    </add-to-cart>\n                  </div>\n                </mat-card-actions>\n              </mat-card>\n            </div>\n\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/static/oet-test/oet-test.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/static/oet-test/oet-test.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n  margin-top: 20px; }\n\n.main-heading {\n  text-transform: uppercase;\n  margin: 0 0 20px 0; }\n\nmat-card {\n  margin: 0 0 20px 0; }\n\nmat-card mat-card-title {\n    position: relative; }\n\nmat-card mat-card-title code {\n      position: absolute;\n      top: 11px;\n      right: 0;\n      float: right;\n      font-size: 10px; }\n\nmat-card mat-card-subtitle {\n    min-height: 60px; }\n\n@media (max-width: 576px) {\n    mat-card mat-card-subtitle {\n      min-height: auto; } }\n\nmat-card a i {\n    position: relative;\n    top: -1px;\n    left: -3px; }\n"

/***/ }),

/***/ "./src/app/static/oet-test/oet-test.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/static/oet-test/oet-test.component.ts ***!
  \*******************************************************/
/*! exports provided: OetTestComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OetTestComponent", function() { return OetTestComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ng_shopping_cart__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-shopping-cart */ "./node_modules/ng-shopping-cart/esm5/ng-shopping-cart.js");
/* harmony import */ var _cart_item__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../cart-item */ "./src/app/cart-item.ts");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/esm5/snack-bar.es5.js");
/* harmony import */ var _core_services_notification_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/services/notification.service */ "./src/app/core/services/notification.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var OetTestComponent = /** @class */ (function () {
    function OetTestComponent(cartService, notificationService, snackBar) {
        this.cartService = cartService;
        this.notificationService = notificationService;
        this.snackBar = snackBar;
        this.currentKey = 'cartItem';
        this.quantity = 1;
        this.custom = false;
        this.label = 'Add to cart';
        this.editor = 'button';
        this.createItem();
    }
    OetTestComponent.prototype.ngOnInit = function () {
    };
    OetTestComponent.prototype.createItem = function () {
        this.currentKey = 'cartItem';
        this.cartItem = new _cart_item__WEBPACK_IMPORTED_MODULE_2__["PearCartItem"]({
            identifier: Date.now(),
            description: 'Test description',
            country: 'AU',
            label: 'OET',
            cost: '1000'
        });
    };
    OetTestComponent.prototype.addToCart = function (item) {
        this.createItem();
        this.showNotification('Item succesfully added to cart');
        this.notificationService.success('Cart', 'Item succesfully added to cart');
    };
    OetTestComponent.prototype.showNotification = function (message, action) {
        return this.snackBar.open(message, action, {
            duration: 2500,
        });
    };
    OetTestComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'pear-oet-test',
            template: __webpack_require__(/*! ./oet-test.component.html */ "./src/app/static/oet-test/oet-test.component.html"),
            styles: [__webpack_require__(/*! ./oet-test.component.scss */ "./src/app/static/oet-test/oet-test.component.scss")]
        }),
        __metadata("design:paramtypes", [ng_shopping_cart__WEBPACK_IMPORTED_MODULE_1__["CartService"],
            _core_services_notification_service__WEBPACK_IMPORTED_MODULE_4__["PearNotificationService"],
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"]])
    ], OetTestComponent);
    return OetTestComponent;
}());



/***/ }),

/***/ "./src/app/static/static-routing.module.ts":
/*!*************************************************!*\
  !*** ./src/app/static/static-routing.module.ts ***!
  \*************************************************/
/*! exports provided: StaticRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StaticRoutingModule", function() { return StaticRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./about/about.component */ "./src/app/static/about/about.component.ts");
/* harmony import */ var _features_features_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./features/features.component */ "./src/app/static/features/features.component.ts");
/* harmony import */ var _oet_test_oet_test_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./oet-test/oet-test.component */ "./src/app/static/oet-test/oet-test.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    { path: 'about', component: _about_about_component__WEBPACK_IMPORTED_MODULE_2__["AboutComponent"], data: { title: 'About' } },
    {
        path: 'features',
        component: _features_features_component__WEBPACK_IMPORTED_MODULE_3__["FeaturesComponent"],
        data: { title: 'Features' }
    },
    {
        path: 'oettest',
        component: _oet_test_oet_test_component__WEBPACK_IMPORTED_MODULE_4__["OetTestComponent"],
        data: { title: 'OET Test' }
    }
];
var StaticRoutingModule = /** @class */ (function () {
    function StaticRoutingModule() {
    }
    StaticRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], StaticRoutingModule);
    return StaticRoutingModule;
}());



/***/ }),

/***/ "./src/app/static/static.module.ts":
/*!*****************************************!*\
  !*** ./src/app/static/static.module.ts ***!
  \*****************************************/
/*! exports provided: StaticModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StaticModule", function() { return StaticModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_shared__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app/shared */ "./src/app/shared/index.ts");
/* harmony import */ var ng_shopping_cart__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-shopping-cart */ "./node_modules/ng-shopping-cart/esm5/ng-shopping-cart.js");
/* harmony import */ var _static_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./static-routing.module */ "./src/app/static/static-routing.module.ts");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./about/about.component */ "./src/app/static/about/about.component.ts");
/* harmony import */ var _features_features_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./features/features.component */ "./src/app/static/features/features.component.ts");
/* harmony import */ var _oet_test_oet_test_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./oet-test/oet-test.component */ "./src/app/static/oet-test/oet-test.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var StaticModule = /** @class */ (function () {
    function StaticModule() {
    }
    StaticModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_app_shared__WEBPACK_IMPORTED_MODULE_1__["SharedModule"], _static_routing_module__WEBPACK_IMPORTED_MODULE_3__["StaticRoutingModule"], ng_shopping_cart__WEBPACK_IMPORTED_MODULE_2__["ShoppingCartModule"]],
            declarations: [_about_about_component__WEBPACK_IMPORTED_MODULE_4__["AboutComponent"], _features_features_component__WEBPACK_IMPORTED_MODULE_5__["FeaturesComponent"], _oet_test_oet_test_component__WEBPACK_IMPORTED_MODULE_6__["OetTestComponent"]]
        })
    ], StaticModule);
    return StaticModule;
}());



/***/ }),

/***/ "./src/assets/logo.png":
/*!*****************************!*\
  !*** ./src/assets/logo.png ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "logo.png";

/***/ }),

/***/ "./src/assets/release-butler.png":
/*!***************************************!*\
  !*** ./src/assets/release-butler.png ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "release-butler.png";

/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var packageJson = __webpack_require__(/*! ../../package.json */ "./package.json");
var environment = {
    appName: 'Pear Academy',
    envName: 'DEV',
    production: false,
    versions: {
        app: packageJson.version,
        angular: packageJson.dependencies['@angular/core'],
        ngrx: packageJson.dependencies['@ngrx/store'],
        material: packageJson.dependencies['@angular/material'],
        bootstrap: packageJson.dependencies.bootstrap,
        rxjs: packageJson.dependencies.rxjs,
        angularCli: packageJson.devDependencies['@angular/cli'],
        typescript: packageJson.devDependencies['typescript']
    }
};


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"]);


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\test\pear.academy\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map