import { Routes } from '@angular/router';
import { AppComponent } from './app.component';

export const routes: Routes = [
    {path:'', redirectTo:'Home', pathMatch:'full'},
    {path:'Home', component:AppComponent}
];
