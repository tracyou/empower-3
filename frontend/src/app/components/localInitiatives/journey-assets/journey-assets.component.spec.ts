import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JourneyAssetsComponent } from './journey-assets.component';

describe('JourneyAssetsComponent', () => {
  let component: JourneyAssetsComponent;
  let fixture: ComponentFixture<JourneyAssetsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JourneyAssetsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JourneyAssetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
