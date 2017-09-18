webpackJsonp([1],{

/***/ "../../../../../src async recursive":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "../../../../../src async recursive";

/***/ }),

/***/ "../../../../../src/app/about/_about.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Lora);", ""]);

// module
exports.push([module.i, ".pd-font-lora {\n  font-family: 'Lora', serif;\n  font-style: italic; }\n\n@-webkit-keyframes spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg); }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg); } }\n\n@keyframes spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg); }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg); } }\n\n.loading {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  position: relative;\n  margin: 20px; }\n  .loading:before {\n    content: '';\n    position: absolute;\n    width: 100%;\n    height: 100%;\n    background-color: #ffffff; }\n  .loading:after {\n    content: '';\n    z-index: 1;\n    border-radius: 50%;\n    width: 60px;\n    height: 60px;\n    border: 0.25rem solid rgba(183, 20, 39, 0.2);\n    border-top-color: #B71427;\n    -webkit-animation: spin 0.75s infinite linear;\n            animation: spin 0.75s infinite linear;\n    border-style: double;\n    border-width: .5rem; }\n\n.pd-border-highlight {\n  border: 2px solid #404040;\n  cursor: pointer;\n  position: relative;\n  transition: all .1s linear; }\n  .pd-border-highlight img {\n    width: 100%; }\n  .pd-border-highlight .text {\n    position: absolute;\n    width: 100%;\n    bottom: 0;\n    display: block;\n    padding: 10px;\n    font-size: 20px;\n    color: #ffffff;\n    text-transform: uppercase;\n    background: rgba(0, 0, 0, 0.6); }\n  .pd-border-highlight:hover {\n    transition: all .2s linear;\n    box-shadow: 0 1px 5px 1px #6DBDD6;\n    -webkit-transform: scale(1.1);\n            transform: scale(1.1); }\n\n.pd-font-title {\n  font-size: 36px;\n  font-weight: 900; }\n\n.pd-back-btn {\n  float: left;\n  cursor: pointer;\n  font-size: 20px;\n  color: #557c3e;\n  width: 100%;\n  text-align: left;\n  margin-bottom: 5px; }\n  .pd-back-btn:before {\n    content: \"\\F0A5\";\n    font-family: FontAwesome;\n    margin-right: 5px; }\n\n.pd-about {\n  margin: 20px 0 40px; }\n  .pd-about h1 {\n    margin-bottom: 15px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/about/about.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row pd-about\">\n\n  <h1 class=\"text-center pd-font-title\">About This Website</h1>\n\n  <div> I did attend one of the best AngularJS (1.x) courses named <a href=\"https://www.coursera.org/learn/single-page-web-apps-with-angularjs\"\n      target=\"_blank\">Single Page Web Applications with AngularJS</a>. At the end of this course, students have a chance to\n    build a real project with AngularJS.\n    <a href=\"http://www.davidchuschinabistro.com/index.html#/\" target=\"_blank\">This</a> is a sample project. <br> <br>\n    <p>\n      I started working with Angular 2 for our project seven months ago. Angular is quite different from\n      AngularJS. Therefore I want to build a similar website with Angular 2.\n    </p>\n\n    <h3>References:</h3>\n    <ul>\n      <li>Assets e.g. logo, images: <a href=\"https://github.com/jhu-ep-coursera/restaurant-server\" target=\"_blank\">https://github.com/jhu-ep-coursera/restaurant-server</a></li>\n      <li>Backend provides JSON API: <a href=\"https://duong-restaurant-server.herokuapp.com\" target=\"_blank\">https://duong-restaurant-server.herokuapp.com</a></li>\n      <li>Backend stores contacts: <a href=\"https://firebase.google.com/\" target=\"_blank\">https://firebase.google.com/</a></li>\n    </ul>\n\n  </div>\n\n</div>"

/***/ }),

/***/ "../../../../../src/app/about/about.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AboutComponent = (function () {
    function AboutComponent() {
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    return AboutComponent;
}());
AboutComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-about',
        template: __webpack_require__("../../../../../src/app/about/about.component.html"),
        styles: [__webpack_require__("../../../../../src/app/about/_about.scss")]
    }),
    __metadata("design:paramtypes", [])
], AboutComponent);

//# sourceMappingURL=about.component.js.map

/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__menu_menu_component__ = __webpack_require__("../../../../../src/app/menu/menu.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__about_about_component__ = __webpack_require__("../../../../../src/app/about/about.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__contact_contact_component__ = __webpack_require__("../../../../../src/app/contact/contact.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__menu_menu_detail_menu_detail_component__ = __webpack_require__("../../../../../src/app/menu/menu-detail/menu-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__not_found_not_found_component__ = __webpack_require__("../../../../../src/app/not-found/not-found.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var appRoutes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_3__home_home_component__["a" /* HomeComponent */] },
    { path: 'menu', component: __WEBPACK_IMPORTED_MODULE_2__menu_menu_component__["a" /* MenuComponent */] },
    { path: 'menu/:id', component: __WEBPACK_IMPORTED_MODULE_6__menu_menu_detail_menu_detail_component__["a" /* MenuDetailComponent */] },
    { path: 'about', component: __WEBPACK_IMPORTED_MODULE_4__about_about_component__["a" /* AboutComponent */] },
    { path: 'contact', component: __WEBPACK_IMPORTED_MODULE_5__contact_contact_component__["a" /* ContactComponent */] },
    { path: '**', component: __WEBPACK_IMPORTED_MODULE_7__not_found_not_found_component__["a" /* NotFoundComponent */] }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forRoot(appRoutes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]]
    })
], AppRoutingModule);

//# sourceMappingURL=app-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<div class=\"container\">\n  <div\n    class=\"pd-loading\"\n    [class.loading]=\"loading\">\n  </div>\n  <app-sidebar></app-sidebar>\n  <router-outlet></router-outlet>\n</div>\n<app-footer></app-footer>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Lora);", ""]);

// module
exports.push([module.i, ".pd-font-lora {\n  font-family: 'Lora', serif;\n  font-style: italic; }\n\n@-webkit-keyframes spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg); }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg); } }\n\n@keyframes spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg); }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg); } }\n\n.loading {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  position: relative;\n  margin: 20px; }\n  .loading:before {\n    content: '';\n    position: absolute;\n    width: 100%;\n    height: 100%;\n    background-color: #ffffff; }\n  .loading:after {\n    content: '';\n    z-index: 1;\n    border-radius: 50%;\n    width: 60px;\n    height: 60px;\n    border: 0.25rem solid rgba(183, 20, 39, 0.2);\n    border-top-color: #B71427;\n    -webkit-animation: spin 0.75s infinite linear;\n            animation: spin 0.75s infinite linear;\n    border-style: double;\n    border-width: .5rem; }\n\n.pd-border-highlight {\n  border: 2px solid #404040;\n  cursor: pointer;\n  position: relative;\n  transition: all .1s linear; }\n  .pd-border-highlight img {\n    width: 100%; }\n  .pd-border-highlight .text {\n    position: absolute;\n    width: 100%;\n    bottom: 0;\n    display: block;\n    padding: 10px;\n    font-size: 20px;\n    color: #ffffff;\n    text-transform: uppercase;\n    background: rgba(0, 0, 0, 0.6); }\n  .pd-border-highlight:hover {\n    transition: all .2s linear;\n    box-shadow: 0 1px 5px 1px #6DBDD6;\n    -webkit-transform: scale(1.1);\n            transform: scale(1.1); }\n\n.pd-font-title {\n  font-size: 36px;\n  font-weight: 900; }\n\n.pd-back-btn {\n  float: left;\n  cursor: pointer;\n  font-size: 20px;\n  color: #557c3e;\n  width: 100%;\n  text-align: left;\n  margin-bottom: 5px; }\n  .pd-back-btn:before {\n    content: \"\\F0A5\";\n    font-family: FontAwesome;\n    margin-right: 5px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_backend_service__ = __webpack_require__("../../../../../src/app/shared/backend.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
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
    function AppComponent(backendService) {
        this.backendService = backendService;
        this.title = 'app';
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscription = this.backendService.loading
            .subscribe(function (value) { return _this.loading = value; });
    };
    AppComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_backend_service__["a" /* BackendService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared_backend_service__["a" /* BackendService */]) === "function" && _a || Object])
], AppComponent);

