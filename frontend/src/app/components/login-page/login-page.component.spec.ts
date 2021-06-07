import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginPageComponent } from './login-page.component';
/**
 * @author Zakaria Raoudani
 */

describe('InlogpaginaComponent', () => {
  let component: LoginPageComponent;
  let fixture: ComponentFixture<LoginPageComponent>;
  let componentHtml = HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginPageComponent ]
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
    const loginButton = fixture.debugElement.nativeElement.querySelector ('#submitButton');


    loginButton.click();
    fixture.detectChanges();

    expect(window.alert()).toEqual(alert('fill in correct username!'));

  });
  it('should give alert when  giving empty username', () => {
    const searchInput = fixture.debugElement.nativeElement.querySelector ('#searchString');
    const loginButton = fixture.debugElement.nativeElement.querySelector ('#submitButton');

    searchInput.value = ' ';
    loginButton.click();
    fixture.detectChanges();

    expect(window.alert()).toEqual(alert('fill in correct username!'));

  });
});
