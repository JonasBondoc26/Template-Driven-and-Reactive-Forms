import { Routes } from '@angular/router';
import { TemplateDriven } from './template-driven/template-driven';
import { ReactiveForms } from './reactive-forms/reactive-forms';

export const routes: Routes = [
  { path: 'template-driven', component: TemplateDriven},
  { path: 'reactive-forms', component: ReactiveForms}

];
