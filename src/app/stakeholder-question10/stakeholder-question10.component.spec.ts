import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StakeholderQuestion10Component } from './stakeholder-question10.component';

describe('StakeholderQuestion10Component', () => {
  let component: StakeholderQuestion10Component;
  let fixture: ComponentFixture<StakeholderQuestion10Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StakeholderQuestion10Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StakeholderQuestion10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
