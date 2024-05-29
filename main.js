"use strict";
(self["webpackChunkscrum_timer"] = self["webpackChunkscrum_timer"] || []).push([["main"],{

/***/ 92:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppComponent: () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/navbar/navbar.component */ 9847);



class AppComponent {
  constructor() {
    this.title = 'ScrumTimer';
  }
  static #_ = this.ɵfac = function AppComponent_Factory(t) {
    return new (t || AppComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: AppComponent,
    selectors: [["app-root"]],
    decls: 3,
    vars: 0,
    consts: [[1, "container"]],
    template: function AppComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-navbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    },
    dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterOutlet, _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_0__.NavbarComponent],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 635:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppModule: () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/platform-browser */ 436);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common/http */ 6443);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _services_participant_participant_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./services/participant/participant.service */ 2509);
/* harmony import */ var _services_settings_settings_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/settings/settings.service */ 7709);
/* harmony import */ var _services_navbar_navbar_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/navbar/navbar.service */ 4891);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ 92);
/* harmony import */ var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/navbar/navbar.component */ 9847);
/* harmony import */ var _components_timer_timer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/timer/timer.component */ 4221);
/* harmony import */ var _components_participant_list_participant_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/participant-list/participant-list.component */ 6023);
/* harmony import */ var _components_settings_settings_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/settings/settings.component */ 2205);
/* harmony import */ var _components_help_help_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/help/help.component */ 8729);
/* harmony import */ var _pipes_secs_pipe__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pipes/secs.pipe */ 532);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 7580);





// import { Timer } from 'angular-timer'; // AngularJS - not 4??
// Services



// Components






// Pipes



const appRoutes = [{
  path: '',
  component: _components_timer_timer_component__WEBPACK_IMPORTED_MODULE_5__.TimerComponent
}, {
  path: 'timer',
  component: _components_timer_timer_component__WEBPACK_IMPORTED_MODULE_5__.TimerComponent
}, {
  path: 'popin',
  component: _components_timer_timer_component__WEBPACK_IMPORTED_MODULE_5__.TimerComponent
}, {
  path: 'participants',
  component: _components_participant_list_participant_list_component__WEBPACK_IMPORTED_MODULE_6__.ParticipantListComponent
}, {
  path: 'settings',
  component: _components_settings_settings_component__WEBPACK_IMPORTED_MODULE_7__.SettingsComponent
}, {
  path: 'help',
  component: _components_help_help_component__WEBPACK_IMPORTED_MODULE_8__.HelpComponent
}
// { path: '', component: Component }
];
class AppModule {
  static #_ = this.ɵfac = function AppModule_Factory(t) {
    return new (t || AppModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineNgModule"]({
    type: AppModule,
    bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__.AppComponent]
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineInjector"]({
    providers: [_services_participant_participant_service__WEBPACK_IMPORTED_MODULE_0__.ParticipantService, _services_settings_settings_service__WEBPACK_IMPORTED_MODULE_1__.SettingsService, _services_navbar_navbar_service__WEBPACK_IMPORTED_MODULE_2__.NavbarService, _angular_common__WEBPACK_IMPORTED_MODULE_11__.Location, {
      provide: _angular_common__WEBPACK_IMPORTED_MODULE_11__.LocationStrategy,
      useClass: _angular_common__WEBPACK_IMPORTED_MODULE_11__.HashLocationStrategy
    }],
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_12__.BrowserModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_13__.HttpClientModule, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.FormsModule, _angular_router__WEBPACK_IMPORTED_MODULE_15__.RouterModule.forRoot(appRoutes, {})]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsetNgModuleScope"](AppModule, {
    declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__.AppComponent, _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_4__.NavbarComponent, _components_timer_timer_component__WEBPACK_IMPORTED_MODULE_5__.TimerComponent, _components_participant_list_participant_list_component__WEBPACK_IMPORTED_MODULE_6__.ParticipantListComponent, _components_settings_settings_component__WEBPACK_IMPORTED_MODULE_7__.SettingsComponent, _components_help_help_component__WEBPACK_IMPORTED_MODULE_8__.HelpComponent],
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_12__.BrowserModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_13__.HttpClientModule, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.FormsModule, _angular_router__WEBPACK_IMPORTED_MODULE_15__.RouterModule, _pipes_secs_pipe__WEBPACK_IMPORTED_MODULE_9__.SecsPipe]
  });
})();

/***/ }),

/***/ 8729:
/*!***************************************************!*\
  !*** ./src/app/components/help/help.component.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HelpComponent: () => (/* binding */ HelpComponent)
/* harmony export */ });
/* harmony import */ var _package_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../package.json */ 8330);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);


class HelpComponent {
  constructor() {
    this.version = _package_json__WEBPACK_IMPORTED_MODULE_0__.version;
  }
  ngOnInit() {}
  static #_ = this.ɵfac = function HelpComponent_Factory(t) {
    return new (t || HelpComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: HelpComponent,
    selectors: [["app-help"]],
    decls: 57,
    vars: 1,
    consts: [[1, "container"], ["href", "https://en.wikipedia.org/wiki/Scrum_(software_development)#Daily_scrum", "target", "_blank"], [1, "fa", "fa-users"], [1, "fa", "fa-clock-o"], [1, "btn", "btn-outline-success"], [1, "fa", "fa-hourglass-start"], ["href", "https://github.com/JoSSte/ScrumTimer/releases", "target", "_blank"], [1, "badge", "badge-secondary"], ["href", "https://github.com/JoSSte/ScrumTimer/issues", "target", "_blank"]],
    template: function HelpComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "What is it?");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, " A Timer to keep ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Daily Scrum");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, " meetings short. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, " A lot of developers do not like to spend too much time on Scrum \"ceremonies\". This tool is meant to help you get a viual indication of time spent to avoid it drawing out for online daily Scrum meetings. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "How to use");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "ol")(13, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "Go to ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](16, "i", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, " Participants");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, " and make sure that everyone you want in the Scrum Timer ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, " Go to the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](22, "i", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, " Timer");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, " and mark anyone who is not present as absent. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, "click the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](28, "i", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29, " start button to start the timer ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31, "Click the next button for each subsequent participant, and finally the stop button");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33, "Notes");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "ul")(35, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](36, "If Max time is selected, the time left is distrubuted among the rest of the people in the meeting.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](38, "If the version badge below this list is older than the version of the newest ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](40, "release");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](41, " press ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "kbd");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](43, "CTRL");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](44, " + ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "kbd");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](46, "F5");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](47, " to refresh the page.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](49);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](51, "Bugs / requests for features");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](53, "If you find a bug/want a new feature, please report it on the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](54, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](55, "issues");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](56, " page");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](49);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Version ", ctx.version, "");
      }
    },
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 9847:
/*!*******************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NavbarComponent: () => (/* binding */ NavbarComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _services_navbar_navbar_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/navbar/navbar.service */ 4891);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 5072);




