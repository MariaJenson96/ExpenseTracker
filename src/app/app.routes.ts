import { Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';

export const routes: Routes = [
    {
      path: 'tabs', component:DashboardComponent,
      children: [
        { path: 'home', component:DashboardComponent }
      ]
    }
  ];
  
