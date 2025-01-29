import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserDataComponent } from './user-data/user-data.component';


export const routes: Routes = [
    { path: 'dashboard', component: DashboardComponent },
    { path: 'users', component: UserDataComponent },
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    { path: '**', redirectTo: '/dashboard' }
];