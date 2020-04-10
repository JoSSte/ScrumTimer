(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/navbar/navbar.component */ "./src/app/components/navbar/navbar.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




class AppComponent {
    constructor() {
        this.title = 'app';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 3, vars: 0, consts: [[1, "container"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-navbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__["NavbarComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], null, null); })();


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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _pipes_hhmmss_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pipes/hhmmss.pipe */ "./src/app/pipes/hhmmss.pipe.ts");
/* harmony import */ var _services_participant_participant_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./services/participant/participant.service */ "./src/app/services/participant/participant.service.ts");
/* harmony import */ var _services_settings_settings_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./services/settings/settings.service */ "./src/app/services/settings/settings.service.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/navbar/navbar.component */ "./src/app/components/navbar/navbar.component.ts");
/* harmony import */ var _components_timer_timer_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/timer/timer.component */ "./src/app/components/timer/timer.component.ts");
/* harmony import */ var _components_participant_list_participant_list_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/participant-list/participant-list.component */ "./src/app/components/participant-list/participant-list.component.ts");
/* harmony import */ var _components_settings_settings_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/settings/settings.component */ "./src/app/components/settings/settings.component.ts");
/* harmony import */ var _components_help_help_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/help/help.component */ "./src/app/components/help/help.component.ts");





//import { Timer } from 'angular-timer'; // AngularJS - not 4??

//Services


// Components








const appRoutes = [
    { path: '', component: _components_timer_timer_component__WEBPACK_IMPORTED_MODULE_10__["TimerComponent"] },
    { path: 'timer', component: _components_timer_timer_component__WEBPACK_IMPORTED_MODULE_10__["TimerComponent"] },
    { path: 'participants', component: _components_participant_list_participant_list_component__WEBPACK_IMPORTED_MODULE_11__["ParticipantListComponent"] },
    { path: 'settings', component: _components_settings_settings_component__WEBPACK_IMPORTED_MODULE_12__["SettingsComponent"] },
    { path: 'help', component: _components_help_help_component__WEBPACK_IMPORTED_MODULE_13__["HelpComponent"] }
    //{ path: '', component: Component }
];
class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [
        _services_participant_participant_service__WEBPACK_IMPORTED_MODULE_6__["ParticipantService"],
        _services_settings_settings_service__WEBPACK_IMPORTED_MODULE_7__["SettingsService"],
        _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"],
        { provide: _angular_common__WEBPACK_IMPORTED_MODULE_4__["LocationStrategy"], useClass: _angular_common__WEBPACK_IMPORTED_MODULE_4__["HashLocationStrategy"] }
    ], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(appRoutes)
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"],
        _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_9__["NavbarComponent"],
        _components_timer_timer_component__WEBPACK_IMPORTED_MODULE_10__["TimerComponent"],
        _components_participant_list_participant_list_component__WEBPACK_IMPORTED_MODULE_11__["ParticipantListComponent"],
        _components_settings_settings_component__WEBPACK_IMPORTED_MODULE_12__["SettingsComponent"],
        _pipes_hhmmss_pipe__WEBPACK_IMPORTED_MODULE_5__["SecondsPipe"],
        _components_help_help_component__WEBPACK_IMPORTED_MODULE_13__["HelpComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"],
                    _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_9__["NavbarComponent"],
                    _components_timer_timer_component__WEBPACK_IMPORTED_MODULE_10__["TimerComponent"],
                    _components_participant_list_participant_list_component__WEBPACK_IMPORTED_MODULE_11__["ParticipantListComponent"],
                    _components_settings_settings_component__WEBPACK_IMPORTED_MODULE_12__["SettingsComponent"],
                    _pipes_hhmmss_pipe__WEBPACK_IMPORTED_MODULE_5__["SecondsPipe"],
                    _components_help_help_component__WEBPACK_IMPORTED_MODULE_13__["HelpComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(appRoutes)
                ],
                providers: [
                    _services_participant_participant_service__WEBPACK_IMPORTED_MODULE_6__["ParticipantService"],
                    _services_settings_settings_service__WEBPACK_IMPORTED_MODULE_7__["SettingsService"],
                    _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"],
                    { provide: _angular_common__WEBPACK_IMPORTED_MODULE_4__["LocationStrategy"], useClass: _angular_common__WEBPACK_IMPORTED_MODULE_4__["HashLocationStrategy"] }
                ],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/components/help/help.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/help/help.component.ts ***!
  \***************************************************/