const _c0 = () => ["active"];
const _c1 = () => ["timer"];
const _c2 = () => ["participants"];
const _c3 = () => ["settings"];
function NavbarComponent_nav_0_li_23_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 7)(1, "a", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function NavbarComponent_nav_0_li_23_Template_a_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r1.openWindows());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "i", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "PopOut");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLinkActive", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](1, _c0));
  }
}
function NavbarComponent_nav_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "nav", 1)(1, "a", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "SCRUM Timer");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "button", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 5)(6, "ul", 6)(7, "li", 7)(8, "a", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "i", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, " Timer");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "li", 7)(12, "a", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "i", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, " Participants");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "li", 7)(16, "a", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](17, "i", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, " Settings");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "li", 7)(20, "a", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](21, "i", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, " Help");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](23, NavbarComponent_nav_0_li_23_Template, 4, 2, "li", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLinkActive", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](8, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](9, _c1));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLinkActive", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](10, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](11, _c2));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLinkActive", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](12, _c3));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](13, _c3));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLinkActive", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](14, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.noOpener);
  }
}
class NavbarComponent {
  constructor(nav) {
    this.nav = nav;
    this.noOpener = true;
    this.scrumTimerWindow = null;
    this.jiraTimerWindow = null;
    this.windowProps = 'resizable=no,scrollbars,status,top=0,right=0,width=';
    this.popupWidth = 360;
    const hasOpener = window.opener;
    let openerMessage = '';
    if (hasOpener) {
      this.noOpener = false;
      openerMessage = 'Not Displaying popout link. already popped out';
      this.nav.hide();
    } else {
      this.noOpener = true;
      openerMessage = 'Displaying pop out link';
    }
    console.info(openerMessage);
  }
  openScrumTimer() {
    const swp = this.windowProps + this.popupWidth + ',height=' + window.screen.availHeight;
    this.scrumTimerWindow = window.open(window.location.origin + window.location.pathname + '#/popin', 'TimerWindowName', swp);
  }
  openJira() {
    const jwp = this.windowProps + (window.screen.availWidth - this.popupWidth - 10) + ',height=' + window.screen.availHeight;
    const url = localStorage.getItem('JiraURL');
    if (url) {
      this.jiraTimerWindow = window.open(url, 'StoryWindowName', jwp);
      return true;
    } else {
      console.warn('no JiraURL in localStorage');
      return false;
    }
  }
  openWindows() {
    console.debug('Opening windows');
    this.openJira();
    this.openScrumTimer();
  }
  ngOnInit() {
    console.log('[Scrumtimer] Navbar init');
  }
  static #_ = this.ɵfac = function NavbarComponent_Factory(t) {
    return new (t || NavbarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_navbar_navbar_service__WEBPACK_IMPORTED_MODULE_0__.NavbarService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: NavbarComponent,
    selectors: [["app-navbar"]],
    decls: 1,
    vars: 1,
    consts: [["class", "navbar navbar-dark bg-dark navbar-expand-md", 4, "ngIf"], [1, "navbar", "navbar-dark", "bg-dark", "navbar-expand-md"], ["href", "#", 1, "navbar-brand"], ["type", "button", "data-toggle", "collapse", "data-target", "#ScrumNavBar", "aria-controls", "ScrumNavBar", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler"], [1, "navbar-toggler-icon"], ["id", "ScrumNavBar", 1, "collapse", "navbar-collapse"], [1, "navbar-nav", "mr-auto"], [1, "nav-item", 3, "routerLinkActive"], ["href", "#", 1, "nav-link", 3, "routerLink"], [1, "fa", "fa-clock-o"], [1, "fa", "fa-users"], [1, "fa", "fa-cog"], ["href", "#", "routerLink", "/help", 1, "nav-link"], [1, "fa", "fa-question-circle"], ["class", "nav-item", 3, "routerLinkActive", 4, "ngIf"], ["href", "#", 1, "nav-link", 3, "click"], [1, "fa", "fa-external-link-alt"]],
    template: function NavbarComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, NavbarComponent_nav_0_Template, 24, 15, "nav", 0);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.nav.visible);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLink, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLinkActive],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 6023:
/*!***************************************************************************!*\
  !*** ./src/app/components/participant-list/participant-list.component.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ParticipantListComponent: () => (/* binding */ ParticipantListComponent)
/* harmony export */ });
/* harmony import */ var _models_Participant__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../models/Participant */ 1088);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _services_participant_participant_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/participant/participant.service */ 2509);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 4456);





