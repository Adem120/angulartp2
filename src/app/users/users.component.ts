import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { User } from '../model/user.models';
import Swal from 'sweetalert2';
import { EditUserComponent } from '../edit-user/edit-user.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit{
  Users!:User[];
constructor(public authService:AuthService,private dialog:MatDialog) { }
ngOnInit(): void {
  this.authService.getUser().subscribe(data => {this.Users=data 
   
  })
  


}
deleteuser(id:number){
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
      this.authService.deleteUser(id)
      .subscribe(() => {

console.log("produit supprimé");
this.ngOnInit()
});

 
  
}

})}
opendialog(id:number){
        
  this.dialog.open(EditUserComponent,{ 
    data : {
      id:id,
      width:'100%',
      height:'100%',
      top:'500px'}
    }
      ).afterClosed().subscribe(result =>{
        setTimeout(() => {
          this.ngOnInit();
        }, 2000);
      
      })
    }
    bloked(id:number){
      this.authService.blokedUser(id).subscribe(data=>{
        this.ngOnInit()
      })
    }
    deploked(id:number){
      this.authService.deblokedUser(id).subscribe(data=>{
        this.ngOnInit()
      })
    }

}

