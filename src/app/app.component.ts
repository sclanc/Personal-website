import { Component } from '@angular/core';
import {MaterializeDirective} from "angular2-materialize";
import { ROUTER_DIRECTIVES } from '@angular/router';
import { FaComponent } from 'angular2-fontawesome/components';
import { FaDirective } from 'angular2-fontawesome/directives';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['styles/app.component.css', '../vendor/font-awesome/css/font-awesome.css'],
  directives: [MaterializeDirective, ROUTER_DIRECTIVES, FaComponent, FaDirective]
})
export class AppComponent {}