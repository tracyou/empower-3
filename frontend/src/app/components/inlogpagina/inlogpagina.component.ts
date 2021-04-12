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

  // tslint:disable-next-line:typedef
  usernameExists() {
    for (const user of this.usersList) {
      if (this.username !== user.username) {
        this.nameExists = false;
      } else {
        this.nameExists = true;
      }
    }
  }

  // tslint:disable-next-line:typedef
  correctPassword() {
    this.usernameExists();
    if (this.nameExists) {
      for (const user of this.usersList) {
        if (this.username === user.username && this.password === user.password) {
          this.inCorrect = false;
          this.router.navigate(['/localInitiative']);
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

  // tslint:disable-next-line:typedef
  onLogIn() {
    this.correctPassword();
  }
}