var _a;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__agm_core__ = __webpack_require__("../../../../@agm/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_notifications__ = __webpack_require__("../../../../angular2-notifications/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_notifications___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_angular2_notifications__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__header_header_component__ = __webpack_require__("../../../../../src/app/header/header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__footer_footer_component__ = __webpack_require__("../../../../../src/app/footer/footer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__menu_menu_component__ = __webpack_require__("../../../../../src/app/menu/menu.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__contact_contact_component__ = __webpack_require__("../../../../../src/app/contact/contact.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__about_about_component__ = __webpack_require__("../../../../../src/app/about/about.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__menu_category_category_component__ = __webpack_require__("../../../../../src/app/menu/category/category.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__menu_menu_detail_menu_detail_component__ = __webpack_require__("../../../../../src/app/menu/menu-detail/menu-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__not_found_not_found_component__ = __webpack_require__("../../../../../src/app/not-found/not-found.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__shared_backend_service__ = __webpack_require__("../../../../../src/app/shared/backend.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__sidebar_sidebar_component__ = __webpack_require__("../../../../../src/app/sidebar/sidebar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__shared_dropdown_directive__ = __webpack_require__("../../../../../src/app/shared/dropdown.directive.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




















var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_7__header_header_component__["a" /* HeaderComponent */],
            __WEBPACK_IMPORTED_MODULE_8__footer_footer_component__["a" /* FooterComponent */],
            __WEBPACK_IMPORTED_MODULE_9__home_home_component__["a" /* HomeComponent */],
            __WEBPACK_IMPORTED_MODULE_11__menu_menu_component__["a" /* MenuComponent */],
            __WEBPACK_IMPORTED_MODULE_13__about_about_component__["a" /* AboutComponent */],
            __WEBPACK_IMPORTED_MODULE_12__contact_contact_component__["a" /* ContactComponent */],
            __WEBPACK_IMPORTED_MODULE_14__menu_category_category_component__["a" /* CategoryComponent */],
            __WEBPACK_IMPORTED_MODULE_15__menu_menu_detail_menu_detail_component__["a" /* MenuDetailComponent */],
            __WEBPACK_IMPORTED_MODULE_16__not_found_not_found_component__["a" /* NotFoundComponent */],
            __WEBPACK_IMPORTED_MODULE_18__sidebar_sidebar_component__["a" /* SidebarComponent */],
            __WEBPACK_IMPORTED_MODULE_19__shared_dropdown_directive__["a" /* DropdownDirective */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["BrowserModule"],
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_10__app_routing_module__["a" /* AppRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_0__agm_core__["a" /* AgmCoreModule */].forRoot({
                apiKey: 'AIzaSyCx-U5GoHpNAWT_pei4g4mj9z_2wDAHPSc'
            }),
            __WEBPACK_IMPORTED_MODULE_5_angular2_notifications__["SimpleNotificationsModule"].forRoot()
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_17__shared_backend_service__["a" /* BackendService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/contact/_contact.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Lora);", ""]);

// module
exports.push([module.i, ".pd-font-lora {\n  font-family: 'Lora', serif;\n  font-style: italic; }\n\n@-webkit-keyframes spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg); }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg); } }\n\n@keyframes spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg); }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg); } }\n\n.loading {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  position: relative;\n  margin: 20px; }\n  .loading:before {\n    content: '';\n    position: absolute;\n    width: 100%;\n    height: 100%;\n    background-color: #ffffff; }\n  .loading:after {\n    content: '';\n    z-index: 1;\n    border-radius: 50%;\n    width: 60px;\n    height: 60px;\n    border: 0.25rem solid rgba(183, 20, 39, 0.2);\n    border-top-color: #B71427;\n    -webkit-animation: spin 0.75s infinite linear;\n            animation: spin 0.75s infinite linear;\n    border-style: double;\n    border-width: .5rem; }\n\n.pd-border-highlight {\n  border: 2px solid #404040;\n  cursor: pointer;\n  position: relative;\n  transition: all .1s linear; }\n  .pd-border-highlight img {\n    width: 100%; }\n  .pd-border-highlight .text {\n    position: absolute;\n    width: 100%;\n    bottom: 0;\n    display: block;\n    padding: 10px;\n    font-size: 20px;\n    color: #ffffff;\n    text-transform: uppercase;\n    background: rgba(0, 0, 0, 0.6); }\n  .pd-border-highlight:hover {\n    transition: all .2s linear;\n    box-shadow: 0 1px 5px 1px #6DBDD6;\n    -webkit-transform: scale(1.1);\n            transform: scale(1.1); }\n\n.pd-font-title {\n  font-size: 36px;\n  font-weight: 900; }\n\n.pd-back-btn {\n  float: left;\n  cursor: pointer;\n  font-size: 20px;\n  color: #557c3e;\n  width: 100%;\n  text-align: left;\n  margin-bottom: 5px; }\n  .pd-back-btn:before {\n    content: \"\\F0A5\";\n    font-family: FontAwesome;\n    margin-right: 5px; }\n\n.pd-contact {\n  margin: 20px 0 40px; }\n  .pd-contact h1 {\n    margin-bottom: 15px; }\n  .pd-contact__form {\n    margin: 30px 0 20px;\n    text-align: center; }\n    .pd-contact__form form {\n      width: 70%;\n      min-width: 300px;\n      margin: 0 auto; }\n    .pd-contact__form .form-control {\n      display: inline-block;\n      padding: 6px 15px;\n      margin-bottom: 10px;\n      font-size: 16px; }\n    .pd-contact__form .form-group {\n      position: relative; }\n    .pd-contact__form label {\n      margin-bottom: 0;\n      display: block;\n      text-align: left;\n      padding: 0 15px;\n      position: absolute;\n      top: 14px;\n      color: gray;\n      transition: all .1s linear; }\n    .pd-contact__form input:focus, .pd-contact__form input.ng-touched.text, .pd-contact__form textarea:focus, .pd-contact__form textarea.ng-touched.text {\n      padding-bottom: 0; }\n      .pd-contact__form input:focus + label, .pd-contact__form input.ng-touched.text + label, .pd-contact__form textarea:focus + label, .pd-contact__form textarea.ng-touched.text + label {\n        top: 5px;\n        font-size: 10px; }\n    .pd-contact__form input:required.ng-touched.ng-valid, .pd-contact__form textarea:required.ng-touched.ng-valid {\n      padding-bottom: 0; }\n      .pd-contact__form input:required.ng-touched.ng-valid + label, .pd-contact__form textarea:required.ng-touched.ng-valid + label {\n        top: 5px;\n        font-size: 10px; }\n    .pd-contact__form input:required + label:after, .pd-contact__form textarea:required + label:after {\n      content: '*';\n      font-size: 12px;\n      margin-left: 3px; }\n    .pd-contact__form input {\n      min-height: 55px; }\n    .pd-contact__form textarea {\n      min-height: 150px; }\n      .pd-contact__form textarea:focus, .pd-contact__form textarea:valid {\n        padding-top: 20px; }\n  .pd-contact input.ng-invalid.ng-touched, .pd-contact textarea.ng-invalid.ng-touched {\n    border: 1px solid #B71427; }\n  .pd-contact .help-block {\n    color: #B71427;\n    font-size: 14px;\n    margin: -5px 0 18px;\n    text-align: left; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/contact/contact.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row text-center pd-contact\">\n  \n  <h1 class=\"pd-font-title\">Contact</h1>\n  <p>\n    There are two ways to implement form in Angular: Template-Driven (TD) and Reactive Form.\n    In this website I choose the TD approach & use Firebase to store contact data.\n  </p>\n\n  <div class=\"row pd-contact__form\">\n    <!-- toast -->\n    <simple-notifications [options]=\"options\"></simple-notifications>\n    \n    <div class=\"col-xs-12 col-sm-10 col-md-8 col-sm-offset-1 col-md-offset-2\">\n      <form (ngSubmit)=\"onSubmit(f)\" #f=\"ngForm\">\n        <div class=\"form-group\">\n          <input \n            type=\"text\"\n            id=\"firstname\"\n            class=\"form-control\"\n            ngModel\n            required\n            #firstname=\"ngModel\"\n            name=\"firstname\">\n          <label for=\"firstname\">First name</label>\n          <span \n            class=\"help-block\"\n            *ngIf=\"firstname.invalid && firstname.touched\">First name must not be empty</span>\n        </div>\n        <div class=\"form-group\">\n          <input \n            type=\"text\"\n            id=\"lastname\"\n            class=\"form-control\"\n            ngModel\n            required\n            #lastname=\"ngModel\"\n            name=\"lastname\">\n          <label for=\"lastname\">Last name</label>\n          <span \n            class=\"help-block\"\n            *ngIf=\"lastname.invalid && lastname.touched\">Last name must not be empty</span>\n        </div>\n        <div class=\"form-group\">\n          <label for=\"Gender\" class=\"sr-only\"></label>\n          <select\n            name=\"gender\"\n            id=\"gender\"\n            [ngModel]=\"defaultGender\"\n            class=\"form-control\">\n            <option value=\"male\">Male</option>\n            <option value=\"female\">Female</option>\n          </select>\n        </div>\n        <div class=\"form-group\">\n          <input\n            type=\"email\"\n            id=\"email\"\n            class=\"form-control\"\n            [class.text]=\"emailValue\"\n            [(ngModel)]=\"emailValue\"\n            required\n            name=\"email\"\n            #email=\"ngModel\"\n            [email]=\"true\">\n          <label for=\"email\">Email</label>\n          <span \n            class=\"help-block\"\n            *ngIf=\"email.invalid && email.touched\">Please enter a valid email!</span>\n        </div>\n        <div class=\"form-group\">\n          <input\n            type=\"text\"\n            id=\"phone\"\n            class=\"form-control\"\n            [class.text]=\"phoneValue\"\n            [(ngModel)]=\"phoneValue\"\n            name=\"phone\">\n          <label for=\"phone\">Phone</label>\n        </div>\n        <div class=\"form-group\">\n          <textarea\n            type=\"text\"\n            id=\"message\"\n            class=\"form-control\"\n            ngModel\n            required\n            name=\"message\"\n            #message=\"ngModel\"></textarea>\n          <label for=\"message\">Message</label>\n          <span \n            class=\"help-block\"\n            *ngIf=\"message.invalid && message.touched\">Message must not be empty!</span>\n        </div>\n        <button \n          class=\"btn btn-primary\"\n          type=\"submit\"\n          [disabled]=\"f.invalid\">Submit</button>\n      </form>\n    </div>\n  </div>\n  \n</div>"

/***/ }),

/***/ "../../../../../src/app/contact/contact.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__contact_model__ = __webpack_require__("../../../../../src/app/contact/contact.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_backend_service__ = __webpack_require__("../../../../../src/app/shared/backend.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_notifications__ = __webpack_require__("../../../../angular2-notifications/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_notifications___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_notifications__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ContactComponent = (function () {
    function ContactComponent(backendService, quoteService) {
        this.backendService = backendService;
        this.quoteService = quoteService;
        this.defaultGender = 'male';
        // Toast Option
        this.options = {
            position: ['top', 'right'],
            lastOnBottom: true
        };
    }
    ContactComponent.prototype.ngOnInit = function () { };
    ContactComponent.prototype.onSubmit = function (f) {
        var _this = this;
        var controls = f.controls;
        var firstName = controls.firstname.value;
        var lastName = controls.lastname.value;
        var gender = controls.gender.value;
        var email = controls.email.value;
        var phone = controls.phone.value;
        var message = controls.message.value;
        var contact = new __WEBPACK_IMPORTED_MODULE_1__contact_model__["a" /* Contact */](firstName, lastName, gender, email, phone, message);
        this.backendService.storeContactInfo(contact)
            .subscribe(function (reponse) {
            _this.quoteService.success('SUCCESS', 'Thanks for your info!', {
                timeOut: 3000,
                showProgressBar: true,
                pauseOnHover: true,
                clickToClose: true
            });
        }, function (error) { return console.log(error); });
    };
    return ContactComponent;
}());
ContactComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-contact',
        template: __webpack_require__("../../../../../src/app/contact/contact.component.html"),
        styles: [__webpack_require__("../../../../../src/app/contact/_contact.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__shared_backend_service__["a" /* BackendService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared_backend_service__["a" /* BackendService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_notifications__["NotificationsService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angular2_notifications__["NotificationsService"]) === "function" && _b || Object])
], ContactComponent);

var _a, _b;
//# sourceMappingURL=contact.component.js.map

/***/ }),

/***/ "../../../../../src/app/contact/contact.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Contact; });
var Contact = (function () {
    function Contact(firstName, lastName, gender, email, message, phone) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.gender = gender;
        this.email = email;
        this.message = message;
        this.phone = phone;
    }
    return Contact;
}());

//# sourceMappingURL=contact.model.js.map

/***/ }),

