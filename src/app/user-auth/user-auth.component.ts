import { Component, inject, OnInit } from '@angular/core';
import { Login, Signup } from '../model/data-type';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-auth',
  templateUrl: './user-auth.component.html',
  styleUrls: ['./user-auth.component.css'],
})
export class UserAuthComponent implements OnInit {
  ngOnInit(): void {
    this.reloadUser();
  }
  userService = inject(UserService);
  router = inject(Router);

  Signup(formData: Signup) {
    console.log(formData);
    this.userService.UserSignup(formData).subscribe((result) => {
      console.log(result);
      localStorage.setItem('user', JSON.stringify(result));
      this.router.navigate(['/']);
    });
  }

  reloadUser() {
    if (localStorage.getItem('user')) {
      this.router.navigate(['/home']);
    }
  }

  Login(formData: Login) {
    console.log(formData);
    this.userService.Login(formData).subscribe((result) => {
      console.log(result);
      console.log("got something")
      if (result) {
        console.log(result);
        localStorage.setItem('user', JSON.stringify(result));
        this.router.navigate(['/']);
      }
      else
        {

        }
    });
  }
}
