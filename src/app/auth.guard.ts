import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { SellerService } from './services/seller.service';

export const authGuard: CanActivateFn = (route, state) => {
  // return false;

  let sellerService = inject(SellerService);

debugger;

  if (localStorage.getItem('sellerLogin')) {
    return true;
  }
debugger;
  return sellerService.isSellerLoggedIn.value;
};