/***/ "../../../../../src/app/footer/_footer.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Lora);", ""]);

// module
exports.push([module.i, ".pd-font-lora {\n  font-family: 'Lora', serif;\n  font-style: italic; }\n\n@-webkit-keyframes spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg); }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg); } }\n\n@keyframes spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg); }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg); } }\n\n.loading {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  position: relative;\n  margin: 20px; }\n  .loading:before {\n    content: '';\n    position: absolute;\n    width: 100%;\n    height: 100%;\n    background-color: #ffffff; }\n  .loading:after {\n    content: '';\n    z-index: 1;\n    border-radius: 50%;\n    width: 60px;\n    height: 60px;\n    border: 0.25rem solid rgba(183, 20, 39, 0.2);\n    border-top-color: #B71427;\n    -webkit-animation: spin 0.75s infinite linear;\n            animation: spin 0.75s infinite linear;\n    border-style: double;\n    border-width: .5rem; }\n\n.pd-border-highlight {\n  border: 2px solid #404040;\n  cursor: pointer;\n  position: relative;\n  transition: all .1s linear; }\n  .pd-border-highlight img {\n    width: 100%; }\n  .pd-border-highlight .text {\n    position: absolute;\n    width: 100%;\n    bottom: 0;\n    display: block;\n    padding: 10px;\n    font-size: 20px;\n    color: #ffffff;\n    text-transform: uppercase;\n    background: rgba(0, 0, 0, 0.6); }\n  .pd-border-highlight:hover {\n    transition: all .2s linear;\n    box-shadow: 0 1px 5px 1px #6DBDD6;\n    -webkit-transform: scale(1.1);\n            transform: scale(1.1); }\n\n.pd-font-title {\n  font-size: 36px;\n  font-weight: 900; }\n\n.pd-back-btn {\n  float: left;\n  cursor: pointer;\n  font-size: 20px;\n  color: #557c3e;\n  width: 100%;\n  text-align: left;\n  margin-bottom: 5px; }\n  .pd-back-btn:before {\n    content: \"\\F0A5\";\n    font-family: FontAwesome;\n    margin-right: 5px; }\n\nfooter {\n  background: #2e2e2e;\n  color: #ffffff;\n  padding: 15px 0;\n  font-size: 16px; }\n  @media (max-width: 768px) {\n    footer {\n      text-align: center; } }\n\n.pd-footer__info {\n  padding-bottom: 20px; }\n  @media (max-width: 768px) {\n    .pd-footer__info > div {\n      padding-bottom: 20px;\n      border-bottom: 1px solid;\n      margin: 0 30px; }\n      .pd-footer__info > div:last-child {\n        border-bottom: none; } }\n\n.pd-footer .note {\n  font-size: 14px;\n  color: #557c3e; }\n\n.pd-footer blockquote {\n  border-left: none;\n  text-indent: -12px;\n  margin-bottom: 5px;\n  font-family: \"Helvetica Neue\",Helvetica,Arial,sans-serif !important;\n  font-weight: 100; }\n\n.pd-footer__copyright {\n  border-top: 1px solid;\n  padding-top: 7px;\n  font-size: 14px; }\n\n.pd-footer p i {\n  margin-right: 6px;\n  color: #90EE90; }\n  .pd-footer p i.fa-calendar-times-o {\n    color: #ff4d4d; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = "<footer class=\"pd-footer\">\n\n  <div class=\"container\">\n    <div class=\"row pd-footer__info\">\n      <div class=\"col-lg-4 col-md-4 col-sm-4 pd-footer__info_opening\">\n        <h3 class=\"\">Hours</h3>\n        <p><i class=\"fa fa-calendar-check-o\"></i>Mon-Thu: 11:15am - 10:00pm</p>\n        <p><i class=\"fa fa-calendar-check-o\"></i>Fri: 11:15am - 2:30pm</p>\n        <p><i class=\"fa fa-calendar-times-o\"></i>Weekend Closed</p>\n      </div>\n      <div class=\"col-lg-4 col-md-4 col-sm-4 pd-footer__info_address\">\n        <h3>Address</h3>\n        <p>Berlin Hauptbahnhof</p>\n        <p>Europaplatz 1,</p>\n        <p>10557 Berlin</p>\n        <span class=\"note\">\n        * Delivery area within 3-4 miles, with minimum order\n         of $20 plus $3 charge for all deliveries.\n      </span>\n      </div>\n      <div class=\"col-lg-4 col-md-4 col-sm-4 pd-footer__info_quotes\">\n        <blockquote class=\"pd-font-lora\">\n          <span class=\"fa fa-quote-right\"></span>\n          The best Chinese restaurant I've been to! And that's saying a lot, since I've been to many!\n        </blockquote>\n        <blockquote class=\"pd-font-lora\">\n          <span class=\"fa fa-quote-right\"></span>          \n          Amazing food! Great service! Couldn't ask for more! I'll be back again and again!\"\n        </blockquote>\n      </div>\n    </div>\n    <div class=\"row text-center pd-footer__copyright\">\n      &copy; Duong Pham Demo Restaurant | 2017\n    </div>\n  </div>\n\n</footer>"

/***/ }),

