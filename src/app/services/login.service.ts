import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoginResponse } from './interface/login-response';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private _url = "/assets/data/login.json";

  constructor(private http: HttpClient) { }

  validateLogin(): Observable<LoginResponse> {
    console.log("Retrieving recipes...");    
    return this.http.get<LoginResponse>(this._url);
  }
}
