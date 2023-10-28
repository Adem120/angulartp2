import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddMachineComponent } from './add-machine/add-machine.component';
import { AddUtilusationComponent } from './add-utilusation/add-utilusation.component';
import { BlockloginGuard } from './blocklogin.guard';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { LoginComponent } from './login/login.component';
import { MachineGuard } from './machine.guard';
import { MachineComponent } from './machine/machine.component';
import { RechercheParCategorieComponent } from './recherche-par-categorie/recherche-par-categorie.component';
import { RechercheParNomComponent } from './recherche-par-nom/recherche-par-nom.component';
import { UpdateMachineComponent } from './update-machine/update-machine.component';
import { UtilisationComponent } from './utilisation/utilisation.component';
import { RegisterComponent } from './register/register.component';
import { UsersComponent } from './users/users.component';
import { VerifierCompteComponent } from './verifier-compte/verifier-compte.component';

const routes: Routes = [
  {path:"machine",component:MachineComponent,},
  {path:"add-machine",component:AddMachineComponent,canActivate:[MachineGuard]},
  {path:"update-machine/:id",component:UpdateMachineComponent,canActivate:[MachineGuard]},
  {path:"",redirectTo:"login",pathMatch:"full"},
  {path:"utilisation",component:UtilisationComponent},
  {path:"login",component:LoginComponent,canActivate:[BlockloginGuard]},
  {path:"recherche-par-categorie",component:RechercheParCategorieComponent},
  {path:"app-forbidden",component:ForbiddenComponent},
  {path:"recherche-par-nom",component:RechercheParNomComponent},
  {path:"utilisation/:id",component:UtilisationComponent},
  {path:"login/register",component:RegisterComponent},
  {path:"users",component:UsersComponent,canActivate:[MachineGuard]},
  {path:"verifierCompte/:email",component:VerifierCompteComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
