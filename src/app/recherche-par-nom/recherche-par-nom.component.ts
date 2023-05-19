import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Machine } from '../model/model.component';
import { AuthService } from '../services/auth.service';
import { MachineServices } from '../services/services.component';

@Component({
  selector: 'app-recherche-par-nom',
  templateUrl: './recherche-par-nom.component.html',
  styleUrls: ['./recherche-par-nom.component.css']
})
export class RechercheParNomComponent implements OnInit {
machines!:Machine[]
machine!:Machine[];
  constructor(public authService:AuthService,private machineservice:MachineServices,private router:Router ) { }

  ngOnInit(): void {
  this.machineservice.listeMachine().subscribe(mach =>{
    this.machines=mach;
  })

  
  }
  onKeyUp(filterText : string) {
    this.machine = this.machines.filter(machine => machine.nom!.toLowerCase().includes(filterText.toLowerCase())); 
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
  this.router.navigate(['recherche-par-nom']).then(() => {
    window.location.reload();
    });
    })}
}
