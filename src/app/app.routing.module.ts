import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import { ParentComponent } from './tuto/parent/parent.component';

const routes: Routes = [
  {
    path: '',
    component: ParentComponent
  }
];
export const routing: ModuleWithProviders = RouterModule.forRoot(routes);