import {Component, Input, OnInit} from '@angular/core';
import {UserService} from '../../services/user.service';
import {User} from '../../models/user';
import {Router} from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  @Input() username;
  @Input() password;
  @Input() confirmPassword;
  @Input() userType;
  @Input() title;
  @Input() description;

  usersList: User[];
  isUnique: boolean;

  constructor(private userService: UserService, private router: Router) {
  }

  ngOnInit(): void {
    this.usersList = this.userService.users;
    console.log(this.usersList);
  }

  newUser(): User {
    return new User(this.username, this.password, this.userType, this.title, this.description);
  }

  // tslint:disable-next-line:typedef
  onSignUp() {
    this.isUsernameUnique();
    if (this.isUnique === true) {
      if (this.isFilled()) {
        if (this.confirmPassword !== this.password) {
          alert('Passwords do not match');
        } else {
          const newUser = this.newUser();
          this.userService.save(newUser);
          this.navigate();
        }
      } else {
        console.log('All fields must be filled');
        alert('All fields must be filled');
      }
    }
  }

  // tslint:disable-next-line:typedef
  isFilled() {
    return this.username && this.password && this.confirmPassword && this.userType && this.title && this.description;
  }

  // tslint:disable-next-line:typedef
  isUsernameUnique() {
    for (const user of this.usersList) {
      if (user.username === this.username) {
        alert('Username is already taken. Please try another one.');
        this.isUnique = false;
      } else {
        this.isUnique = true;
      }
    }
  }

  function

  // tslint:disable-next-line:typedef
  navigate() {
    if (this.userType === 'I am a local initiative') {
      this.router.navigate(['/localInitiative']);
    } else {
      this.router.navigate(['/home']);
    }
  }
}
