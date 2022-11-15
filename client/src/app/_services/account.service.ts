import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  baseUrl = 'http://localhost:5001/api/';

  constructor(private http: HttpClient) { }

  public login(model: any) {
    return this.http.post(`${this.baseUrl}account/login`, model);
  }
}