/*! exports provided: HelpComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HelpComponent", function() { return HelpComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class HelpComponent {
    constructor() { }
    ngOnInit() {
    }
}
HelpComponent.ɵfac = function HelpComponent_Factory(t) { return new (t || HelpComponent)(); };
HelpComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HelpComponent, selectors: [["app-help"]], decls: 27, vars: 0, consts: [[1, "container"], [1, "fa", "fa-users"], [1, "fa", "fa-clock-o"], [1, "btn", "btn-outline-success"], [1, "fa", "fa-hourglass-start"]], template: function HelpComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "What is it?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " A Scrum Timer! - see [some link on the web] for more details f you don't know what that is... ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "How to use");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "ol");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Go to ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "i", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " Participants");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " and make sure that everyone you want in the Scrum Timer ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " Go to the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "i", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " Timer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " and mark anyone who is not present as absent. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "click the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "i", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, " start button to start the timer ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Click the next button for each subsequent participant, and finally the stop button");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaGVscC9oZWxwLmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HelpComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-help',
                templateUrl: './help.component.html',
                styleUrls: ['./help.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/components/navbar/navbar.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.ts ***!
  \*******************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



const _c0 = function () { return ["active"]; };
const _c1 = function () { return ["timer"]; };
const _c2 = function () { return ["participants"]; };
const _c3 = function () { return ["settings"]; };
class NavbarComponent {
    constructor() { }
    ngOnInit() {
    }
}
NavbarComponent.ɵfac = function NavbarComponent_Factory(t) { return new (t || NavbarComponent)(); };
NavbarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NavbarComponent, selectors: [["app-navbar"]], decls: 23, vars: 14, consts: [[1, "navbar", "navbar-dark", "bg-dark", "navbar-expand-md"], ["href", "#", 1, "navbar-brand"], ["type", "button", "data-toggle", "collapse", "data-target", "#ScrumNavBar", "aria-controls", "ScrumNavBar", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler"], [1, "navbar-toggler-icon"], ["id", "ScrumNavBar", 1, "collapse", "navbar-collapse"], [1, "navbar-nav", "mr-auto"], [1, "nav-item", 3, "routerLinkActive"], ["href", "#", 1, "nav-link", 3, "routerLink"], [1, "fa", "fa-clock-o"], [1, "fa", "fa-users"], [1, "fa", "fa-cog"], ["href", "#", "routerLink", "/help", 1, "nav-link"], [1, "fa", "fa-question-circle"]], template: function NavbarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "SCRUM Timer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ul", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Timer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " Participants");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " Settings");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, " Help");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActive", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](7, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](8, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActive", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](9, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](10, _c2));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActive", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](11, _c3));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](12, _c3));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActive", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](13, _c0));
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkActive"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbmF2YmFyL25hdmJhci5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavbarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-navbar',
                templateUrl: './navbar.component.html',
                styleUrls: ['./navbar.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/components/participant-list/participant-list.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/components/participant-list/participant-list.component.ts ***!
  \***************************************************************************/
/*! exports provided: ParticipantListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ParticipantListComponent", function() { return ParticipantListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_participant_participant_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/participant/participant.service */ "./src/app/services/participant/participant.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");






