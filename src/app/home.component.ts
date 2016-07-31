import { Component } from '@angular/core';
import {MaterializeDirective} from "angular2-materialize";
import { ROUTER_DIRECTIVES } from '@angular/router';

@Component({
  selector: 'home',
  templateUrl: './app/home.html',
  styleUrls: ['./app/styles/home.css'],
  directives: [MaterializeDirective, ROUTER_DIRECTIVES]
})
export class homeComponent {}