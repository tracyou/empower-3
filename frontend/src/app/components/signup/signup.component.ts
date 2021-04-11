import {Component, Input, OnInit} from '@angular/core';
import {UserService} from '../../services/user.service';
import {User} from '../../models/user';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  @Input() username;
  @Input() password;
  @Input() userType;
  @Input() title;
  @Input() description;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
  }

  newUser(): User {
    return new User(this.username, this.password, this.userType, this.title, this.description);
  }

  // tslint:disable-next-line:typedef
  onSignUp() {
    const newUser = this.newUser();
    this.userService.save(newUser);
  }
}
