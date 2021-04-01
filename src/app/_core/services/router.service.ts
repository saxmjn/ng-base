import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable()

export class RouterService {
  routeExtra = ['ig-dashboard', 'ig-medias', 'shop-dashboard', 'item', 'product', 'brand', 'video'];
  routeBusiness = ['cart', 'account', 'orders', 'notifications', 'auth'];
  featureRoute = ['authe', 'chat', 'contact', 'file', 'social', 'chart']
  constructor(private router: Router) {
  }
  goto(action, extra = null) {
    // Sidebar Navigation
    if (action === 'home') {
      this.router.navigate(['home']);
    }
    else if (action === 'features') {
      this.router.navigate(['features']);
    }
    else if (action === 'ui') {
      this.router.navigate(['ui']);
    } else if (action === 'template') {
      this.router.navigate(['template']);
    }
    // Features Navigation
    else if (this.featureRoute.includes(action)) {
      this.router.navigate([action]);
    } 

    // 
    else if(action === '' || action == 'landing'){
      this.router.navigate(['/']);
    } else if (this.routeExtra.includes(action)) {
      this.router.navigate([action, extra]);
    } else if (action == 'business') {
      this.router.navigate([extra]);
    }
  }
}
