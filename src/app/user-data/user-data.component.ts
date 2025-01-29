import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface User {
  id: number;
  name: string;
  email: string;
  phone: string; // Added phone for more realistic data
  website: string; // Added website
  address: {
    street: string;
    city: string;
  };
  company: {
    name: string;
  };
}

@Component({
  selector: 'app-user-data',
imports: [CommonModule, FormsModule],
  templateUrl: './user-data.component.html',
  styleUrls: ['./user-data.component.css']
})
export class UserDataComponent implements OnInit {
  users: User[] = [];
  currentPage = 1;
  itemsPerPage = 10; // Number of users per page
  totalUsers = 0;
  editMode = false;
  editUser: User | null = null;
  newUser: User = { id: 0, name: '', email: '', phone:'', website: '', address: {street:'', city:''}, company: {name: ''} }; // Initialize with default values
  errorMessage: string | null = null;

  constructor(private http: HttpClient, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.loadUsers();
  }

  loadUsers() {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;

    this.http.get<User[]>('https://jsonplaceholder.typicode.com/users') // Replace with your API endpoint
      .subscribe(users => {
        this.totalUsers = users.length; // Get total count for pagination
        this.users = users.slice(startIndex, endIndex); // Paginate the users array
      });
  }

  pageChanged(page: number) {
    this.currentPage = page;
    this.loadUsers();
  }

  addUser() {
    if (!this.validateForm(this.newUser)) return; // Basic validation

    this.http.post<User>('https://jsonplaceholder.typicode.com/users', this.newUser)
      .subscribe(
        (addedUser) => {
          this.users.push(addedUser); // Simulate adding to the list
          this.newUser = { id: 0, name: '', email: '', phone:'', website: '', address: {street:'', city:''}, company: {name: ''} }; // Reset form
          this.loadUsers(); // Reload user data after adding
          this.toastr.success('User added successfully!');
        },
        (error) => {
          console.error('Error adding user:', error);
          this.errorMessage = 'Error adding user. Please try again later.';
          this.toastr.error(this.errorMessage);
        }
      );
  }

  editUserStart(user: User) {
    this.editMode = true;
    this.editUser = { ...user }; // Create a copy for editing
  }

  editUserSave() {
    if (!this.validateForm(this.editUser!)) return; // Basic validation

    this.http.put<User>(`https://jsonplaceholder.typicode.com/users/${this.editUser!.id}`, this.editUser!)
      .subscribe(
        () => {
          const index = this.users.findIndex(u => u.id === this.editUser!.id);
          if (index !== -1) {
            this.users[index] = { ...this.editUser! }; // Update in the list
          }
          this.editMode = false;
          this.editUser = null;
          this.loadUsers(); // Reload user data after editing
          this.toastr.success('User updated successfully!');
        },
        (error) => {
          console.error('Error updating user:', error);
          this.errorMessage = 'Error updating user. Please try again later.';
          this.toastr.error(this.errorMessage);
        }
      );
  }

  deleteUser(id: number) {
    this.http.delete(`https://jsonplaceholder.typicode.com/users/${id}`)
      .subscribe(
        () => {
          this.users = this.users.filter(user => user.id !== id);
          this.loadUsers(); // Reload user data after deleting
          this.toastr.success('User deleted successfully!');
        },
        (error) => {
          console.error('Error deleting user:', error);
          this.errorMessage = 'Error deleting user. Please try again later.';
          this.toastr.error(this.errorMessage);
        }
      );
  }

  cancelEdit() {
    this.editMode = false;
    this.editUser = null;
  }

  validateForm(user: User): boolean {
    this.errorMessage = null; // Clear any previous errors
    if (!user.name || !user.email) { // Basic example
      this.errorMessage = "Name and Email are required.";
      this.toastr.warning(this.errorMessage);
      return false;
    }
    return true;
  }
}