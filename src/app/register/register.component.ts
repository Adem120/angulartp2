import { Component, OnInit } from '@angular/core';
import { User } from '../model/user.models';
import { AuthService } from '../services/auth.service';
import { error } from 'console';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  user =new User();
  constructor(private auth :AuthService) { }

  ngOnInit(): void {
  }
Register(){
  this.auth.signup(this.user).subscribe(data =>    Swal.fire(
    'user register avec success!',
    'You clicked the button!',
    'success'
  )
,error=>   Swal.fire({
 
  icon: 'error',
  title: 'Oops...',
  text: 'user name alredy exist!'}
  
)
)
  
  
  
}

}
