"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var angular2_materialize_1 = require("angular2-materialize");
var router_1 = require('@angular/router');
var servicesComponent = (function () {
    function servicesComponent() {
    }
    servicesComponent = __decorate([
        core_1.Component({
            selector: 'services',
            templateUrl: 'app/html/coming-soon.html',
            styleUrls: [],
            directives: [angular2_materialize_1.MaterializeDirective, router_1.ROUTER_DIRECTIVES]
        }), 
        __metadata('design:paramtypes', [])
    ], servicesComponent);
    return servicesComponent;
}());
exports.servicesComponent = servicesComponent;
//# sourceMappingURL=services.component.js.map