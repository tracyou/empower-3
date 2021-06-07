import {ComponentFixture, TestBed} from '@angular/core/testing';

import {InspirationComponent} from './inspiration.component';
import {TrainingModuleService} from '../../services/training-module.service';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {RouterTestingModule} from '@angular/router/testing';

describe('InspirationComponent', () => {
  let component: InspirationComponent;
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

  /**
   * @author taherabalhas
   */
  it('should use trainingModule from the service', () => {
    // Arrange (getting training module service)
    const trainingModuleService = fixture.debugElement.injector.get(TrainingModuleService);

    // Act: Performing something

    // Assert: checking if modules in service is equal to modules in component
    expect(trainingModuleService.modules.length).toEqual(component.modules.length);
  });
});
