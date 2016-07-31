import { Component } from '@angular/core';
import {MaterializeDirective} from "angular2-materialize";
import { ROUTER_DIRECTIVES } from '@angular/router';

@Component({
  selector: 'services',
  templateUrl: 'app/html/coming-soon.html',
  styleUrls: [],
  directives: [MaterializeDirective, ROUTER_DIRECTIVES]
})
export class servicesComponent {}