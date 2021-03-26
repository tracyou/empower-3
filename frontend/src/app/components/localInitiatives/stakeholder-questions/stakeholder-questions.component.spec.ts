import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StakeholderQuestionsComponent } from './stakeholder-questions.component';

describe('StakeholderQuestionsComponent', () => {
  let component: StakeholderQuestionsComponent;
  let fixture: ComponentFixture<StakeholderQuestionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StakeholderQuestionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StakeholderQuestionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
