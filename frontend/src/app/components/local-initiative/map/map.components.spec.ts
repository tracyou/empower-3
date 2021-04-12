import { TestBed } from '@angular/core/testing';
import { MapComponent } from './map.component';

describe('MapComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        MapComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(MapComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'myNewApp'`, () => {
    const fixture = TestBed.createComponent(MapComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('myNewApp');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(MapComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.content span').textContent).toContain('myNewApp app is running!');
  });
});
