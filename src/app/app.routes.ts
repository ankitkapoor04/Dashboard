import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ViewUsersComponent } from './view-users/view-users.component';



export const routes: Routes = [
    { path: 'dashboard', component: DashboardComponent },
    { path: 'users', component: ViewUsersComponent},
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    { path: '**', redirectTo: '/dashboard' }
];