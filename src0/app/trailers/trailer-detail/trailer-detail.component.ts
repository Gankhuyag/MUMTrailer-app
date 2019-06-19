import { Component, OnInit, Input} from '@angular/core';
import { Trailer } from '../../trailer/trailer.model';

@Component({
  selector: 'app-trailer-detail',
  templateUrl: './trailer-detail.component.html',
  styleUrls: ['./trailer-detail.component.css']
})
export class TrailerDetailComponent  {
  @Input() trailer: Trailer;
  constructor() { }

 

}
