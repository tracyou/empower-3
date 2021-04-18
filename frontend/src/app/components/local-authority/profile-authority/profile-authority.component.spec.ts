import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileAuthorityComponent } from './profile-authority.component';

describe('ProfileComponent', () => {
  let component: ProfileAuthorityComponent;
  let fixture: ComponentFixture<ProfileAuthorityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfileAuthorityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileAuthorityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
