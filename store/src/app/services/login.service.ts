import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http : HttpClient) { }

  attemptLogin(email,password) : Observable<any>{
    return this.http.post<any>("http://127.0.0.1:8000/api/login",{email : email,password:password})
    .pipe(
      map(function(data){
        return data;
      })
    );
  }

}