function ParticipantListComponent_tr_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "tr")(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "td")(6, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ParticipantListComponent_tr_12_Template_button_click_6_listener() {
      const participant_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r1).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r2.removeParticipant(participant_r2));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](7, "i", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const participant_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", participant_r2.init, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", participant_r2.name, " ");
  }
}
class ParticipantListComponent {
  constructor(participantService) {
    this.participantService = participantService;
    this.init = '';
    this.name = '';
    this.jsonParticipants = '';
  }
  ngOnInit() {
    this.participantList = this.participantService.getParticipants();
    // check for updated remote participants
    if (this.participantService.settings.usesRemoteParticipantList()) {
      this.participantService.updateRemoteParticipants();
    }
  }
  addParticipant() {
    if (this.init.length > 1 && this.name.length > 2) {
      this.participantService.addParticipant(new _models_Participant__WEBPACK_IMPORTED_MODULE_0__.Participant(this.init, this.name));
    }
    this.init = '';
    this.name = '';
  }
  removeParticipant(participant) {
    return this.participantService.removeParticipant(participant);
  }
  exportParticipants() {
    this.jsonParticipants = this.participantService.exportParticipants();
  }
  importParticipants() {
    this.participantService.importParticipants(this.jsonParticipants);
    this.participantList = this.participantService.getParticipants();
    this.jsonParticipants = '';
  }
  sortParticipants() {
    console.log('[sortParticipants()] This function has not yet been implemented');
  }
  isJsonString(str) {
    try {
      JSON.parse(str);
    } catch (e) {
      return false;
    }
    return true;
  }
  static #_ = this.ɵfac = function ParticipantListComponent_Factory(t) {
    return new (t || ParticipantListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_participant_participant_service__WEBPACK_IMPORTED_MODULE_1__.ParticipantService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: ParticipantListComponent,
    selectors: [["app-participant-list"]],
    decls: 35,
    vars: 9,
    consts: [[1, "row"], [1, "col-md-10", "offset-md-3"], [3, "submit"], [1, "table", "table-striped"], [4, "ngFor", "ngForOf"], ["type", "text", "id", "init", "name", "init", 1, "form-control", 3, "ngModelChange", "ngModel"], ["type", "text", "id", "name", "name", "name", 1, "form-control", 3, "ngModelChange", "ngModel"], ["type", "submit", 1, "btn", "btn-sm", "btn-outline-primary", 3, "disabled"], [1, "fa", "fa-plus"], ["cols", "50", "rows", "5", "id", "jsonParticipants", "name", "jsonParticipants", 1, "form-control", 3, "ngModelChange", "ngModel"], [1, "container"], [1, "btn", "btn-sm", "btn-outline-dark", 3, "click", "disabled"], [1, "fa", "fa-upload"], [1, "btn", "btn-sm", "btn-outline-success", 3, "click", "disabled"], [1, "fa", "fa-download"], [1, "btn", "btn-sm", "btn-outline-danger", 3, "click", "disabled"], [1, "fa", "fa-eraser"], [1, "btn", "btn-outline-danger", "btn-sm", 3, "click"], [1, "fa", "fa-trash-o", "fa-lg"]],
    template: function ParticipantListComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "form", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("submit", function ParticipantListComponent_Template_form_submit_2_listener() {
          return ctx.addParticipant();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "table", 3)(4, "thead")(5, "tr")(6, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "Initials");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](10, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](12, ParticipantListComponent_tr_12_Template, 8, 2, "tr", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "tfoot")(14, "tr")(15, "td")(16, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayListener"]("ngModelChange", function ParticipantListComponent_Template_input_ngModelChange_16_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayBindingSet"](ctx.init, $event) || (ctx.init = $event);
          return $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "td")(18, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayListener"]("ngModelChange", function ParticipantListComponent_Template_input_ngModelChange_18_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayBindingSet"](ctx.name, $event) || (ctx.name = $event);
          return $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "td")(20, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](21, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](22, " Add");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "div", 0)(24, "textarea", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayListener"]("ngModelChange", function ParticipantListComponent_Template_textarea_ngModelChange_24_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayBindingSet"](ctx.jsonParticipants, $event) || (ctx.jsonParticipants = $event);
          return $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "div", 10)(26, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ParticipantListComponent_Template_button_click_26_listener() {
          return ctx.exportParticipants();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](27, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](28);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ParticipantListComponent_Template_button_click_29_listener() {
          return ctx.importParticipants();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](30, "i", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](31, " Import List");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ParticipantListComponent_Template_button_click_32_listener() {
          return ctx.jsonParticipants = "";
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](33, "i", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](34, " Clear");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.participantList);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayProperty"]("ngModel", ctx.init);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayProperty"]("ngModel", ctx.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx.name == "" || ctx.init == "");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayProperty"]("ngModel", ctx.jsonParticipants);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx.participantList.length == 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" Export list (", ctx.participantList.length, ")");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", !ctx.isJsonString(ctx.jsonParticipants));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx.jsonParticipants.length == 0);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgForm],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 2205:
/*!***********************************************************!*\
  !*** ./src/app/components/settings/settings.component.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SettingsComponent: () => (/* binding */ SettingsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _services_settings_settings_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/settings/settings.service */ 7709);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 4456);



