import { Component, OnInit, EventEmitter, Directive, Output, ViewChild, OnDestroy } from '@angular/core';
import { Trailer } from '../../trailer/trailer.model';
import { TrailerComponent, TrailerType, TrailerLocation } from '../../trailer/trailer.component';
import { TrailerService } from '../../trailer/trailer.service';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { DataService } from './data.service';
//import { setFlagsFromString } from 'v8';
//import { TrailerListService } from './trailer.list.service';

@Component({
  selector: 'app-trailer-list',
  templateUrl: './trailer-list.component.html',
  styleUrls: ['./trailer-list.component.css'],
  providers: []
})
export class TrailerListComponent implements OnInit {
  // ngOnDestroy(): void {
  //   throw new Error("Method not implemented.");
  // }

  @Output() change = new EventEmitter<string>();
  @Output() changed = new EventEmitter<string>()

  // @ViewChild('f') slForm: NgForm
  subscription: Subscription
  EditMode = false

  editedItemIndex: number;
  editedItem: Trailer;
  editMode = false;

  selectTrailer: Trailer;
  selectedTrailer: Trailer;
  trailers: Trailer[];
  trailer: Trailer;
  @Output() trailerWasSelected = new EventEmitter<Trailer>();

  message: string
  constructor(private trailerService: TrailerService, private data: DataService) {
    // this.service=trailerListService
    // this.sendTrailer() 
  }

  //   private sendTrailer():void {
  //     this.service.setTrailer(this.trailer);
  //  }
  ngOnInit() {
    this.trailers= this.trailerService.getTrailers();

    this.data.currentMessage.subscribe(message => {this.message = message})
    this.subscription = this.trailerService.trailersChanged
      .subscribe(
        (trailers: Trailer[]) => {
          this.trailers = trailers;
        }
      );
    
    console.log("In List  "+ this.message)

    //this.service=trailerListService
    //this.sendTrailer() 
    // this.trailerService.startedEditing.subscribe();

  }

  onEditItem(index: number) {
    
    this.trailerService.startedEditing.next(index);
  
    console.log(index)
    this.trailer = this.trailerService.getTrailerByInd(index)
    //this.data.changeMessage(index.toString());
     this.newData(index.toString())

    console.log(index)

    // this.change.emit(this.trailers[index].imagePath);

  }

  newData(data: string) {
    this.data.changeMessage(data);
  }

  msg = "Event Emit"
  onLogin() {
    console.log("Login function called")
    this.changed.emit(this.msg)
    console.log("Login function emitted")
  }

  onTrailerSelected(trailer: Trailer) {
    this.trailerWasSelected.emit(trailer);

  }
}
