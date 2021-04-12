import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Initiative} from './initiative';
import {environment} from '../../../../environments/environment';
import {all} from 'codelyzer/util/function';

@Injectable({providedIn: 'root'})

export class InitiativeService {

  constructor(private http: HttpClient) {
  }

  public getInitiatative(): Observable<Initiative[]>{
    return this.http.get<any>('http://localhost:8080/initiative/all');
  }

  public postInitiatative(initiatative: Initiative): Observable<Initiative>{
    return this.http.post<Initiative>('http://localhost:8080/initiative/add', initiatative);
  }
}
