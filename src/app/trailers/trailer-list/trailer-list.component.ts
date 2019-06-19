import { Component, OnInit, EventEmitter, Directive, Output, ViewChild, OnDestroy } from '@angular/core';
import { Trailer } from '../../trailer/trailer.model';
import { TrailerComponent, TrailerType, TrailerLocation } from '../../trailer/trailer.component';
import { TrailerService } from '../../trailer/trailer.service';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { DataService } from './data.service';
import { StoreService } from '../../store.service'
//import { setFlagsFromString } from 'v8';
//import { TrailerListService } from './trail.list.service';

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
  constructor(private trailerService: TrailerService, private data: DataService,
    private storeService: StoreService) {
    // this.service=trailerListService
    // this.sendTrailer() 
  }

  //   private sendTrailer():void {
  //     this.service.setTrailer(this.trailer);
  //  }
  ngOnInit() {
    // this.trailers=this.trailerService.getTrailer();

    this.trailerService.getTrailers().subscribe
    (trailers=>(this.trailers=trailers));

    this.data.currentTrailer.subscribe(trailer => {this.trailer = trailer})
   
    this.subscription = this.storeService.trailersChanged
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
    
    //this.storeService.startedEditing.next(index);


    this.data.changeTrailer(this.trailers[index])
    
    console.log(index)
    this.trailer = this.getTrailerByInd(index)
    //this.trailer = this.trailerService.getTrailerByInd(index)
    //this.data.changeMessage(index.toString());
     //this.newData(this.trailers[index])
     
    this.trailerService.setTrailer(this.trailer)

    console.log(this.trailer.number)

    // this.change.emit(this.trailers[index].imagePath);

  }
 getTrailerByInd(index : number)
    {    return this.trailers[index]}

  newData(data: Trailer) {
    this.data.changeTrailer(data);
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
