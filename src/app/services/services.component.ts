import {  Injectable } from '@angular/core';
import { Machine, Utulisation,Image } from '../model/model.component';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
const httpOptions = {
  headers: new HttpHeaders( {'Content-Type': 'application/json'} )
  };
@Injectable({
  providedIn: 'root'
  })
export class MachineServices  {
machines!: Machine[];
machine!: Machine;
utlisation!:Utulisation[];
uti?:Utulisation;
apiURL: string = 'http://localhost:8081/machine';
apiURL1: string = 'http://localhost:8081/utilisations';
apiURL2: string = 'http://localhost:8081/api';
constructor(private http : HttpClient,private authService:AuthService) {
  this.listeUtilisation().subscribe(utlis => {
    this.utlisation = utlis
  })
  }
  listeMachine(): Observable<Machine[]>{
    
    return this.http.get<Machine[]>(this.apiURL);
    }
    listeUtilisation(): Observable<Utulisation[]>{

      return this.http.get<Utulisation[]>(this.apiURL1);
      }
  ajouterMachine( mach: Machine):Observable<Machine>{
    
    return this.http.post<Machine>(this.apiURL,mach);
  }
  ajouteUtilusation(utl:Utulisation):Observable<Utulisation>{
   
    return this.http.post<Utulisation>(this.apiURL1,utl)
  }
  supprimerMachine( id: number){
 
    const url = `${this.apiURL}/${id}`;
    return this.http.delete(url);

}
consulterMachine(id:number):Observable<Machine>{
  
  const url = `${this.apiURL}/${id}`;
  return this.http.get<Machine>(url);
}
 

  updateMachine(p:Machine): Observable<Machine>{
    
  return this.http.put<Machine>(this.apiURL,p)
}
findUtlisation(id:number){
  this.uti=this.utlisation.find(utli =>utli.idutili==id)
  return this.uti

}
supprimerUtilusation( id: number){
  const url = `${this.apiURL1}/${id}`;
  return this.http.delete(url);

}
consulterUtilisation(id:number):Observable<Utulisation>{
  const url=`${this.apiURL1}/${id}`
  return this.http.get<Utulisation>(url)
}
/*rierMachine(){
  this.machines= this.machines.sort((n1,n2) => {
  if (n1.idmachine! > n2.idmachine!) {
  return 1;
  }
  if (n1.idmachine! < n2.idmachine!) {
  return -1;
  }
  return 0;
  });
  }*/
  uploadImage(file: File, filename: string): Observable<Image>{
    const imageFormData = new FormData();
    imageFormData.append('image', file, filename);
    const url = `${this.apiURL2 + '/image/upload'}`;
    return this.http.post<Image>(url, imageFormData);
    }
    loadImage(id: number): Observable<Image> {
    const url = `${this.apiURL2 + '/image/get/info'}/${id}`;
    return this.http.get<Image>(url);
    }
}