function ParticipantListComponent_tr_12_Template(rf, ctx) { if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ParticipantListComponent_tr_12_Template_button_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r22); const participant_r20 = ctx.$implicit; const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r21.removeParticipant(participant_r20); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "i", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const participant_r20 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", participant_r20.init, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", participant_r20.name, " ");
} }
class ParticipantListComponent {
    constructor(participantService) {
        this.participantService = participantService;
        this.init = "";
        this.name = "";
        this.jsonParticipants = "";
    }
    ngOnInit() {
        this.participantList = this.participantService.getParticipants();
    }
    addParticipant() {
        if (this.init.length > 1 && this.name.length > 2)
            this.participantService.addParticipant({ "init": this.init, "name": this.name });
        this.init = "";
        this.name = "";
    }
    removeParticipant(participant) {
        this.participantService.removeParticipant(participant);
    }
    exportParticipants() {
        this.jsonParticipants = this.participantService.exportParticipants();
    }
    importParticipants() {
        this.participantService.importParticipants(this.jsonParticipants);
        this.participantList = this.participantService.getParticipants();
        this.jsonParticipants = "";
    }
    sortParticipants() {
        console.log("[sortParticipants()] This function has not yet been implemented");
    }
    isJsonString(str) {
        try {
            JSON.parse(str);
        }
        catch (e) {
            return false;
        }
        return true;
    }
}
ParticipantListComponent.ɵfac = function ParticipantListComponent_Factory(t) { return new (t || ParticipantListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_participant_participant_service__WEBPACK_IMPORTED_MODULE_1__["ParticipantService"])); };
ParticipantListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ParticipantListComponent, selectors: [["app-participant-list"]], decls: 35, vars: 9, consts: [[1, "row"], [1, "col-md-10", "offset-md-3"], [3, "submit"], [1, "table", "table-striped"], [4, "ngFor", "ngForOf"], ["type", "text", "id", "init", "name", "init", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "text", "id", "name", "name", "name", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "submit", 1, "btn", "btn-sm", "btn-outline-primary", 3, "disabled"], [1, "fa", "fa-plus"], ["cols", "50", "rows", "5", "id", "jsonParticipants", "name", "jsonParticipants", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "container"], [1, "btn", "btn-sm", "btn-outline-dark", 3, "disabled", "click"], [1, "fa", "fa-upload"], [1, "btn", "btn-sm", "btn-outline-success", 3, "disabled", "click"], [1, "fa", "fa-download"], [1, "btn", "btn-sm", "btn-outline-danger", 3, "disabled", "click"], [1, "fa", "fa-eraser"], [1, "btn", "btn-outline-danger", "btn-sm", 3, "click"], [1, "fa", "fa-trash-o", "fa-lg"]], template: function ParticipantListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "form", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("submit", function ParticipantListComponent_Template_form_submit_2_listener() { return ctx.addParticipant(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "table", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Initials");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, ParticipantListComponent_tr_12_Template, 8, 2, "tr", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "tfoot");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ParticipantListComponent_Template_input_ngModelChange_16_listener($event) { return ctx.init = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ParticipantListComponent_Template_input_ngModelChange_18_listener($event) { return ctx.name = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, " Add");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "textarea", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ParticipantListComponent_Template_textarea_ngModelChange_24_listener($event) { return ctx.jsonParticipants = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ParticipantListComponent_Template_button_click_26_listener() { return ctx.exportParticipants(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ParticipantListComponent_Template_button_click_29_listener() { return ctx.importParticipants(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "i", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, " Import List");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ParticipantListComponent_Template_button_click_32_listener() { return ctx.jsonParticipants = ""; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "i", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, " Clear");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.participantList);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.init);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.name == "" || ctx.init == "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.jsonParticipants);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.participantList.length == 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Export list (", ctx.participantList.length, ")");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.isJsonString(ctx.jsonParticipants));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.jsonParticipants.length == 0);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcGFydGljaXBhbnQtbGlzdC9wYXJ0aWNpcGFudC1saXN0LmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ParticipantListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-participant-list',
                templateUrl: './participant-list.component.html',
                styleUrls: ['./participant-list.component.css']
            }]
    }], function () { return [{ type: _services_participant_participant_service__WEBPACK_IMPORTED_MODULE_1__["ParticipantService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/components/settings/settings.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/settings/settings.component.ts ***!
  \***********************************************************/
/*! exports provided: SettingsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsComponent", function() { return SettingsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_settings_settings_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/settings/settings.service */ "./src/app/services/settings/settings.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");





class SettingsComponent {
    constructor(settings) {
        this.settings = settings;
    }
    ngOnInit() {
        this.useGlobalMaxTime = this.settings.getUseGlobalMaxTime();
        this.globalMaxTime = this.settings.getGlobalMaxTime();
    }
    saveSettings() {
        this.settings.setGlobalMaxTime(this.globalMaxTime);
        this.settings.setUseGlobelMaxTime(this.useGlobalMaxTime);
        this.settings.saveSettings();
    }
}
SettingsComponent.ɵfac = function SettingsComponent_Factory(t) { return new (t || SettingsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_settings_settings_service__WEBPACK_IMPORTED_MODULE_1__["SettingsService"])); };
SettingsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SettingsComponent, selectors: [["app-settings"]], decls: 13, vars: 2, consts: [["action", ""], [1, "input-group"], [1, "input-group-addon"], ["type", "checkbox", "name", "useGlobalMaxTime", "aria-label", "Use Global max Time", 3, "ngModel", "ngModelChange"], ["for", "globalMaxTime", 1, "input-group-addon"], ["name", "globalMaxTime", "id", "globalMaxTime", "type", "number", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "submit", "value", "submit", 1, "btn", "btn-primary", "form-control", 3, "click"]], template: function SettingsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Settings");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " From here, you will be able to choose whether you want an overall time goal (e.g. 15 minutes), or a static time-per-person. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SettingsComponent_Template_input_ngModelChange_7_listener($event) { return ctx.useGlobalMaxTime = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "label", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Total Max Time");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SettingsComponent_Template_input_ngModelChange_10_listener($event) { return ctx.globalMaxTime = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SettingsComponent_Template_input_click_12_listener() { return ctx.saveSettings(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.useGlobalMaxTime);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.globalMaxTime);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["CheckboxControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2V0dGluZ3Mvc2V0dGluZ3MuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SettingsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-settings',
                templateUrl: './settings.component.html',
                styleUrls: ['./settings.component.css']
            }]
    }], function () { return [{ type: _services_settings_settings_service__WEBPACK_IMPORTED_MODULE_1__["SettingsService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/components/timer/timer.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/timer/timer.component.ts ***!
  \*****************************************************/
/*! exports provided: TimerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimerComponent", function() { return TimerComponent; });
/* harmony import */ var _services_settings_settings_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/settings/settings.service */ "./src/app/services/settings/settings.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_participant_participant_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/participant/participant.service */ "./src/app/services/participant/participant.service.ts");
/* harmony import */ var rxjs_Rx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/Rx */ "./node_modules/rxjs-compat/_esm2015/Rx.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _pipes_hhmmss_pipe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../pipes/hhmmss.pipe */ "./src/app/pipes/hhmmss.pipe.ts");










function TimerComponent_div_0_li_100_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "button", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function TimerComponent_div_0_li_100_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r7); const p_r5 = ctx.$implicit; const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r6.markAbsent(p_r5); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "i", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const p_r5 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx_r2.participantList.length <= 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", p_r5.name, "");
} }
const _c0 = function (a0) { return { "text-danger": a0 }; };
function TimerComponent_div_0_li_101_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "span", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](4, "Seconds");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const dp_r8 = ctx.$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"](" ", dp_r8.name, " [", dp_r8.init, "] - ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](6, _c0, dp_r8.time >= ctx_r3.individualTime));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](4, 4, dp_r8.time));
} }
function TimerComponent_div_0_li_102_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "button", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function TimerComponent_div_0_li_102_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r11); const ap_r9 = ctx.$implicit; const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r10.markPresent(ap_r9); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "i", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ap_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ap_r9.name, "");
} }
const _c1 = function (a0, a1, a2) { return { "progress-bar-animated": a0, "bg-warning": a1, "bg-danger": a2 }; };
const _c2 = function (a0) { return { "invisible": a0 }; };
function TimerComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Overall Progress");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Overall Time");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "i", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](16, "Seconds");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](17, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](23, "i", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](25, "Seconds");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](26, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function TimerComponent_div_0_Template_button_click_29_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r13); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r12.startTimer(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](30, "i", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function TimerComponent_div_0_Template_button_click_31_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r13); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r14.stopTimer(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](32, "i", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function TimerComponent_div_0_Template_button_click_33_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r13); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r15.resetTimer(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](34, "i", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function TimerComponent_div_0_Template_button_click_36_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r13); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r16.nextParticipant(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](37, "i", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](41, "i", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "a", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](44, "i", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](45, " Daily Question Card");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "a", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](47, "i", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](48, " Debug Information");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](50, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](53, "Debug info");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](54, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](55, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](56);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](57, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](58);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](59, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](60);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](61, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](62, "Stats ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](63, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](64, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](65);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](66, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](67);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](68, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](69);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](70, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](71);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](72, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](73);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](74, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](75);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](76, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](77);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](78, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](79);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](80, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](81, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](82, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](83, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](84, "Questions");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](85, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](86, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](87, "What did you do yesterday?");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](88, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](89, "What will you do today?");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](90, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](91, "Are you impeded in any way?");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](92, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](93, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](94, "Participants ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](95, "button", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function TimerComponent_div_0_Template_button_click_95_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r13); const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r17.shuffleParticipants(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](96, "i", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](97, "button", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function TimerComponent_div_0_Template_button_click_97_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r13); const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r18.sortParticipants(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](98, "i", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](99, "ul", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](100, TimerComponent_div_0_li_100_Template, 4, 2, "li", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](101, TimerComponent_div_0_li_101_Template, 5, 8, "li", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](102, TimerComponent_div_0_li_102_Template, 4, 1, "li", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("width", ctx_r0.totalPercent + "%");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", ctx_r0.totalPercent, "%");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("width", ctx_r0.totalTimePercent + "%");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction3"](39, _c1, ctx_r0.totalTimePercent < 100, ctx_r0.totalTimePercent > 75 && ctx_r0.totalTimePercent <= 95, ctx_r0.totalTimePercent > 95));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](43, _c2, ctx_r0.totalTimePercent <= 95));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](16, 35, ctx_r0.totalMaxTime - ctx_r0.currentTotalElapsed));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", ctx_r0.currentParticipant.name, " Progress");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("width", ctx_r0.currentPercent + "%");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction3"](45, _c1, ctx_r0.currentPercent < 100, ctx_r0.currentPercent > 75 && ctx_r0.currentPercent <= 95, ctx_r0.currentPercent > 95));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](49, _c2, ctx_r0.currentPercent <= 95));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](25, 37, ctx_r0.individualTime - ctx_r0.currentElapsed), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx_r0.participantList.length == 0 || ctx_r0.timerActive);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx_r0.totalPercent == 0 && ctx_r0.currentPercent == 0 || !ctx_r0.timerActive);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx_r0.participantList.length <= 1 || !ctx_r0.timerActive);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r0.participantList.length > 1 ? "(" + ctx_r0.participantList[1].init + ")" : "", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Total ", ctx_r0.totalPercent, "% Complete");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Current ", ctx_r0.currentPercent, "% Complete");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Total Elapsed: ", ctx_r0.currentTotalElapsed, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Participants Left: ", ctx_r0.participantList.length, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Participants Done: ", ctx_r0.doneParticipants.length, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Participants Absent: ", ctx_r0.absentParticipants.length, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Diff: ", ctx_r0.diff, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Elapsed: ", ctx_r0.currentElapsed, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Elapsed: ", ctx_r0.totalElapsed, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Partipicant Time: ", ctx_r0.individualTime, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("Current Participant: ", ctx_r0.currentParticipant.name, " [", ctx_r0.currentParticipant.init, "]");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx_r0.participantList.length <= 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx_r0.participantList.length <= 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r0.participantList);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r0.doneParticipants);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r0.absentParticipants);
} }
const _c3 = function () { return ["participants"]; };
function TimerComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "There are no participants in your list. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "To start using the Scrum Timer, please go to the ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "a", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "participant list");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, " and add some people to the list, either manually or by importing a list from a colleague.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Note that the Scrum Timer stores participants in local storage. Nothing is sent to the server. This is to provide anonymity and be compliant with corporate policies.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](1, _c3));
} }
class TimerComponent {
    constructor(participantService, settingsService, elm) {
        this.participantService = participantService;
        this.settingsService = settingsService;
        this.absentParticipants = Array();
        this.doneParticipants = Array();
        // variables for session
        this.totalMaxTime = this.settingsService.getGlobalMaxTime();
        this.recommendedIndividualTime = 120;
        this.totalPercent = 0;
        this.totalTimePercent = 0;
        this.totalElapsed = 0;
        this.currentTotalElapsed = 0;
        // variables for indiviual
        this.individualMaxTime = 120;
        this.individualTime = this.individualMaxTime;
        this.currentPercent = 0;
        this.currentElapsed = 0;
        this.timerActive = false;
    }
    ngOnInit() {
        this.participantList = this.participantService.getParticipants();
        this.sortParticipants();
        if (this.settingsService.getUseGlobalMaxTime()) {
            this.individualTime = Math.round(this.settingsService.getGlobalMaxTime() /
                (this.participantList.length + this.doneParticipants.length));
        }
        else {
            this.individualTime = this.individualMaxTime;
        }
    }
    ngOnDestroy() {
        if (this.currentCounter != null) {
            this.stopTimer();
        }
    }
    stopTimer() {
        // save time for participant
        this.currentParticipant.time = this.currentElapsed;
        this.currentPercent = 0;
        // move first Participant to done participants
        if (this.participantList.length > 0) {
            this.doneParticipants.push(this.currentParticipant);
        }
        // remove the top participant
        this.participantList.splice(0, 1);
        // set progressbar to 100%
        this.currentPercent = 100;
        this.timerActive = false;
        // stop timer
        this.subscription.unsubscribe();
    }
    startTimer() {
        this.currentParticipant = this.participantList[0];
        this.future = new Date();
        // set the timer to a time in the future, based on "individualTime" seconds
        if (this.settingsService.getUseGlobalMaxTime()) {
            if (this.totalElapsed >= this.settingsService.getGlobalMaxTime()) {
                // 1 sec grace time :)
                this.individualTime = 1;
            }
            else {
                this.individualTime = Math.round((this.settingsService.getGlobalMaxTime() - this.totalElapsed) /
                    (this.participantList.length));
            }
        }
        else {
            this.individualTime = this.individualMaxTime;
        }
        this.future.setSeconds(this.future.getSeconds() + this.individualTime);
        // console.log(this.future);
        this.currentCounter = rxjs_Rx__WEBPACK_IMPORTED_MODULE_3__["Observable"].interval(1000).map((x) => {
            this.currentDiff = Math.floor((this.future.getTime() - new Date().getTime()) / 1000);
            this.currentElapsed = this.individualTime - this.currentDiff;
            this.currentPercent = Math.round((this.currentElapsed / this.individualTime) * 100);
            this.currentTotalElapsed = this.totalElapsed + this.currentElapsed;
            this.totalTimePercent = Math.round(((this.totalElapsed + this.currentElapsed) / this.totalMaxTime) * 100);
            return x;
        });
        this.subscription = this.currentCounter.subscribe((x) => this.currentDiff);
        this.timerActive = true;
    }
    nextParticipant() {
        // save time for participant
        this.participantList[0].time = this.currentElapsed;
        // add up total elapsed time
        this.totalElapsed += this.currentElapsed;
        this.currentElapsed = 0;
        this.currentDiff = 0;
        this.currentPercent = 0;
        // move first Participant to done participants
        this.doneParticipants.push(this.participantList[0]);
        // remove the top participant
        this.participantList.splice(0, 1);
        if (this.participantList.length > 0) {
            this.currentParticipant = this.participantList[0];
        }
        else {
            this.currentParticipant = { 'name': '', 'init': '' };
        }
        this.totalPercent = Math.round((this.doneParticipants.length / (this.participantList.length + this.doneParticipants.length)) * 100);
        this.totalTimePercent = Math.round(((this.totalElapsed + this.currentElapsed) / this.totalMaxTime) * 100);
        this.currentPercent = 0;
        this.currentDiff = 0;
        this.currentPercent = 0;
        this.timerActive = false;
        // stop timer
        this.subscription.unsubscribe();
        this.startTimer();
    }
    resetTimer() {
        this.stopTimer();
        // move all participants from done to present
        for (let i = this.doneParticipants.length - 1; i >= 0; i--) {
            // reset time taken
            this.doneParticipants[i].time = 0;
            this.participantList.push(this.doneParticipants[i]);
            this.doneParticipants.splice(i, 1);
        }
        // reset timers
        this.totalElapsed = 0;
        this.totalPercent = 0;
        this.totalTimePercent = 0;
        this.currentTotalElapsed = 0;
        this.currentPercent = 0;
        this.currentDiff = 0;
        this.currentParticipant = this.participantList[0];
        this.currentPercent = 0;
        this.currentElapsed = 0;
        this.individualTime = Math.round(this.settingsService.getGlobalMaxTime() /
            this.participantList.length);
        this.sortParticipants();
    }
    /**
     * Shuffles an array pseudo-randomly
     *
     * @param array
     */
    shuffle(array) {
        var currentIndex = array.length, temporaryValue, randomIndex;
        // While there remain elements to shuffle...
        while (0 !== currentIndex) {
            // Pick a remaining element...
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;
            // And swap it with the current element.
            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }
        return array;
    }
    shuffleParticipants() {
        this.participantList = this.shuffle(this.participantList);
        this.currentParticipant = this.participantList[0];
    }
    sortParticipants() {
        this.participantList.sort(function (a, b) {
            return a.name.localeCompare(b.name);
        });
        this.currentParticipant = this.participantList[0];
    }
    /**
     * Mark participant as absent.
     *
     * note that the last two participants cannot be marked as absent.
     *
     * @param participant Participant to mark as absent
     */
    markAbsent(participant) {
        if (this.participantList.length <= 2) {
            console.log('Cannot mark the last two participants absent.');
        }
        else {
            var idx = this.participantList.indexOf(participant);
            this.absentParticipants.push(participant);
            this.participantList.splice(idx, 1);
            this.currentParticipant = this.participantList[0];
        }
    }
    /**
     * Mark participant as present.
     *
     * @param participant Participant to mark as present
     */
    markPresent(participant) {
        var idx = this.absentParticipants.indexOf(participant);
        this.participantList.push(participant);
        this.absentParticipants.splice(idx, 1);
        // console.log(this.absentParticipants);
    }
}
TimerComponent.ɵfac = function TimerComponent_Factory(t) { return new (t || TimerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_participant_participant_service__WEBPACK_IMPORTED_MODULE_2__["ParticipantService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_settings_settings_service__WEBPACK_IMPORTED_MODULE_0__["SettingsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])); };
TimerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: TimerComponent, selectors: [["app-timer"]], decls: 2, vars: 2, consts: [["class", "container", 4, "ngIf"], ["class", "jumbotron", 4, "ngIf"], [1, "container"], [1, "progress"], ["role", "progressbar", "aria-valuenow", "40", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", "progress-bar-striped", "bg-success"], ["role", "progressbar", "aria-valuenow", "40", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", "progress-bar-striped", "bg-info", 3, "ngClass"], [1, "fa", "fa-exclamation-triangle", 3, "ngClass"], ["role", "progressbar", "aria-valuenow", "0", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", "progress-bar-striped", 3, "ngClass"], ["role", "toolbar", "aria-label", "Toolbar", 1, "btn-toolbar"], ["role", "group", 1, "btn-group", "mr-2"], ["title", "Start Timer", 1, "btn", "btn-outline-success", 3, "disabled", "click"], [1, "fa", "fa-hourglass-start"], ["title", "Stop Timer", 1, "btn", "btn-outline-danger", 3, "disabled", "click"], [1, "fa", "fa-hourglass-end"], ["title", "Reset", 1, "btn", "btn-outline-secondary", 3, "click"], [1, "fa", "fa-undo"], ["title", "Next participant", 1, "btn", "btn-outline-primary", 3, "disabled", "click"], [1, "fa", "fa-step-forward"], ["id", "btnGroupDrop1", "type", "button", "data-toggle", "dropdown", "aria-haspopup", "true", "aria-expanded", "false", 1, "btn", "btn-outline-secondary", "dropdown-toggle"], [1, "fa", "fa-ellipsis-v"], [1, "dropdown-menu"], ["href", "#", "data-toggle", "collapse", "data-target", "#Questions", "aria-expanded", "false", "aria-controls", "Questions", 1, "dropdown-item"], [1, "fa", "fa-question"], ["href", "#", "data-toggle", "collapse", "data-target", "#Debug", "aria-expanded", "false", "aria-controls", "Debug", 1, "dropdown-item"], [1, "fa", "fa-bug"], ["id", "Debug", 1, "collapse"], [1, "card", "card-body"], ["id", "Questions", 1, "collapse"], ["title", "Shuffle Participants", 1, "btn", "btn-sm", "btn-info", 3, "disabled", "click"], [1, "fa", "fa-random"], ["title", "Sort Participants", 1, "btn", "btn-sm", "btn-info", 3, "disabled", "click"], [1, "fa", "fa-sort-amount-asc"], [1, "list-group"], ["class", "list-group-item", 4, "ngFor", "ngForOf"], ["class", "list-group-item list-group-item-secondary", 4, "ngFor", "ngForOf"], ["class", "list-group-item list-group-item-danger", 4, "ngFor", "ngForOf"], [1, "list-group-item"], ["title", "Mark as absent", 1, "btn", "btn-outline-secondary", "btn-sm", 3, "disabled", "click"], [1, "fa", "fa-minus-circle"], [1, "list-group-item", "list-group-item-secondary"], [3, "ngClass"], [1, "list-group-item", "list-group-item-danger"], ["title", "Mark as present", 1, "btn", "btn-outline-secondary", "btn-sm", 3, "click"], [1, "fa", "fa-plus-circle"], [1, "jumbotron"], ["href", "#", 3, "routerLink"]], template: function TimerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, TimerComponent_div_0_Template, 103, 51, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, TimerComponent_div_1_Template, 10, 2, "div", 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.participantList.length > 0 || ctx.doneParticipants.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.participantList.length == 0 && ctx.doneParticipants.length == 0);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLinkWithHref"]], pipes: [_pipes_hhmmss_pipe__WEBPACK_IMPORTED_MODULE_6__["SecondsPipe"]], styles: [".progress[_ngcontent-%COMP%] {\r\n    position: relative;\r\n}\r\n\r\n.progress[_ngcontent-%COMP%] {\r\n    height: 40px;\r\n}\r\n\r\n.progress-bar[_ngcontent-%COMP%] {\r\n    height: 40px;\r\n}\r\n\r\n.progress[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    display: block;\r\n    width: 100%;\r\n    top: 50%;\r\n    margin-top: -10px;\r\n    color: black;\r\n    font-weight: bold;\r\n }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy90aW1lci90aW1lci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztFQUVFOztBQUVGO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsY0FBYztJQUNkLFdBQVc7SUFDWCxRQUFRO0lBQ1IsaUJBQWlCO0lBQ2pCLFlBQVk7SUFDWixpQkFBaUI7Q0FDcEIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3RpbWVyL3RpbWVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogUHJvZ3Jlc3MgYmFycyB3aXRoIGNlbnRlcmVkIHRleHRcclxuICovXHJcblxyXG4ucHJvZ3Jlc3Mge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG4ucHJvZ3Jlc3Mge1xyXG4gICAgaGVpZ2h0OiA0MHB4O1xyXG59XHJcblxyXG4ucHJvZ3Jlc3MtYmFyIHtcclxuICAgIGhlaWdodDogNDBweDtcclxufVxyXG5cclxuLnByb2dyZXNzIHNwYW4ge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHRvcDogNTAlO1xyXG4gICAgbWFyZ2luLXRvcDogLTEwcHg7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuIH0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](TimerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-timer',
                templateUrl: './timer.component.html',
                styleUrls: ['./timer.component.css']
            }]
    }], function () { return [{ type: _services_participant_participant_service__WEBPACK_IMPORTED_MODULE_2__["ParticipantService"] }, { type: _services_settings_settings_service__WEBPACK_IMPORTED_MODULE_0__["SettingsService"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }]; }, null); })();


