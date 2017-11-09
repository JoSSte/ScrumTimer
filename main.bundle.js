webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
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
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\r\n<div class=\"container\">\r\n  <router-outlet></router-outlet>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pipes_hhmmss_pipe__ = __webpack_require__("../../../../../src/app/pipes/hhmmss.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_participant_participant_service__ = __webpack_require__("../../../../../src/app/services/participant/participant.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_settings_settings_service__ = __webpack_require__("../../../../../src/app/services/settings/settings.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_navbar_navbar_component__ = __webpack_require__("../../../../../src/app/components/navbar/navbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_timer_timer_component__ = __webpack_require__("../../../../../src/app/components/timer/timer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_participant_list_participant_list_component__ = __webpack_require__("../../../../../src/app/components/participant-list/participant-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_settings_settings_component__ = __webpack_require__("../../../../../src/app/components/settings/settings.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_help_help_component__ = __webpack_require__("../../../../../src/app/components/help/help.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





//import { Timer } from 'angular-timer'; // AngularJS - not 4??

//Services


// Components






var appRoutes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_10__components_timer_timer_component__["a" /* TimerComponent */] },
    { path: 'timer', component: __WEBPACK_IMPORTED_MODULE_10__components_timer_timer_component__["a" /* TimerComponent */] },
    { path: 'participants', component: __WEBPACK_IMPORTED_MODULE_11__components_participant_list_participant_list_component__["a" /* ParticipantListComponent */] },
    { path: 'settings', component: __WEBPACK_IMPORTED_MODULE_12__components_settings_settings_component__["a" /* SettingsComponent */] },
    { path: 'help', component: __WEBPACK_IMPORTED_MODULE_13__components_help_help_component__["a" /* HelpComponent */] }
    //{ path: '', component: Component }
];
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["M" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_9__components_navbar_navbar_component__["a" /* NavbarComponent */],
            __WEBPACK_IMPORTED_MODULE_10__components_timer_timer_component__["a" /* TimerComponent */],
            __WEBPACK_IMPORTED_MODULE_11__components_participant_list_participant_list_component__["a" /* ParticipantListComponent */],
            __WEBPACK_IMPORTED_MODULE_12__components_settings_settings_component__["a" /* SettingsComponent */],
            __WEBPACK_IMPORTED_MODULE_5__pipes_hhmmss_pipe__["a" /* SecondsPipe */],
            __WEBPACK_IMPORTED_MODULE_13__components_help_help_component__["a" /* HelpComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* RouterModule */].forRoot(appRoutes)
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_6__services_participant_participant_service__["a" /* ParticipantService */],
            __WEBPACK_IMPORTED_MODULE_7__services_settings_settings_service__["a" /* SettingsService */],
            __WEBPACK_IMPORTED_MODULE_4__angular_common__["f" /* Location */],
            { provide: __WEBPACK_IMPORTED_MODULE_4__angular_common__["g" /* LocationStrategy */], useClass: __WEBPACK_IMPORTED_MODULE_4__angular_common__["d" /* HashLocationStrategy */] }
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/components/help/help.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/help/help.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <h3>What is it?</h3>\n  <p>\n    A Scrum Timer! - see [some link on the web] for more details f you don't know what that is...\n  </p>\n  <h3>How to use</h3>\n\n  <ol>\n    <li>Go to\n      <b>\n        <i class=\"fa fa-users\"></i> Participants</b> and make sure that everyone you want in the Scrum Timer </li>\n    <li>\n      Go to the\n      <b>\n        <i class=\"fa fa-clock-o\"></i> Timer</b> and mark anyone who is not present as absent. </li>\n    <li>click the\n      <span class=\"btn btn-outline-success\">\n        <i class=\"fa fa-hourglass-start\"></i>\n      </span> start button to start the timer\n    </li>\n    <li>Click the next button for each subsequent participant, and finally the stop button</li>\n  </ol>\n\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/help/help.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HelpComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HelpComponent = (function () {
    function HelpComponent() {
    }
    HelpComponent.prototype.ngOnInit = function () {
    };
    return HelpComponent;
}());
HelpComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-help',
        template: __webpack_require__("../../../../../src/app/components/help/help.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/help/help.component.css")]
    }),
    __metadata("design:paramtypes", [])
], HelpComponent);

