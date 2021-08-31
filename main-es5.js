(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkscrum_timer"] = self["webpackChunkscrum_timer"] || []).push([["main"], {
    /***/
    8255:
    /*!*******************************************************!*\
      !*** ./$_lazy_route_resources/ lazy namespace object ***!
      \*******************************************************/

    /***/
    function _(module) {
      function webpackEmptyAsyncContext(req) {
        // Here Promise.resolve().then() is used instead of new Promise() to prevent
        // uncaught exception popping up in devtools
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      webpackEmptyAsyncContext.keys = function () {
        return [];
      };

      webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
      webpackEmptyAsyncContext.id = 8255;
      module.exports = webpackEmptyAsyncContext;
      /***/
    },

    /***/
    5041:
    /*!**********************************!*\
      !*** ./src/app/app.component.ts ***!
      \**********************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AppComponent": function AppComponent() {
          return (
            /* binding */
            _AppComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      7716);
      /* harmony import */


      var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./components/navbar/navbar.component */
      3252);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      9895);

      var _AppComponent = function _AppComponent() {
        _classCallCheck(this, _AppComponent);

        this.title = 'ScrumTimer';
      };

      _AppComponent.ɵfac = function AppComponent_Factory(t) {
        return new (t || _AppComponent)();
      };

      _AppComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: _AppComponent,
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
        directives: [_components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_0__.NavbarComponent, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterOutlet],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyJ9 */"]
      });
      /***/
    },

    /***/
    6747:
    /*!*******************************!*\
      !*** ./src/app/app.module.ts ***!
      \*******************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AppModule": function AppModule() {
          return (
            /* binding */
            _AppModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/platform-browser */
      9075);
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/common/http */
      1841);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/forms */
      3679);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @angular/router */
      9895);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/common */
      8583);
      /* harmony import */


      var _services_participant_participant_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./services/participant/participant.service */
      9245);
      /* harmony import */


      var _services_settings_settings_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./services/settings/settings.service */
      1145);
      /* harmony import */


      var _services_navbar_navbar_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./services/navbar/navbar.service */
      1038);
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./app.component */
      5041);
      /* harmony import */


      var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./components/navbar/navbar.component */
      3252);
      /* harmony import */


      var _components_timer_timer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./components/timer/timer.component */
      5082);
      /* harmony import */


      var _components_participant_list_participant_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./components/participant-list/participant-list.component */
      7742);
      /* harmony import */


      var _components_settings_settings_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./components/settings/settings.component */
      6577);
      /* harmony import */


      var _components_help_help_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./components/help/help.component */
      7641);
      /* harmony import */


      var _pipes_secs_pipe__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./pipes/secs.pipe */
      2537);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/core */
      7716); // import { Timer } from 'angular-timer'; // AngularJS - not 4??
      // Services
      // Components
      // Pipes


      var appRoutes = [{
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
      } // { path: '', component: Component }
      ];

      var _AppModule = function _AppModule() {
        _classCallCheck(this, _AppModule);
      };

      _AppModule.ɵfac = function AppModule_Factory(t) {
        return new (t || _AppModule)();
      };

      _AppModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineNgModule"]({
        type: _AppModule,
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__.AppComponent]
      });
      _AppModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineInjector"]({
        providers: [_services_participant_participant_service__WEBPACK_IMPORTED_MODULE_0__.ParticipantService, _services_settings_settings_service__WEBPACK_IMPORTED_MODULE_1__.SettingsService, _services_navbar_navbar_service__WEBPACK_IMPORTED_MODULE_2__.NavbarService, _angular_common__WEBPACK_IMPORTED_MODULE_11__.Location, {
          provide: _angular_common__WEBPACK_IMPORTED_MODULE_11__.LocationStrategy,
          useClass: _angular_common__WEBPACK_IMPORTED_MODULE_11__.HashLocationStrategy
        }],
        imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_12__.BrowserModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_13__.HttpClientModule, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.FormsModule, _angular_router__WEBPACK_IMPORTED_MODULE_15__.RouterModule.forRoot(appRoutes, {
          relativeLinkResolution: 'legacy'
        })]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsetNgModuleScope"](_AppModule, {
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__.AppComponent, _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_4__.NavbarComponent, _components_timer_timer_component__WEBPACK_IMPORTED_MODULE_5__.TimerComponent, _components_participant_list_participant_list_component__WEBPACK_IMPORTED_MODULE_6__.ParticipantListComponent, _components_settings_settings_component__WEBPACK_IMPORTED_MODULE_7__.SettingsComponent, _components_help_help_component__WEBPACK_IMPORTED_MODULE_8__.HelpComponent, _pipes_secs_pipe__WEBPACK_IMPORTED_MODULE_9__.SecsPipe],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_12__.BrowserModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_13__.HttpClientModule, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.FormsModule, _angular_router__WEBPACK_IMPORTED_MODULE_15__.RouterModule]
        });
      })();
      /***/

    },

    /***/
    7641:
    /*!***************************************************!*\
      !*** ./src/app/components/help/help.component.ts ***!
      \***************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "HelpComponent": function HelpComponent() {
          return (
            /* binding */
            _HelpComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _package_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../../../package.json */
      306);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      7716);

      var _HelpComponent = /*#__PURE__*/function () {
        function _HelpComponent() {
          _classCallCheck(this, _HelpComponent);

          this.version = _package_json__WEBPACK_IMPORTED_MODULE_0__.version;
        }

        _createClass(_HelpComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return _HelpComponent;
      }();

      _HelpComponent.ɵfac = function HelpComponent_Factory(t) {
        return new (t || _HelpComponent)();
      };

      _HelpComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: _HelpComponent,
        selectors: [["app-help"]],
        decls: 57,
        vars: 1,
        consts: [[1, "container"], ["href", "https://en.wikipedia.org/wiki/Scrum_(software_development)#Daily_scrum", "target", "_blank"], [1, "fa", "fa-users"], [1, "fa", "fa-clock-o"], [1, "btn", "btn-outline-success"], [1, "fa", "fa-hourglass-start"], ["href", "https://github.com/JoSSte/ScrumTimer/releases", "target", "_blank"], [1, "badge", "badge-secondary"], ["href", "https://github.com/JoSSte/ScrumTimer/issues", "target", "_blank"]],
        template: function HelpComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h3");

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

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "ol");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "li");

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

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33, "Notes");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "ul");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "li");

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

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

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

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](49);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Version ", ctx.version, "");
          }
        },
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJoZWxwLmNvbXBvbmVudC5jc3MifQ== */"]
      });
      /***/
    },

    /***/
    3252:
    /*!*******************************************************!*\
      !*** ./src/app/components/navbar/navbar.component.ts ***!
      \*******************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "NavbarComponent": function NavbarComponent() {
          return (
            /* binding */
            _NavbarComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      7716);
      /* harmony import */


      var _services_navbar_navbar_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../services/navbar/navbar.service */
      1038);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      8583);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      9895);

      var _c0 = function _c0() {
        return ["active"];
      };

      function NavbarComponent_nav_0_li_23_Template(rf, ctx) {
        if (rf & 1) {
          var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "a", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function NavbarComponent_nav_0_li_23_Template_a_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r3);

            var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

            return ctx_r2.openWindows();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "i", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "PopOut");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLinkActive", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](1, _c0));
        }
      }

      var _c1 = function _c1() {
        return ["timer"];
      };

      var _c2 = function _c2() {
        return ["participants"];
      };

      var _c3 = function _c3() {
        return ["settings"];
      };

      function NavbarComponent_nav_0_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "nav", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "a", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "SCRUM Timer");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "button", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "span", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "ul", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "li", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "a", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "i", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, " Timer");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "li", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "a", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "i", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, " Participants");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "li", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "a", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](17, "i", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, " Settings");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "li", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "a", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](21, "i", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, " Help");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](23, NavbarComponent_nav_0_li_23_Template, 4, 2, "li", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLinkActive", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](8, _c0));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](9, _c1));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLinkActive", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](10, _c0));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](11, _c2));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLinkActive", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](12, _c3));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](13, _c3));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLinkActive", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](14, _c0));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.noOpener);
        }
      }

      var _NavbarComponent = /*#__PURE__*/function () {
        function _NavbarComponent(nav) {
          _classCallCheck(this, _NavbarComponent);

          this.nav = nav;
          this.noOpener = true;
          this.scrumTimerWindow = null;
          this.jiraTimerWindow = null;
          this.windowProps = 'resizable=no,scrollbars,status,top=0,right=0,width=';
          this.popupWidth = 360;
          var hasOpener = window.opener;
          var openerMessage = '';

          try {
            if (hasOpener) {
              this.noOpener = false;
              openerMessage = 'Not Displaying popout link. already popped out';
              this.nav.hide();
            } else {
              this.noOpener = true;
              openerMessage = 'Displaying pop out link';
            }
          } catch (e) {
            console.log(e);
            openerMessage = 'Not Displaying popout link. Already popped out (exception)';
            this.noOpener = false;
            this.nav.hide();
          }

          console.log(openerMessage);
        }

        _createClass(_NavbarComponent, [{
          key: "openScrumTimer",
          value: function openScrumTimer() {
            var swp = this.windowProps + this.popupWidth + ',height=' + window.screen.availHeight;
            this.scrumTimerWindow = window.open(window.location.origin + window.location.pathname + 'nonavbar', 'TimerWindowName', swp);
          }
        }, {
          key: "openJira",
          value: function openJira() {
            var jwp = this.windowProps + (window.screen.availWidth - this.popupWidth - 10) + ',height=' + window.screen.availHeight;
            var url = localStorage.getItem('JiraURL');

            if (url) {
              this.jiraTimerWindow = window.open(url, 'StoryWindowName', jwp);
            } else {
              console.log('no JiraURL in localStorage');
            }
          }
        }, {
          key: "openWindows",
          value: function openWindows() {
            console.log('Opening windows');
            this.openJira();
            this.openScrumTimer();
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            console.log('[Scrumtimer] Navbar init');
          }
        }]);

        return _NavbarComponent;
      }();

      _NavbarComponent.ɵfac = function NavbarComponent_Factory(t) {
        return new (t || _NavbarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_navbar_navbar_service__WEBPACK_IMPORTED_MODULE_0__.NavbarService));
      };

      _NavbarComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: _NavbarComponent,
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
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLinkActive, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLinkWithHref],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJuYXZiYXIuY29tcG9uZW50LmNzcyJ9 */"]
      });
      /***/
    },

    /***/
    7742:
    /*!***************************************************************************!*\
      !*** ./src/app/components/participant-list/participant-list.component.ts ***!
      \***************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ParticipantListComponent": function ParticipantListComponent() {
          return (
            /* binding */
            _ParticipantListComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _models_Participant__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../models/Participant */
      4906);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      7716);
      /* harmony import */


      var _services_participant_participant_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../services/participant/participant.service */
      9245);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      3679);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      8583);

      function ParticipantListComponent_tr_12_Template(rf, ctx) {
        if (rf & 1) {
          var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "button", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ParticipantListComponent_tr_12_Template_button_click_6_listener() {
            var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r3);

            var participant_r1 = restoredCtx.$implicit;

            var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

            return ctx_r2.removeParticipant(participant_r1);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](7, "i", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var participant_r1 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", participant_r1.init, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", participant_r1.name, " ");
        }
      }

      var _ParticipantListComponent = /*#__PURE__*/function () {
        function _ParticipantListComponent(participantService) {
          _classCallCheck(this, _ParticipantListComponent);

          this.participantService = participantService;
          this.init = '';
          this.name = '';
          this.jsonParticipants = '';
        }

        _createClass(_ParticipantListComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.participantList = this.participantService.getParticipants(); // check for updated remote participants

            if (this.participantService.settings.usesRemoteParticipantList()) {
              this.participantService.updateRemoteParticipants();
            }
          }
        }, {
          key: "addParticipant",
          value: function addParticipant() {
            if (this.init.length > 1 && this.name.length > 2) {
              this.participantService.addParticipant(new _models_Participant__WEBPACK_IMPORTED_MODULE_0__.Participant(this.init, this.name));
            }

            this.init = '';
            this.name = '';
          }
        }, {
          key: "removeParticipant",
          value: function removeParticipant(participant) {
            return this.participantService.removeParticipant(participant);
          }
        }, {
          key: "exportParticipants",
          value: function exportParticipants() {
            this.jsonParticipants = this.participantService.exportParticipants();
          }
        }, {
          key: "importParticipants",
          value: function importParticipants() {
            this.participantService.importParticipants(this.jsonParticipants);
            this.participantList = this.participantService.getParticipants();
            this.jsonParticipants = '';
          }
        }, {
          key: "sortParticipants",
          value: function sortParticipants() {
            console.log('[sortParticipants()] This function has not yet been implemented');
          }
        }, {
          key: "isJsonString",
          value: function isJsonString(str) {
            try {
              JSON.parse(str);
            } catch (e) {
              return false;
            }

            return true;
          }
        }]);

        return _ParticipantListComponent;
      }();

      _ParticipantListComponent.ɵfac = function ParticipantListComponent_Factory(t) {
        return new (t || _ParticipantListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_participant_participant_service__WEBPACK_IMPORTED_MODULE_1__.ParticipantService));
      };

      _ParticipantListComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
        type: _ParticipantListComponent,
        selectors: [["app-participant-list"]],
        decls: 35,
        vars: 9,
        consts: [[1, "row"], [1, "col-md-10", "offset-md-3"], [3, "submit"], [1, "table", "table-striped"], [4, "ngFor", "ngForOf"], ["type", "text", "id", "init", "name", "init", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "text", "id", "name", "name", "name", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "submit", 1, "btn", "btn-sm", "btn-outline-primary", 3, "disabled"], [1, "fa", "fa-plus"], ["cols", "50", "rows", "5", "id", "jsonParticipants", "name", "jsonParticipants", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "container"], [1, "btn", "btn-sm", "btn-outline-dark", 3, "disabled", "click"], [1, "fa", "fa-upload"], [1, "btn", "btn-sm", "btn-outline-success", 3, "disabled", "click"], [1, "fa", "fa-download"], [1, "btn", "btn-sm", "btn-outline-danger", 3, "disabled", "click"], [1, "fa", "fa-eraser"], [1, "btn", "btn-outline-danger", "btn-sm", 3, "click"], [1, "fa", "fa-trash-o", "fa-lg"]],
        template: function ParticipantListComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "form", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("submit", function ParticipantListComponent_Template_form_submit_2_listener() {
              return ctx.addParticipant();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "table", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "thead");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "Initials");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "Name");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](10, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "tbody");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](12, ParticipantListComponent_tr_12_Template, 8, 2, "tr", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "tfoot");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "input", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function ParticipantListComponent_Template_input_ngModelChange_16_listener($event) {
              return ctx.init = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "input", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function ParticipantListComponent_Template_input_ngModelChange_18_listener($event) {
              return ctx.name = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "button", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](21, "i", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](22, " Add");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "textarea", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function ParticipantListComponent_Template_textarea_ngModelChange_24_listener($event) {
              return ctx.jsonParticipants = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "button", 11);

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

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](12);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.participantList);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.init);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.name);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx.name == "" || ctx.init == "");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.jsonParticipants);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx.participantList.length == 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" Export list (", ctx.participantList.length, ")");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", !ctx.isJsonString(ctx.jsonParticipants));

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx.jsonParticipants.length == 0);
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgForm, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgModel],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwYXJ0aWNpcGFudC1saXN0LmNvbXBvbmVudC5jc3MifQ== */"]
      });
      /***/
    },

    /***/
    6577:
    /*!***********************************************************!*\
      !*** ./src/app/components/settings/settings.component.ts ***!
      \***********************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "SettingsComponent": function SettingsComponent() {
          return (
            /* binding */
            _SettingsComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      7716);
      /* harmony import */


      var _services_settings_settings_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../services/settings/settings.service */
      1145);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/forms */
      3679);

      var _SettingsComponent = /*#__PURE__*/function () {
        function _SettingsComponent(settings) {
          _classCallCheck(this, _SettingsComponent);

          this.settings = settings;
        }

        _createClass(_SettingsComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
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
        }, {
          key: "saveSettings",
          value: function saveSettings() {
            this.settings.setGlobalMaxTime(this.globalMaxTime);
            this.settings.setUseGlobelMaxTime(this.useGlobalMaxTime);

            if (this.useRemoteParticipantList) {
              this.settings.setRemoteParticipantList(this.remoteParticipantListURL);
            } else {
              this.settings.setRemoteParticipantList('');
            }

            if (this.useJiraLinkURL) {
              this.settings.setJiraURL(this.jiraLinkURL);
            } else {
              console.log('deleting jira url');
              this.settings.setJiraURL('');
            }

            this.settings.saveSettings();
          }
        }, {
          key: "useRemoteParticipantListChecked",
          value: function useRemoteParticipantListChecked() {
            return !this.useRemoteParticipantList;
          }
        }, {
          key: "usejiraLinkChecked",
          value: function usejiraLinkChecked() {
            return !this.useJiraLinkURL;
          }
        }]);

        return _SettingsComponent;
      }();

      _SettingsComponent.ɵfac = function SettingsComponent_Factory(t) {
        return new (t || _SettingsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_settings_settings_service__WEBPACK_IMPORTED_MODULE_0__.SettingsService));
      };

      _SettingsComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: _SettingsComponent,
        selectors: [["app-settings"]],
        decls: 36,
        vars: 8,
        consts: [["action", ""], [1, "input-group", "mb-3"], [1, "input-group-prepend"], [1, "input-group-text"], ["type", "checkbox", "name", "useGlobalMaxTime", "aria-label", "Use Global max Time", "size", "3", 3, "ngModel", "ngModelChange"], ["name", "globalMaxTime", "id", "globalMaxTime", "type", "number", 1, "form-control", 3, "ngModel", "ngModelChange"], ["id", "globalMaxTimeHelp", 1, "form-text", "text-muted"], [1, "input-group", "mb3"], ["type", "checkbox", "name", "useRemoteParticipantList", "aria-label", "Use Remote Participant List", 3, "ngModel", "ngModelChange"], ["name", "remoteParticipantListURL", "id", "remoteParticipantListURL", "type", "url", 1, "form-control", 3, "ngModel", "disabled", "ngModelChange"], ["id", "remoteParticipantListURLHelp", 1, "form-text", "text-muted"], ["type", "checkbox", "name", "useJiraLink", "aria-label", "Use Jira Link", 3, "ngModel", "ngModelChange"], ["name", "jiraLinkURL", "id", "jiraLinkURL", "type", "url", 1, "form-control", 3, "ngModel", "disabled", "ngModelChange"], ["id", "jiraURLHelp", 1, "form-text", "text-muted"], ["type", "submit", "value", "Save Settings", 1, "btn", "btn-primary", "form-control", 3, "click"]],
        template: function SettingsComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Settings");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, " From here, you will be able to choose whether you want an overall time goal (e.g. 15 minutes), or a static time-per-person. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "form", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "span", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Total Max Time");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "input", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function SettingsComponent_Template_input_ngModelChange_10_listener($event) {
              return ctx.useGlobalMaxTime = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "input", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function SettingsComponent_Template_input_ngModelChange_11_listener($event) {
              return ctx.globalMaxTime = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "small", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "If the Total Max Time checkbox is selected, the time (in seconds) is used to define the max length of the Scrum meeting. The time for each participant is scaled to fit. If it is left unchecked, each participant is given the time shown in seconds.");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "span", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "Remote Participant list");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "input", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function SettingsComponent_Template_input_ngModelChange_20_listener($event) {
              return ctx.useRemoteParticipantList = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "input", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function SettingsComponent_Template_input_ngModelChange_21_listener($event) {
              return ctx.remoteParticipantListURL = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "small", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "If the Remote Participant List URL checkbox is selected, the tool will try to download a .json file from the URL and import the participants from that");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](24, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "span", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "Jira URL");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "input", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function SettingsComponent_Template_input_ngModelChange_30_listener($event) {
              return ctx.useJiraLinkURL = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "input", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function SettingsComponent_Template_input_ngModelChange_31_listener($event) {
              return ctx.jiraLinkURL = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "small", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33, "If the checkbox is checked, and you have a url entered, this URL will be opened in a window when using the popout function");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](34, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "input", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SettingsComponent_Template_input_click_35_listener() {
              return ctx.saveSettings();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.useGlobalMaxTime);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.globalMaxTime);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.useRemoteParticipantList);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.remoteParticipantListURL)("disabled", ctx.useRemoteParticipantListChecked());

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.useJiraLinkURL);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.jiraLinkURL)("disabled", ctx.usejiraLinkChecked());
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgForm, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.CheckboxControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.DefaultValueAccessor],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzZXR0aW5ncy5jb21wb25lbnQuY3NzIn0= */"]
      });
      /***/
    },

    /***/
    5082:
    /*!*****************************************************!*\
      !*** ./src/app/components/timer/timer.component.ts ***!
      \*****************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "TimerComponent": function TimerComponent() {
          return (
            /* binding */
            _TimerComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _models_Participant__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../models/Participant */
      4906);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! rxjs */
      6797);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/core */
      7716);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/router */
      9895);
      /* harmony import */


      var _services_navbar_navbar_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../services/navbar/navbar.service */
      1038);
      /* harmony import */


      var _services_participant_participant_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../services/participant/participant.service */
      9245);
      /* harmony import */


      var _services_settings_settings_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../services/settings/settings.service */
      1145);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/common */
      8583);
      /* harmony import */


      var _pipes_secs_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../pipes/secs.pipe */
      2537);

      function TimerComponent_div_0_div_33_Template(rf, ctx) {
        if (rf & 1) {
          var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "button", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function TimerComponent_div_0_div_33_Template_button_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r8);

            var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);

            return ctx_r7.startTimer();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](2, "i", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("disabled", ctx_r2.participantList.length == 0 || ctx_r2.timerActive);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", ctx_r2.currentParticipant.init, " ");
        }
      }

      function TimerComponent_div_0_div_34_Template(rf, ctx) {
        if (rf & 1) {
          var _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "button", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function TimerComponent_div_0_div_34_Template_button_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r10);

            var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);

            return ctx_r9.nextParticipant();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](2, "i", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, " Next ");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("disabled", ctx_r3.participantList.length <= 1 || !ctx_r3.timerActive);
        }
      }

      var _c0 = function _c0(a0, a1) {
        return {
          "text-success": a0,
          "text-primary": a1
        };
      };

      function TimerComponent_div_0_li_96_Template(rf, ctx) {
        if (rf & 1) {
          var _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "li", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "button", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function TimerComponent_div_0_li_96_Template_button_click_1_listener() {
            var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r14);

            var p_r11 = restoredCtx.$implicit;

            var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);

            return ctx_r13.markAbsent(p_r11);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](2, "i", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var p_r11 = ctx.$implicit;
          var i_r12 = ctx.index;

          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction2"](4, _c0, i_r12 == 0, i_r12 == 1));

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("disabled", ctx_r4.participantList.length <= 2 || i_r12 == 0 && ctx_r4.timerActive);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate2"](" ", p_r11.name, " [", p_r11.init, "]");
        }
      }

      var _c1 = function _c1(a0) {
        return {
          "text-danger": a0
        };
      };

      function TimerComponent_div_0_li_97_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "li", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "span", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](4, "secs");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var dp_r15 = ctx.$implicit;

          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate2"](" ", dp_r15.name, " [", dp_r15.init, "] - ");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](6, _c1, dp_r15.time >= ctx_r5.individualTime));

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](4, 4, dp_r15.time));
        }
      }

      function TimerComponent_div_0_li_98_Template(rf, ctx) {
        if (rf & 1) {
          var _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "li", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "button", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function TimerComponent_div_0_li_98_Template_button_click_1_listener() {
            var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r18);

            var ap_r16 = restoredCtx.$implicit;

            var ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);

            return ctx_r17.markPresent(ap_r16);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](2, "i", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ap_r16 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate2"](" ", ap_r16.name, " [", ap_r16.init, "]");
        }
      }

      var _c2 = function _c2(a0, a1, a2) {
        return {
          "progress-bar-animated": a0,
          "bg-warning": a1,
          "bg-danger": a2
        };
      };

      var _c3 = function _c3(a0) {
        return {
          "invisible": a0
        };
      };

      function TimerComponent_div_0_Template(rf, ctx) {
        if (rf & 1) {
          var _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "Overall Progress");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](8, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](10, "Overall Time");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](14, "i", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](15);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](16, "secs");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](17, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](18, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](19);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](20, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](21, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](22, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](23, "i", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](24);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](25, "secs");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](26, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](27, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](28, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](29, "button", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function TimerComponent_div_0_Template_button_click_29_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r20);

            var ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();

            return ctx_r19.stopTimer();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](30, "i", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](31, "button", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function TimerComponent_div_0_Template_button_click_31_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r20);

            var ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();

            return ctx_r21.resetTimer();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](32, "i", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](33, TimerComponent_div_0_div_33_Template, 4, 2, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](34, TimerComponent_div_0_div_34_Template, 4, 1, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](35, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](36, "button", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](37, "i", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](38, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](39, "a", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](40, "i", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](41, " Daily Question Card");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](42, "a", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](43, "i", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](44, " Debug Information");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](45, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](46, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](47, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](48, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](49, "Debug info");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](50, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](51, "li");

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

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](59, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](60, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](61);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](62, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](63);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](64, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](65);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

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

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](76, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](77, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](78, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](79, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](80, "Questions");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](81, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](82, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](83, "What did you do yesterday?");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](84, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](85, "What will you do today?");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](86, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](87, "Are you impeded in any way?");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](88, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](89, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](90, "Participants ");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](91, "button", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function TimerComponent_div_0_Template_button_click_91_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r20);

            var ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();

            return ctx_r22.shuffleParticipants();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](92, "i", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](93, "button", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function TimerComponent_div_0_Template_button_click_93_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r20);

            var ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();

            return ctx_r23.sortParticipants();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](94, "i", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](95, "ul", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](96, TimerComponent_div_0_li_96_Template, 4, 7, "li", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](97, TimerComponent_div_0_li_97_Template, 5, 8, "li", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](98, TimerComponent_div_0_li_98_Template, 4, 2, "li", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵstyleProp"]("width", ctx_r0.totalPercent + "%");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", ctx_r0.totalPercent, "%");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵstyleProp"]("width", ctx_r0.totalTimePercent + "%");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction3"](39, _c2, ctx_r0.totalTimePercent < 100, ctx_r0.totalTimePercent > 75 && ctx_r0.totalTimePercent <= 95, ctx_r0.totalTimePercent > 95));

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](43, _c3, ctx_r0.totalTimePercent <= 95));

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](16, 35, ctx_r0.totalMaxTime - ctx_r0.currentTotalElapsed));

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate2"]("", ctx_r0.currentParticipant.name, " [", ctx_r0.currentParticipant.init, "] Progress");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵstyleProp"]("width", ctx_r0.currentPercent + "%");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction3"](45, _c2, ctx_r0.currentPercent < 100, ctx_r0.currentPercent > 75 && ctx_r0.currentPercent <= 95, ctx_r0.currentPercent > 95));

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](49, _c3, ctx_r0.currentPercent <= 95));

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](25, 37, ctx_r0.individualTime - ctx_r0.currentElapsed), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("disabled", ctx_r0.totalPercent == 0 && ctx_r0.currentPercent == 0 || !ctx_r0.timerActive);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx_r0.timerActive);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r0.timerActive);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](18);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("Total ", ctx_r0.totalPercent, "% Complete");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("Current ", ctx_r0.currentPercent, "% Complete");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("Total Elapsed: ", ctx_r0.currentTotalElapsed, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("Participants Left: ", ctx_r0.participantList.length, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("Participants Done: ", ctx_r0.doneParticipants.length, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("Participants Absent: ", ctx_r0.absentParticipants.length, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("Diff: ", ctx_r0.diff, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("Elapsed: ", ctx_r0.currentElapsed, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("Elapsed: ", ctx_r0.totalElapsed, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("Partipicant Time: ", ctx_r0.individualTime, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate2"]("Current Participant: ", ctx_r0.currentParticipant.name, " [", ctx_r0.currentParticipant.init, "]");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](16);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("disabled", ctx_r0.participantList.length <= 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("disabled", ctx_r0.participantList.length <= 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r0.participantList);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r0.doneParticipants);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r0.absentParticipants);
        }
      }

      var _c4 = function _c4() {
        return ["participants"];
      };

      function TimerComponent_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "p");

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

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](1, _c4));
        }
      }

      var _TimerComponent = /*#__PURE__*/function () {
        function _TimerComponent(activatedRoute, nav, participantService, settingsService) {
          _classCallCheck(this, _TimerComponent);

          this.activatedRoute = activatedRoute;
          this.nav = nav;
          this.participantService = participantService;
          this.settingsService = settingsService;
          this.absentParticipants = Array();
          this.doneParticipants = Array(); // variables for session

          this.totalMaxTime = this.settingsService.getGlobalMaxTime();
          this.recommendedIndividualTime = 120;
          this.totalPercent = 0;
          this.totalTimePercent = 0;
          this.totalElapsed = 0;
          this.currentTotalElapsed = 0; // variables for indiviual

          this.individualMaxTime = 120;
          this.individualTime = this.individualMaxTime;
          this.currentPercent = 0;
          this.currentElapsed = 0;
          this.timerActive = false;
        }

        _createClass(_TimerComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.participantList = this.participantService.getParticipants();
            this.sortParticipants();

            if (this.settingsService.getUseGlobalMaxTime()) {
              this.individualTime = Math.round(this.settingsService.getGlobalMaxTime() / (this.participantList.length + this.doneParticipants.length));
            } else {
              this.individualTime = this.individualMaxTime;
            }

            console.log('[Scrumtimer] Timer init');

            if (this.activatedRoute['_routerState'].snapshot.url == '/popin') {
              this.nav.hide();
            } else {
              this.nav.show();
            }
          }
        }, {
          key: "stopTimer",
          value: function stopTimer() {
            // save time for participant
            this.currentParticipant.time = this.currentElapsed; // this.currentPercent = 0;
            // move first Participant to done participants

            if (this.participantList.length > 0) {
              this.doneParticipants.push(this.currentParticipant);
            } // remove the top participant


            this.participantList.splice(0, 1); // set progressbar to 100%

            this.totalPercent = 100;
            this.timerActive = false; // stop timer

            this.timerSubscription.unsubscribe();
          }
        }, {
          key: "startTimer",
          value: function startTimer() {
            var _this = this;

            var source = (0, rxjs__WEBPACK_IMPORTED_MODULE_6__.timer)(1000, 2000);
            this.currentParticipant = this.participantList[0];
            this.future = new Date(); // set the timer to a time in the future, based on "individualTime" seconds

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
            this.timerSubscription = source.subscribe(function (val) {
              _this.currentDiff = Math.floor((_this.future.getTime() - new Date().getTime()) / 1000);
              _this.currentElapsed = _this.individualTime - _this.currentDiff;
              _this.currentPercent = Math.round(_this.currentElapsed / _this.individualTime * 100);
              _this.currentTotalElapsed = _this.totalElapsed + _this.currentElapsed;
              _this.totalTimePercent = Math.round((_this.totalElapsed + _this.currentElapsed) / _this.totalMaxTime * 100);
            });
            this.timerActive = true;
          }
        }, {
          key: "nextParticipant",
          value: function nextParticipant() {
            // save time for participant
            this.participantList[0].time = this.currentElapsed; // add up total elapsed time

            this.totalElapsed += this.currentElapsed;
            this.currentElapsed = 0;
            this.currentDiff = 0;
            this.currentPercent = 0; // move first Participant to done participants

            this.doneParticipants.push(this.participantList[0]); // remove the top participant

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
            this.timerActive = false; // stop timer

            this.timerSubscription.unsubscribe();
            this.startTimer();
          }
        }, {
          key: "resetTimer",
          value: function resetTimer() {
            this.stopTimer(); // move all participants from done to present

            for (var i = this.doneParticipants.length - 1; i >= 0; i--) {
              // reset time taken
              this.doneParticipants[i].time = 0;
              this.participantList.push(this.doneParticipants[i]);
              this.doneParticipants.splice(i, 1);
            } // reset timers


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

        }, {
          key: "shuffle",
          value: function shuffle(array) {
            var currentIndex = array.length,
                temporaryValue,
                randomIndex; // While there remain elements to shuffle...

            while (0 !== currentIndex) {
              // Pick a remaining element...
              randomIndex = Math.floor(Math.random() * currentIndex);
              currentIndex -= 1; // And swap it with the current element.

              temporaryValue = array[currentIndex];
              array[currentIndex] = array[randomIndex];
              array[randomIndex] = temporaryValue;
            }

            return array;
          }
        }, {
          key: "shuffleParticipants",
          value: function shuffleParticipants() {
            this.participantList = this.shuffle(this.participantList);
            this.currentParticipant = this.participantList[0];
          }
        }, {
          key: "sortParticipants",
          value: function sortParticipants() {
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

        }, {
          key: "markAbsent",
          value: function markAbsent(participant) {
            if (this.participantList.length <= 2) {
              console.log('Cannot mark the last two participants absent.');
            } else {
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

        }, {
          key: "markPresent",
          value: function markPresent(participant) {
            var idx = this.absentParticipants.indexOf(participant);
            this.participantList.push(participant);
            this.absentParticipants.splice(idx, 1);
          }
        }]);

        return _TimerComponent;
      }();

      _TimerComponent.ɵfac = function TimerComponent_Factory(t) {
        return new (t || _TimerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_services_navbar_navbar_service__WEBPACK_IMPORTED_MODULE_1__.NavbarService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_services_participant_participant_service__WEBPACK_IMPORTED_MODULE_2__.ParticipantService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_services_settings_settings_service__WEBPACK_IMPORTED_MODULE_3__.SettingsService));
      };

      _TimerComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
        type: _TimerComponent,
        selectors: [["app-timer"]],
        decls: 2,
        vars: 2,
        consts: [["class", "container", 4, "ngIf"], ["class", "jumbotron", 4, "ngIf"], [1, "container"], [1, "progress"], ["role", "progressbar", "aria-valuenow", "40", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", "progress-bar-striped", "bg-success"], ["role", "progressbar", "aria-valuenow", "40", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", "progress-bar-striped", "bg-info", 3, "ngClass"], [1, "fa", "fa-exclamation-triangle", 3, "ngClass"], ["role", "progressbar", "aria-valuenow", "0", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", "progress-bar-striped", 3, "ngClass"], ["role", "toolbar", "aria-label", "Toolbar", 1, "btn-toolbar"], ["role", "group", 1, "btn-group", "mr-2"], ["title", "Stop Timer", 1, "btn", "btn-outline-danger", 3, "disabled", "click"], [1, "fa", "fa-hourglass-end"], ["title", "Reset", 1, "btn", "btn-outline-secondary", 3, "click"], [1, "fa", "fa-undo"], ["class", "btn-group mr-2", "role", "group", 4, "ngIf"], ["id", "btnGroupDrop1", "type", "button", "data-toggle", "dropdown", "aria-haspopup", "true", "aria-expanded", "false", 1, "btn", "btn-outline-secondary", "dropdown-toggle"], [1, "fa", "fa-ellipsis-v"], [1, "dropdown-menu"], ["href", "#", "data-toggle", "collapse", "data-target", "#Questions", "aria-expanded", "false", "aria-controls", "Questions", 1, "dropdown-item"], [1, "fa", "fa-question"], ["href", "#", "data-toggle", "collapse", "data-target", "#Debug", "aria-expanded", "false", "aria-controls", "Debug", 1, "dropdown-item"], [1, "fa", "fa-bug"], ["id", "Debug", 1, "collapse"], [1, "card", "card-body"], ["id", "Questions", 1, "collapse"], ["title", "Shuffle Participants", 1, "btn", "btn-sm", "btn-info", 3, "disabled", "click"], [1, "fa", "fa-random"], ["title", "Sort Participants", 1, "btn", "btn-sm", "btn-info", 3, "disabled", "click"], [1, "fa", "fa-sort-amount-asc"], [1, "participant-list", "list-group"], ["class", "list-group-item", 3, "ngClass", 4, "ngFor", "ngForOf"], ["class", "list-group-item list-group-item-secondary", 4, "ngFor", "ngForOf"], ["class", "list-group-item list-group-item-danger", 4, "ngFor", "ngForOf"], ["title", "Start Timer", 1, "btn", "btn-outline-success", 3, "disabled", "click"], [1, "fa", "fa-hourglass-start"], ["title", "Next participant", 1, "btn", "btn-outline-primary", 3, "disabled", "click"], [1, "fa", "fa-step-forward"], [1, "list-group-item", 3, "ngClass"], ["title", "Mark as absent", 1, "btn", "btn-outline-secondary", "btn-sm", 3, "disabled", "click"], [1, "fa", "fa-minus-circle"], [1, "list-group-item", "list-group-item-secondary"], [3, "ngClass"], [1, "list-group-item", "list-group-item-danger"], ["title", "Mark as present", 1, "btn", "btn-outline-secondary", "btn-sm", 3, "click"], [1, "fa", "fa-plus-circle"], [1, "jumbotron"], ["href", "#", 3, "routerLink"]],
        template: function TimerComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](0, TimerComponent_div_0_Template, 99, 51, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, TimerComponent_div_1_Template, 10, 2, "div", 1);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.participantList.length > 0 || ctx.doneParticipants.length > 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.participantList.length == 0 && ctx.doneParticipants.length == 0);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgForOf, _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterLinkWithHref],
        pipes: [_pipes_secs_pipe__WEBPACK_IMPORTED_MODULE_4__.SecsPipe],
        styles: [".progress[_ngcontent-%COMP%] {\n    position: relative;\n}\n\n.progress[_ngcontent-%COMP%] {\n    height: 40px;\n}\n\n.progress-bar[_ngcontent-%COMP%] {\n    height: 40px;\n}\n\n.progress[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    position: absolute;\n    display: block;\n    width: 100%;\n    top: 50%;\n    margin-top: -10px;\n    color: black;\n    font-weight: bold;\n }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRpbWVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0VBRUU7O0FBRUY7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixjQUFjO0lBQ2QsV0FBVztJQUNYLFFBQVE7SUFDUixpQkFBaUI7SUFDakIsWUFBWTtJQUNaLGlCQUFpQjtDQUNwQiIsImZpbGUiOiJ0aW1lci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBQcm9ncmVzcyBiYXJzIHdpdGggY2VudGVyZWQgdGV4dFxuICovXG5cbi5wcm9ncmVzcyB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4ucHJvZ3Jlc3Mge1xuICAgIGhlaWdodDogNDBweDtcbn1cblxuLnByb2dyZXNzLWJhciB7XG4gICAgaGVpZ2h0OiA0MHB4O1xufVxuXG4ucHJvZ3Jlc3Mgc3BhbiB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHRvcDogNTAlO1xuICAgIG1hcmdpbi10b3A6IC0xMHB4O1xuICAgIGNvbG9yOiBibGFjaztcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiB9XG5cbiJdfQ== */"]
      });
      /***/
    },

    /***/
    4906:
    /*!***************************************!*\
      !*** ./src/app/models/Participant.ts ***!
      \***************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "Participant": function Participant() {
          return (
            /* binding */
            _Participant
          );
        },

        /* harmony export */
        "ParticipantAdapter": function ParticipantAdapter() {
          return (
            /* binding */
            _ParticipantAdapter
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      7716);

      var _Participant = function _Participant(init, name) {
        var time = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;

        _classCallCheck(this, _Participant);

        this.init = init;
        this.name = name;
        this.time = time;
      };

      var _ParticipantAdapter = /*#__PURE__*/function () {
        function _ParticipantAdapter() {
          _classCallCheck(this, _ParticipantAdapter);
        }

        _createClass(_ParticipantAdapter, [{
          key: "adapt",
          value: function adapt(item) {
            return new _Participant(item.init, item.name, item.time);
          }
        }]);

        return _ParticipantAdapter;
      }();

      _ParticipantAdapter.ɵfac = function ParticipantAdapter_Factory(t) {
        return new (t || _ParticipantAdapter)();
      };

      _ParticipantAdapter.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: _ParticipantAdapter,
        factory: _ParticipantAdapter.ɵfac,
        providedIn: 'root'
      });
      /***/
    },

    /***/
    2537:
    /*!************************************!*\
      !*** ./src/app/pipes/secs.pipe.ts ***!
      \************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "SecsPipe": function SecsPipe() {
          return (
            /* binding */
            _SecsPipe
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      7716);

      var _SecsPipe = /*#__PURE__*/function () {
        function _SecsPipe() {
          _classCallCheck(this, _SecsPipe);
        }

        _createClass(_SecsPipe, [{
          key: "transform",
          value: function transform(totalseconds) {
            var prefix = '';

            if (totalseconds < 0) {
              totalseconds = Math.abs(totalseconds);
              prefix = '-';
            }

            var minutes = Math.floor(totalseconds / 60);
            var seconds = totalseconds % 60;
            return prefix + ('00' + minutes).slice(-2) + ':' + ('00' + seconds).slice(-2);
          }
        }]);

        return _SecsPipe;
      }();

      _SecsPipe.ɵfac = function SecsPipe_Factory(t) {
        return new (t || _SecsPipe)();
      };

      _SecsPipe.ɵpipe = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
        name: "secs",
        type: _SecsPipe,
        pure: true
      });
      /***/
    },

    /***/
    1038:
    /*!***************************************************!*\
      !*** ./src/app/services/navbar/navbar.service.ts ***!
      \***************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "NavbarService": function NavbarService() {
          return (
            /* binding */
            _NavbarService
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      7716);

      var _NavbarService = /*#__PURE__*/function () {
        function _NavbarService() {
          _classCallCheck(this, _NavbarService);

          this.visible = true;
        }

        _createClass(_NavbarService, [{
          key: "hide",
          value: function hide() {
            this.visible = false;
          }
        }, {
          key: "show",
          value: function show() {
            this.visible = true;
          }
        }, {
          key: "toggle",
          value: function toggle() {
            this.visible = !this.visible;
          }
        }]);

        return _NavbarService;
      }();

      _NavbarService.ɵfac = function NavbarService_Factory(t) {
        return new (t || _NavbarService)();
      };

      _NavbarService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: _NavbarService,
        factory: _NavbarService.ɵfac,
        providedIn: 'root'
      });
      /***/
    },

    /***/
    9245:
    /*!*************************************************************!*\
      !*** ./src/app/services/participant/participant.service.ts ***!
      \*************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ParticipantService": function ParticipantService() {
          return (
            /* binding */
            _ParticipantService
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs/operators */
      8002);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      7716);
      /* harmony import */


      var _settings_settings_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../settings/settings.service */
      1145);
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common/http */
      1841);
      /* harmony import */


      var _models_Participant__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../models/Participant */
      4906);

      var _ParticipantService = /*#__PURE__*/function () {
        function _ParticipantService(settings, http, adapter) {
          _classCallCheck(this, _ParticipantService);

          this.settings = settings;
          this.http = http;
          this.adapter = adapter;
          this.lastSync = new Date('2000-01-01T00:00:00.000Z');
          this.getLastSync();
        }

        _createClass(_ParticipantService, [{
          key: "getLastSync",
          value: function getLastSync() {
            var localSync = localStorage.getItem('lastSync');

            if (localSync == null) {
              console.log('never synced');
            } else {
              console.log('Last sync: ' + localSync);
            }
          }
        }, {
          key: "setLastSync",
          value: function setLastSync(d) {
            localStorage.setItem('lastSync', d.toISOString());
          }
        }, {
          key: "getParticipants",
          value: function getParticipants() {
            if (localStorage.getItem('participants') === null) {
              this.participants = [];
            } else {
              // TODO: check if the localstorage Entry is valid JSON before returning
              this.participants = JSON.parse(localStorage.getItem('participants'));
            }

            return this.participants;
          }
        }, {
          key: "addParticipant",
          value: function addParticipant(participant) {
            this.participants.unshift(participant);
            localStorage.setItem('participants', JSON.stringify(this.participants));
          }
          /**
           * Remove specified participant from the
           * @param participant Participant to be removed
           */

        }, {
          key: "removeParticipant",
          value: function removeParticipant(participant) {
            var removed = false;

            for (var i = 0; i < this.participants.length; i++) {
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

        }, {
          key: "purgeParticipants",
          value: function purgeParticipants() {
            this.participants.splice(0);
            localStorage.setItem('participants', JSON.stringify(this.participants));
          }
        }, {
          key: "exportParticipants",
          value: function exportParticipants() {
            return JSON.stringify(this.participants);
          } // overwrite localstorage, and refresh local list of participants from there...

        }, {
          key: "importParticipants",
          value: function importParticipants(jsonParticipants) {
            localStorage.setItem('participants', jsonParticipants);
            this.exportParticipants();
          }
        }, {
          key: "getRemoteParticipants",
          value: function getRemoteParticipants() {
            var _this2 = this;

            if (this.settings.usesRemoteParticipantList()) {
              console.log('remote participant list affirmative. Checking URL');
              var durationSinceLastSync = Date.now().valueOf() - this.lastSync.valueOf(); // If more than 15 hours since sync, update

              if (durationSinceLastSync > 54000) {
                var url = this.settings.getRemoteParticipantListURL();
                console.log('Seconds since last sync: ' + durationSinceLastSync + ' syncing from ' + url + ' . . .');
                return this.http.get(url).pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(function (data) {
                  return data.map(function (item) {
                    return _this2.adapter.adapt(item);
                  });
                }));
              } else {
                // TODO: throw exception
                console.log('not syncing');
              }
            } else {
              // TODO: throw exception ?
              console.log('using local participant list');
            }
          }
        }, {
          key: "updateRemoteParticipants",
          value: function updateRemoteParticipants() {
            var _this3 = this;

            this.getRemoteParticipants().subscribe(function (resp) {
              // display its headers
              _this3.participants = resp;
              localStorage.setItem('participants', JSON.stringify(_this3.participants));

              _this3.setLastSync(new Date());
            });
          }
        }]);

        return _ParticipantService;
      }();

      _ParticipantService.ɵfac = function ParticipantService_Factory(t) {
        return new (t || _ParticipantService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_settings_settings_service__WEBPACK_IMPORTED_MODULE_0__.SettingsService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_models_Participant__WEBPACK_IMPORTED_MODULE_1__.ParticipantAdapter));
      };

      _ParticipantService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
        token: _ParticipantService,
        factory: _ParticipantService.ɵfac
      });
      /***/
    },

    /***/
    1145:
    /*!*******************************************************!*\
      !*** ./src/app/services/settings/settings.service.ts ***!
      \*******************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "SettingsService": function SettingsService() {
          return (
            /* binding */
            _SettingsService
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      7716);

      var _SettingsService = /*#__PURE__*/function () {
        function _SettingsService() {
          _classCallCheck(this, _SettingsService);

          this.useGlobalMaxTime = true;
          this.globalMaxTime = 60 * 15;
          this.remoteParticipantList = '';
          this.jiraURL = '';
        }

        _createClass(_SettingsService, [{
          key: "getGlobalMaxTime",
          value: function getGlobalMaxTime() {
            if (localStorage.getItem('settings') === null) {
              this.globalMaxTime = 60 * 15;
            } else {
              this.globalMaxTime = JSON.parse(localStorage.getItem('settings'))[1];
            }

            return this.globalMaxTime;
          }
        }, {
          key: "getUseGlobalMaxTime",
          value: function getUseGlobalMaxTime() {
            if (localStorage.getItem('settings') === null) {
              this.useGlobalMaxTime = true;
            } else {
              this.useGlobalMaxTime = JSON.parse(localStorage.getItem('settings'))[0];
            }

            return this.useGlobalMaxTime;
          }
        }, {
          key: "getRemoteParticipantListURL",
          value: function getRemoteParticipantListURL() {
            if (localStorage.getItem('settings') === null) {
              this.remoteParticipantList = '';
            } else {
              this.remoteParticipantList = JSON.parse(localStorage.getItem('settings'))[2];
            }

            return this.remoteParticipantList;
          }
        }, {
          key: "getJiraURL",
          value: function getJiraURL() {
            if (localStorage.getItem('JiraURL') === null) {
              this.jiraURL = '';
            } else {
              this.jiraURL = localStorage.getItem('JiraURL');
            }

            return this.jiraURL;
          }
        }, {
          key: "usesRemoteParticipantList",
          value: function usesRemoteParticipantList() {
            return this.getRemoteParticipantListURL() !== '';
          }
        }, {
          key: "setGlobalMaxTime",
          value: function setGlobalMaxTime(newTime) {
            this.globalMaxTime = newTime;
            this.saveSettings();
          }
        }, {
          key: "setRemoteParticipantList",
          value: function setRemoteParticipantList(newUrl) {
            this.remoteParticipantList = newUrl;
            this.saveSettings();
          }
        }, {
          key: "setJiraURL",
          value: function setJiraURL(newUrl) {
            this.jiraURL = newUrl;

            if (newUrl !== '') {
              localStorage.setItem('JiraURL', this.jiraURL);
            } else {
              localStorage.removeItem('JiraURL');
            }
          }
        }, {
          key: "setUseGlobelMaxTime",
          value: function setUseGlobelMaxTime(useGMTime) {
            this.useGlobalMaxTime = useGMTime;
            this.saveSettings();
          }
        }, {
          key: "exportSettings",
          value: function exportSettings() {
            return JSON.stringify([this.useGlobalMaxTime, this.globalMaxTime, this.remoteParticipantList]);
          }
        }, {
          key: "saveSettings",
          value: function saveSettings() {
            localStorage.setItem('settings', this.exportSettings());
          } // overwrite localstorage, and refresh local list of participants from there...

        }, {
          key: "importSettings",
          value: function importSettings(jsonSettings) {
            localStorage.setItem('participants', jsonSettings);
            this.exportSettings();
          }
        }]);

        return _SettingsService;
      }();

      _SettingsService.ɵfac = function SettingsService_Factory(t) {
        return new (t || _SettingsService)();
      };

      _SettingsService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: _SettingsService,
        factory: _SettingsService.ɵfac
      });
      /***/
    },

    /***/
    2340:
    /*!*****************************************!*\
      !*** ./src/environments/environment.ts ***!
      \*****************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "environment": function environment() {
          return (
            /* binding */
            _environment
          );
        }
        /* harmony export */

      }); // The file contents for the current environment will overwrite these during build.
      // The build system defaults to the dev environment which uses `environment.ts`, but if you do
      // `ng build --env=prod` then `environment.prod.ts` will be used instead.
      // The list of which env maps to which file can be found in `.angular-cli.json`.


      var _environment = {
        production: false
      };
      /***/
    },

    /***/
    4431:
    /*!*********************!*\
      !*** ./src/main.ts ***!
      \*********************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/platform-browser */
      9075);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      7716);
      /* harmony import */


      var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./app/app.module */
      6747);
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./environments/environment */
      2340);

      if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
        (0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
      }

      _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)["catch"](function (err) {
        return console.log(err);
      });
      /***/

    },

    /***/
    306:
    /*!**********************!*\
      !*** ./package.json ***!
      \**********************/

    /***/
    function _(module) {
      "use strict";

      module.exports = JSON.parse('{"name":"scrum-timer","version":"0.3.4","license":"MIT","scripts":{"ng":"ng","start":"node server.js","build":"ng build","test":"ng test","lint":"eslint -c .eslintrc.js --ext .ts src","lint:fix":"eslint -c .eslintrc.js --fix --ext .ts src","e2e":"ng e2e","bump-version":"npm version patch -m \\"Bump version to %s\\" && git push --tags","deploy":"ng build --base-href \\"https://josste.github.io/ScrumTimer/\\" && cp ./dist/index.html ./dist/404.html && angular-cli-ghpages –-no-silent"},"private":true,"dependencies":{"@angular/animations":"^12.1.0","@angular/common":"^12.1.0","@angular/compiler":"^12.1.0","@angular/core":"^12.1.0","@angular/forms":"^12.1.0","@angular/platform-browser":"^12.1.0","@angular/platform-browser-dynamic":"^12.1.0","@babel/polyfill":"^7.12.1","bootstrap":"^4.5.3","core-js":"^3.15.2","diff":"^5.0.0","font-awesome":"^4.7.0","jquery":"^3.6.0","npm":"^7.19.1","popper.js":"^1.16.0","rxjs":"^6.6.7","rxjs-compat":"^6.6.7","tether":"^1.4.7","tslib":"^2.3.0","zone.js":"~0.11.4"},"devDependencies":{"@angular-devkit/build-angular":"^12.1.0","@angular-eslint/eslint-plugin":"^12.2.0","@angular/cli":"^12.1.0","@angular/compiler-cli":"^12.1.0","@angular/language-service":"^12.1.0","@angular/router":"^12.1.0","@types/jasmine":"~3.6.0","@types/jasminewd2":"^2.0.8","@types/node":"^13.13.34","@typescript-eslint/eslint-plugin":"^4.28.1","@typescript-eslint/eslint-plugin-tslint":"^4.28.1","@typescript-eslint/parser":"^4.28.1","angular-cli-ghpages":"^0.6.2","codelyzer":"^6.0.0","eslint":"^7.29.0","jasmine-core":"~3.6.0","jasmine-spec-reporter":"~5.0.0","karma":"~6.3.2","karma-chrome-launcher":"~3.1.0","karma-cli":"~2.0.0","karma-coverage":"^2.0.3","karma-coverage-istanbul-reporter":"~3.0.2","karma-firefox-launcher":"^2.1.1","karma-jasmine":"~4.0.0","karma-jasmine-html-reporter":"^1.5.0","karma-junit-reporter":"^2.0.1","protractor":"~7.0.0","ts-node":"~8.8.2","typescript":"~4.3.4"}}');
      /***/
    }
  },
  /******/
  function (__webpack_require__) {
    // webpackRuntimeModules

    /******/
    "use strict";
    /******/

    /******/

    var __webpack_exec__ = function __webpack_exec__(moduleId) {
      return __webpack_require__(__webpack_require__.s = moduleId);
    };
    /******/


    __webpack_require__.O(0, ["vendor"], function () {
      return __webpack_exec__(4431);
    });
    /******/


    var __webpack_exports__ = __webpack_require__.O();
    /******/

  }]);
})();
//# sourceMappingURL=main-es5.js.map