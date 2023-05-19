import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'machine';
  previousUrl!: string;
  currentUrl!: string ;
constructor(public authService: AuthService , private router: Router) { }

  ngOnInit() {
    this.authService.loadToken()
    if(!this.authService.getToken()){
      this.router.navigate(['login'])
     }
    
   this.router.events.pipe(
      filter((event:any) => event instanceof NavigationEnd)
    ).subscribe((event: NavigationEnd) => {
      this.previousUrl = this.currentUrl;
      this.currentUrl = event.url;
      if(this.currentUrl!=null)
    localStorage.setItem('route', this.currentUrl)
      
    }); 
  }
  
}