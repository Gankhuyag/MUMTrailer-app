import { Injectable } from '@angular/core';
import { Trailer } from 'src/app/trailer/trailer.model';
import { BehaviorSubject } from 'rxjs';
import { TrailerService } from 'src/app/trailer/trailer.service';

@Injectable()
export class DataService {
 
   private messageSource=new BehaviorSubject<string>("0")
   currentMessage=this.messageSource.asObservable();
   
   constructor()
   {

   }
   changeMessage(message: string)
   {
      this.messageSource.next(message)
      
   }
   
//   // field which stores a string
//    private trailer : Trailer;
//    // method to set value of message field
//    public setTrailer(trailer):void {
//       this.trailer=trailer;
//    }
//    // method to read value of message field
//    public readTrailer():Trailer {
//        return this.trailer;
//    }
}