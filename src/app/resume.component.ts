import { Component } from '@angular/core';
import {MaterializeDirective} from "angular2-materialize";
import { ROUTER_DIRECTIVES } from '@angular/router';

@Component({
  selector: 'resume',
  template: `
  <div style="width:100%; height:190vh;" class="valign-wrapper section blue-grey darken-4">
  <div class="container">
  <div style="height:180vh">
    <object data="resume.pdf" type="application/pdf" width="100%" height="100%">
        alt : <a href="resume.pdf">resume.pdf</a>
    </object>
    </div>
</div>`,
  styleUrls: [],
  directives: [MaterializeDirective, ROUTER_DIRECTIVES]
})
export class resumeComponent {}