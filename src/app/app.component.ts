import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router'; 
import { SidebarComponent } from './sidebar/sidebar.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ViewUsersComponent } from './view-users/view-users.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet , SidebarComponent, NavbarComponent , ViewUsersComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'User-dashboard';
}
