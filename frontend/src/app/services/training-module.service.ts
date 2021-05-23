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

  getRestModulesTool(tool: string): Observable<any> {
    return this.http.get(
      'http://localhost:8080/modules/?tool=' + tool);
  }

  getRestModulesTheme(theme: string): Observable<any> {
    return this.http.get(
      'http://localhost:8080/modules/?theme=' + theme);
  }

  getRestModulesLocation(location: string): Observable<any> {
    return this.http.get(
      'http://localhost:8080/modules/?location=' + location);
  }

  getRestModulesLanguage(language: string): Observable<any> {
    return this.http.get(
      'http://localhost:8080/modules/?language=' + language);
  }
}