class SettingsComponent {
  constructor(settings) {
    this.settings = settings;
  }
  ngOnInit() {
    this.useGlobalMaxTime = this.settings.getUseGlobalMaxTime();
    this.globalMaxTime = this.settings.getGlobalMaxTime();
    this.remoteParticipantListURL = this.settings.getRemoteParticipantListURL();
    this.jiraLinkURL = this.settings.getJiraURL();
    if (this.remoteParticipantListURL !== '') {
      this.useRemoteParticipantList = true;
    }
    if (this.jiraLinkURL !== '') {
      this.useJiraLinkURL = true;
    }
  }
  saveSettings() {
    this.settings.setGlobalMaxTime(this.globalMaxTime);
    this.settings.setUseGlobalMaxTime(this.useGlobalMaxTime);
    if (this.useRemoteParticipantList) {
      this.settings.setRemoteParticipantList(this.remoteParticipantListURL);
    } else {
      this.settings.setRemoteParticipantList('');
    }
    if (this.useJiraLinkURL) {
      this.settings.setJiraURL(this.jiraLinkURL);
    } else {
      this.settings.setJiraURL('');
    }
    this.settings.saveSettings();
  }
  useRemoteParticipantListChecked() {
    return !this.useRemoteParticipantList;
  }
  usejiraLinkChecked() {
    return !this.useJiraLinkURL;
  }
  static #_ = this.ɵfac = function SettingsComponent_Factory(t) {
    return new (t || SettingsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_settings_settings_service__WEBPACK_IMPORTED_MODULE_0__.SettingsService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: SettingsComponent,
    selectors: [["app-settings"]],
    decls: 36,
    vars: 8,
    consts: [["action", ""], [1, "input-group", "mb-3"], [1, "input-group-prepend"], [1, "input-group-text"], ["type", "checkbox", "name", "useGlobalMaxTime", "aria-label", "Use Global max Time", "size", "3", 3, "ngModelChange", "ngModel"], ["name", "globalMaxTime", "id", "globalMaxTime", "type", "number", 1, "form-control", 3, "ngModelChange", "ngModel"], ["id", "globalMaxTimeHelp", 1, "form-text", "text-muted"], [1, "input-group", "mb3"], ["type", "checkbox", "name", "useRemoteParticipantList", "aria-label", "Use Remote Participant List", 3, "ngModelChange", "ngModel"], ["name", "remoteParticipantListURL", "id", "remoteParticipantListURL", "type", "url", 1, "form-control", 3, "ngModelChange", "ngModel", "disabled"], ["id", "remoteParticipantListURLHelp", 1, "form-text", "text-muted"], ["type", "checkbox", "name", "useJiraLink", "aria-label", "Use Jira Link", 3, "ngModelChange", "ngModel"], ["name", "jiraLinkURL", "id", "jiraLinkURL", "type", "url", 1, "form-control", 3, "ngModelChange", "ngModel", "disabled"], ["id", "jiraURLHelp", 1, "form-text", "text-muted"], ["type", "submit", "value", "Save Settings", 1, "btn", "btn-primary", "form-control", 3, "click"]],
    template: function SettingsComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Settings");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, " From here, you will be able to choose whether you want an overall time goal (e.g. 15 minutes), or a static time-per-person. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "form", 0)(5, "div", 1)(6, "div", 2)(7, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Total Max Time");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 3)(10, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayListener"]("ngModelChange", function SettingsComponent_Template_input_ngModelChange_10_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayBindingSet"](ctx.useGlobalMaxTime, $event) || (ctx.useGlobalMaxTime = $event);
          return $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayListener"]("ngModelChange", function SettingsComponent_Template_input_ngModelChange_11_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayBindingSet"](ctx.globalMaxTime, $event) || (ctx.globalMaxTime = $event);
          return $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "small", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "If the Total Max Time checkbox is selected, the time (in seconds) is used to define the max length of the Scrum meeting. The time for each participant is scaled to fit. If it is left unchecked, each participant is given the time shown in seconds.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 7)(16, "div", 2)(17, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "Remote Participant list");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 3)(20, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayListener"]("ngModelChange", function SettingsComponent_Template_input_ngModelChange_20_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayBindingSet"](ctx.useRemoteParticipantList, $event) || (ctx.useRemoteParticipantList = $event);
          return $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayListener"]("ngModelChange", function SettingsComponent_Template_input_ngModelChange_21_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayBindingSet"](ctx.remoteParticipantListURL, $event) || (ctx.remoteParticipantListURL = $event);
          return $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "small", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "If the Remote Participant List URL checkbox is selected, the tool will try to download a .json file from the URL and import the participants from that");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](24, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "div", 7)(26, "div", 2)(27, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "Jira URL");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "div", 3)(30, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayListener"]("ngModelChange", function SettingsComponent_Template_input_ngModelChange_30_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayBindingSet"](ctx.useJiraLinkURL, $event) || (ctx.useJiraLinkURL = $event);
          return $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayListener"]("ngModelChange", function SettingsComponent_Template_input_ngModelChange_31_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayBindingSet"](ctx.jiraLinkURL, $event) || (ctx.jiraLinkURL = $event);
          return $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "small", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33, "If the checkbox is checked, and you have a url entered, this URL will be opened in a window when using the popout function");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](34, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SettingsComponent_Template_input_click_35_listener() {
          return ctx.saveSettings();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayProperty"]("ngModel", ctx.useGlobalMaxTime);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayProperty"]("ngModel", ctx.globalMaxTime);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayProperty"]("ngModel", ctx.useRemoteParticipantList);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayProperty"]("ngModel", ctx.remoteParticipantListURL);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx.useRemoteParticipantListChecked());
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayProperty"]("ngModel", ctx.useJiraLinkURL);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayProperty"]("ngModel", ctx.jiraLinkURL);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx.usejiraLinkChecked());
      }
    },
    dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.CheckboxControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgForm],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 4221:
/*!*****************************************************!*\
  !*** ./src/app/components/timer/timer.component.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TimerComponent: () => (/* binding */ TimerComponent)
/* harmony export */ });
/* harmony import */ var _models_Participant__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../models/Participant */ 1088);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 6320);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _services_navbar_navbar_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/navbar/navbar.service */ 4891);
/* harmony import */ var _services_participant_participant_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/participant/participant.service */ 2509);
/* harmony import */ var _services_settings_settings_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/settings/settings.service */ 7709);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _pipes_secs_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../pipes/secs.pipe */ 532);









