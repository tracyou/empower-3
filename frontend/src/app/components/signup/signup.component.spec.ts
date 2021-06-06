import {ComponentFixture, fakeAsync, TestBed, tick} from '@angular/core/testing';

import { SignupComponent } from './signup.component';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {RouterTestingModule} from '@angular/router/testing';
import {UserService} from '../../services/user.service';
import {FormsModule} from '@angular/forms';
import {MapComponent} from '../local-initiative/map/map.component';

describe('SignupComponent', () => {
  let component: SignupComponent;
  let fixture: ComponentFixture<SignupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SignupComponent ],
      imports: [HttpClientTestingModule,
        FormsModule,
        RouterTestingModule.withRoutes(
          [{path: 'signup', component: SignupComponent},
                  {path: 'initiative', component: MapComponent}]
        )],
      providers: [UserService]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  /**
   * @author taherabalhas
   */
  it('should pop alert when fields are empty', () => {
    spyOn(window, 'alert');
    // arrange (getting UI components)
    const button = fixture.debugElement.nativeElement.querySelector('#signupButton');
    fixture.detectChanges(); // Angular should be updated

    // Act: Performing search
    button.click();
    fixture.detectChanges(); // Angular should be updated

    expect(window.alert).toHaveBeenCalledWith('All fields must be filled');
  });

  /**
   * @author taherabalhas
   */
  it('should pop alert when password is not validated', () => {
    spyOn(window, 'alert');
    // arrange (getting UI components)
    const usernameInput = fixture.debugElement.nativeElement.querySelector('#username');
    const passwordInput = fixture.debugElement.nativeElement.querySelector('#password');
    const confirmPasswordInput = fixture.debugElement.nativeElement.querySelector('#confirmPassword');
    const usertTypeInput = fixture.debugElement.nativeElement.querySelector('#userType');
    const titleInput = fixture.debugElement.nativeElement.querySelector('#title');
    const descriptionInput = fixture.debugElement.nativeElement.querySelector('#description');
    const button = fixture.debugElement.nativeElement.querySelector('#signupButton');
    fixture.detectChanges(); // Angular should be updated

    // Act: Performing search
    usernameInput.value = 'Tahera2000';
    passwordInput.value = 'user123!';
    confirmPasswordInput.value = 'user123!';
    usertTypeInput.value = 'Initiative';
    titleInput.value = 'Good Energy';
    descriptionInput.value = 'very nice and cool';
    component.isFilled();
    component.pattern.test(passwordInput.value);
    button.click();

    // Assert: checking if an alert will pop
    expect(window.alert).toBeTruthy();
  });
});
