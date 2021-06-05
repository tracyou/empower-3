import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupComponent } from './signup.component';

describe('SignupComponent', () => {
  let component: SignupComponent;
  // tslint:disable-next-line:prefer-const
  let componentHtml: HTMLElement;
  let fixture: ComponentFixture<SignupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SignupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });

  // it('if fields are empty, an alert should appear', () => {
  //
  //   // arrange (getting UI components)
  //   const usernameInput: HTMLInputElement = componentHtml.querySelector('#username');
  //   const submitButton: HTMLButtonElement = componentHtml.querySelector('#sumbitButton');
  //
  //   // act: performing search
  //
  //   submitButton.click();
  //
  //   fixture.detectChanges(); // angular should update
  //
  //   // assert: checking if the UI was updated
  //   expect(component.username.size > 7);
  // });
});
