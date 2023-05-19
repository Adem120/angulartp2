export class Machine{
  idMachine!:number;
  nom?:string;
  prix?:number;
  dateachat?: Date;
  utulisation!:Utulisation;
  image! : Image
imageStr!:string
}
export class Utulisation{
  nomUtilisation!:String;
  idutili!:number;
}
export class Image {
  idImage! : number ;
  name! : string ;
  type !: string ;
  image !: number[] ;
  }
  