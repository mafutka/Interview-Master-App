// export PATH="$HOME/.npm-global/bin:$PATH"

import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home';
import { AngularComponent } from './components/angular/angular';

export const routes: Routes = [
    {path: '', redirectTo: '/home', pathMatch: 'full'},
    {path: 'home', component: HomeComponent },
    {path: 'angular', component: AngularComponent }
];
