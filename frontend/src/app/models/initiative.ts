export class Initiative {
  city: string;
  collaboration: string;
  date: Date;
  gaolCreate: string;
  gaolFootprint: string;
  gaolGreen: string;
  gaolImprove: string;
  gaolReduce: string;
  gridExpertise1: string;
  gridExpertise2: string;
  gridExpertise3: string;
  gridRadios: string;
  gridRadios2: string;
  gridRadios3: string;
  gridRadios4: string;
  inputEmail: string;
  inputPhone: number;
  inputWebsite: string;
  name: string;
  selectedTheme: string;
  state: string;
  zip: string;


  constructor(city: string, collaboration: string, date: Date, gaolCreate: string, gaolFootprint: string, gaolGreen: string,
              gaolImprove: string, gaolReduce: string, gridExpertise1: string, gridExpertise2: string, gridExpertise3: string,
              gridRadios: string, gridRadios2: string, gridRadios3: string, gridRadios4: string, inputEmail: string, inputPhone: number,
              inputWebsite: string, name: string, selectedTheme: string, state: string, zip: string) {
    this.city = city;
    this.collaboration = collaboration;
    this.date = date;
    this.gaolCreate = gaolCreate;
    this.gaolFootprint = gaolFootprint;
    this.gaolGreen = gaolGreen;
    this.gaolImprove = gaolImprove;
    this.gaolReduce = gaolReduce;
    this.gridExpertise1 = gridExpertise1;
    this.gridExpertise2 = gridExpertise2;
    this.gridExpertise3 = gridExpertise3;
    this.gridRadios = gridRadios;
    this.gridRadios2 = gridRadios2;
    this.gridRadios3 = gridRadios3;
    this.gridRadios4 = gridRadios4;
    this.inputEmail = inputEmail;
    this.inputPhone = inputPhone;
    this.inputWebsite = inputWebsite;
    this.name = name;
    this.selectedTheme = selectedTheme;
    this.state = state;
    this.zip = zip;
  }
}
