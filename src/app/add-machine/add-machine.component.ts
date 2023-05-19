import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Machine, Utulisation,Image } from '../model/model.component';
import {MachineServices} from '../services/services.component';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialogRef } from '@angular/material/dialog';
@Component({
  selector: 'app-add-machine',
  templateUrl: './add-machine.component.html',
  styleUrls: ['./add-machine.component.css']
})
export class AddMachineComponent implements OnInit {

  newMachine = new Machine();
  utlisation!:Utulisation[]
  id!:number;
  utilusation!:Utulisation;
  uploadedImage!: File;
imagePath: any;
trouve:boolean=false;
  constructor(private machineService: MachineServices,private activatedRoute: ActivatedRoute,private router:Router,private snack:MatSnackBar,private dialog:MatDialogRef<AddMachineComponent>) { }
  addMachine(){
    this.machineService
.uploadImage(this.uploadedImage, this.uploadedImage.name)
.subscribe((img: Image) => {
this.newMachine.image = img;
    this.newMachine.utulisation = this.utlisation.find(utilusation => utilusation.idutili == this.id)!;
    console.log(this.newMachine.utulisation)
  this.machineService.ajouterMachine(this.newMachine).subscribe(data =>this.handelsucess(data));
this.dialog.close();


});
  

}
  ngOnInit():void {
    
       console.log(this.id)
      this.machineService.listeUtilisation().subscribe(utilusation =>{
        this.utlisation=utilusation;
      })}
      onImageUpload(event: any) {
        this.trouve=true;
        this.uploadedImage = event.target.files[0];
        var reader = new FileReader();
        reader.readAsDataURL(this.uploadedImage);
        reader.onload = (_event) => { this.imagePath = reader.result; }
        }
        handelsucess(data:any){
          console.log(data)
          if(data){
         console.log(data)
         this.snack.open('machine Ajouter avec sucess','',{duration:4000,
         verticalPosition: 'top',
         horizontalPosition: 'right',
         panelClass:'success',
         
         
         });}
        }
}
