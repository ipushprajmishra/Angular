import { Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {


  router = inject(Router);
  menuType: string = 'default';
  sellerName:string='';

  ngOnInit(): void {
    this.router.events.subscribe((result: any) => {

      if (result.url) {
        if (localStorage.getItem('sellerLogin') && result.url.includes('seller')) {
          this.menuType = 'seller';
          let sellerdetails= localStorage.getItem('sellerLogin');
          if(sellerdetails)
          {
            this.sellerName= JSON.parse(sellerdetails)[0].name;
          }
        } else {
          this.menuType = 'default';
        }

      }
    })
      this.menuType = 'default';
  }


  Logout()
  {
    localStorage.removeItem('sellerLogin');
    this.router.navigate(['/']);
  }
}