/***/ "../../../../../src/app/footer/footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    return FooterComponent;
}());
FooterComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-footer',
        template: __webpack_require__("../../../../../src/app/footer/footer.component.html"),
        styles: [__webpack_require__("../../../../../src/app/footer/_footer.scss")]
    }),
    __metadata("design:paramtypes", [])
], FooterComponent);

//# sourceMappingURL=footer.component.js.map

/***/ }),

/***/ "../../../../../src/app/header/_header.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Lora);", ""]);

// module
exports.push([module.i, ".pd-font-lora {\n  font-family: 'Lora', serif;\n  font-style: italic; }\n\n@-webkit-keyframes spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg); }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg); } }\n\n@keyframes spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg); }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg); } }\n\n.loading {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  position: relative;\n  margin: 20px; }\n  .loading:before {\n    content: '';\n    position: absolute;\n    width: 100%;\n    height: 100%;\n    background-color: #ffffff; }\n  .loading:after {\n    content: '';\n    z-index: 1;\n    border-radius: 50%;\n    width: 60px;\n    height: 60px;\n    border: 0.25rem solid rgba(183, 20, 39, 0.2);\n    border-top-color: #B71427;\n    -webkit-animation: spin 0.75s infinite linear;\n            animation: spin 0.75s infinite linear;\n    border-style: double;\n    border-width: .5rem; }\n\n.pd-border-highlight {\n  border: 2px solid #404040;\n  cursor: pointer;\n  position: relative;\n  transition: all .1s linear; }\n  .pd-border-highlight img {\n    width: 100%; }\n  .pd-border-highlight .text {\n    position: absolute;\n    width: 100%;\n    bottom: 0;\n    display: block;\n    padding: 10px;\n    font-size: 20px;\n    color: #ffffff;\n    text-transform: uppercase;\n    background: rgba(0, 0, 0, 0.6); }\n  .pd-border-highlight:hover {\n    transition: all .2s linear;\n    box-shadow: 0 1px 5px 1px #6DBDD6;\n    -webkit-transform: scale(1.1);\n            transform: scale(1.1); }\n\n.pd-font-title {\n  font-size: 36px;\n  font-weight: 900; }\n\n.pd-back-btn {\n  float: left;\n  cursor: pointer;\n  font-size: 20px;\n  color: #557c3e;\n  width: 100%;\n  text-align: left;\n  margin-bottom: 5px; }\n  .pd-back-btn:before {\n    content: \"\\F0A5\";\n    font-family: FontAwesome;\n    margin-right: 5px; }\n\nnav {\n  background: #B71427;\n  color: #ffffff;\n  padding: 20px 0;\n  margin: 0; }\n  @media (min-width: 768px) {\n    nav {\n      height: 170px; } }\n  @media (max-width: 768px) {\n    nav {\n      padding-bottom: 0; } }\n  nav .pd-header__logo {\n    width: 130px; }\n  nav .pd-header__text {\n    font-size: 30px;\n    font-weight: 900;\n    margin-left: 10px;\n    position: relative;\n    top: -30px;\n    text-shadow: 2px 3px 2px #404040; }\n    @media (max-width: 1024px) {\n      nav .pd-header__text {\n        top: 0; } }\n  @media (max-width: 1200px) {\n    nav .pd-header__logo {\n      width: 115px; }\n    nav .pd-header__text {\n      font-size: 26px;\n      font-weight: 900; } }\n  nav .navbar-toggle {\n    margin: 0 15px 20px; }\n  nav a {\n    color: #ffffff;\n    cursor: pointer;\n    font-size: 20px; }\n    nav a:hover, nav a:active, nav a:focus {\n      text-decoration: none;\n      color: #FFE658; }\n\n.navbar-right {\n  text-align: center; }\n  .navbar-right li a {\n    margin-left: 5px; }\n  .navbar-right li.active a {\n    background-color: transparent;\n    color: #FFE658; }\n    @media (min-width: 768px) {\n      .navbar-right li.active a {\n        border: 1px solid; } }\n  @media (min-width: 768px) and (max-width: 1024px) {\n    .navbar-right {\n      margin-top: 10px; }\n      .navbar-right li a {\n        font-size: 20px;\n        margin-left: 0; } }\n  .navbar-right .fa {\n    display: block;\n    margin-bottom: 6px;\n    font-size: 26px; }\n  .navbar-right .tel {\n    font-size: 26px;\n    padding-right: 0; }\n    .navbar-right .tel + span {\n      display: block; }\n    .navbar-right .tel .fa {\n      display: inline-block;\n      margin-right: 7px; }\n    @media (min-width: 768px) {\n      .navbar-right .tel + span {\n        text-align: right; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/header/header.component.html":
/***/ (function(module, exports) {

module.exports = "<header class=\"pd-header\">\n  <nav class=\"navbar navbar-default\">\n    <div class=\"container\">\n      <div class=\"navbar-header\">\n        <button \n          type=\"button\"\n          class=\"navbar-toggle collapsed\"\n          data-toggle=\"collapse\" \n          data-target=\"#navbar\"\n          aria-expanded=\"false\"\n          aria-controls=\"navbar\"\n          (click)=\"isShow = !isShow;\">\n                <span class=\"sr-only\">Toggle navigation</span>\n                <span class=\"icon-bar\"></span>\n                <span class=\"icon-bar\"></span>\n                <span class=\"icon-bar\"></span>\n              </button>\n        <a routerLink=\"\">\n          <img\n            class=\"pd-header__logo hidden-xs hidden-sm\"\n            src=\"http://www.davidchuschinabistro.com/images/restaurant-logo_large.png\"\n            alt=\"logo\">\n          <span class=\"pd-header__text\">Demo Restaurant Bistro</span>\n        </a>\n      </div>\n      \n      <div id=\"navbar\"\n        class=\"navbar-collapse collapse\"\n        [class.show]=\"isShow\">\n        <ul class=\"nav navbar-nav navbar-right\">\n          <li routerLinkActive=\"active\">\n            <a routerLink=\"/menu\">\n              <span class=\"fa fa-cutlery\"></span>\n              <span class=\"\">Menu</span>\n          </a>\n          </li>\n          <li routerLinkActive=\"active\">\n            <a routerLink=\"/about\">\n              <span class=\"fa fa-info-circle\"></span>\n              <span class=\"\">About</span>\n            </a>\n          </li>\n          <li routerLinkActive=\"active\">\n            <a routerLink=\"/contact\">\n              <span class=\"fa fa-envelope-o\"></span>\n              <span class=\"\">Contact</span>\n            </a>\n          </li>\n          <li>\n            <a class=\"tel\" href=\"tel:+49-12345-6789\"><i class=\"fa fa-phone\"></i>+49-12345-6789</a>\n            <span>* We Deliver</span>\n          </li>\n        </ul>\n      </div>\n    </div>\n  </nav>\n</header>\n"

/***/ }),

/***/ "../../../../../src/app/header/header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HeaderComponent = (function () {
    function HeaderComponent() {
        this.isShow = false;
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    return HeaderComponent;
}());
HeaderComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-header',
        template: __webpack_require__("../../../../../src/app/header/header.component.html"),
        styles: [__webpack_require__("../../../../../src/app/header/_header.scss")]
    }),
    __metadata("design:paramtypes", [])
], HeaderComponent);

