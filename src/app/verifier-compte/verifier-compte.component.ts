import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { error } from 'console';
import { User } from '../model/user.models';

@Component({
  selector: 'app-verifier-compte',
  templateUrl: './verifier-compte.component.html',
  styleUrls: ['./verifier-compte.component.css']
})
export class VerifierCompteComponent {
  constructor(private auth:AuthService,private route:Router) { }
  nb!: string;
  email!: string;
  user = new User();
  ngOnInit(): void {
    this.email=this.route.url.split('/')[2];

this.auth.findUser(this.email).subscribe((data)=>{
  this.user=data;
  
  if(this.user.enabled==='active'){
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Compte déjà actif!'
      
    })
    this.route.navigate(['login']);}
})


   

  }
nb1 =new FormControl('', [Validators.required]);
nb2 =new FormControl('', [Validators.required]);
nb3 =new FormControl('', [Validators.required]);
nb4 =new FormControl('', [Validators.required]);
nb5 =new FormControl('', [Validators.required]);
nb6 =new FormControl('', [Validators.required]);
verifierCompte(){
  if(this.nb1.valid||this.nb2.valid||this.nb3.valid||this.nb4.valid ||this.nb5.valid||this.nb6.valid){
    this.nb=""+this.nb1.value+this.nb2.value+this.nb3.value+this.nb4.value+this.nb5.value+this.nb6.value;
    this.nb=parseInt(this.nb).toString();
  

    this.auth.verifiercompte(this.email, this.nb).subscribe(
      (data) => {
        console.log(data);
        Swal.fire({
          icon: 'success',
          title: 'Bienvenue',
          text: 'Compte vérifié avec succès!'
        });
        this.route.navigate(['login']);
      },
      (error) => {
        console.log(error.status);
        if (error.status === 500) {
          // Handle case where user is already active
          Swal.fire({
            icon: 'warning',
            title: 'Oops...',
            text: 'Compte déjà actif!'
          });
        } else if (error.status === 501) {
          // Handle case where the code is incorrect
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Code erroné!'
          });
        } else {
          // Handle other errors
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Erreur inattendue!'
          });
        }
      }
    );
    
    
  }

   
  }
}