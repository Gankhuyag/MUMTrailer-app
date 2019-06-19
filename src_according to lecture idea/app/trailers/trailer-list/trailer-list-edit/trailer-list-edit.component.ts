import { Component, OnInit, ViewChild, OnDestroy, Output, EventEmitter, Input } from '@angular/core';
import { TrailerType, TrailerLocation } from 'src/app/trailer/trailer.component';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Trailer } from 'src/app/trailer/trailer.model';
import { TrailerService } from '../../../trailer/trailer.service';
import { DataService } from '../data.service';
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
  constructor(private trailerService: TrailerService, private data: DataService) {
    // this.service=trailerListService;
    // this.readMessage();

  }

  // readMessage()
  // {
  //   this.trailer=this.service.readTrailer();
  // }

  ngOnInit() {

    this.data.currentMessage.subscribe(message => this.message = message)

    console.log(" In List  component, the index is "+ this.message)
    
    this.subscription = this.trailerService.startedEditing
      .subscribe((index: number) => {
        console.log(index);

        this.editedItemIndex = index;
        this.editMode = true;
        this.editedItem = this.trailerService.getTrailerByInd(index);

        console.log(this.editedItem.imagePath);

  //      console.log(this.trailer.number);

        console.log(this.editedItem.number);
        console.log(this.editedItem.status);
        console.log(this.editedItem.location);
        //this.slForm.value.number = this.editedItem.number
        //this.imgPath = this.editedItem.imagePath
        this.slForm.setValue(
          {
            typeid: this.editedItem.typeid,
            number: this.editedItem.number,
            amount: this.editedItem.amount,
            feature: this.editedItem.feature,
            location: this.editedItem.location,
            status: this.editedItem.status            
          })
      }
      );
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
  onTrailerSelected(trailer: Trailer) {
   console.log(" In List, the Component index is"+ this.message)
    
    this.trailerWasSelected.emit(trailer);
  }

}