/***/ }),

/***/ "./src/app/pipes/hhmmss.pipe.ts":
/*!**************************************!*\
  !*** ./src/app/pipes/hhmmss.pipe.ts ***!
  \**************************************/
/*! exports provided: SecondsPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SecondsPipe", function() { return SecondsPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class SecondsPipe {
    transform(totalseconds) {
        let prefix = '';
        if (totalseconds < 0) {
            totalseconds = Math.abs(totalseconds);
            prefix = '-';
        }
        const minutes = Math.floor(totalseconds / 60);
        const seconds = totalseconds % 60;
        return prefix + ("00" + minutes).slice(-2) + ":" + ("00" + seconds).slice(-2);
    }
}
SecondsPipe.ɵfac = function SecondsPipe_Factory(t) { return new (t || SecondsPipe)(); };
SecondsPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "Seconds", type: SecondsPipe, pure: true });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SecondsPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{ name: 'Seconds' }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/services/participant/participant.service.ts":
/*!*************************************************************!*\
  !*** ./src/app/services/participant/participant.service.ts ***!
  \*************************************************************/
/*! exports provided: ParticipantService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ParticipantService", function() { return ParticipantService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class ParticipantService {
    constructor() { }
    getParticipants() {
        if (localStorage.getItem('participants') === null) {
            this.participants = [];
        }
        else {
            this.participants = JSON.parse(localStorage.getItem('participants'));
        }
        return this.participants;
    }
    addParticipant(participant) {
        this.participants.unshift(participant);
        localStorage.setItem('participants', JSON.stringify(this.participants));
    }
    removeParticipant(participant) {
        for (let i = 0; i < this.participants.length; i++) {
            if (participant == this.participants[i]) {
                this.participants.splice(i, 1);
            }
        }
        localStorage.setItem('participants', JSON.stringify(this.participants));
    }
    exportParticipants() {
        return JSON.stringify(this.participants);
    }
    //overwrite localstorage, and refresh local list of participants from there...
    importParticipants(jsonParticipants) {
        localStorage.setItem('participants', jsonParticipants);
        this.exportParticipants();
    }
    compare(a, b) {
        if (a.last_nom < b.last_nom)
            return -1;
        if (a.last_nom > b.last_nom)
            return 1;
        return 0;
    }
}
ParticipantService.ɵfac = function ParticipantService_Factory(t) { return new (t || ParticipantService)(); };
ParticipantService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ParticipantService, factory: ParticipantService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ParticipantService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/services/settings/settings.service.ts":
/*!*******************************************************!*\
  !*** ./src/app/services/settings/settings.service.ts ***!
  \*******************************************************/
