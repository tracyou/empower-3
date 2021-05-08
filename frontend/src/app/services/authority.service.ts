import {Injectable} from '@angular/core';
import {Authority} from '../models/authority';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Initiative} from '../models/initiative';


@Injectable({providedIn: 'root'})


export class AuthorityService {
  authorityList: Authority[];

  constructor(private http: HttpClient) {
    this.authorityList = [];
    this.getAuthority().subscribe(posts => {
      this.authorityList.push(...posts);
    });
  }

  public getAuthority(): Observable<Authority[]>{
    return this.http.get<any>('http://localhost:8080/authority');
  }

  public postAuthority(authority: Authority): Observable<Authority>{
    return this.http.post<Authority>('http://localhost:8080/authority', authority);
  }

  //Post zoals hierboven maar naar profile-authority.components.ts??
  public loadAuthority(authority: Authority){
    return this.getAuthority();
  }

  save(authority: Authority): Authority | null {
    const index = this.authorityList.findIndex((item) => item.toolName === authority.toolName);
    if (index < 0) {
      this.postAuthority(authority).subscribe(data => {
        this.authorityList.push(data);
        console.log(data);
        return data;
      });
    }
    return authority;
  }

}
