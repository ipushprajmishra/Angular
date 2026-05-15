import { inject, Injectable } from '@angular/core';
import { Login, Signup } from '../model/data-type';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor() {}

  http = inject(HttpClient);

  UserSignup(user: Signup) : Observable<any>{
    console.log(JSON.stringify(user), 'service called');
   return this.http.post('http://localhost:3000/users', user);
  }

  Login(user: Login) : Observable<any>{
    console.log(JSON.stringify(user), 'service called');
   return this.http.get('http://localhost:3000/users?email='+user.email+'&password='+user.password);
  }
}