const _c0 = (a0, a1, a2) => ({
  "progress-bar-animated": a0,
  "bg-warning": a1,
  "bg-danger": a2
});
const _c1 = a0 => ({
  "invisible": a0
});
const _c2 = (a0, a1) => ({
  "text-success": a0,
  "text-primary": a1
});
const _c3 = a0 => ({
  "text-danger": a0
});
const _c4 = () => ["participants"];
function TimerComponent_div_0_div_33_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 9)(1, "button", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function TimerComponent_div_0_div_33_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r1.startTimer());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](2, "i", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("disabled", ctx_r1.participantList.length == 0 || ctx_r1.timerActive);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", ctx_r1.currentParticipant.init, " ");
  }
}
function TimerComponent_div_0_div_34_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 9)(1, "button", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function TimerComponent_div_0_div_34_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r4);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r1.nextParticipant());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](2, "i", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, " Next ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("disabled", ctx_r1.participantList.length <= 1 || !ctx_r1.timerActive);
  }
}
function TimerComponent_div_0_li_96_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "li", 37)(1, "button", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function TimerComponent_div_0_li_96_Template_button_click_1_listener() {
      const p_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r5).$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r1.markAbsent(p_r6));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](2, "i", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const p_r6 = ctx.$implicit;
    const i_r7 = ctx.index;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction2"](4, _c2, i_r7 == 0, i_r7 == 1));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("disabled", ctx_r1.participantList.length <= 2 || i_r7 == 0 && ctx_r1.timerActive);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate2"](" ", p_r6.name, " [", p_r6.init, "]");
  }
}
function TimerComponent_div_0_li_97_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "li", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "span", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](4, "secs");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const dp_r8 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate2"](" ", dp_r8.name, " [", dp_r8.init, "] - ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](6, _c3, dp_r8.time >= ctx_r1.individualTime));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](4, 4, dp_r8.time));
  }
}
function TimerComponent_div_0_li_98_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "li", 42)(1, "button", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function TimerComponent_div_0_li_98_Template_button_click_1_listener() {
      const ap_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r9).$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r1.markPresent(ap_r10));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](2, "i", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ap_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate2"](" ", ap_r10.name, " [", ap_r10.init, "]");
  }
}
function TimerComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "Overall Progress");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "div", 3)(5, "div", 4)(6, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](8, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](10, "Overall Time");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "div", 3)(12, "div", 5)(13, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](14, "i", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](16, "secs");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](17, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](18, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](20, "div", 3)(21, "div", 7)(22, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](23, "i", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](25, "secs");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](26, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](27, "div", 8)(28, "div", 9)(29, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function TimerComponent_div_0_Template_button_click_29_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r1.stopTimer());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](30, "i", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](31, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function TimerComponent_div_0_Template_button_click_31_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r1.resetTimer());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](32, "i", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](33, TimerComponent_div_0_div_33_Template, 4, 2, "div", 14)(34, TimerComponent_div_0_div_34_Template, 4, 1, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](35, "div", 9)(36, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](37, "i", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](38, "div", 17)(39, "a", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](40, "i", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](41, " Daily Question Card");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](42, "a", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](43, "i", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](44, " Debug Information");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](45, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](46, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](47, "div", 23)(48, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](49, "Debug info");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](50, "ul")(51, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](52);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](53, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](54);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](55, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](56);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](57, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](58, "Stats ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](59, "ul")(60, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](61);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](62, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](63);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](64, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](65);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](66, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](67);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](68, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](69);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](70, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](71);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](72, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](73);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](74, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](75);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](76, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](77, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](78, "div", 23)(79, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](80, "Questions");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](81, "ul")(82, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](83, "What did you do yesterday?");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](84, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](85, "What will you do today?");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](86, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](87, "Are you impeded in any way?");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](88, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](89, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](90, "Participants ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](91, "button", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function TimerComponent_div_0_Template_button_click_91_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r1.shuffleParticipants());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](92, "i", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](93, "button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function TimerComponent_div_0_Template_button_click_93_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r1.sortParticipants());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](94, "i", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](95, "ul", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](96, TimerComponent_div_0_li_96_Template, 4, 7, "li", 30)(97, TimerComponent_div_0_li_97_Template, 5, 8, "li", 31)(98, TimerComponent_div_0_li_98_Template, 4, 2, "li", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵstyleProp"]("width", ctx_r1.totalPercent + "%");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", ctx_r1.totalPercent, "%");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵstyleProp"]("width", ctx_r1.totalTimePercent + "%");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction3"](39, _c0, ctx_r1.totalTimePercent < 100, ctx_r1.totalTimePercent > 75 && ctx_r1.totalTimePercent <= 95, ctx_r1.totalTimePercent > 95));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](43, _c1, ctx_r1.totalTimePercent <= 95));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](16, 35, ctx_r1.totalMaxTime - ctx_r1.currentTotalElapsed));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate2"]("", ctx_r1.currentParticipant.name, " [", ctx_r1.currentParticipant.init, "] Progress");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵstyleProp"]("width", ctx_r1.currentPercent + "%");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction3"](45, _c0, ctx_r1.currentPercent < 100, ctx_r1.currentPercent > 75 && ctx_r1.currentPercent <= 95, ctx_r1.currentPercent > 95));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](49, _c1, ctx_r1.currentPercent <= 95));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](25, 37, ctx_r1.individualTime - ctx_r1.currentElapsed), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("disabled", ctx_r1.totalPercent == 0 && ctx_r1.currentPercent == 0 || !ctx_r1.timerActive);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx_r1.timerActive);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.timerActive);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("Total ", ctx_r1.totalPercent, "% Complete");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("Current ", ctx_r1.currentPercent, "% Complete");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("Total Elapsed: ", ctx_r1.currentTotalElapsed, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("Participants Left: ", ctx_r1.participantList.length, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("Participants Done: ", ctx_r1.doneParticipants.length, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("Participants Absent: ", ctx_r1.absentParticipants.length, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("Diff: ", ctx_r1.diff, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("Elapsed: ", ctx_r1.currentElapsed, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("Elapsed: ", ctx_r1.totalElapsed, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("Partipicant Time: ", ctx_r1.individualTime, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate2"]("Current Participant: ", ctx_r1.currentParticipant.name, " [", ctx_r1.currentParticipant.init, "]");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("disabled", ctx_r1.participantList.length <= 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("disabled", ctx_r1.participantList.length <= 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r1.participantList);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r1.doneParticipants);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r1.absentParticipants);
  }
}
function TimerComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 45)(1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "There are no participants in your list. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4, "To start using the Scrum Timer, please go to the ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "a", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6, "participant list");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](7, " and add some people to the list, either manually or by importing a list from a colleague.");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](9, "Note that the Scrum Timer stores participants in local storage. Nothing is sent to the server. This is to provide anonymity and be compliant with corporate policies.");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](1, _c4));
  }
}
class TimerComponent {
  constructor(activatedRoute, nav, participantService, settingsService) {
    this.activatedRoute = activatedRoute;
    this.nav = nav;
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
      this.individualTime = Math.round(this.settingsService.getGlobalMaxTime() / (this.participantList.length + this.doneParticipants.length));
    } else {
      this.individualTime = this.individualMaxTime;
    }
    console.info('[Scrumtimer] Timer init');
    if (this.activatedRoute['_routerState'].snapshot.url === '/popin') {
      this.nav.hide();
    } else {
      this.nav.show();
    }
  }
  stopTimer() {
    // save time for participant
    this.currentParticipant.time = this.currentElapsed;
    // this.currentPercent = 0;
    // move first Participant to done participants
    if (this.participantList.length > 0) {
      this.doneParticipants.push(this.currentParticipant);
    }
    // remove the top participant
    this.participantList.splice(0, 1);
    // set progressbar to 100%
    this.totalPercent = 100;
    this.timerActive = false;
    // stop timer
    this.timerSubscription.unsubscribe();
  }
  startTimer() {
    const source = (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.timer)(1000, 2000);
    this.currentParticipant = this.participantList[0];
    this.future = new Date();
    // set the timer to a time in the future, based on "individualTime" seconds
    if (this.settingsService.getUseGlobalMaxTime()) {
      if (this.totalElapsed >= this.settingsService.getGlobalMaxTime()) {
        // 1 sec grace time :)
        this.individualTime = 1;
      } else {
        this.individualTime = Math.round((this.settingsService.getGlobalMaxTime() - this.totalElapsed) / this.participantList.length);
      }
    } else {
      this.individualTime = this.individualMaxTime;
    }
    this.future.setSeconds(this.future.getSeconds() + this.individualTime);
    this.timerSubscription = source.subscribe(val => {
      this.currentDiff = Math.floor((this.future.getTime() - new Date().getTime()) / 1000);
      this.currentElapsed = this.individualTime - this.currentDiff;
      this.currentPercent = Math.round(this.currentElapsed / this.individualTime * 100);
      this.currentTotalElapsed = this.totalElapsed + this.currentElapsed;
      this.totalTimePercent = Math.round((this.totalElapsed + this.currentElapsed) / this.totalMaxTime * 100);
    });
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
    } else {
      this.currentParticipant = new _models_Participant__WEBPACK_IMPORTED_MODULE_0__.Participant('', '');
    }
    this.totalPercent = Math.round(this.doneParticipants.length / (this.participantList.length + this.doneParticipants.length) * 100);
    this.totalTimePercent = Math.round((this.totalElapsed + this.currentElapsed) / this.totalMaxTime * 100);
    this.currentPercent = 0;
    this.currentDiff = 0;
    this.currentPercent = 0;
    this.timerActive = false;
    // stop timer
    this.timerSubscription.unsubscribe();
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
    this.individualTime = Math.round(this.settingsService.getGlobalMaxTime() / this.participantList.length);
    this.sortParticipants();
  }
  /**
   * Shuffles an array pseudo-randomly
   *
   * @param array
   */
  shuffle(array) {
    let currentIndex = array.length,
      temporaryValue,
      randomIndex;
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
      console.warn('Cannot mark the last two participants absent.');
      return false;
    } else {
      const idx = this.participantList.indexOf(participant);
      this.absentParticipants.push(participant);
      this.participantList.splice(idx, 1);
      this.currentParticipant = this.participantList[0];
      return true;
    }
  }
  /**
   * Mark participant as present.
   *
   * @param participant Participant to mark as present
   */
  markPresent(participant) {
    const idx = this.absentParticipants.indexOf(participant);
    this.participantList.push(participant);
    this.absentParticipants.splice(idx, 1);
  }
  static #_ = this.ɵfac = function TimerComponent_Factory(t) {
    return new (t || TimerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_services_navbar_navbar_service__WEBPACK_IMPORTED_MODULE_1__.NavbarService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_services_participant_participant_service__WEBPACK_IMPORTED_MODULE_2__.ParticipantService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_services_settings_settings_service__WEBPACK_IMPORTED_MODULE_3__.SettingsService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
    type: TimerComponent,
    selectors: [["app-timer"]],
    decls: 2,
    vars: 2,
    consts: [["class", "container", 4, "ngIf"], ["class", "jumbotron", 4, "ngIf"], [1, "container"], [1, "progress"], ["role", "progressbar", "aria-valuenow", "40", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", "progress-bar-striped", "bg-success"], ["role", "progressbar", "aria-valuenow", "40", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", "progress-bar-striped", "bg-info", 3, "ngClass"], [1, "fa", "fa-exclamation-triangle", 3, "ngClass"], ["role", "progressbar", "aria-valuenow", "0", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", "progress-bar-striped", 3, "ngClass"], ["role", "toolbar", "aria-label", "Toolbar", 1, "btn-toolbar"], ["role", "group", 1, "btn-group", "mr-2"], ["title", "Stop Timer", 1, "btn", "btn-outline-danger", 3, "click", "disabled"], [1, "fa", "fa-hourglass-end"], ["title", "Reset", 1, "btn", "btn-outline-secondary", 3, "click"], [1, "fa", "fa-undo"], ["class", "btn-group mr-2", "role", "group", 4, "ngIf"], ["id", "btnGroupDrop1", "type", "button", "data-toggle", "dropdown", "aria-haspopup", "true", "aria-expanded", "false", 1, "btn", "btn-outline-secondary", "dropdown-toggle"], [1, "fa", "fa-ellipsis-v"], [1, "dropdown-menu"], ["href", "#", "data-toggle", "collapse", "data-target", "#Questions", "aria-expanded", "false", "aria-controls", "Questions", 1, "dropdown-item"], [1, "fa", "fa-question"], ["href", "#", "data-toggle", "collapse", "data-target", "#Debug", "aria-expanded", "false", "aria-controls", "Debug", 1, "dropdown-item"], [1, "fa", "fa-bug"], ["id", "Debug", 1, "collapse"], [1, "card", "card-body"], ["id", "Questions", 1, "collapse"], ["title", "Shuffle Participants", 1, "btn", "btn-sm", "btn-info", 3, "click", "disabled"], [1, "fa", "fa-random"], ["title", "Sort Participants", 1, "btn", "btn-sm", "btn-info", 3, "click", "disabled"], [1, "fa", "fa-sort-amount-asc"], [1, "participant-list", "list-group"], ["class", "list-group-item", 3, "ngClass", 4, "ngFor", "ngForOf"], ["class", "list-group-item list-group-item-secondary", 4, "ngFor", "ngForOf"], ["class", "list-group-item list-group-item-danger", 4, "ngFor", "ngForOf"], ["title", "Start Timer", 1, "btn", "btn-outline-success", 3, "click", "disabled"], [1, "fa", "fa-hourglass-start"], ["title", "Next participant", 1, "btn", "btn-outline-primary", 3, "click", "disabled"], [1, "fa", "fa-step-forward"], [1, "list-group-item", 3, "ngClass"], ["title", "Mark as absent", 1, "btn", "btn-outline-secondary", "btn-sm", 3, "click", "disabled"], [1, "fa", "fa-minus-circle"], [1, "list-group-item", "list-group-item-secondary"], [3, "ngClass"], [1, "list-group-item", "list-group-item-danger"], ["title", "Mark as present", 1, "btn", "btn-outline-secondary", "btn-sm", 3, "click"], [1, "fa", "fa-plus-circle"], [1, "jumbotron"], ["href", "#", 3, "routerLink"]],
    template: function TimerComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](0, TimerComponent_div_0_Template, 99, 51, "div", 0)(1, TimerComponent_div_1_Template, 10, 2, "div", 1);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.participantList.length > 0 || ctx.doneParticipants.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.participantList.length == 0 && ctx.doneParticipants.length == 0);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterLink, _pipes_secs_pipe__WEBPACK_IMPORTED_MODULE_4__.SecsPipe],
    styles: ["\n\n\n\n\n.progress[_ngcontent-%COMP%] {\n    position: relative;\n}\n\n.progress[_ngcontent-%COMP%] {\n    height: 40px;\n}\n\n.progress-bar[_ngcontent-%COMP%] {\n    height: 40px;\n}\n\n.progress[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    position: absolute;\n    display: block;\n    width: 100%;\n    top: 50%;\n    margin-top: -10px;\n    color: black;\n    font-weight: bold;\n }\n\n\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy90aW1lci90aW1lci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztFQUVFOztBQUVGO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsY0FBYztJQUNkLFdBQVc7SUFDWCxRQUFRO0lBQ1IsaUJBQWlCO0lBQ2pCLFlBQVk7SUFDWixpQkFBaUI7Q0FDcEIiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFByb2dyZXNzIGJhcnMgd2l0aCBjZW50ZXJlZCB0ZXh0XG4gKi9cblxuLnByb2dyZXNzIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5wcm9ncmVzcyB7XG4gICAgaGVpZ2h0OiA0MHB4O1xufVxuXG4ucHJvZ3Jlc3MtYmFyIHtcbiAgICBoZWlnaHQ6IDQwcHg7XG59XG5cbi5wcm9ncmVzcyBzcGFuIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgdG9wOiA1MCU7XG4gICAgbWFyZ2luLXRvcDogLTEwcHg7XG4gICAgY29sb3I6IGJsYWNrO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuIH1cblxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 1088:
/*!***************************************!*\
  !*** ./src/app/models/Participant.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Participant: () => (/* binding */ Participant),
