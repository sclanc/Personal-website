"use strict";
var router_1 = require('@angular/router');
var home_component_1 = require('./home.component');
var project_component_1 = require('./project.component');
var services_component_1 = require('./services.component');
var resume_component_1 = require('./resume.component');
var contact_component_1 = require('./contact.component');
var routes = [
    { path: '', component: home_component_1.homeComponent },
    { path: 'projects', component: project_component_1.projectsComponent },
    { path: 'resume', component: resume_component_1.resumeComponent },
    { path: 'services', component: services_component_1.servicesComponent },
    { path: 'contact', component: contact_component_1.contactComponent }
];
exports.appRouterProviders = [
    router_1.provideRouter(routes)
];
//# sourceMappingURL=app.routes.js.map