//# sourceMappingURL=help.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/navbar/navbar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/navbar/navbar.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-dark bg-dark navbar-expand-md\">\r\n  <a class=\"navbar-brand\" href=\"#\">SCRUM Timer</a>\r\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#ScrumNavBar\" aria-controls=\"ScrumNavBar\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n    <span class=\"navbar-toggler-icon\"></span>\r\n  </button>\r\n\r\n  <div class=\"collapse navbar-collapse\" id=\"ScrumNavBar\">\r\n    <ul class=\"navbar-nav mr-auto\">\r\n      <li class=\"nav-item\" [routerLinkActive]=\"['active']\">\r\n        <a class=\"nav-link\" href=\"#\" [routerLink]=\"['timer']\"><i class=\"fa fa-clock-o\"></i> Timer</a>\r\n      </li>\r\n      <li class=\"nav-item\" [routerLinkActive]=\"['active']\">\r\n        <a class=\"nav-link\" href=\"#\" [routerLink]=\"['participants']\"><i class=\"fa fa-users\"></i> Participants</a>\r\n      </li>\r\n      <!-- <li class=\"nav-item\" [routerLinkActive]=\"['active']\">\r\n        <a class=\"nav-link\" href=\"#\" [routerLink]=\"['settings']\"><i class=\"fa fa-cog\"></i> Settings</a>\r\n      </li> -->\r\n      <li class=\"nav-item\" [routerLinkActive]=\"['active']\">\r\n        <a class=\"nav-link\" href=\"#\" routerLink=\"/help\"><i class=\"fa fa-question-circle\"></i> Help</a>\r\n      </li>\r\n    </ul>\r\n  </div>\r\n</nav>"

/***/ }),

/***/ "../../../../../src/app/components/navbar/navbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NavbarComponent = (function () {
    function NavbarComponent() {
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    return NavbarComponent;
}());
NavbarComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-navbar',
        template: __webpack_require__("../../../../../src/app/components/navbar/navbar.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/navbar/navbar.component.css")]
    }),
    __metadata("design:paramtypes", [])
], NavbarComponent);

//# sourceMappingURL=navbar.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/participant-list/participant-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/participant-list/participant-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col-md-10 offset-md-3\">\r\n    <form (submit)=\"addParticipant()\">\r\n      <table class=\"table table-striped\">\r\n        <thead>\r\n          <tr>\r\n            <th>Initials</th>\r\n            <th>Name</th>\r\n            <th></th>\r\n          </tr>\r\n        </thead>\r\n        <tbody>\r\n          <tr *ngFor=\"let participant of participantList\">\r\n            <td>\r\n              {{ participant.init }}\r\n            </td>\r\n            <td>\r\n              {{ participant.name }}\r\n            </td>\r\n            <td>\r\n              <button class=\"btn btn-outline-danger btn-sm\" (click)=\"removeParticipant(participant)\"><i class=\"fa fa-trash-o fa-lg\"></i></button>\r\n            </td>\r\n          </tr>\r\n        </tbody>\r\n        <tfoot>\r\n          <tr>\r\n            <td>\r\n              <input class=\"form-control\" type=\"text\" id=\"init\" name=\"init\" [(ngModel)]=\"init\">\r\n            </td>\r\n            <td>\r\n              <input class=\"form-control\" type=\"text\" id=\"name\" name=\"name\" [(ngModel)]=\"name\">\r\n            </td>\r\n            <td>\r\n              <button type=\"submit\" class=\"btn btn-sm btn-outline-primary\" [disabled]=\"name =='' || init == ''\"><i class=\"fa fa-plus\"></i> Add</button>\r\n            </td>\r\n          </tr>\r\n        </tfoot>\r\n      </table>\r\n    </form>\r\n  </div>\r\n</div>\r\n<div class=\"row\">\r\n  <textarea class=\"form-control\" cols=\"50\" rows=\"5\" id=\"jsonParticipants\" name=\"jsonParticipants\" [(ngModel)]=\"jsonParticipants\"></textarea>\r\n</div>\r\n<div class=\"container\">\r\n\r\n  <button class=\"btn btn-sm btn-outline-dark\" (click)=\"exportParticipants()\" [disabled]=\"participantList.length == 0\"><i class=\"fa fa-upload\" ></i> Export list ({{ participantList.length }})</button>\r\n  <button class=\"btn btn-sm btn-outline-success\" [disabled]=\"! isJsonString(jsonParticipants)\" (click)=\"importParticipants()\"><i class=\"fa fa-download\"></i> Import List</button>\r\n  <button class=\"btn btn-sm btn-outline-danger\" (click)=\"jsonParticipants ='' \" [disabled]=\"jsonParticipants.length == 0\"><i class=\"fa fa-eraser\"></i> Clear</button>\r\n \r\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/participant-list/participant-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ParticipantListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_participant_participant_service__ = __webpack_require__("../../../../../src/app/services/participant/participant.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ParticipantListComponent = (function () {
    function ParticipantListComponent(participantService) {
        this.participantService = participantService;
        this.init = "";
        this.name = "";
        this.jsonParticipants = "";
    }
    ParticipantListComponent.prototype.ngOnInit = function () {
        this.participantList = this.participantService.getParticipants();
    };
    ParticipantListComponent.prototype.addParticipant = function () {
        if (this.init.length > 1 && this.name.length > 2)
            this.participantService.addParticipant({ "init": this.init, "name": this.name });
        this.init = "";
        this.name = "";
    };
    ParticipantListComponent.prototype.removeParticipant = function (participant) {
        this.participantService.removeParticipant(participant);
    };
    ParticipantListComponent.prototype.exportParticipants = function () {
        this.jsonParticipants = this.participantService.exportParticipants();
    };
    ParticipantListComponent.prototype.importParticipants = function () {
        this.participantService.importParticipants(this.jsonParticipants);
        this.participantList = this.participantService.getParticipants();
        this.jsonParticipants = "";
    };
    ParticipantListComponent.prototype.sortParticipants = function () {
        console.log("[sortParticipants()] This function has not yet been implemented");
    };
    ParticipantListComponent.prototype.isJsonString = function (str) {
        try {
            JSON.parse(str);
        }
        catch (e) {
            return false;
        }
        return true;
    };
    return ParticipantListComponent;
}());
ParticipantListComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-participant-list',
        template: __webpack_require__("../../../../../src/app/components/participant-list/participant-list.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/participant-list/participant-list.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_participant_participant_service__["a" /* ParticipantService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_participant_participant_service__["a" /* ParticipantService */]) === "function" && _a || Object])
], ParticipantListComponent);

