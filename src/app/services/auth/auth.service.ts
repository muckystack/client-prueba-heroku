import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { GLOBAL } from 'src/global/configurations';
import { User } from 'src/models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private _http:HttpClient) { }

  
  // Register new user
  registerUser(user:User): Observable<any> {
    // Parser to json
    let params = JSON.stringify(user);
    // Headers configuration
    let headers = new HttpHeaders().set('Content-Type','application/json');
    // Petition
    return this._http.post(GLOBAL.url + 'auth/register', params , {headers: headers});
  }
}
