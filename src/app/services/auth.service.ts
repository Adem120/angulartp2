import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, observable } from 'rxjs';
import { Role } from '../model/role.models';
import { User } from '../model/user.models';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { JwtHelperService } from '@auth0/angular-jwt';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public loggedUser!: string;
  public isloggedIn: Boolean = false;
  public roles!: String[];
  private helper = new JwtHelperService();

  apiURL: string = 'http://localhost:8081';
  token!: string;

  constructor(private router: Router, private http: HttpClient) { }

  login(user: User) {
    return this.http.post<User>(this.apiURL + '/login', user, { observe: 'response' })
  }

  saveToken(jwt: string) {
    localStorage.setItem('jwt', jwt)
    this.token = jwt
    this.isloggedIn = true;
    this.decodeJWT()
  }

  loadToken() {
   this.token=(localStorage.getItem('jwt')!);
    this.decodeJWT()
  }
  getToken(): string {
    return this.token;
  }

  decodeJWT() {
    if (this.token == undefined)
      return;
    const decodedToken = this.helper.decodeToken(this.token);
    this.roles = decodedToken.roles;
    this.loggedUser = decodedToken.sub;
    this.isloggedIn = true
  }

  isTokenExpired(): Boolean {
    return this.helper.isTokenExpired(this.token);
  }

  logout() {
    this.loggedUser = undefined!;
    this.roles = undefined!;
    this.token = undefined!;
    this.isloggedIn = false;
    localStorage.removeItem('jwt');
    this.router.navigate(['/login']);
  }


  SignIn(user: User) {
    this.loggedUser = user.username;
    this.isloggedIn = true;
    //this.roles = user.roles;
    localStorage.setItem('loggedUser', this.loggedUser);
    localStorage.setItem('isloggedIn', String(this.isloggedIn));
  }
  signup(user: User) {
    return this.http.post(this.apiURL + '/users/register', user, httpOptions);
  }


  isAdmin(): Boolean {
    if (!this.roles)
      return false;
    return this.roles.indexOf('ADMIN') >= 0;
  }
  getUser(): Observable<User[]> {
    return this.http.get<User[]>(this.apiURL + '/users/all');
  } 
  deleteUser(id:number){
   return this.http.delete(this.apiURL+'/users/'+id) 
    

}
getuser(id:number){
  return this.http.get(this.apiURL+'/users/'+id)
}
updateuser(user:User){
  return this.http.put(this.apiURL+'/users',user)
}
getRoles():Observable<Role[]>{
  console.log("aaaaaa"+this.http.get<Role[]>(this.apiURL+'/users/roles').subscribe(data=>console.log(data)));
  return this.http.get<Role[]>(this.apiURL+'/users/roles')

}
getUserbyname(name:string):Observable<User>{
  return this.http.get<User>(this.apiURL+'/users/user/'+name)
}

verifiercompte(email:string,code :string){
  return this.http.get(`${this.apiURL}/users/verifier?email=${email}&code=${code}`);
}
findUser(email:string){
  return this.http.get<User>(this.apiURL+'/users/verifier/'+email)
}
blokedUser(id:number){
  return this.http.get(`${this.apiURL}/users/block/${id}`);
}
deblokedUser(id:number){
  return this.http.get(`${this.apiURL}/users/unblock/${id}`);
}
}
