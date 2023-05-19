import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Utulisation } from '../model/model.component';
import { MachineServices } from '../services/services.component';
import { UtilisationComponent } from '../utilisation/utilisation.component';

@Component({
  selector: 'app-update-utilusation',
  templateUrl: './update-utilusation.component.html',
  styleUrls: ['./update-utilusation.component.css']
})
export class UpdateUtilusationComponent implements OnInit {
  utl!:string;
  utlilusation =new Utulisation();
  utll =new Utulisation();
  
  constructor(private activatedRoute: ActivatedRoute,private machineService: MachineServices,private utilisationComponent:UtilisationComponent,private router:Router) { }

  ngOnInit(): void {
   
  }
  saveUtilusation(){
    
    this.utlilusation.nomUtilisation=this.utl
   this.utilisationComponent.utilisationUpdated(this.utlilusation)
  }

}
