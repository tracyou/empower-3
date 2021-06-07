import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarComponent } from './navbar.component';
import {By} from '@angular/platform-browser';
import {LibraryComponent} from '../library/library.component';
import {MapComponent} from '../local-initiative/map/map.component';
import {InitiativeService} from '../../services/initiative.service';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {RouterTestingModule} from '@angular/router/testing';

describe('NavbarComponent', () => {
  let component: NavbarComponent;
  let fixture: ComponentFixture<NavbarComponent>;
  let fixture2: ComponentFixture<LibraryComponent>;
  let fixture3: ComponentFixture<MapComponent>;

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
    fixture2 = TestBed.createComponent(LibraryComponent);
    const linkToLibrary = fixture.debugElement.nativeElement.querySelector('#videoLibrary');
    linkToLibrary.click();
    fixture.detectChanges();
    fixture2.detectChanges();
    expect(fixture2.nativeElement.querySelector('iframe').toBeTrue);
  });

  /**
   * @author Tracy Owusu
   */
  it('should show the local initiative page', () => {
    fixture3 = TestBed.createComponent(MapComponent);

    const localInitiative = fixture.debugElement.nativeElement.querySelector('#localInitiative');

    localInitiative.click();
    fixture.detectChanges();
    fixture3.detectChanges();
    expect(fixture3.nativeElement.querySelector('h3').textContent).toContain('Local initiative:');
  });

});
