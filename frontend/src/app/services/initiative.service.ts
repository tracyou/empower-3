import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Initiative} from '../models/initiative';

@Injectable({providedIn: 'root'})

export class InitiativeService {

  constructor(private http: HttpClient) {
  }

  public getInitiative(): Observable<Initiative[]>{
    return this.http.get<any>('http://localhost:8080/initiative/all');
  }

  public postInitiatative(initiative: Initiative): Observable<Initiative>{
    return this.http.post<Initiative>('http://localhost:8080/initiative/add', initiative);
  }
}
