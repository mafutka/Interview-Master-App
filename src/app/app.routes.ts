// export PATH="$HOME/.npm-global/bin:$PATH"

import { Routes } from '@angular/router';
import { AngularComponent } from './components/angular/angular';
import { Layout } from './components/layout/layout';

export const routes: Routes = [
    {
    path: '',
    component: Layout,
    children: [
      { path: 'angular', component: AngularComponent },
      { path: 'javascript', component: AngularComponent },
      { path: 'typescript', component: AngularComponent },
      { path: 'rxjs', component: AngularComponent },
      { path: '', redirectTo: 'angular', pathMatch: 'full' }
    ]
  }
];
