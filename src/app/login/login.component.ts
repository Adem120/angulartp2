import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import Swal from 'sweetalert2';
import { User } from '../model/user.models';
import { AuthService } from '../services/auth.service';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user = new User();
  u=new User();
  erreur = 0;
  created: boolean = false

  constructor(private authservice:AuthService,private router:Router) { }

  ngOnInit() {
 
  }

  onLoggedin() {

    this.authservice.login(this.user).subscribe((data) => { 
     let jwToken= data.headers.get('Authorization');
      this.authservice.saveToken(jwToken!);

  
          this.authservice.getUserbyname(this.authservice.loggedUser).subscribe((data)=>{
            this.u=data;
       if(this.u.enabled==='active'){
        
        this.router.navigate(['machine']);
 
        
       }
   
      else if(this.u.enabled==='not verified'){
        this.authservice.logout();
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Compte Non verifier!'
          
        })
      
      }else if(this.u.enabled==='blocked'){
        this.authservice.logout();
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Compte bloqué!'
          
        })}
        })
    }, (erreur) => {
      this.erreur = 1;
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'login ou mot de passe erronés!'
        
      })
    });

    
  }
}
