import { Role } from "./role.models";

export class User{
    user_id!:number;
    username!:string ;
    password!: string ;
    roles!:Role[];
}