import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {TrainingModule} from '../models/training-module';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TrainingModuleService {
  modules: TrainingModule[];

  constructor(private http: HttpClient) {
    this.modules = [];
    this.getRestModules().subscribe(data => {
      this.modules.push(...data);
    });
  }

  private getRestModules(): Observable<any> {
    return this.http.get('http://localhost:8080/modules');
  }

  getRestModulesFilter(tool: string, theme: string, location: string, language: string): Observable<any> {
    return this.http.get(
      'http://localhost:8080/modules/?tool=' + tool + '&theme=' + theme + '&location=' + location + '&language=' + language);
  }
}
