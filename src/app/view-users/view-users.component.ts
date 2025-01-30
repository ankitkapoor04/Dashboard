import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-view-users',
  imports: [FormsModule, CommonModule],
  templateUrl: './view-users.component.html',
  styleUrls: ['./view-users.component.css']
})
export class ViewUsersComponent {
  users: any[] = [];
  selectedUser: any = null;
  isModalOpen: boolean = false;

  currentPage: number = 1;
  pageSize: number = 5;
  totalPages: number = 0;

  constructor(private http: HttpClient, private toastr: ToastrService) {}

  ngOnInit(): void {
    this.fetchUsers();
  }

  fetchUsers(): void {
    this.http.get('https://jsonplaceholder.typicode.com/users').subscribe(
      (data: any) => {
        this.users = data;
        this.totalPages = Math.ceil(this.users.length / this.pageSize);
      },
      error => {
        this.toastr.error('Failed to load users');
      }
    );
  }

  getPaginatedUsers(): any[] {
    const startIndex = (this.currentPage - 1) * this.pageSize;
    return this.users.slice(startIndex, startIndex + this.pageSize);
  }

  addUser(): void {
    this.selectedUser = {};
    this.isModalOpen = true;
  }

  editUser(user: any): void {
    this.selectedUser = { ...user };
    this.isModalOpen = true;
  }

  saveUser(): void {
    if (this.selectedUser.id) {
      this.http.put(`https://jsonplaceholder.typicode.com/users/${this.selectedUser.id}`, this.selectedUser).subscribe(
        () => {
          this.toastr.success('User updated successfully');
          this.fetchUsers();
          this.isModalOpen = false;
        },
        error => {
          this.toastr.error('Failed to update user');
        }
      );
    } else {
      this.http.post('https://jsonplaceholder.typicode.com/users', this.selectedUser).subscribe(
        () => {
          this.toastr.success('User added successfully');
          this.fetchUsers();
          this.isModalOpen = false;
        },
        error => {
          this.toastr.error('Failed to add user');
        }
      );
    }
  }

  deleteUser(userId: number): void {
    this.http.delete(`https://jsonplaceholder.typicode.com/users/${userId}`).subscribe(
      () => {
        this.toastr.success('User deleted successfully');
        this.users = this.users.filter(user => user.id !== userId);
      },
      error => {
        this.toastr.error('Failed to delete user');
      }
    );
  }

  changePage(page: number): void {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
    }
  }

  closeModal(): void {
    this.isModalOpen = false;
  }
}