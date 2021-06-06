import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarComponent } from './navbar.component';
import {By} from '@angular/platform-browser';
import {by} from 'protractor';

describe('NavbarComponent', () => {
  let component: NavbarComponent;
  let fixture: ComponentFixture<NavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavbarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  /**
   * @author taherabalhas
   */
  it('should contain correct url of inspiration', () => {
    const all = fixture.debugElement.queryAll(By.css('a'));
    const href = all[1].nativeElement.getAttribute('routerLink');

    expect(href).toEqual('/inspiration');
  });

  /**
   * @author taherabalhas
   */
  it('should contain correct url of signup', () => {
    const buttons = fixture.debugElement.queryAll(By.css('button'));
    const href = buttons[1].nativeElement.getAttribute('routerLink');

    expect(href).toEqual('/signup');
  });
});