//# sourceMappingURL=header.component.js.map

/***/ }),

/***/ "../../../../../src/app/home/_home.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Lora);", ""]);

// module
exports.push([module.i, ".pd-font-lora {\n  font-family: 'Lora', serif;\n  font-style: italic; }\n\n@-webkit-keyframes spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg); }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg); } }\n\n@keyframes spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg); }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg); } }\n\n.loading {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  position: relative;\n  margin: 20px; }\n  .loading:before {\n    content: '';\n    position: absolute;\n    width: 100%;\n    height: 100%;\n    background-color: #ffffff; }\n  .loading:after {\n    content: '';\n    z-index: 1;\n    border-radius: 50%;\n    width: 60px;\n    height: 60px;\n    border: 0.25rem solid rgba(183, 20, 39, 0.2);\n    border-top-color: #B71427;\n    -webkit-animation: spin 0.75s infinite linear;\n            animation: spin 0.75s infinite linear;\n    border-style: double;\n    border-width: .5rem; }\n\n.pd-border-highlight {\n  border: 2px solid #404040;\n  cursor: pointer;\n  position: relative;\n  transition: all .1s linear; }\n  .pd-border-highlight img {\n    width: 100%; }\n  .pd-border-highlight .text {\n    position: absolute;\n    width: 100%;\n    bottom: 0;\n    display: block;\n    padding: 10px;\n    font-size: 20px;\n    color: #ffffff;\n    text-transform: uppercase;\n    background: rgba(0, 0, 0, 0.6); }\n  .pd-border-highlight:hover {\n    transition: all .2s linear;\n    box-shadow: 0 1px 5px 1px #6DBDD6;\n    -webkit-transform: scale(1.1);\n            transform: scale(1.1); }\n\n.pd-font-title {\n  font-size: 36px;\n  font-weight: 900; }\n\n.pd-back-btn {\n  float: left;\n  cursor: pointer;\n  font-size: 20px;\n  color: #557c3e;\n  width: 100%;\n  text-align: left;\n  margin-bottom: 5px; }\n  .pd-back-btn:before {\n    content: \"\\F0A5\";\n    font-family: FontAwesome;\n    margin-right: 5px; }\n\n.pd-home {\n  padding: 20px 0 20px; }\n  .pd-home__top img {\n    width: 100%;\n    border-radius: 5px;\n    box-shadow: 0 0 4px 2px #404040; }\n  .pd-home__list {\n    margin: 30px 0; }\n    @media (min-width: 768px) {\n      .pd-home__list_item.left {\n        padding-left: 0; }\n      .pd-home__list_item.right {\n        padding-right: 0; }\n      .pd-home__list_item.middle {\n        padding: 0 7.5px; } }\n    @media (max-width: 768px) {\n      .pd-home__list_item {\n        padding: 0 7.5px; }\n        .pd-home__list_item.right {\n          margin-top: 20px; } }\n    .pd-home__list agm-map {\n      height: 250px; }\n      @media (max-width: 1200px) {\n        .pd-home__list agm-map {\n          height: 205px; } }\n    .pd-home__list img {\n      width: 100%; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"pd-home\">\n  <div class=\"pd-home__top\">\n    <img src=\"https://www.davidchuschinabistro.com/images/jumbotron_768.jpg\" alt=\"top image\" class=\"img-responsive\">\n  </div>\n  <div class=\"row text-center pd-home__list\">\n    <div class=\"col-lg-4 col-md-4 col-sm-6 col-xs-6 pd-home__list_item left\">\n      <div class=\"pd-border-highlight\" (click)=\"onOpenMenu()\">\n        <img src=\"https://www.davidchuschinabistro.com/images/menu-tile.jpg\" alt=\"Menu tile\">\n        <span class=\"text\">Menu</span>\n      </div>\n    </div>\n    <div class=\"col-lg-4 col-md-4 col-sm-6 col-xs-6 pd-home__list_item middle\">\n      <div class=\"pd-border-highlight\" (click)=\"onOpenSpecials()\">\n        <img src=\"https://www.davidchuschinabistro.com/images/specials-tile.jpg\" alt=\"Specials title\">\n        <span class=\"text\">Specials</span>\n      </div>\n    </div>\n    <div class=\"col-lg-4 col-md-4 col-sm-12 col-xs-12 pd-home__list_item right\">\n      <div class=\"pd-border-highlight\">\n        <agm-map \n          [latitude]=\"lat\" \n          [longitude]=\"lng\" \n          [zoom]=\"16\"\n          [streetViewControl]=\"true\">\n        </agm-map>\n        <span class=\"text\">Map</span>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomeComponent = (function () {
    function HomeComponent(router, route) {
        this.router = router;
        this.route = route;
        this.lat = 52.5250871;
        this.lng = 13.367208;
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent.prototype.onOpenMenu = function () {
        this.router.navigate(['menu'], { relativeTo: this.route });
    };
    HomeComponent.prototype.onOpenSpecials = function () {
        this.router.navigate(['menu/SP'], { relativeTo: this.route });
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-home',
        template: __webpack_require__("../../../../../src/app/home/home.component.html"),
        styles: [__webpack_require__("../../../../../src/app/home/_home.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */]) === "function" && _b || Object])
], HomeComponent);

var _a, _b;
//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ "../../../../../src/app/menu/_menu.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Lora);", ""]);

// module
exports.push([module.i, ".pd-font-lora {\n  font-family: 'Lora', serif;\n  font-style: italic; }\n\n@-webkit-keyframes spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg); }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg); } }\n\n@keyframes spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg); }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg); } }\n\n.loading {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  position: relative;\n  margin: 20px; }\n  .loading:before {\n    content: '';\n    position: absolute;\n    width: 100%;\n    height: 100%;\n    background-color: #ffffff; }\n  .loading:after {\n    content: '';\n    z-index: 1;\n    border-radius: 50%;\n    width: 60px;\n    height: 60px;\n    border: 0.25rem solid rgba(183, 20, 39, 0.2);\n    border-top-color: #B71427;\n    -webkit-animation: spin 0.75s infinite linear;\n            animation: spin 0.75s infinite linear;\n    border-style: double;\n    border-width: .5rem; }\n\n.pd-border-highlight {\n  border: 2px solid #404040;\n  cursor: pointer;\n  position: relative;\n  transition: all .1s linear; }\n  .pd-border-highlight img {\n    width: 100%; }\n  .pd-border-highlight .text {\n    position: absolute;\n    width: 100%;\n    bottom: 0;\n    display: block;\n    padding: 10px;\n    font-size: 20px;\n    color: #ffffff;\n    text-transform: uppercase;\n    background: rgba(0, 0, 0, 0.6); }\n  .pd-border-highlight:hover {\n    transition: all .2s linear;\n    box-shadow: 0 1px 5px 1px #6DBDD6;\n    -webkit-transform: scale(1.1);\n            transform: scale(1.1); }\n\n.pd-font-title {\n  font-size: 36px;\n  font-weight: 900; }\n\n.pd-back-btn {\n  float: left;\n  cursor: pointer;\n  font-size: 20px;\n  color: #557c3e;\n  width: 100%;\n  text-align: left;\n  margin-bottom: 5px; }\n  .pd-back-btn:before {\n    content: \"\\F0A5\";\n    font-family: FontAwesome;\n    margin-right: 5px; }\n\n.pd-menu {\n  margin: 20px 0; }\n  .pd-menu .pd-font-title {\n    margin-bottom: 15px; }\n    .pd-menu .pd-font-title + p {\n      font-size: 20px;\n      margin-bottom: 45px; }\n  .pd-menu__list_item {\n    margin-bottom: 30px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/menu/category/_category.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Lora);", ""]);

// module
exports.push([module.i, ".pd-font-lora {\n  font-family: 'Lora', serif;\n  font-style: italic; }\n\n@-webkit-keyframes spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg); }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg); } }\n\n@keyframes spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg); }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg); } }\n\n.loading {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  position: relative;\n  margin: 20px; }\n  .loading:before {\n    content: '';\n    position: absolute;\n    width: 100%;\n    height: 100%;\n    background-color: #ffffff; }\n  .loading:after {\n    content: '';\n    z-index: 1;\n    border-radius: 50%;\n    width: 60px;\n    height: 60px;\n    border: 0.25rem solid rgba(183, 20, 39, 0.2);\n    border-top-color: #B71427;\n    -webkit-animation: spin 0.75s infinite linear;\n            animation: spin 0.75s infinite linear;\n    border-style: double;\n    border-width: .5rem; }\n\n.pd-border-highlight {\n  border: 2px solid #404040;\n  cursor: pointer;\n  position: relative;\n  transition: all .1s linear; }\n  .pd-border-highlight img {\n    width: 100%; }\n  .pd-border-highlight .text {\n    position: absolute;\n    width: 100%;\n    bottom: 0;\n    display: block;\n    padding: 10px;\n    font-size: 20px;\n    color: #ffffff;\n    text-transform: uppercase;\n    background: rgba(0, 0, 0, 0.6); }\n  .pd-border-highlight:hover {\n    transition: all .2s linear;\n    box-shadow: 0 1px 5px 1px #6DBDD6;\n    -webkit-transform: scale(1.1);\n            transform: scale(1.1); }\n\n.pd-font-title {\n  font-size: 36px;\n  font-weight: 900; }\n\n.pd-back-btn {\n  float: left;\n  cursor: pointer;\n  font-size: 20px;\n  color: #557c3e;\n  width: 100%;\n  text-align: left;\n  margin-bottom: 5px; }\n  .pd-back-btn:before {\n    content: \"\\F0A5\";\n    font-family: FontAwesome;\n    margin-right: 5px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/menu/category/category.component.html":
/***/ (function(module, exports) {

module.exports = "<div \n  class=\"pd-border-highlight\"\n  (click)=\"onNavigate(category.shortName)\">\n  <img [src]=\"category.imageUrl\" alt=\"category.name\">\n  <span class=\"text\">{{ category.name }}</span>\n</div>"

/***/ }),

/***/ "../../../../../src/app/menu/category/category.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_backend_service__ = __webpack_require__("../../../../../src/app/shared/backend.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CategoryComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};



var CategoryComponent = (function () {
    function CategoryComponent(router, route, backendService) {
        this.router = router;
        this.route = route;
        this.backendService = backendService;
    }
    CategoryComponent.prototype.ngOnInit = function () { };
    CategoryComponent.prototype.onNavigate = function (slug) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.backendService.loading.next(true);
                        return [4 /*yield*/, this.backendService.getCategoryContent(slug)
                                .then(function (data) { return console.log(data); })];
                    case 1:
                        _a.sent();
                        this.backendService.loading.next(false);
                        this.router.navigate([slug], { relativeTo: this.route });
                        return [2 /*return*/];
                }
            });
        });
    };
    return CategoryComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], CategoryComponent.prototype, "category", void 0);
CategoryComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-category',
        template: __webpack_require__("../../../../../src/app/menu/category/category.component.html"),
        styles: [__webpack_require__("../../../../../src/app/menu/category/_category.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__shared_backend_service__["a" /* BackendService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared_backend_service__["a" /* BackendService */]) === "function" && _c || Object])
], CategoryComponent);

var _a, _b, _c;
//# sourceMappingURL=category.component.js.map

/***/ }),

/***/ "../../../../../src/app/menu/category/category.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__shared_backend_service__ = __webpack_require__("../../../../../src/app/shared/backend.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Category; });

var Category = (function () {
    function Category(name, imageUrl, shortName, description) {
        this.name = name;
        this.imageUrl = imageUrl;
        this.shortName = shortName;
        this.description = description;
        this.description = description || '';
    }
    // Category.fromJSON()
    Category.fromJSON = function (json) {
        var imageUrl = this.getCategoryImageUrl(json.short_name);
        return new Category(json.name, imageUrl, json.short_name, json.special_instructions);
    };
    Category.getCategoryImageUrl = function (shortName) {
        return __WEBPACK_IMPORTED_MODULE_0__shared_backend_service__["a" /* BackendService */].BASE_URL + "images/menu/" + shortName + "/" + shortName + ".jpg";
    };
    return Category;
}());

//# sourceMappingURL=category.model.js.map

/***/ }),

/***/ "../../../../../src/app/menu/menu-detail/_menu-detail.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Lora);", ""]);

