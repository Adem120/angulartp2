import { Injectable, OnInit } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './services/auth.service';

@Injectable({
  providedIn: 'root'
})

export class BlockloginGuard implements CanActivate,OnInit {

  constructor(private authservice:AuthService,private router:Router){}
  ngOnInit() {
    // Or subscribe to it here
  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
   if (!this.authservice.getToken())
      return true;
    else {
      this.router.navigate([(localStorage.getItem('route')!)]);
      return false;
    }
  }
  
}
