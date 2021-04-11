import {Component, Input, OnInit} from '@angular/core';
import {UserService} from '../../services/user.service';
import {User} from '../../models/user';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';

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

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
  }

  newUser(): User {
    return new User(this.username, this.password, this.userType, this.title, this.description);
  }

  // tslint:disable-next-line:typedef
  onSignUp() {
    if (this.isFilled()) {
      const newUser = this.newUser();
      this.userService.save(newUser);
      this.router.navigate(['/localInitiative']);
    }
  }

  // tslint:disable-next-line:typedef
  isFilled() {
    return this.username && this.password && this.userType && this.title && this.description;
  }
}
