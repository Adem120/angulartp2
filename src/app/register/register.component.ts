import { Component, OnInit } from '@angular/core';
import { User } from '../model/user.models';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  user =new User();
  constructor() { }

  ngOnInit(): void {
  }
Register(){
  
}

}
