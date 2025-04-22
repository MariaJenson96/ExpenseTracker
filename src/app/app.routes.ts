import { Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';

export const routes: Routes = [
    {path:'', redirectTo:'Home', pathMatch:'full'},
    {path:'Home', component:DashboardComponent }
];
