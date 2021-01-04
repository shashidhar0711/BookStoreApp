import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  baseUrl = environment.baseUrl
  constructor(private http: HttpClient) { }
  token:any;

  post(url, data) {
    return this.http.post(this.baseUrl + url, data)
  }

  get(url) {
    this.token='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZmViZWFiMDBmOTAyYTAwMTc2YjZiN2QiLCJpYXQiOjE2MDk0MDY3NzMsImV4cCI6MTYwOTQ5MzE3M30.OWs6_9Lw5Fx0csOFzYaCkT12f6HWCOCTVJ4u-n5DUl8'
    console.log(url);
    
    let options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'x-access-token':this.token
      })
    }
    return this.http.get(this.baseUrl + url, options);
  }}
