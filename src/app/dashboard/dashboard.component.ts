import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { NavbarComponent } from '../navbar/navbar.component';
import { UserDataComponent } from '../user-data/user-data.component';


@Component({
  selector: 'app-dashboard',
  imports: [RouterOutlet, CommonModule, FormsModule, SidebarComponent, NavbarComponent ,  UserDataComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

}