/* harmony export */   ParticipantAdapter: () => (/* binding */ ParticipantAdapter)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);

class Participant {
  constructor(init, name, time = 0) {
    this.init = init;
    this.name = name;
    this.time = time;
  }
}
class ParticipantAdapter {
  adapt(item) {
    return new Participant(item.init, item.name, item.time);
  }
  static #_ = this.ɵfac = function ParticipantAdapter_Factory(t) {
    return new (t || ParticipantAdapter)();
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
    token: ParticipantAdapter,
    factory: ParticipantAdapter.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 532:
/*!************************************!*\
  !*** ./src/app/pipes/secs.pipe.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SecsPipe: () => (/* binding */ SecsPipe)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);

class SecsPipe {
  transform(totalseconds) {
    let prefix = '';
    if (totalseconds < 0) {
      totalseconds = Math.abs(totalseconds);
      prefix = '-';
    }
    const minutes = Math.floor(totalseconds / 60);
    const seconds = totalseconds % 60;
    return prefix + ('00' + minutes).slice(-2) + ':' + ('00' + seconds).slice(-2);
  }
  static #_ = this.ɵfac = function SecsPipe_Factory(t) {
    return new (t || SecsPipe)();
  };
  static #_2 = this.ɵpipe = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
    name: "secs",
    type: SecsPipe,
    pure: true,
    standalone: true
  });
}

