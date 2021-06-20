import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';
import {By} from '@angular/platform-browser';
import {all} from 'codelyzer/walkerFactory/walkerFn';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  /**
   * @author Zakaria Raoudani
   */
  it('should contain correct url of inspiration', () => {
    const insp = fixture.debugElement.queryAll(By.css('a'));
    const href = insp[0].nativeElement.getAttribute('routerLink');

    expect(href).toEqual('/inspiration');
  });

  /**
   * @author Zakaria Raoudani
   */
  it('should contain correct url of inspiration', () => {
    const libr = fixture.debugElement.queryAll(By.css('a'));
    const href = libr[1].nativeElement.getAttribute('routerLink');

    expect(href).toEqual('/library');
  });
});
