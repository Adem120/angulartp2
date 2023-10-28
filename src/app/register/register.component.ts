import { Component, OnInit } from '@angular/core';
import { User } from '../model/user.models';
import { AuthService } from '../services/auth.service';
import { error } from 'console';
import Swal from 'sweetalert2';
import { FormControl, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ModalLoadinComponent } from '../modal-loadin/modal-loadin.component';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  user =new User();
  ap=0
  dat:number=0

  constructor(private auth :AuthService,private dialog:MatDialog) { }

  ngOnInit(): void {
    this.ap=1
  }
  email = new FormControl('', [Validators.required, Validators.email]);
  nom =new FormControl('', [Validators.required]);
  password =new FormControl('', [Validators.required]);
  repitPassword =new FormControl('', [Validators.required]);
  Register() {
    if (this.email.valid && this.nom.valid && this.password.valid && this.repitPassword.valid) {
      this.user.username = this.nom.value!;
      this.user.email = this.email.value!;
      this.user.password = this.password.value!;
  
      console.log(this.user);
  
      // Call the signup function with a timeout
      const timeout = 15000; // Set your desired timeout (in milliseconds)
      let timeoutId:any;
  
      const signupPromise = new Promise((resolve, reject) => {
        
          this.dialog.open(ModalLoadinComponent,{ 
            data : {
             
             width:'30%',
             height:'30%',
             top:'500px'}
            });
            
        
        timeoutId = setTimeout(() => {
          this.dat=0
          reject("Operation timed out");
        }, timeout);
  
        this.auth.signup(this.user).subscribe(
          (data) => {
        this.dialog.closeAll()
            clearTimeout(timeoutId); // Clear the timeout when data is received
            resolve(data);
          },
          (error) => {
            this.dialog.closeAll()
            clearTimeout(timeoutId); // Clear the timeout on error as well
            reject(error);
          }
        );
      });
  
      signupPromise
        .then((data) => {
          Swal.fire(
            'User registered successfully!',
            'You clicked the button!',
            'success'
          );
        })
        .catch((error) => {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: error === "Operation timed out" ? 'Operation timed out!' : 'User name already exists!',
          });
        });
    }
  }
  


getEmailErrorMessage(): string {
  if (this.email.hasError('required')) {
    return 'Entrer un email';
  }
  
  if (this.email.hasError('email')) {
    return 'Not a valid email';
  }

  return '';
}

getNomErrorMessage(): string {
  if (this.nom.hasError('required')) {
    return 'Entrer un nom';
  }

  return '';
}
getPasswordErrorMessage(): string {
  if (this.nom.hasError('required')) {
    return 'Entrer un mot de passe';
  }

  return '';}
getRepitPasswordErrorMessage(): string {
  if (this.nom.hasError('required')) {
    return 'Entrer un mot de passe';
  }


  return '';}
  repitpassword():boolean{
    if(this.password.value!=this.repitPassword.value){
      return true
    }
    return false
  }
 

}
