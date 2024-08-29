import { Component } from '@angular/core';
import { MaterialModule } from '../../angular-material/material/material.module';
import { UserService } from '../user.service';

@Component({
  selector: 'app-users-list',
  standalone: true,
  imports: [MaterialModule],
  templateUrl: './users-list.component.html',
  styleUrl: './users-list.component.css'
})
export class UsersListComponent {
  users: any[] = [];
  displayedColumns: string[] = ['id', 'name', 'username', 'email', 'phone', 'website'];

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getUsers().subscribe(data => {
      this.users = data;
    });
  }

}
