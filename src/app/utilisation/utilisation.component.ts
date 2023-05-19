import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { chdir } from 'process';
import { BehaviorSubject, Observable } from 'rxjs';
import Swal from 'sweetalert2';
import { Utulisation } from '../model/model.component';
import { AuthService } from '../services/auth.service';
import { MachineServices } from '../services/services.component';


@Component({
  selector: 'app-utilisation',
  templateUrl: './utilisation.component.html',
  styleUrls: ['./utilisation.component.css']
})
export class UtilisationComponent implements OnInit {
utilusations!:Utulisation[];
utlilusation!:Utulisation;
nomutl!:string


  constructor(private machineService: MachineServices,public authService:AuthService,private MachineServices: MachineServices,private router:Router) { }

  ngOnInit(){
    this.chargerUtilisation()
    console.log()

   
  }
   
      
      utilisationUpdated(utl:Utulisation){
        this.utlilusation=utl
    this.MachineServices.ajouteUtilusation(this.utlilusation).subscribe(utl =>{
      console.log(utl)
      this.router.navigate(['utilisation']).then(() => {
        window.location.reload();})
      })}
    
      chargerUtilisation(){
        this.MachineServices.listeUtilisation().subscribe(utl => {this.utilusations=utl}) }
        supprimerUtl(utl:Utulisation)
        {
          Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {
        this.machineService.supprimerUtilusation(utl.idutili).subscribe(() => {
        
        console.log("produit supprimé");
        });
        
        }
        this.router.navigate(['utilisation']).then(() => {
          window.location.reload();
          });
          })}
        
      }