var _a;
//# sourceMappingURL=participant-list.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/settings/settings.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/settings/settings.component.html":
/***/ (function(module, exports) {

module.exports = "<h3>Settings</h3>\n<p>\n  From here, you will be able to choose whether you want an overall time goal (e.g. 15 minutes), or a static time-per-person.\n  You will also be able to choose when you want to have the progress bar to chang colour (standard = 80% and 95%)\n</p>\n<form action=\"\">\n  <div class=\"input-group\">\n    <span class=\"input-group-addon\">\n          <input type=\"checkbox\" name=\"useGlobalMaxTime\" aria-label=\"Use Global max Time\" [(ngModel)]=\"useGlobalMaxTime\">\n        </span>\n    <label for=\"globalMaxTime\" class=\"input-group-addon\">Total Max Time</label>\n    <input name=\"globalMaxTime\" id=\"globalMaxTime\" type=\"number\" class=\"form-control\" [(ngModel)]=\"globalMaxTime\">\n  </div>\n  <br>\n  <input type=\"submit\" value=\"submit\" class=\"btn btn-primary form-control\">\n</form>"

/***/ }),

/***/ "../../../../../src/app/components/settings/settings.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_settings_settings_service__ = __webpack_require__("../../../../../src/app/services/settings/settings.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SettingsComponent = (function () {
    function SettingsComponent(settings) {
        this.settings = settings;
    }
    SettingsComponent.prototype.ngOnInit = function () {
        this.useGlobalMaxTime = this.settings.getUseGlobalMaxTime();
        this.globalMaxTime = this.settings.getGlobalMaxTime();
    };
    return SettingsComponent;
}());
SettingsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-settings',
        template: __webpack_require__("../../../../../src/app/components/settings/settings.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/settings/settings.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_settings_settings_service__["a" /* SettingsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_settings_settings_service__["a" /* SettingsService */]) === "function" && _a || Object])
], SettingsComponent);

