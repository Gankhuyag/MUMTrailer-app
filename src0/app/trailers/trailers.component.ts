import { Component, OnInit } from '@angular/core';
import { TrailerService } from '../trailer/trailer.service';
import { Trailer } from '../trailer/trailer.model';
import { TrailerListComponent } from './trailer-list/trailer-list.component';

@Component({
  selector: 'app-trailers',
  templateUrl: './trailers.component.html',
  styleUrls: ['./trailers.component.css'],
  providers: [TrailerService],

})
export class TrailersComponent implements OnInit {
  selectTrailer:Trailer;
  selectedTrailer: Trailer;
  // imgPath : String
  imagPath='https://www.gulfstreamcoach.com/media/uploads/1/18012_innsbruck295sbwextpassroadoct2018email.jpg'

  constructor() { }
  ngOnInit() {
  }
  
  onNotify(trail:string)
  {      
      console.log("List fired")
       console.log(trail)
       console.log(trail)   
       alert(trail)
       this.imagPath=trail;
  }

  onLoginEmit(msg:string)

  {
    console.log("Login event fired "+msg)
  }

}
