import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { GLOBAL } from 'src/global/configurations';
import { User } from 'src/models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  /**
   * Contructor function
   * @param _http Library for conection
   */
  constructor(private _http:HttpClient) { }

  
  /**
   * Function register one user
   * @param user 
   */
  registerUser(user:User): Observable<any> {
    // Parser to json
    let params = JSON.stringify(user);
    // Headers configuration
    let headers = new HttpHeaders().set('Content-Type','application/json');
    // Petition
    return this._http.post(GLOBAL.url + 'auth/register', params , {headers: headers});
  }
  
  /**
   * Function register one user
   * @param user 
   */
  loginUser(user:User): Observable<any> {
    // Parser to json
    let params = JSON.stringify(user);
    // Headers configuration
    let headers = new HttpHeaders().set('Content-Type','application/json');
    // Petition
    return this._http.post(GLOBAL.url + 'auth/login', params , {headers: headers});
  }
}
