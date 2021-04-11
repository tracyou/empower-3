import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {User} from '../models/user';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  users: User[];
  user: User;

  constructor(private http: HttpClient) {
    this.users = [];
    this.restGetUsers().subscribe(posts => {
      // @ts-ignore
      console.log(...posts);
    });
  }

  private restGetUsers(): Observable<User> {
    // @ts-ignore
    return this.http.get('http://localhost:8080/users');
  }

  private restPostUser(user: User): Observable<User> {
    return this.http.post<User>('http://localhost:8080/users', user);
  }

  save(user: User): User | null {
    const index = this.users.findIndex((item) => item.username === user.username);
    if (index < 0) {
      this.restPostUser(user).subscribe(data => {
        this.users.push(data);
        console.log(data);
        return data;
      });
    }
    return user;
  }
}
