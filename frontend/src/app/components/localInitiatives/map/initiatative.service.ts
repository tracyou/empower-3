import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Initiatative} from './Initiatative';
import {environment} from '../../../../environments/environment';
import {all} from 'codelyzer/util/function';

@Injectable({providedIn: 'root'})

export class InitiatativeService {

  constructor(private http: HttpClient) {
  }

  public getInitiatative(): Observable<Initiatative[]>{
    return this.http.get<any>('http://localhost:8080/initiative/all');
  }

  public postInitiatative(initiatative: Initiatative): Observable<Initiatative>{
    return this.http.post<Initiatative>('http://localhost:8080/initiatative/add', initiatative);
  }
}
