import { Component, OnInit, ViewChild, OnDestroy, Output, EventEmitter, Input } from '@angular/core';
import { TrailerType, TrailerLocation } from 'src/app/trailer/trailer.component';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Trailer } from 'src/app/trailer/trailer.model';
import { TrailerService } from '../../../trailer/trailer.service';
import { DataService } from '../data.service';
import { StoreService } from '../../../store.service'
import { ArrayDataSource } from '@angular/cdk/collections';
@Component({
  selector: 'app-trailer-list-edit',
  templateUrl: './trailer-list-edit.component.html',
  styleUrls: ['./trailer-list-edit.component.css'],
  providers: []
})
export class TrailerListEditComponent implements OnInit, OnDestroy {
  @Input() trailer: Trailer;
  @ViewChild('f') slForm: NgForm
  subscription: Subscription
  @Output() trailerWasSelected = new EventEmitter<Trailer>();


  editedItemIndex: number;
  editedItem: Trailer;
  editMode = false;

  //  imgPath='https://www.gulfstreamcoach.com/media/uploads/1/18012_innsbruck295sbwextpassroadoct2018email.jpg'

  trailerTypes: TrailerType[] = [
    { value: '1', viewValue: '1 Badroom' },
    { value: '2', viewValue: '2 Badroom' },
    { value: '3', viewValue: '3 Badroom' }
  ];
  trailerLocations: TrailerLocation[] = [
    { value: 'Utopia', viewValue: 'Utopia' },
    { value: '1000N 4 street', viewValue: '1000N 4 street' },
    { value: '1000N 5 street', viewValue: '1000N 5 street' }
  ];
  imgPath: String;

  private service;
  //private trailer:Trailer;
  //  imgPath='https://www.gulfstreamcoach.com/media/uploads/1/18012_innsbruck295sbwextpassroadoct2018email.jpg'
  message: string
  constructor(private trailerService: TrailerService) {
    // this.service=trailerListService;
    // this.readMessage();

  }

  // readMessage()
  // {
  //   this.trailer=this.service.readTrailer();
  // }
  trail: Trailer //=new Trailer( 1,1,'4A','Utopia',100,1,'clean','https://cdn.airstream.com/wp-content/uploads/2018/12/Tommy-27-BugEye.jpg?auto=compress,format&crop=edges&fit=crop&ixlib=imgixjs-3.4.0&w=1946')
  trailers: Trailer[]
  ngOnInit() {
    //  this.trailerService.getTrailers().subscribe
    //    (trailers => (this.trailers = trailers));
    // this.trail =new Trailer( 1,1,'4A','Utopia',100,1,'clean','https://cdn.airstream.com/wp-content/uploads/2018/12/Tommy-27-BugEye.jpg?auto=compress,format&crop=edges&fit=crop&ixlib=imgixjs-3.4.0&w=1946')
  
     this.subscription=this.trailerService.getTrailer()
      .subscribe(trail => {
         this.trail = trail;
         console.log(trail);

        setTimeout(() => {
          this.slForm.setValue(
            {
              typeid: this.trail.typeId,
              number: this.trail.number,
              amount: this.trail.amount,
              feature: this.trail.feature,
              location: this.trail.location,
              status: this.trail.status
//              imagePath: this.trail.imagePath
            }
            )  
         });
       });
    }
  //   this.editedItemIndex = parseInt(this.message);
  //   this.editMode = true;
  //  // this.trailerService.getTrailers().subscribe
  //   (trailers => (this.trailers = trailers));

  //  this.editedItem = this.trailerService.getTrailer()[parseInt(this.message)];  
  // console.log(this.message)
  // //this.editedItem = this.getTrailerByInd(this.editedItemIndex);
  // console.log(this.editedItem.imagePath);

  // //      console.log(this.trailer.number);

  // console.log(this.editedItem.number);
  // console.log(this.editedItem.status);
  // console.log(this.editedItem.location);
  // //this.slForm.value.number = this.editedItem.number
  //this.imgPath = this.editedItem.imagePath
  // this.slForm.setValue(
  //   {
  //     typeid: this.editedItem.typeid,
  //     number: this.editedItem.number,
  //     amount: this.editedItem.amount,
  //     feature: this.editedItem.feature,
  //     location: this.editedItem.location,
  //     status: this.editedItem.status
  //   })
  // })

  //console.log(" In List  component, the index is ");

  //this.index=this.message.toString()

  // this.subscription = this.storeService.startedEditing
  //   .subscribe((index: number) => {
  //     console.log(index);

  //     this.editedItemIndex = index;
  //     this.editMode = true;

  //     // this.editedItem = this.trailerService.getTrailer()[index];  
  //     this.editedItem = this.getTrailerByInd(index);
  //     console.log(this.editedItem.imagePath);

  //     //      console.log(this.trailer.number);

  //     console.log(this.editedItem.number);
  //     console.log(this.editedItem.status);
  //     console.log(this.editedItem.location);
  //     //this.slForm.value.number = this.editedItem.number
  //     //this.imgPath = this.editedItem.imagePath
  //     this.slForm.setValue(
  //       {
  //         typeid: this.editedItem.typeid,
  //         number: this.editedItem.number,
  //         amount: this.editedItem.amount,
  //         feature: this.editedItem.feature,
  //         location: this.editedItem.location,
  //         status: this.editedItem.status
  //       })
  //   }
  //   );


ngOnDestroy() {
  this.subscription.unsubscribe();
}
onTrailerSelected(trailer: Trailer) {
  console.log(" In List, the Component index is" + this.message)
  // this.editedItemIndex = parseInt(this.message);
  this.trailerWasSelected.emit(trailer);
  console.log("TRAILER NUMBER N" + trailer.number)


}

  GetTrailers()
{
  this.trailerService.getTrailers()
  .subscribe(
    response=>console.log(response),
    error=>console.log(error)
  )
}

DeleteTrailer()
{
this.trailerService.DeleteTrailer(this.trail.trailerId)
this.subscription=this.trailerService.getTrailer()
      .subscribe(trail => {
         this.trail = trail;
         console.log(trail);
})
}

UpdateTrailers()
{
    this.trail.trailerId=this.slForm.value.trailerId;
    this.trail.typeId=this.slForm.value.typeId;
    this.trail.number=this.slForm.value.number;
    this.trail.amount=this.slForm.value.amount;
    this.trail.feature=this.slForm.value.feature;
    this.trail.location=this.slForm.value.location;
    this.trail.status=this.slForm.value.status;
    
    this.trailerService.saveTrailer(this.trailer) 
  }

getTrailerByInd(index: number) {
  return this.trailers[index]
}
}