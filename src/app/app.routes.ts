import { provideRouter, RouterConfig } from '@angular/router';
import {homeComponent } from './home.component';
import {projectsComponent} from './project.component';
import {servicesComponent} from './services.component';
import {resumeComponent} from './resume.component';
import {contactComponent} from './contact.component';
const routes: RouterConfig = [
  { path: '', component: homeComponent},
  { path: 'projects', component: projectsComponent},
  { path: 'resume',component: resumeComponent},
  { path: 'services',component: servicesComponent },
  { path: 'contact',component: contactComponent }
];

export const appRouterProviders = [
  provideRouter(routes)
];
