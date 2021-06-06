import {ComponentFixture, TestBed} from '@angular/core/testing';
import { MapComponent } from './map.component';
import {HttpClientModule} from '@angular/common/http';


describe('MapComponent', () => {
  let componentHtml: HTMLElement;
  let fixture: ComponentFixture<MapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MapComponent],
      imports: [HttpClientModule]
    }).compileComponents();
  });

  /**
   * @author Tracy Owusu
   */
  // it('it should give an alert', () => {
  //   fixture = TestBed.createComponent(MapComponent);
  //   componentHtml = fixture.debugElement.nativeElement;
  //   fixture.detectChanges();
  //
  //   const submitButton: HTMLButtonElement = componentHtml.querySelector('#sumbitButton');
  //   expect(alert).toBeTruthy();
  // });


  // it('should create the app', () => {
  //   const fixture = TestBed.createComponent(MapComponent);
  //   const app = fixture.componentInstance;
  //   expect(app).toBeTruthy();
  // });

  // it(`should have as title 'myNewApp'`, () => {
  //   const fixture = TestBed.createComponent(MapComponent);
  //   const app = fixture.componentInstance;
  //   expect(app.title).toEqual('myNewApp');
  // });

  // it('should render title', () => {
  //   const fixture = TestBed.createComponent(MapComponent);
  //   fixture.detectChanges();
  //   const compiled = fixture.nativeElement;
  //   expect(compiled.querySelector('.content span').textContent).toContain('myNewApp app is running!');
  // });
});