var _a;
//# sourceMappingURL=settings.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/timer/timer.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/timer/timer.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" *ngIf=\"participantList.length > 0 || doneParticipants.length > 0\">\r\n\r\n  <br>\r\n  <h4>Overall Progress</h4>\r\n  <div class=\"progress\">\r\n    <div class=\"progress-bar progress-bar-striped bg-success\" role=\"progressbar\" aria-valuenow=\"40\" aria-valuemin=\"0\" aria-valuemax=\"100\"\r\n      [style.width]=\"totalPercent + '%'\">{{totalPercent}}%</div>\r\n  </div>\r\n  <br>\r\n  <h4>{{ currentParticipant.name }} Progress</h4>\r\n  <div class=\"progress\">\r\n    <div class=\"progress-bar progress-bar-striped \" [ngClass]=\"{ 'progress-bar-animated': currentPercent < 100, 'bg-warning': currentPercent > 80 && currentPercent <= 95,'bg-danger': currentPercent > 95 }\"\r\n      role=\"progressbar\" aria-valuenow=\"0\" aria-valuemin=\"0\" aria-valuemax=\"100\" [style.width]=\"currentPercent + '%'\">{{currentElapsed | Seconds}}</div>\r\n  </div>\r\n  <br>\r\n\r\n  <!--\r\n  <h4>Debug info</h4>\r\n  <ul>\r\n    <li>Total {{ totalPercent }}% Complete</li>\r\n    <li>Current {{ currentPercent }}% Complete</li>\r\n    <li>Stats\r\n      <ul>\r\n        <li>Participants Left: {{ participantList.length }}</li>\r\n        <li>Participants Done: {{ doneParticipants.length }}</li>\r\n        <li>Participants Absent: {{ absentParticipants.length }}</li>\r\n      </ul>\r\n    </li>\r\n    <li>Diff: {{ diff }}</li>\r\n    <li>Elapsed: {{ currentElapsed }}</li>\r\n    <li>Elapsed: {{ totalElapsed }}</li>\r\n    <li>Current Participant: {{ currentParticipant.name }} [{{ currentParticipant.init }}]</li>\r\n  </ul> -->\r\n\r\n\r\n  <button class=\"btn btn-outline-success\" (click)=\"startTimer()\" title=\"Start Timer\" [disabled]=\"participantList.length == 0 || timerActive\">\r\n    <i class=\"fa fa-hourglass-start\"></i>\r\n  </button>\r\n  <button class=\"btn btn-outline-secondary\" (click)=\"resetTimer()\" title=\"Reset\">\r\n    <i class=\"fa fa-undo\"></i>\r\n  </button>\r\n  <button class=\"btn btn-outline-primary\" (click)=\"nextParticipant()\" [disabled]=\"participantList.length <= 1 || !timerActive\"\r\n    title=\"Next participant\">\r\n    <i class=\"fa fa-step-forward\"></i> {{ (participantList.length > 1)?(\"(\" + participantList[1].init)+\")\":\"\" }}\r\n  </button>\r\n  <button class=\"btn btn-outline-danger \" (click)=\"stopTimer()\" title=\"Stop Timer\" [disabled]=\"totalPercent == 0 && currentPercent == 0 || !timerActive\">\r\n    <i class=\"fa fa-hourglass-end\"></i>\r\n  </button>\r\n\r\n  <hr>\r\n  <h4>Participants\r\n    <button class=\"btn btn-sm btn-info\" (click)=\"shuffleParticipants()\" title=\"Shuffle Participants\" [disabled]=\"participantList.length <= 2\">\r\n      <i class=\"fa fa-random\"></i>\r\n    </button>\r\n  </h4>\r\n  <ul class=\"list-group\">\r\n    <li class=\"list-group-item\" *ngFor=\"let p of participantList\">\r\n      <button class=\"btn btn-outline-secondary btn-sm\" (click)=\"markAbsent(p)\" title=\"Mark as absent\" [disabled]=\"participantList.length <= 2\">\r\n        <i class=\"fa fa-minus-circle\"></i>\r\n      </button> {{ p.name }}</li>\r\n    <li class=\"list-group-item list-group-item-secondary\" *ngFor=\"let dp of doneParticipants\"> {{ dp.name }} [{{ dp.init }}] - <span [ngClass]=\"{'text-danger' : dp.time > individualMaxTime}\">{{ dp.time | Seconds }}</span></li>\r\n    <li class=\"list-group-item list-group-item-danger\" *ngFor=\"let ap of absentParticipants\">\r\n      <button class=\"btn btn-outline-secondary btn-sm\" (click)=\"markPresent(ap)\" title=\"Mark as present\">\r\n        <i class=\"fa fa-plus-circle\"></i>\r\n      </button> {{ ap.init }}</li>\r\n  </ul>\r\n\r\n</div>\r\n<div class=\"jumbotron\" *ngIf=\"participantList.length == 0 && doneParticipants.length == 0\">\r\n  <p>There are no participants in your list. </p>\r\n  <p>To start using the Scrum Timer, please go to the\r\n    <a href=\"#\" [routerLink]=\"['participants']\">participant list</a> and add some people to the list, either manually or by importing a list from a colleague.</p>\r\n    <p>Note that the Scrum Timer stores participants in local storage. Nothing is sent to the server. This is to provide anonymity and be compliant with corporate policies.</p>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/timer/timer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TimerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_participant_participant_service__ = __webpack_require__("../../../../../src/app/services/participant/participant.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TimerComponent = (function () {
    function TimerComponent(participantService, elm) {
        this.participantService = participantService;
        this.absentParticipants = Array();
        this.doneParticipants = Array();
        // variables for session
        this.totalMaxTime = 60 * 15;
        this.recommendedIndividualTime = 120;
        this.totalPercent = 0;
        this.totalElapsed = 0;
        // variables for indiviual
        this.individualMaxTime = 120;
        //private individualTime: number = 120;
        this.currentPercent = 0;
        this.currentElapsed = 0;
        this.timerActive = false;
    }
    TimerComponent.prototype.ngOnInit = function () {
        this.participantList = this.participantService.getParticipants();
        this.shuffleParticipants();
    };
    TimerComponent.prototype.ngOnDestroy = function () {
        if (this.$currentCounter != null) {
            this.stopTimer();
        }
    };
    TimerComponent.prototype.stopTimer = function () {
        //save time for participant
        this.currentParticipant.time = this.currentElapsed;
        this.currentPercent = 0;
        //move first Participant to done participants
        this.doneParticipants.push(this.currentParticipant);
        //remove the top participant
        this.participantList.splice(0, 1);
        // set progressbar to 100%
        this.currentPercent = 100;
        this.timerActive = false;
        //stop timer
        this.subscription.unsubscribe();
    };
    TimerComponent.prototype.startTimer = function () {
        var _this = this;
        this.future = new Date();
        // set the timer to a time in the future, based on "individualMaxTime" seconds
        this.future.setSeconds(this.future.getSeconds() + this.individualMaxTime);
        //console.log(this.future);
        this.$currentCounter = __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Observable"].interval(1000).map(function (x) {
            _this.currentDiff = Math.floor((_this.future.getTime() - new Date().getTime()) / 1000);
            _this.currentElapsed = _this.individualMaxTime - _this.currentDiff;
            _this.currentPercent = Math.round((_this.currentElapsed / _this.individualMaxTime) * 100);
            return x;
        });
        this.subscription = this.$currentCounter.subscribe(function (x) { return _this.currentDiff; });
        this.timerActive = true;
    };
    TimerComponent.prototype.nextParticipant = function () {
        //save time for participant
        this.participantList[0].time = this.currentElapsed;
        //add up total elapsed time
        this.totalElapsed += this.currentElapsed;
        this.currentElapsed = 0;
        this.currentDiff = 0;
        this.currentPercent = 0;
        //move first Participant to done participants
        this.doneParticipants.push(this.participantList[0]);
        //remove the top participant
        this.participantList.splice(0, 1);
        if (this.participantList.length > 0) {
            this.currentParticipant = this.participantList[0];
        }
        else {
            this.currentParticipant = { "name": "", "init": "" };
        }
        this.totalPercent = Math.round((this.doneParticipants.length / (this.participantList.length + this.doneParticipants.length)) * 100);
        this.currentPercent = 0;
        this.currentDiff = 0;
        this.currentPercent = 0;
        this.startTimer();
    };
    TimerComponent.prototype.resetTimer = function () {
        //move all participants from done to present
        for (var i = this.doneParticipants.length - 1; i >= 0; i--) {
            //reset time taken
            this.doneParticipants[i].time = 0;
            this.participantList.push(this.doneParticipants[i]);
            this.doneParticipants.splice(i, 1);
        }
        //reset timers
        this.totalElapsed = 0;
        this.totalPercent = 0;
        this.currentPercent = 0;
        this.currentDiff = 0;
        this.currentParticipant = this.participantList[0];
        this.currentPercent = 0;
    };
    /**
     * Shuffles an array pseudo-randomly
     *
     * @param array
     */
    TimerComponent.prototype.shuffle = function (array) {
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
    };
    TimerComponent.prototype.shuffleParticipants = function () {
        this.participantList = this.shuffle(this.participantList);
        this.currentParticipant = this.participantList[0];
    };
    /**
     * Mark participant as absent.
     *
     * note that the last two participants cannot be marked as absent.
     *
     * @param participant Participant to mark as absent
     */
    TimerComponent.prototype.markAbsent = function (participant) {
        if (this.participantList.length <= 2) {
            console.log("Cannot mark the last two participants absent.");
        }
        else {
            var idx = this.participantList.indexOf(participant);
            this.absentParticipants.push(participant);
            this.participantList.splice(idx, 1);
            this.currentParticipant = this.participantList[0];
        }
    };
    /**
     * Mark participant as present.
     *
     * @param participant Participant to mark as present
     */
    TimerComponent.prototype.markPresent = function (participant) {
        var idx = this.absentParticipants.indexOf(participant);
        this.participantList.push(participant);
        this.absentParticipants.splice(idx, 1);
        //console.log(this.absentParticipants);
    };
    return TimerComponent;
}());
TimerComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-timer',
        template: __webpack_require__("../../../../../src/app/components/timer/timer.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/timer/timer.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_participant_participant_service__["a" /* ParticipantService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_participant_participant_service__["a" /* ParticipantService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */]) === "function" && _b || Object])
], TimerComponent);

