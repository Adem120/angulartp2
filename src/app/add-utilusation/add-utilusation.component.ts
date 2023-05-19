import { Component, Injectable, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-utilusation',
  templateUrl: './add-utilusation.component.html',
  styleUrls: ['./add-utilusation.component.css']
})
@Injectable({
  providedIn: 'root'
})
export class AddUtilusationComponent implements OnInit {
utl!:String;
  constructor() { }

  ngOnInit(): void {

  }
  updateutl(){
    return true;
  }

}