/*! exports provided: SettingsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsService", function() { return SettingsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


//TODO: save settings in localStorage
class SettingsService {
    constructor() {
        this.useGlobalMaxTime = true;
        this.globalMaxTime = 60 * 15;
    }
    getGlobalMaxTime() {
        if (localStorage.getItem('settings') === null) {
            this.globalMaxTime = 60 * 15;
        }
        else {
            this.globalMaxTime = JSON.parse(localStorage.getItem('settings'))[1];
        }
        return this.globalMaxTime;
    }
    setGlobalMaxTime(newTime) {
        this.globalMaxTime = newTime;
        this.saveSettings();
    }
    getUseGlobalMaxTime() {
        if (localStorage.getItem('settings') === null) {
            this.useGlobalMaxTime = true;
        }
        else {
            this.useGlobalMaxTime = JSON.parse(localStorage.getItem('settings'))[0];
        }
        return this.useGlobalMaxTime;
    }
    setUseGlobelMaxTime(useGMTime) {
        this.useGlobalMaxTime = useGMTime;
        this.saveSettings();
    }
    exportSettings() {
        return JSON.stringify([this.useGlobalMaxTime, this.globalMaxTime]);
    }
    saveSettings() {
        localStorage.setItem('settings', this.exportSettings());
    }
    //overwrite localstorage, and refresh local list of participants from there...
    importSettings(jsonSettings) {
        localStorage.setItem('participants', jsonSettings);
        this.exportSettings();
    }
}
SettingsService.ɵfac = function SettingsService_Factory(t) { return new (t || SettingsService)(); };
SettingsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: SettingsService, factory: SettingsService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SettingsService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return []; }, null); })();


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
const environment = {
    production: false
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.log(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\udvikling\ScrumTimer\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map