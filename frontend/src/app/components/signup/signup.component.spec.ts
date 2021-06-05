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
    // arrange (getting UI components)
    const username = fixture.debugElement.nativeElement.querySelector('#username');
    const button = fixture.debugElement.nativeElement.querySelector('#signupButton');

    username.value = '';
    button.click();
    fixture.detectChanges();

    expect(window.alert()).toEqual(alert('All fields must be filled'));
  });

  /**
   * @author taherabalhas
   */
  it('should pop alert when password is not validated', () => {
    const passwordInput = fixture.debugElement.nativeElement.querySelector('#password');
    const button = fixture.debugElement.nativeElement.querySelector('#signupButton');

    component.filled = true;
    passwordInput.value = 'user123!';
    button.click();
    fixture.detectChanges();

    expect(window.alert()).toEqual(alert('Password should be validated'));
  });

  // /**
  //  * @author taherabalhas
  //  */
  // it('should pop alert if username is not unique', fakeAsync(() => {
  //
  // }));
});
