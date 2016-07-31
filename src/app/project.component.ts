import { Component } from '@angular/core';
import {MaterializeDirective} from "angular2-materialize";
import { ROUTER_DIRECTIVES } from '@angular/router';

@Component({
  selector: 'projects',
  templateUrl: 'app/html/coming-soon.html',
  styleUrls: ['app/styles/projects.css'],
  directives: [MaterializeDirective, ROUTER_DIRECTIVES]
})
export class projectsComponent {}