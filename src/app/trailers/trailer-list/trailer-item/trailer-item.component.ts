import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Trailer } from 'src/app/trailer/trailer.model';

@Component({
  selector: 'app-trailer-item',
  templateUrl: './trailer-item.component.html',
  styleUrls: ['./trailer-item.component.css']
})
export class TrailerItemComponent implements OnInit {
  @Input() trailer: Trailer;
  @Output() trailerSelected = new EventEmitter<void>();
  constructor() {}

  ngOnInit() {
  }
  onSelected() {
    this.trailerSelected.emit();
  }
}
