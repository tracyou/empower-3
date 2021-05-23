import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocalAuthorityComponent } from './local-authority.component';

describe('LocalAuthorityComponent', () => {
  let component: LocalAuthorityComponent;
  let fixture: ComponentFixture<LocalAuthorityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LocalAuthorityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LocalAuthorityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
