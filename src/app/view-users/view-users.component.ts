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
    this.http.get('https://jsonplaceholder.typicode.com/users').subscribe({
      next: (data: any) => {
        this.users = data;
        this.totalPages = Math.ceil(this.users.length / this.pageSize);
      },
      error: (error: any) => {
        this.toastr.error('Failed to load users', 'Server Error');
        console.error("Error fetching users:", error);
      }
    });
  }

  getPaginatedUsers(): any[] {
    const startIndex = (this.currentPage - 1) * this.pageSize;
    return this.users.slice(startIndex, startIndex + this.pageSize);
  }

  getPageArray(): number[] {
    return Array.from({ length: this.totalPages }, (_, index) => index + 1);
  }

  addUser(): void {
    this.selectedUser = {
      name: '',
      email: '',
      phone: '',
      address: {
        city: ''
      },
      company: {
        name: ''
      }
    };
    this.isModalOpen = true;
  }

  editUser(user: any): void {
    this.selectedUser = { ...user };
    this.isModalOpen = true;
  }

  saveUser(form: any): void {
    if (form.invalid) {
      this.toastr.warning('Please fill out all required fields', 'Validation Error');
      return;
    }

    const userToSave = { ...this.selectedUser };

    if (userToSave.id) {
      this.http.put(`https://jsonplaceholder.typicode.com/users/${userToSave.id}`, userToSave).subscribe({
        next: () => {
          this.toastr.success('User updated successfully');
          this.fetchUsers();
          this.isModalOpen = false;
        },
        error: (error: any) => {
          this.toastr.error('Failed to update user', 'Server Error');
          console.error("Update error:", error);
        }
      });
    } else {
      this.http.post('https://jsonplaceholder.typicode.com/users', userToSave).subscribe({
        next: (data: any) => {
          this.toastr.success('User added successfully');
          this.fetchUsers();
          this.isModalOpen = false;
        },
        error: (error: any) => {
          this.toastr.error('Failed to add user', 'Server Error');
          console.error("Post error:", error);
        }
      });
    }
  }

  deleteUser(userId: number): void {
    this.http.delete(`https://jsonplaceholder.typicode.com/users/${userId}`).subscribe({
      next: () => {
        this.toastr.success('User deleted successfully');
        this.users = this.users.filter(user => user.id !== userId);
        this.fetchUsers();
      },
      error: (error: any) => {
        this.toastr.error('Failed to delete user', 'Server Error');
        console.error("Delete error:", error);
      }
    });
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