/***/ }),

/***/ 4891:
/*!***************************************************!*\
  !*** ./src/app/services/navbar/navbar.service.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NavbarService: () => (/* binding */ NavbarService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);

class NavbarService {
  constructor() {
    this.visible = true;
  }
  hide() {
    this.visible = false;
  }
  show() {
    this.visible = true;
  }
  toggle() {
    this.visible = !this.visible;
  }
  static #_ = this.ɵfac = function NavbarService_Factory(t) {
    return new (t || NavbarService)();
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
    token: NavbarService,
    factory: NavbarService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 2509:
/*!*************************************************************!*\
  !*** ./src/app/services/participant/participant.service.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ParticipantService: () => (/* binding */ ParticipantService)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 5443);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _settings_settings_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../settings/settings.service */ 7709);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 6443);
/* harmony import */ var _models_Participant__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../models/Participant */ 1088);





class ParticipantService {
  constructor(settings, http, adapter) {
    this.settings = settings;
    this.http = http;
    this.adapter = adapter;
    this.lastSync = new Date('2000-01-01T00:00:00.000Z');
    this.getLastSync();
  }
  getLastSync() {
    const localSync = localStorage.getItem('lastSync');
    if (localSync == null) {
      console.debug('never synced');
    } else {
      console.info('Last sync: ' + localSync);
    }
  }
  setLastSync(d) {
    localStorage.setItem('lastSync', d.toISOString());
  }
  getParticipants() {
    if (localStorage.getItem('participants') === null) {
      this.participants = [];
    } else {
      // TODO: check if the localstorage Entry is valid JSON before returning
      this.participants = JSON.parse(localStorage.getItem('participants'));
    }
    return this.participants;
  }
  addParticipant(participant) {
    this.participants.unshift(participant);
    localStorage.setItem('participants', JSON.stringify(this.participants));
  }
  /**
   * Remove specified participant from the
   * @param participant Participant to be removed
   */
  removeParticipant(participant) {
    let removed = false;
    for (let i = 0; i < this.participants.length; i++) {
      if (participant.name === this.participants[i].name && participant.init === this.participants[i].init) {
        this.participants.splice(i, 1);
        removed = true;
      }
    }
    localStorage.setItem('participants', JSON.stringify(this.participants));
    return removed;
  }
  /**
   * Remove all participants in the list
   */
  purgeParticipants() {
    this.participants.splice(0);
    localStorage.setItem('participants', JSON.stringify(this.participants));
  }
  exportParticipants() {
    return JSON.stringify(this.participants);
  }
  // overwrite localstorage, and refresh local list of participants from there...
  importParticipants(jsonParticipants) {
    localStorage.setItem('participants', jsonParticipants);
    this.exportParticipants();
  }
  getRemoteParticipants() {
    if (this.settings.usesRemoteParticipantList()) {
      // console.debug('remote participant list affirmative. Checking URL');
      const durationSinceLastSync = Date.now().valueOf() - this.lastSync.valueOf();
      // If more than 15 hours since sync, update
      if (durationSinceLastSync > 54000) {
        const url = this.settings.getRemoteParticipantListURL();
        // console.debug('Seconds since last sync: ' + durationSinceLastSync + ' syncing from ' + url + ' . . .');
        return this.http.get(url).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(data => data.map(item => this.adapter.adapt(item))));
      } else {
        console.error(new Error('not syncing'));
      }
    }
    /* else { // TODO: throw exception ?
      // console.info('using local participant list');
      throw new Error('not syncing');
    } */
  }
  updateRemoteParticipants() {
    this.getRemoteParticipants().subscribe(resp => {
      // display its headers
      this.participants = resp;
      localStorage.setItem('participants', JSON.stringify(this.participants));
      this.setLastSync(new Date());
    });
  }
  static #_ = this.ɵfac = function ParticipantService_Factory(t) {
    return new (t || ParticipantService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_settings_settings_service__WEBPACK_IMPORTED_MODULE_0__.SettingsService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_models_Participant__WEBPACK_IMPORTED_MODULE_1__.ParticipantAdapter));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
    token: ParticipantService,
    factory: ParticipantService.ɵfac
  });
}

