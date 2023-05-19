import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import Swal from 'sweetalert2';
import { Machine,Image } from '../model/model.component';
import { AuthService } from '../services/auth.service';
import { MachineServices } from '../services/services.component';
import { MatDialog } from '@angular/material/dialog';
import { AddMachineComponent } from '../add-machine/add-machine.component';
import { UpdateMachineComponent } from '../update-machine/update-machine.component';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-machine',
  templateUrl: './machine.component.html',

})
export class MachineComponent implements OnInit {
  machine! : Machine[];

  displayedColumns: string[] = [ 'id','Machine', 'Prix','dateachat', 'utilusation','image','Action'];
  dataSource = new MatTableDataSource<Machine>();
    constructor(private machineservice: MachineServices ,private router:Router,public authService:AuthService,private dialog:MatDialog) {
     // this.machine= machineservice.listeMachine();
  }
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
  ngOnInit(){
     
    this.machineservice.listeMachine().subscribe(machin => {
      console.log(machin);
      this.machine = machin;
      this.machine.forEach((mach) => {
        this.machineservice
        .loadImage(mach.image.idImage)
        .subscribe((img: Image) => {
        mach.imageStr = 'data:' + img.type + ';base64,' + img.image;
        
        });

        
  
        }); 
      
        this.dataSource.data = this.machine;
      
       
  });



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
    
openDialog(){
    this.dialog.open(AddMachineComponent,{ 
      data : {
       
       width:'30%',
       height:'30%',
       top:'500px'}
      }
        );}
        opendialog(id:number){
        
          this.dialog.open(UpdateMachineComponent,{ 
            data : {
              id:id,
              width:'30%',
              height:'30%',
              top:'500px'}
            }
              );}
  }