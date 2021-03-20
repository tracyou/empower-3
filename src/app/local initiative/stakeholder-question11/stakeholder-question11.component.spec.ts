import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StakeholderQuestion11Component } from './stakeholder-question11.component';

describe('StakeholderQuestion11Component', () => {
  let component: StakeholderQuestion11Component;
  let fixture: ComponentFixture<StakeholderQuestion11Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StakeholderQuestion11Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StakeholderQuestion11Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