/***/ }),

/***/ 7709:
/*!*******************************************************!*\
  !*** ./src/app/services/settings/settings.service.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SettingsService: () => (/* binding */ SettingsService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);

class SettingsService {
  constructor() {
    this.useGlobalMaxTime = true;
    this.globalMaxTime = 60 * 15;
    this.remoteParticipantList = '';
    this.jiraURL = '';
  }
  getGlobalMaxTime() {
    if (localStorage.getItem('settings') === null) {
      this.globalMaxTime = 60 * 15;
    } else {
      this.globalMaxTime = JSON.parse(localStorage.getItem('settings') ?? '""')[1];
    }
    return this.globalMaxTime;
  }
  getUseGlobalMaxTime() {
    if (localStorage.getItem('settings') !== null) {
      this.useGlobalMaxTime = JSON.parse(localStorage.getItem('settings') ?? '""')[0];
    } else {
      this.useGlobalMaxTime = true;
    }
    return this.useGlobalMaxTime;
  }
  getRemoteParticipantListURL() {
    if (localStorage.getItem('settings') === null) {
      this.remoteParticipantList = '';
    } else {
      this.remoteParticipantList = JSON.parse(localStorage.getItem('settings') ?? '""')[2];
    }
    return this.remoteParticipantList;
  }
  getJiraURL() {
    if (localStorage.getItem('JiraURL') === null) {
      this.jiraURL = '';
    } else {
      this.jiraURL = localStorage.getItem('JiraURL') ?? '""';
    }
    return this.jiraURL;
  }
  usesRemoteParticipantList() {
    return this.getRemoteParticipantListURL() !== '';
  }
  setGlobalMaxTime(newTime) {
    this.globalMaxTime = newTime;
    this.saveSettings();
  }
  setRemoteParticipantList(newUrl) {
    this.remoteParticipantList = newUrl;
    this.saveSettings();
  }
  setJiraURL(newUrl) {
    this.jiraURL = newUrl;
    if (newUrl !== '') {
      localStorage.setItem('JiraURL', this.jiraURL);
    } else {
      localStorage.removeItem('JiraURL');
    }
  }
  setUseGlobalMaxTime(useGMTime) {
    this.useGlobalMaxTime = useGMTime;
    this.saveSettings();
  }
  exportSettings() {
    return JSON.stringify([this.useGlobalMaxTime, this.globalMaxTime, this.remoteParticipantList]);
  }
  saveSettings() {
    localStorage.setItem('settings', this.exportSettings());
  }
  // overwrite localstorage, and refresh local list of participants from there...
  importSettings(jsonSettings) {
    localStorage.setItem('participants', jsonSettings);
    this.exportSettings();
  }
  static #_ = this.ɵfac = function SettingsService_Factory(t) {
    return new (t || SettingsService)();
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
    token: SettingsService,
    factory: SettingsService.ɵfac
  });
}

/***/ }),

/***/ 5312:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   environment: () => (/* binding */ environment)
/* harmony export */ });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
const environment = {
  production: false
};

/***/ }),

/***/ 4429:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 436);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 635);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 5312);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
  (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule).catch(err => console.error(err));

/***/ }),

/***/ 8330:
/*!**********************!*\
  !*** ./package.json ***!
  \**********************/
/***/ ((module) => {

module.exports = /*#__PURE__*/JSON.parse('{"name":"scrum-timer","version":"1.2.4","license":"MIT","scripts":{"ng":"ng","start":"ng serve --host 0.0.0.0","build":"ng build","test":"ng test","lint":"eslint -c .eslintrc.js --ext .ts src","lint:fix":"eslint -c .eslintrc.js --fix --ext .ts src","e2e":"ng e2e","bump-version":"npm version patch -m \\"Bump version to %s\\" && git push --tags","bump-version-major":"npm version major -m \\"Bump version to %s (Major release)\\" && git push --tags","bump-version-minor":"npm version minor -m \\"Bump version to %s\\" && git push --tags","deploy":"ng build --base-href \\"https://josste.github.io/ScrumTimer/\\" && cp ./dist/index.html ./dist/404.html && angular-cli-ghpages --no-silent"},"private":true,"dependencies":{"@angular/animations":"^17.0.5","@angular/common":"^17.0.5","@angular/compiler":"^17.0.5","@angular/core":"^17.0.5","@angular/forms":"^17.0.5","@angular/platform-browser":"^17.0.5","@angular/platform-browser-dynamic":"^17.0.5","@babel/polyfill":"^7.12.1","bootstrap":"^5.3.2","core-js":"^3.36.1","diff":"^5.1.0","font-awesome":"^4.7.0","jquery":"^3.7.1","npm":"^10.4.0","popper.js":"^1.16.1","rxjs":"^6.6.7","rxjs-compat":"^6.6.7","tether":"^2.0.0","tslib":"^2.6.2","zone.js":"~0.14.5"},"devDependencies":{"@angular-devkit/build-angular":"^17.0.5","@angular-eslint/builder":"17.1.1","@angular-eslint/eslint-plugin":"17.1.1","@angular-eslint/eslint-plugin-template":"17.1.1","@angular-eslint/schematics":"17.1.1","@angular-eslint/template-parser":"17.1.1","@angular/cli":"^17.0.5","@angular/compiler-cli":"^17.0.5","@angular/language-service":"^17.0.5","@angular/router":"^17.0.5","@types/jasmine":"~5.1.4","@types/jasminewd2":"^2.0.13","@types/node":"^20.10.2","@typescript-eslint/eslint-plugin":"6.13.1","@typescript-eslint/parser":"6.13.1","angular-cli-ghpages":"^1.0.7","codelyzer":"^6.0.2","eslint":"^8.54.0","jasmine-core":"~5.1.1","jasmine-spec-reporter":"~7.0.0","karma":"~6.4.2","karma-chrome-launcher":"~3.2.0","karma-cli":"~2.0.0","karma-coverage":"^2.2.1","karma-coverage-istanbul-reporter":"~3.0.3","karma-firefox-launcher":"^2.1.2","karma-jasmine":"~5.1.0","karma-jasmine-html-reporter":"^2.1.0","karma-junit-reporter":"^2.0.1","protractor":"^7.0.0","ts-node":"~10.9.1","typescript":"~5.2.2"}}');

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4429)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map