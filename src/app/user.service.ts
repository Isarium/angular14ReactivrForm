import { Injectable } from '@angular/core';
import { User } from './user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  users: User [] = [];

  getUser() {
    return this.users;
  }

  addUsers(user: User) {
    this.users.push(user);
  }

}
