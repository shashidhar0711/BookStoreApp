import { Injectable } from '@angular/core';
import { HttpService } from '../httpService/http.service';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor(private httpService: HttpService) { }

  registration(data) {
    console.log("data in user service", data);
    return this.httpService.post('bookstore_user/registration', data)
  }

  loginUser(reqData) {
    console.log("data in user service", reqData);
    return this.httpService.post('bookstore_user/login', reqData);
  }
}
