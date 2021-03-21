import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StakeholderQuestion9Component } from './stakeholder-question9.component';

describe('StakeholderQuestion9Component', () => {
  let component: StakeholderQuestion9Component;
  let fixture: ComponentFixture<StakeholderQuestion9Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StakeholderQuestion9Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StakeholderQuestion9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
