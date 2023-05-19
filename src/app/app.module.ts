import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddMachineComponent } from './add-machine/add-machine.component';
import { MachineComponent } from './machine/machine.component';
import { FormsModule } from '@angular/forms';
import { UpdateMachineComponent } from './update-machine/update-machine.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { UtilisationComponent } from './utilisation/utilisation.component';
import { AddUtilusationComponent } from './add-utilusation/add-utilusation.component';
import { UpdateUtilusationComponent } from './update-utilusation/update-utilusation.component';
import { RechercheParCategorieComponent } from './recherche-par-categorie/recherche-par-categorie.component';
import { LoginComponent } from './login/login.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { RechercheParNomComponent } from './recherche-par-nom/recherche-par-nom.component';
import { TokenInterceptor } from './token.interceptor';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { RegisterComponent } from './register/register.component';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatTableModule} from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatIconModule } from '@angular/material/icon';


@NgModule({
  declarations: [
    AppComponent,
    AddMachineComponent,
    MachineComponent,
    UpdateMachineComponent,
    UtilisationComponent,
    AddUtilusationComponent,
    UpdateUtilusationComponent,
    RechercheParCategorieComponent,
    LoginComponent,
    ForbiddenComponent,
    RechercheParNomComponent,
    RegisterComponent,

],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
  
    MatDialogModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,    
    MatSnackBarModule,
    MatProgressSpinnerModule,
    MatTableModule,
    MatPaginatorModule,
    MatIconModule
 

  ],
  providers: [{ provide : HTTP_INTERCEPTORS,
useClass : TokenInterceptor,
multi : true} 
 ],

  bootstrap: [AppComponent]
})
export class AppModule { }
