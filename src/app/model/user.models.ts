import { Role } from "./role.models";

export class User{
    id!:number;
    username!:string ;
    password!: string ;
    roles!:Role[];
    enabled!:string;
    email!:string;
}