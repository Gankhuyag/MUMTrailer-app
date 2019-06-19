import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Response } from '@angular/http'
import { Observable, Subject } from 'rxjs';
import { Trailer } from './trailer/trailer.model';
import { getTreeNoValidDataSourceError } from '@angular/cdk/tree';
import { TrailerService } from './trailer/trailer.service';
import 'rxjs/add/operator/map';
//import { map } from 'rxjs/operators';

//import {Headers} from '@angular/common/http'
@Injectable()
export class StoreService {

  trailersChanged = new Subject<Trailer[]>();
  startedEditing = new Subject<number>();
  saveURL = 'http://localhost:8080/api/v1/trailer'
  getURL = "http://localhost:8080/api/v1/trailers"

  constructor(private http: HttpClient) { }

  //Saving the Trailers

  saveTrailer(trailer: Trailer) {
    const header = new Headers({ 'Content-Type': 'application/json' })
    return this.http.post(this.saveURL, trailer);
  }

  getTrailers() {
    return this.http.get(this.getURL);

    // .map((data: Response) => {
    //       console.log(data);
    //       return data.json();
    // });

    //.map(data => data.json() as Array<Trailer>)    
    // .subscribe(
    //     (response: Response)=>
    //     {
    //          const trailerSet = response;
    //          this.trailerService.setTrailer(trailerSet.json());
    //          console.log(trailerSet)
    //     }
    // )  
  }
};