import { Trailer } from './trailer.model';
import { trailerType } from './TrailerType.model';
import { Subject, Observable } from 'rxjs';
import { HttpClient } from "@angular/common/http";
import { Injectable } from '@angular/core';

@Injectable()
export class TrailerService {

    private trailer: Trailer[]=[
        new Trailer( 1,1,'4A','Utopia',100,1,'clean','https://cdn.airstream.com/wp-content/uploads/2018/12/Tommy-27-BugEye.jpg?auto=compress,format&crop=edges&fit=crop&ixlib=imgixjs-3.4.0&w=1946'),
        new Trailer( 2, 1,'5A','1000N 4 street',123,1,'clean','https://www.gulfstreamcoach.com/media/uploads/1/18012_innsbruck295sbwextpassroadoct2018email.jpg'),
        new Trailer( 3, 2,'6A','1000N 5 street',200,1,'clean','https://cdn.airstream.com/wp-content/uploads/2018/12/Tommy-27-BugEye.jpg?auto=compress,format&crop=edges&fit=crop&ixlib=imgixjs-3.4.0&w=1946'),
        new Trailer( 4, 1,'4A','Utopia',210,1,'clean','https://www.gulfstreamcoach.com/media/uploads/1/18012_innsbruck295sbwextpassroadoct2018email.jpg')
    ];
    // trailersChanged = new Subject<Trailer[]>();
    // startedEditing = new Subject<number>();

    constructor(private http: HttpClient) { }

    getTrailer(){        
        return this.trailer.slice();
        }

    // setTrailer(trailer: Trailer[])
    // {
    //     this.trailer=trailer;
    //     this.trailersChanged.next(this.trailer.slice())
    // }    
    saveURL = 'http://localhost:8080/api/v1/trailer'
    getURL = "http://localhost:8080/api/v1/trailers"

    getTrailerByInd(index : number)
    {    
        return this.trailer[index]}
    

    saveTrailer(trailer: Trailer) {
        const header = new Headers({ 'Content-Type': 'application/json' })
        return this.http.post(this.saveURL, trailer);
    }

    getTrailers() {
        return this.http.get(this.getURL).map(data=>data as Array<Trailer>);
    }
}