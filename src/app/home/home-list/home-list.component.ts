import { Component, OnInit } from '@angular/core';
import { Trailer } from 'src/app/trailer/trailer.model';

@Component({
  selector: 'app-home-list',
  templateUrl: './home-list.component.html',
  styleUrls: ['./home-list.component.css']
})
export class HomeListComponent implements OnInit {
  trailer: Trailer;
  constructor() { }

  ngOnInit() {
  }

}
