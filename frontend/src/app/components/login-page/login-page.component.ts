import {Component, Input, OnInit} from '@angular/core';
import {UserService} from '../../services/user.service';
import {User} from '../../models/user';
import {Router} from '@angular/router';

@Component({
  selector: 'app-inlogpagina',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  @Input() username;
  @Input() password;

  private usersList: User[];
  private nameExists = false;
  private inCorrect: boolean;

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
    this.usersList = this.userService.users;
    console.log(this.usersList);
  }

  usernameExists(): void {
    for (const user of this.usersList) {
      if (user.username === this.username) {
        console.log('username exists');
        this.nameExists = true;
      } else {
        console.log('username does not exist');
      }
    }
  }

  correctPassword(): void {
    this.usernameExists();
    if (this.nameExists) {
      for (const user of this.usersList) {
        if (this.username === user.username && this.password === user.password) {
          this.inCorrect = false;
          this.router.navigate(['/home']);
          break;
        } else {
          this.inCorrect = true;
        }
      }
      if (this.inCorrect) {
        alert('Incorrect password, try again!');
      }
    } else {
      alert('fill in correct username!');
    }
  }

  onLogIn(): void {
    this.correctPassword();
  }
}
