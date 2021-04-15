import {Component, Input, OnInit} from '@angular/core';
import {UserService} from '../../services/user.service';
import {User} from '../../models/user';
import {Router} from '@angular/router';

@Component({
  selector: 'app-inlogpagina',
  templateUrl: './inlogpagina.component.html',
  styleUrls: ['./inlogpagina.component.css']
})
export class InlogpaginaComponent implements OnInit {
  @Input() username;
  @Input() password;

  private usersList: User[];
  private nameExists: boolean;
  private inCorrect: boolean;

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
    this.usersList = this.userService.users;
    console.log(this.usersList);
  }

  usernameExists(): void {
    for (const user of this.usersList) {
      this.nameExists = this.username === user.username;
    }
  }

  correctPassword(): void {
    this.usernameExists();
    if (this.nameExists) {
      for (const user of this.usersList) {
        if (this.username === user.username && this.password === user.password) {
          this.inCorrect = false;
          this.router.navigate(['/home']);
        } else {
          this.inCorrect = true;
        }
      }
      if (this.inCorrect) {
        alert('Incorrect password, try again!');
      }
    } else {
      alert('This username does not exist!');
    }
  }

  onLogIn(): void {
    this.correctPassword();
  }
}
