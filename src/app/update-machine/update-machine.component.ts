import { Component, Inject, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Machine, Utulisation,Image } from '../model/model.component';
import { AuthService } from '../services/auth.service';
import { MachineServices } from '../services/services.component';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-update-machine',
  templateUrl: './update-machine.component.html',
 
})
export class UpdateMachineComponent implements OnInit {
  currentMachine = new Machine();
  utlisation?:Utulisation[];
  id!:number;
  utilusation?:Utulisation;
  myImage! : string;
  uploadedImage!: File;
isImageUpdated: Boolean=false;
idmachine!:number;
  constructor(private activatedRoute: ActivatedRoute,
    private router:Router,
    private MachineServices: MachineServices ,private authService :AuthService,@Inject(MAT_DIALOG_DATA) public data: any,private dialog:MatDialogRef<UpdateMachineComponent>,private snack:MatSnackBar){
      this.idmachine=data.id;
     }

    ngOnInit():void {
      if(!this.authService.getToken()){
        this.router.navigate(['login'])
       }
      this.MachineServices.consulterMachine(this.idmachine).subscribe( machin =>
        { console.log(this.activatedRoute.snapshot.params['id'])
          this.currentMachine = machin;
          this.id=this.currentMachine.utulisation.idutili
          this.MachineServices
          .loadImage(this.currentMachine.image.idImage)
          .subscribe((img: Image) => {
          this.myImage = 'data:' + img.type + ';base64,' + img.image;
          });
      
          } ) ;
        this.MachineServices.listeUtilisation().subscribe(utilusation =>{
          this.utlisation=utilusation;
        })

       
          }
  updateMachine()
{ Swal.fire({
  title: 'Do you want to save the changes?',
  showDenyButton: true,
  confirmButtonText: 'Save',
  denyButtonText: `Don't save`,
}).then((result) => {
  
  /* Read more about isConfirmed, isDenied below */
  if (result.isConfirmed) {
    if(this.isImageUpdated){
      this.MachineServices
      .uploadImage(this.uploadedImage, this.uploadedImage.name)
      .subscribe((img: Image) => {
      this.currentMachine.image = img;
      
    this.currentMachine.utulisation.idutili=this.id;
    this.MachineServices.updateMachine(this.currentMachine).subscribe(data=>this.handelsucess(data))
  
  
    })

    }else{
      this.currentMachine.utulisation.idutili=this.id;
      this.MachineServices.updateMachine(this.currentMachine).subscribe(data=>this.handelsucess(data))
 

    }

  
  } else if (result.isDenied) {
    Swal.fire('Changes are not saved', '', 'info')
  }
   
  this.dialog.close()
  
}


)
      }
      onImageUpload(event: any) {
        if(event.target.files && event.target.files.length) {
        this.uploadedImage = event.target.files[0];
        this.isImageUpdated =true;
        const reader = new FileReader();
        reader.readAsDataURL(this.uploadedImage);
        reader.onload = () => { this.myImage = reader.result as string; };
        }
        }
        handelsucess(data:any){
          console.log(data)
          if(data){
         console.log(data)
         this.snack.open('update avec sucess','',{duration:4000,
         verticalPosition: 'top',
         horizontalPosition: 'right',
         panelClass:'success',
         
         
         });}
 
}}


