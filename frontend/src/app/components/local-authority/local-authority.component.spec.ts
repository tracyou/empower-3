import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocalAuthorityComponent } from './local-authority.component';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {FormsModule} from '@angular/forms';
import {RouterTestingModule} from '@angular/router/testing';
import {ProfileComponent} from "../local-initiative/profile/profile.component";

describe('LocalAuthorityComponent', () => {
  let component: LocalAuthorityComponent;
  let fixture: ComponentFixture<LocalAuthorityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LocalAuthorityComponent ],
      imports: [HttpClientTestingModule, FormsModule,
        RouterTestingModule.withRoutes(
          [{ path: 'authority', component: LocalAuthorityComponent}]
        )],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LocalAuthorityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  /**
   * @author Tracy Owusu
   */
  it('should give an alert with the message that all fields must be filled', () => {
    const submitButton = fixture.debugElement.nativeElement.querySelector('#sumbitButton');
    submitButton.click();
    fixture.detectChanges();
    expect(alert('All fields must be filled'));
  });


  /**
   * @author Tracy Owusu
   */
  it('should give an alert with the message the answers have been saved', () => {
    const strategy1 = fixture.debugElement.nativeElement.querySelector('#strategy1');
    const text = fixture.debugElement.nativeElement.querySelector('#exampleFormControlTextarea2');
    const name = fixture.debugElement.nativeElement.querySelector('#name');
    const label = fixture.debugElement.nativeElement.querySelector('#label');
    const description = fixture.debugElement.nativeElement.querySelector('#description');
    const helpdescription = fixture.debugElement.nativeElement.querySelector('#helpdescription');
    const submitButton = fixture.debugElement.nativeElement.querySelector('#sumbitButton');

    strategy1.value = 'Sustainable Deelopment Goals';
    text.value = 'example text';
    name.value = 'name';
    label.value = 'label example';
    description.value = 'this is a description';
    helpdescription.value = 'this is a description about the help we need';

    submitButton.click();
    fixture.detectChanges();
    expect(alert('Your answers are saved!'));
  });
});
