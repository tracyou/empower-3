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

  onSignUp(): void {
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
    } else {
      alert('This username is already taken, try another one.');
    }
  }

  isFilled(): boolean {
    return this.username && this.password && this.confirmPassword && this.userType && this.title && this.description;
  }

  isUsernameUnique(): void {
    for (const user of this.usersList) {
      this.isUnique = user.username !== this.username;
    }
  }

  navigate(): void {
    if (this.userType === 'I am a local initiative') {
      this.router.navigate(['/initiative']);
    } else {
      this.router.navigate(['/authority']);
    }
  }
}
