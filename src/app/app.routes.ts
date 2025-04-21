import { Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { Layout } from './pages/layout/_layout.component';

export const routes: Routes = [
    {path:'', redirectTo:'Home', pathMatch:'full'},
    {path:'Home', component:Layout, children:[
     {path:'', component:DashboardComponent}   
    ]}
];
