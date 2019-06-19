import { Injectable } from '@angular/core';
import { Trailer } from '../../trailer/trailer.model'
import { BehaviorSubject, Subject } from 'rxjs';
import { TrailerService } from '../../trailer/trailer.service';

@Injectable()

export class DataService {
   //this.trail =new Trailer( 1,1,'4A','Utopia',100,1,'clean','https://cdn.airstream.com/wp-content/uploads/2018/12/Tommy-27-BugEye.jpg?auto=compress,format&crop=edges&fit=crop&ixlib=imgixjs-3.4.0&w=1946')
  
   private trailerSource=new BehaviorSubject<Trailer>(new Trailer( 1,1,'4A','Utopia',100,1,'clean','https://cdn.airstream.com/wp-content/uploads/2018/12/Tommy-27-BugEye.jpg?auto=compress,format&crop=edges&fit=crop&ixlib=imgixjs-3.4.0&w=1946')
   )
   currentTrailer=this.trailerSource.asObservable();
   


   // trailersChanged = new Subject<Trailer[]>();
   // startedEditing = new Subject<number>();



   constructor()
   {}
   changeTrailer(trailer: Trailer)
   {
      this.trailerSource.next(trailer)      
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