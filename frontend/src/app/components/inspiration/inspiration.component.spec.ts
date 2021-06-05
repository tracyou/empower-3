import {ComponentFixture, TestBed} from '@angular/core/testing';

import {InspirationComponent} from './inspiration.component';
import {TrainingModuleService} from '../../services/training-module.service';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {RouterTestingModule} from '@angular/router/testing';

describe('InspirationComponent', () => {
  let component: InspirationComponent;
  // let componentHtml: HTMLElement;
  let fixture: ComponentFixture<InspirationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InspirationComponent ],
      imports: [HttpClientTestingModule,
      RouterTestingModule.withRoutes(
        [{path: 'inspiration', component: InspirationComponent}]
      )],
      providers: [TrainingModuleService]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InspirationComponent);
    component = fixture.debugElement.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  /**
   * @author taherabalhas
   */
  it('should use trainingModule from the service', () => {
    const trainingModuleService = fixture.debugElement.injector.get(TrainingModuleService);
    expect(trainingModuleService.modules.length).toEqual(component.modules.length);
  });
});
