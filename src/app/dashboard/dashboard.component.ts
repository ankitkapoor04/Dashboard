import { Component } from '@angular/core';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { NavbarComponent } from '../navbar/navbar.component';
import { ViewUsersComponent } from '../view-users/view-users.component';

@Component({
  selector: 'app-dashboard',
  imports: [ SidebarComponent, NavbarComponent , ViewUsersComponent],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  title = 'User Dashboard';
}
