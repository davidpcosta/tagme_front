import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoginResponse } from './interface/login-response';
import { Observable } from 'rxjs';
import { Api } from './api';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient, private api: Api) { }

  validateLogin(login: any): Observable<LoginResponse> {
    console.log("Validating login...");
    return this.http.post<LoginResponse>(this.api.getUrlAuthentication(), login);
  }
}
