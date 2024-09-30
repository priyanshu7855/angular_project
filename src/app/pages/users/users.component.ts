import { Component } from '@angular/core';

interface User {
  id: number;
  name: string;
  email: string;
  role: string;
}

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {
  users: User[] = [
    { id: 1, name: 'Alice Johnson', email: 'alice@example.com', role: 'Admin' },
    { id: 2, name: 'Bob Smith', email: 'bob@example.com', role: 'User' },
    { id: 3, name: 'Charlie Adams', email: 'charlie@example.com', role: 'Guest' }
  ];

  selectedUser: User | null = null;

  editUser(user: User) {
    this.selectedUser = { ...user };
  }

  // Cast event.target to HTMLInputElement for text inputs
  updateName(event: Event) {
    const target = event.target as HTMLInputElement;
    if (this.selectedUser && target) {
      this.selectedUser.name = target.value;
    }
  }

  updateEmail(event: Event) {
    const target = event.target as HTMLInputElement;
    if (this.selectedUser && target) {
      this.selectedUser.email = target.value;
    }
  }

  // Cast event.target to HTMLSelectElement for dropdown
  updateRole(event: Event) {
    const target = event.target as HTMLSelectElement;
    if (this.selectedUser && target) {
      this.selectedUser.role = target.value;
    }
  }

  saveUser() {
    if (this.selectedUser) {
      const index = this.users.findIndex(u => u.id === this.selectedUser?.id);
      this.users[index] = this.selectedUser;
      this.selectedUser = null; // Clear after saving
    }
  }

  deleteUser(userId: number) {
    this.users = this.users.filter(user => user.id !== userId);
  }
}
