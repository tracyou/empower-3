import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StakeholderQuestion12Component } from './stakeholder-question12.component';

describe('StakeholderQuestion12Component', () => {
  let component: StakeholderQuestion12Component;
  let fixture: ComponentFixture<StakeholderQuestion12Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StakeholderQuestion12Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StakeholderQuestion12Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