// module
exports.push([module.i, ".pd-font-lora {\n  font-family: 'Lora', serif;\n  font-style: italic; }\n\n@-webkit-keyframes spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg); }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg); } }\n\n@keyframes spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg); }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg); } }\n\n.loading {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  position: relative;\n  margin: 20px; }\n  .loading:before {\n    content: '';\n    position: absolute;\n    width: 100%;\n    height: 100%;\n    background-color: #ffffff; }\n  .loading:after {\n    content: '';\n    z-index: 1;\n    border-radius: 50%;\n    width: 60px;\n    height: 60px;\n    border: 0.25rem solid rgba(183, 20, 39, 0.2);\n    border-top-color: #B71427;\n    -webkit-animation: spin 0.75s infinite linear;\n            animation: spin 0.75s infinite linear;\n    border-style: double;\n    border-width: .5rem; }\n\n.pd-border-highlight {\n  border: 2px solid #404040;\n  cursor: pointer;\n  position: relative;\n  transition: all .1s linear; }\n  .pd-border-highlight img {\n    width: 100%; }\n  .pd-border-highlight .text {\n    position: absolute;\n    width: 100%;\n    bottom: 0;\n    display: block;\n    padding: 10px;\n    font-size: 20px;\n    color: #ffffff;\n    text-transform: uppercase;\n    background: rgba(0, 0, 0, 0.6); }\n  .pd-border-highlight:hover {\n    transition: all .2s linear;\n    box-shadow: 0 1px 5px 1px #6DBDD6;\n    -webkit-transform: scale(1.1);\n            transform: scale(1.1); }\n\n.pd-font-title {\n  font-size: 36px;\n  font-weight: 900; }\n\n.pd-back-btn {\n  float: left;\n  cursor: pointer;\n  font-size: 20px;\n  color: #557c3e;\n  width: 100%;\n  text-align: left;\n  margin-bottom: 5px; }\n  .pd-back-btn:before {\n    content: \"\\F0A5\";\n    font-family: FontAwesome;\n    margin-right: 5px; }\n\n.pd-menu-detail {\n  margin: 20px 0; }\n  .pd-menu-detail__top {\n    padding: 0 15px; }\n  .pd-menu-detail__list {\n    margin: 40px 0 20px; }\n    .pd-menu-detail__list_item {\n      padding: 0 7.5px;\n      margin-bottom: 20px; }\n      .pd-menu-detail__list_item_image-code {\n        position: relative; }\n        .pd-menu-detail__list_item_image-code .code {\n          position: absolute;\n          bottom: 0;\n          right: 0;\n          padding: 5px 30px;\n          background: #557c3e;\n          color: #ffffff; }\n      .pd-menu-detail__list_item_price {\n        font-size: 20px;\n        font-weight: 900;\n        margin-top: 5px; }\n        .pd-menu-detail__list_item_price .portion {\n          font-size: 12px; }\n      .pd-menu-detail__list_item img {\n        width: 100%; }\n      .pd-menu-detail__list_item .left, .pd-menu-detail__list_item .right {\n        padding: 0 7.5px; }\n      .pd-menu-detail__list_item h3 {\n        margin-top: 0;\n        font-size: 26px; }\n        .pd-menu-detail__list_item h3 + p {\n          font-style: italic; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/menu/menu-detail/menu-detail.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row text-center pd-menu-detail\">\n  <span\n    class=\"pd-back-btn\"\n    (click)=\"onBack()\">back</span>\n  \n  <div class=\"pd-menu-detail__top\">\n      <h1 class=\"pd-font-title\">{{ cName }}</h1>\n      <p>{{ cDescription }}</p>\n  </div>\n\n  <div\n    *ngIf=\"menuDetailList\"\n    class=\"row pd-menu-detail__list\">\n    <div\n      *ngFor=\"let detail of menuDetailList\"\n      class=\"col-lg-6 col-md-6 col-sm-12 col-xs-12 pd-menu-detail__list_item\">\n        <div class=\"col-lg-6 col-md-6 col-sm-6 col-xs-12 text-right left\">\n          <div class=\"pd-menu-detail__list_item_image-code\">\n            <img [src]=\"detail.imageUrl\" [alt]=\"detail.name\">\n            <span class=\"code\">{{ detail.shortName }}</span>\n          </div>\n          <div class=\"pd-menu-detail__list_item_price\">\n            {{ detail.priceSmall | currency:'USD':true }}\n            <span class=\"portion\">{{ detail.smallPortionName }}</span>\n            {{ detail.priceLarge | currency:'USD':true }}\n            <span class=\"portion\">{{ detail.largePortionName }}</span>\n          </div>\n        </div>\n        <div class=\"col-lg-6 col-md-6 col-sm-6 col-xs-12 text-left right\">\n          <h3>{{ detail.name }}</h3>\n          <p>{{ detail.description }}</p>\n        </div>\n    </div>\n  </div>\n\n</div>"

/***/ }),

/***/ "../../../../../src/app/menu/menu-detail/menu-detail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_backend_service__ = __webpack_require__("../../../../../src/app/shared/backend.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__menu_detail_model__ = __webpack_require__("../../../../../src/app/menu/menu-detail/menu-detail.model.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuDetailComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};




var MenuDetailComponent = (function () {
    function MenuDetailComponent(route, router, backendService) {
        this.route = route;
        this.router = router;
        this.backendService = backendService;
    }
    MenuDetailComponent.prototype.ngOnInit = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var shortName;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        shortName = this.route.snapshot.params.id;
                        return [4 /*yield*/, this.backendService.getCategoryContent(shortName)
                                .then(function (items) {
                                _this.menuDetailList = items.menu_items.map(function (item) { return __WEBPACK_IMPORTED_MODULE_3__menu_detail_model__["a" /* MenuDetail */].fromJSON(item); });
                                _this.cName = items.category.name + ' Menu';
                                _this.cDescription = items.category.special_instructions;
                            })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    MenuDetailComponent.prototype.onBack = function () {
        this.router.navigate(['../'], { relativeTo: this.route });
    };
    return MenuDetailComponent;
}());
MenuDetailComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-menu-detail',
        template: __webpack_require__("../../../../../src/app/menu/menu-detail/menu-detail.component.html"),
        styles: [__webpack_require__("../../../../../src/app/menu/menu-detail/_menu-detail.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__shared_backend_service__["a" /* BackendService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared_backend_service__["a" /* BackendService */]) === "function" && _c || Object])
], MenuDetailComponent);

var _a, _b, _c;
//# sourceMappingURL=menu-detail.component.js.map

/***/ }),

/***/ "../../../../../src/app/menu/menu-detail/menu-detail.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__shared_backend_service__ = __webpack_require__("../../../../../src/app/shared/backend.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuDetail; });

var MenuDetail = (function () {
    function MenuDetail(name, shortName, description, priceSmall, priceLarge, smallPortionName, largePortionName, imageUrl) {
        this.name = name;
        this.shortName = shortName;
        this.description = description;
        this.priceSmall = priceSmall;
        this.priceLarge = priceLarge;
        this.smallPortionName = smallPortionName;
        this.largePortionName = largePortionName;
        this.imageUrl = imageUrl;
    }
    MenuDetail.fromJSON = function (json) {
        var imageUrl = this.getMenuItemImageUrl(json.short_name);
        return new MenuDetail(json.name, json.short_name, json.description, json.price_small, json.price_large, json.small_portion_name, json.large_portion_name, this.getMenuItemImageUrl(json.short_name));
    };
    MenuDetail.getMenuItemImageUrl = function (shortName) {
        return __WEBPACK_IMPORTED_MODULE_0__shared_backend_service__["a" /* BackendService */].BASE_URL + "images/" + shortName + ".jpg";
    };
    return MenuDetail;
}());

//# sourceMappingURL=menu-detail.model.js.map

/***/ }),

/***/ "../../../../../src/app/menu/menu.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row text-center pd-menu\">\n\n  <h1 class=\"pd-font-title\">Menu Categories</h1>\n  <p>Substituting white rice with brown rice or fried rice after 3:00pm will be $1.50 for a pint and $2.50 for a quart.</p>\n    \n  <div class=\"row pd-menu__list\">\n    <div\n      class=\"col-lg-3 col-md-3 col-sm-4 col-xs-6 pd-menu__list_item\"\n      *ngFor=\"let category of categories\">\n      <app-category\n        [category]=\"category\">\n      </app-category>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/menu/menu.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_backend_service__ = __webpack_require__("../../../../../src/app/shared/backend.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};


var MenuComponent = (function () {
    function MenuComponent(backendService) {
        this.backendService = backendService;
    }
    MenuComponent.prototype.ngOnInit = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.backendService.loading.next(true);
                        return [4 /*yield*/, this.backendService.getCategories()
                                .then(function (categories) { return _this.categories = categories; })];
                    case 1:
                        _a.sent();
                        this.backendService.loading.next(false);
                        return [2 /*return*/];
                }
            });
        });
    };
    return MenuComponent;
}());
MenuComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-menu',
        template: __webpack_require__("../../../../../src/app/menu/menu.component.html"),
        styles: [__webpack_require__("../../../../../src/app/menu/_menu.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_backend_service__["a" /* BackendService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared_backend_service__["a" /* BackendService */]) === "function" && _a || Object])
], MenuComponent);

var _a;
//# sourceMappingURL=menu.component.js.map

