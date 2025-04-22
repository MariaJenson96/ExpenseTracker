import { Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';

export const routes: Routes = [
    {
      path: 'tabs',
      children: [
        { path: 'home', loadChildren: () => import('./pages/dashboard/dashboard.component').then(m => m.DashboardComponent) }
      ]
    }
  ];
  
