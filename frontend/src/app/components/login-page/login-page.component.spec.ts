import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginPageComponent } from './login-page.component';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {FormsModule} from '@angular/forms';
import {RouterTestingModule} from '@angular/router/testing';
import {SignupComponent} from '../signup/signup.component';
import {MapComponent} from '../local-initiative/map/map.component';
import {UserService} from '../../services/user.service';
import {HomeComponent} from '../home/home.component';
/**
 * @author Zakaria Raoudani
 */

describe('InlogpaginaComponent', () => {
  let component: LoginPageComponent;
  let fixture: ComponentFixture<LoginPageComponent>;
  let componentHtml = HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginPageComponent ], imports: [HttpClientTestingModule, FormsModule,
        RouterTestingModule.withRoutes(
          [{path: 'login', component: LoginPageComponent}]
        )],
      providers: [UserService]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginPageComponent);
    component = fixture.componentInstance;
    componentHtml = fixture.debugElement.nativeElement;
    fixture.detectChanges();
  });

  it('should give alert when  giving a wrong username', () => {
    const searchInput = fixture.debugElement.nativeElement.querySelector ('#login');
    const loginButton = fixture.debugElement.nativeElement.querySelector ('#submitlogin');

    searchInput.value = 'dsfsadf';
    loginButton.click();
    fixture.detectChanges();

    expect(window.alert()).toEqual(alert('fill in correct username!'));

  });
  it('should give alert when  giving empty username', () => {
    const searchInput = fixture.debugElement.nativeElement.querySelector ('#login');
    const loginButton = fixture.debugElement.nativeElement.querySelector ('#submitlogin');

    searchInput.value = ' ';
    loginButton.click();
    fixture.detectChanges();

    expect(window.alert()).toEqual(alert('fill in correct username!'));

  });
});