/***/ }),

/***/ "../../../../../src/app/not-found/not-found.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"text-center pd-notfound\" style=\"padding: 30px 0;\">\n  <h1 style=\"margin-bottom: 20px\">404</h1>\n  <p>Ooops, something went wrong.</p>\n</div>"

/***/ }),

/***/ "../../../../../src/app/not-found/not-found.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotFoundComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NotFoundComponent = (function () {
    function NotFoundComponent() {
    }
    NotFoundComponent.prototype.ngOnInit = function () {
    };
    return NotFoundComponent;
}());
NotFoundComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-not-found',
        template: __webpack_require__("../../../../../src/app/not-found/not-found.component.html")
    }),
    __metadata("design:paramtypes", [])
], NotFoundComponent);

//# sourceMappingURL=not-found.component.js.map

/***/ }),

/***/ "../../../../../src/app/shared/backend.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__menu_category_category_model__ = __webpack_require__("../../../../../src/app/menu/category/category.model.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BackendService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var BackendService = BackendService_1 = (function () {
    function BackendService(http) {
        this.http = http;
        this.loading = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Subject"]();
    }
    BackendService.prototype.getCategories = function () {
        return this.http.get(BackendService_1.BASE_URL + "/categories.json")
            .toPromise()
            .then(function (response) { return response.json(); })
            .then(function (categories) {
            return categories
                .map(function (category) {
                return __WEBPACK_IMPORTED_MODULE_3__menu_category_category_model__["a" /* Category */].fromJSON(category);
            });
        })
            .catch(function (error) {
            console.log('error: ', error);
            return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Observable"].throw('Ooopp... Something went wrong');
        });
    };
    BackendService.prototype.getCategoryContent = function (shortName) {
        return this.http.get(BackendService_1.BASE_URL + "menu_items.json?category=" + shortName)
            .toPromise()
            .then(function (response) {
            return response.json();
        })
            .catch(function (error) {
            console.log('error: ', error);
            return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Observable"].throw('Ooopp... Something went wrong');
        });
    };
    BackendService.prototype.storeContactInfo = function (contact) {
        return this.http.post(BackendService_1.FIREBASE_URL + "/contact.json", contact);
    };
    return BackendService;
}());
BackendService.BASE_URL = 'https://duong-restaurant-server.herokuapp.com/';
// Use Firebase to store Contact Info
BackendService.FIREBASE_URL = 'https://fir-restaurant-a9dc8.firebaseio.com/';
BackendService = BackendService_1 = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], BackendService);

var BackendService_1, _a;
//# sourceMappingURL=backend.service.js.map

/***/ }),

/***/ "../../../../../src/app/shared/dropdown.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DropdownDirective; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DropdownDirective = (function () {
    function DropdownDirective() {
        this.isOpen = false;
    }
    DropdownDirective.prototype.toggleOpen = function () {
        this.isOpen = !this.isOpen;
    };
    return DropdownDirective;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostBinding"])('class.open'),
    __metadata("design:type", Object)
], DropdownDirective.prototype, "isOpen", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('click'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], DropdownDirective.prototype, "toggleOpen", null);
DropdownDirective = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
        selector: '[appDropdown]'
    })
], DropdownDirective);

//# sourceMappingURL=dropdown.directive.js.map

/***/ }),

/***/ "../../../../../src/app/sidebar/_sidebar.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Lora);", ""]);

// module
exports.push([module.i, ".pd-font-lora {\n  font-family: 'Lora', serif;\n  font-style: italic; }\n\n@-webkit-keyframes spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg); }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg); } }\n\n@keyframes spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg); }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg); } }\n\n.loading {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  position: relative;\n  margin: 20px; }\n  .loading:before {\n    content: '';\n    position: absolute;\n    width: 100%;\n    height: 100%;\n    background-color: #ffffff; }\n  .loading:after {\n    content: '';\n    z-index: 1;\n    border-radius: 50%;\n    width: 60px;\n    height: 60px;\n    border: 0.25rem solid rgba(183, 20, 39, 0.2);\n    border-top-color: #B71427;\n    -webkit-animation: spin 0.75s infinite linear;\n            animation: spin 0.75s infinite linear;\n    border-style: double;\n    border-width: .5rem; }\n\n.pd-border-highlight {\n  border: 2px solid #404040;\n  cursor: pointer;\n  position: relative;\n  transition: all .1s linear; }\n  .pd-border-highlight img {\n    width: 100%; }\n  .pd-border-highlight .text {\n    position: absolute;\n    width: 100%;\n    bottom: 0;\n    display: block;\n    padding: 10px;\n    font-size: 20px;\n    color: #ffffff;\n    text-transform: uppercase;\n    background: rgba(0, 0, 0, 0.6); }\n  .pd-border-highlight:hover {\n    transition: all .2s linear;\n    box-shadow: 0 1px 5px 1px #6DBDD6;\n    -webkit-transform: scale(1.1);\n            transform: scale(1.1); }\n\n.pd-font-title {\n  font-size: 36px;\n  font-weight: 900; }\n\n.pd-back-btn {\n  float: left;\n  cursor: pointer;\n  font-size: 20px;\n  color: #557c3e;\n  width: 100%;\n  text-align: left;\n  margin-bottom: 5px; }\n  .pd-back-btn:before {\n    content: \"\\F0A5\";\n    font-family: FontAwesome;\n    margin-right: 5px; }\n\n.pd-sidebar {\n  position: fixed;\n  top: 250px;\n  right: -15px;\n  z-index: 2;\n  margin-bottom: 0;\n  padding-left: 0; }\n  .pd-sidebar li {\n    list-style-type: none;\n    margin-bottom: 7px; }\n  .pd-sidebar a {\n    display: inline-block;\n    padding: 8px 15px;\n    font-size: 20px;\n    color: #ffffff;\n    min-width: 55px;\n    -webkit-transform: perspective(1px) translateZ(0);\n    transform: perspective(1px) translateZ(0);\n    box-shadow: 0 0 1px transparent;\n    transition-duration: 0.2s;\n    transition-property: -webkit-transform;\n    transition-property: transform;\n    transition-property: transform, -webkit-transform; }\n    .pd-sidebar a:hover {\n      -webkit-transform: translateX(-10px);\n      transform: translateX(-8px); }\n    .pd-sidebar a:hover, .pd-sidebar a:active, .pd-sidebar a:focus {\n      text-decoration: none; }\n    .pd-sidebar a.fa-facebook {\n      background-color: #3b5998; }\n    .pd-sidebar a.fa-linkedin {\n      background-color: #0077B5; }\n    .pd-sidebar a.fa-code-fork {\n      background-color: #333; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/sidebar/sidebar.component.html":
/***/ (function(module, exports) {

module.exports = "<ul class=\"pd-sidebar\">\n  <li>\n    <a href=\"https://www.facebook.com/pado.duongpham\" \n    target=\"_blank\"\n    class=\"fa fa-facebook\"></a>\n  </li>\n  <li>\n    <a href=\"https://www.linkedin.com/in/duong-pham-88b33335/\" \n    target=\"_blank\"\n    class=\"fa fa-linkedin\"></a>\n  </li>\n  <li>\n    <a href=\"https://github.com/thaiduongpham/demo-restaurant\" \n    target=\"_blank\"\n    class=\"fa fa-code-fork\"></a>\n  </li>\n</ul>"

/***/ }),

/***/ "../../../../../src/app/sidebar/sidebar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SidebarComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var SidebarComponent = (function () {
    function SidebarComponent() {
    }
    return SidebarComponent;
}());
SidebarComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-sidebar',
        template: __webpack_require__("../../../../../src/app/sidebar/sidebar.component.html"),
        styles: [__webpack_require__("../../../../../src/app/sidebar/_sidebar.scss")]
    })
], SidebarComponent);

//# sourceMappingURL=sidebar.component.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 1:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[1]);
//# sourceMappingURL=main.bundle.js.map