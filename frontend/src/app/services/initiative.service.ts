import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Initiative} from '../models/initiative';

@Injectable({providedIn: 'root'})

export class InitiativeService {
  initiativeList: Initiative[];

  constructor(private http: HttpClient) {
    this.initiativeList = [];
    this.getInitiative().subscribe(posts => {
      this.initiativeList.push(...posts);
    });
  }

  public getInitiative(): Observable<Initiative[]>{
    return this.http.get<any>('http://localhost:8080/initiative');
  }

  public postInitiatative(initiative: Initiative): Observable<Initiative>{
    return this.http.post<Initiative>('http://localhost:8080/initiative', initiative);
  }

  save(initiative: Initiative): Initiative | null {
    const index = this.initiativeList.findIndex((item) => item.inputEmail === initiative.inputEmail);
    if (index < 0) {
      this.postInitiatative(initiative).subscribe(data => {
        this.initiativeList.push(data);
        console.log(data);
        return data;
      });
    }
    return initiative;
  }
}
