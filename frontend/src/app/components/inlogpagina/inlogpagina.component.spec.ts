import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InlogpaginaComponent } from './inlogpagina.component';

describe('InlogpaginaComponent', () => {
  let component: InlogpaginaComponent;
  let fixture: ComponentFixture<InlogpaginaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InlogpaginaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InlogpaginaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
