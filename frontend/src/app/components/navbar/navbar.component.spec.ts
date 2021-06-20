import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarComponent } from './navbar.component';
import {By} from '@angular/platform-browser';
import {MapComponent} from '../local-initiative/map/map.component';
import {InitiativeService} from '../../services/initiative.service';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {RouterTestingModule} from '@angular/router/testing';

describe('NavbarComponent', () => {
  let component: NavbarComponent;
  let fixture: ComponentFixture<NavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavbarComponent ],
      imports: [HttpClientTestingModule,
        RouterTestingModule.withRoutes(
          [{path: 'initiative', component: MapComponent}]
        )],
      providers: [InitiativeService]
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
    // arrange (getting UI components)
    const all = fixture.debugElement.queryAll(By.css('a'));
    const href = all[1].nativeElement.getAttribute('routerLink');

    // Assert: checking if the navbar contains the correct url for inspiration
    expect(href).toEqual('/inspiration');
  });

  /**
   * @author taherabalhas
   */
  it('should contain correct url of signup', () => {
    // arrange (getting UI components)
    const buttons = fixture.debugElement.queryAll(By.css('button'));
    const href = buttons[1].nativeElement.getAttribute('routerLink');

    // Assert: checking if the navbar contains the correct url for signup
    expect(href).toEqual('/signup');
  });

  /**
   * @author Tracy Owusu
   */
  it('should show the library with videos', () => {
    const link = fixture.debugElement.queryAll(By.css('a'));
    const href = link[4].nativeElement.getAttribute('routerLink');

    expect(href).toEqual('/library');
  });

  /**
   * @author Tracy Owusu
   */
  it('should show the local initiative page', () => {
    const link = fixture.debugElement.queryAll(By.css('a'));
    const href = link[3].nativeElement.getAttribute('routerLink');

    expect(href).toEqual('/initiative');
  });

});
