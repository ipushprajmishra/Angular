import { Component, inject } from '@angular/core';
import { SellerService } from '../services/seller.service';
import { Router } from '@angular/router';
import { Login, Signup } from '../model/data-type';

@Component({
  selector: 'app-seller-auth',
  templateUrl: './seller-auth.component.html',
  styleUrls: ['./seller-auth.component.css']
})
export class SellerAuthComponent {

  constructor(private sellerService: SellerService) {

  }

  router = inject(Router);

  isLoginPage = false;

  SubmitSellerSignup(data: Signup): void {
    console.warn(data);
    this.sellerService.userSignup(data);
    // .subscribe({
    //   next: (value) => {
    //     console.log(value)
    //     if (value) {
    //       this.router.navigate(['/seller-home']);
    //     }
    //   },
    //   error(err) {
    //     console.log(err)
    //   },
    //   complete() {
    //     console.log('completed')
    //   },
    // });
  }

  SubmitSellerLogin(data: Login): void {
    console.warn(data);
    this.sellerService.userLogin(data);
    this.sellerService.isError.subscribe((result) => {
      if (result) {
        alert(result);
      }
    })
    {

    }
  }


  OpenLogin() {
    this.isLoginPage = !this.isLoginPage;
  }
}
