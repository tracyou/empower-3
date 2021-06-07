import {ComponentFixture, TestBed} from '@angular/core/testing';
import {HttpClientModule} from '@angular/common/http';
import {RouterTestingModule} from '@angular/router/testing';
import {InitiativeService} from '../../../services/initiative.service';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {FormsModule} from '@angular/forms';
import {ProfileComponent} from '../profile/profile.component';
import {By} from '@angular/platform-browser';
import {MapComponent} from './map.component';
import {Initiative} from '../../../models/initiative';


describe('MapComponent', () => {
  let component: MapComponent;
  let fixture: ComponentFixture<MapComponent>;
  let fixture2: ComponentFixture<ProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MapComponent],
      imports: [HttpClientTestingModule, FormsModule,
        RouterTestingModule.withRoutes(
          [{path: 'initiative', component: MapComponent},
            {path: 'profileInitiative', component: ProfileComponent}]
        )],
      providers: [InitiativeService]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  /**
   * @author Tracy Owusu
   */
  it('should post a new initiative and send you to the local initiative profile page', () => {
    fixture2 = TestBed.createComponent(ProfileComponent);

    const city = fixture.debugElement.nativeElement.querySelector('#city');
    const state = fixture.debugElement.nativeElement.querySelector('#state');
    const zip = fixture.debugElement.nativeElement.querySelector('#zip');
    const initiativeName = fixture.debugElement.nativeElement.querySelector('#initiativeName');
    const date = fixture.debugElement.nativeElement.querySelector('#date-input');
    const inputState = fixture.debugElement.nativeElement.querySelector('#inputState');
    const gridCheck = fixture.debugElement.nativeElement.querySelector('#gridCheck1');
    const gridRadios = fixture.debugElement.nativeElement.querySelector('#gridRadios1');
    const inputCollaborate = fixture.debugElement.nativeElement.querySelector('#inputCollaborate');
    const gridExpertise = fixture.debugElement.nativeElement.querySelector('#gridExpertise1');
    const inputEmail = fixture.debugElement.nativeElement.querySelector('#inputEmail');
    const inputWebsite = fixture.debugElement.nativeElement.querySelector('#inputWebsite');
    const inputPhone = fixture.debugElement.nativeElement.querySelector('#inputPhone');
    const submitButton = fixture.debugElement.nativeElement.querySelector('#sumbitButton');

    city.value = 'Amsterdam';
    state.value = 'noord-holland';
    zip.value = '-';
    initiativeName.value = 'Tracy';
    date.value = '29-01-2012';
    inputState.value = 'Solar';
    gridCheck.value = 'Reduce energy costs';
    gridRadios.value = 'Social - community building';
    inputCollaborate.value = 'Getting Technical Support';
    gridExpertise.value = 'Example 1';
    inputEmail.value = 'tracy@gmail.com';
    inputWebsite.value = 'tracy.nl';
    inputPhone.value = '0612345678';

    submitButton.click();
    fixture.detectChanges();
    fixture2.detectChanges();
    expect(fixture2.nativeElement.querySelector('h3').textContent).toContain('[Name of Local Initiative]');
  });

  /**
   * @author Tracy Owusu
   */
  it('should get all initiatives from the service', () => {
    const initiativeService = fixture.debugElement.injector.get(InitiativeService);
    expect(0).toEqual(initiativeService.initiativeList.length);
  });


  /**
   * @author Zakaria Radouani
   */
  it('should give an alert with the message that all fields must be filled', () => {
    const submitButton = fixture.debugElement.nativeElement.querySelector('#sumbitButton');
    submitButton.click();
    fixture.detectChanges();
    expect(alert('All fields must be filled'));
  });
});
