import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Machine, Utulisation } from '../model/model.component';
import { AuthService } from '../services/auth.service';
import { MachineServices } from '../services/services.component';

@Component({
  selector: 'app-recherche-par-categorie',
  templateUrl: './recherche-par-categorie.component.html',
  styleUrls: ['./recherche-par-categorie.component.css']
})
export class RechercheParCategorieComponent implements OnInit {
  machines!:Machine[];
  machine!:Machine[];
  utlisation!:Utulisation[];
  constructor(private machineservice:MachineServices,public authService:AuthService,private router:Router) { }

  ngOnInit(): void {
   
  this.utlisation=[]
  this.machineservice.listeMachine().subscribe(mach =>{
    this.machines=mach;
  })
 }


supprimerMachine(machin: Machine)
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
this.machineservice.supprimerMachine(machin.idMachine).subscribe(() => {

console.log("produit supprimé");
});

}
this.router.navigate(['machine']).then(() => {
  window.location.reload();
  });
  })}
  onKeyUp(filterText : string) {
    this.machine = this.machines.filter(machine => machine.utulisation.nomUtilisation!.toLowerCase().includes(filterText.toLowerCase())); 
  }

}