var _a, _b;
//# sourceMappingURL=timer.component.js.map

/***/ }),

/***/ "../../../../../src/app/pipes/hhmmss.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SecondsPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var SecondsPipe = (function () {
    function SecondsPipe() {
    }
    SecondsPipe.prototype.transform = function (totalseconds) {
        var minutes = Math.floor(totalseconds / 60);
        var seconds = totalseconds % 60;
        return ("00" + minutes).slice(-2) + ":" + ("00" + seconds).slice(-2);
    };
    return SecondsPipe;
}());
SecondsPipe = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["X" /* Pipe */])({ name: 'Seconds' })
], SecondsPipe);

//# sourceMappingURL=hhmmss.pipe.js.map

/***/ }),

/***/ "../../../../../src/app/services/participant/participant.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ParticipantService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ParticipantService = (function () {
    function ParticipantService() {
    }
    ParticipantService.prototype.getParticipants = function () {
        if (localStorage.getItem('participants') === null) {
            this.participants = [];
        }
        else {
            this.participants = JSON.parse(localStorage.getItem('participants'));
        }
        return this.participants;
    };
    ParticipantService.prototype.addParticipant = function (participant) {
        this.participants.unshift(participant);
        localStorage.setItem('participants', JSON.stringify(this.participants));
    };
    ParticipantService.prototype.removeParticipant = function (participant) {
        for (var i = 0; i < this.participants.length; i++) {
            if (participant == this.participants[i]) {
                this.participants.splice(i, 1);
            }
        }
        localStorage.setItem('participants', JSON.stringify(this.participants));
    };
    ParticipantService.prototype.exportParticipants = function () {
        return JSON.stringify(this.participants);
    };
    //overwrite localstorage, and refresh local list of participants from there...
    ParticipantService.prototype.importParticipants = function (jsonParticipants) {
        localStorage.setItem('participants', jsonParticipants);
        this.exportParticipants();
    };
    ParticipantService.prototype.compare = function (a, b) {
        if (a.last_nom < b.last_nom)
            return -1;
        if (a.last_nom > b.last_nom)
            return 1;
        return 0;
    };
    return ParticipantService;
}());
ParticipantService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], ParticipantService);

//# sourceMappingURL=participant.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/settings/settings.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

//TODO: save settings in localStorage
var SettingsService = (function () {
    function SettingsService() {
        this.useGlobalMaxTime = true;
        this.globalMaxTime = 60 * 15;
    }
    SettingsService.prototype.getGlobalMaxTime = function () {
        return this.globalMaxTime;
    };
    SettingsService.prototype.setGlobalMaxTime = function (newTime) {
        this.globalMaxTime = newTime;
    };
    SettingsService.prototype.getUseGlobalMaxTime = function () {
        return this.useGlobalMaxTime;
    };
    SettingsService.prototype.setUseGlobelMaxTime = function (useGMTime) {
        this.useGlobalMaxTime = useGMTime;
    };
    return SettingsService;
}());
SettingsService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], SettingsService);

//# sourceMappingURL=settings.service.js.map

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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_23" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map