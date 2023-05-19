import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import Swal from 'sweetalert2';
import { User } from '../model/user.models';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user = new User();
  erreur = 0;
  created: boolean = false

  constructor(private authservice:AuthService,private router:Router) { }

  ngOnInit() {
 
  }
  onLoggedin() {
    this.authservice.login(this.user).subscribe((data) => { 
     let jwToken= data.headers.get('Authorization');
      this.authservice.saveToken(jwToken!);
      this.router.navigate(['machine']);
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
