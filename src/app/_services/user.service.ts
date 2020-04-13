import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { USERS } from '../auth/user/mock-user'

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getUsers() {
    return USERS;
  }
}
