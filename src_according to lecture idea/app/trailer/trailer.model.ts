import { trailerType } from "./TrailerType.model";

export class Trailer{
    public trailerid: number;
    public typeid: number;
    public number: string;
    public location: string;
    public amount: number;
    public status: number;
    public feature:string;
    public imagePath: string;
   
     
    constructor ( typeid: number, number: string, location: string, amount: number, status: number,
        feature:string,imagePath:string)
    {
        //this.trailerid=trailerid;
        this.typeid=typeid;
        this.number=number;
        this.location=location;
        this.amount=amount;         
        this.status=status;
        this.feature=feature;   
        this.imagePath=imagePath;
     
    }
  
 }