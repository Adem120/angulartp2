import { Component ,Inject} from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AuthService } from '../services/auth.service';
import { User } from '../model/user.models';
import { Role } from '../model/role.models';
import { MatDialog } from '@angular/material/dialog';

import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css'],


})
export class EditUserComponent {
  iduser!:number
  user!:User
  roles!:Role[]
  rolesuser!:Role[]
  constructor(@Inject(MAT_DIALOG_DATA) public data: any,private auth:AuthService,private snack:MatSnackBar,private dialog:MatDialog){
    this.iduser=data.id;

  }
  ngOnInit(): void {
   this.getuser();

  }
  getuser(){
    this.auth.getuser(this.iduser).subscribe((res:any)=>{
      this.user=res;
      this.roles=this.user.roles;
      this.getRoles();
      
  })}
  deleterole(id:number){
    //delete role where id = id in table role of user
    this.roles=this.roles.filter(role => role.id != id);
    this.getRoles();

  }
  
  ajouterole(r:Role){
  
    this.roles.push(r)
  
      this.getRoles();
    
  

    



  }
  updateuser(){
    this.user.roles=this.roles;
    this.auth.updateuser(this.user).subscribe((res:any)=>{
      this.dialog.closeAll()
      this.snack.open('update avec sucess','',{duration:4000,
        verticalPosition: 'top',
        horizontalPosition: 'right',
        panelClass:'success',
        
        
        });
    }
    )
    
  

  }
  getRoles(){
    this.auth.getRoles().subscribe((res:any)=>{
   
     this.roles.forEach(role => {
      res=res.filter((r:Role)=>r.id!=role.id)
      this.rolesuser=res;

   
    }
    
    )
    
      

} 
    )

     

  }
}
