import { trailerType } from "./TrailerType.model";

export class Trailer{
    public trailerId: number;
    public typeId: number;
    public number: string;
    public location: string;
    public amount: number;
    public status: number;
    public feature:string;
    public imagePath: string;
   
     
    constructor ( trailerId: number,typeId: number, number: string, location: string, amount: number, status: number,
        feature:string,imagePath:string)
    {
        this.trailerId=trailerId;
        this.typeId=typeId;
        this.number=number;
        this.location=location;
        this.amount=amount;         
        this.status=status;
        this.feature=feature;   
        this.imagePath=imagePath;
     
    }
  
 }