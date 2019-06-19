import { Trailer } from './trailer.model';
import { trailerType } from './TrailerType.model';
import { Subject, Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from '@angular/core';
import {Headers}from "@angular/http";

@Injectable()
export class TrailerService {

    // private trailer: Trailer[]=[
    //     new Trailer( 1,1,'4A','Utopia',100,1,'clean','https://cdn.airstream.com/wp-content/uploads/2018/12/Tommy-27-BugEye.jpg?auto=compress,format&crop=edges&fit=crop&ixlib=imgixjs-3.4.0&w=1946'),
    //     new Trailer( 2, 1,'5A','1000N 4 street',123,1,'clean','https://www.gulfstreamcoach.com/media/uploads/1/18012_innsbruck295sbwextpassroadoct2018email.jpg'),
    //     new Trailer( 3, 2,'6A','1000N 5 street',200,1,'clean','https://cdn.airstream.com/wp-content/uploads/2018/12/Tommy-27-BugEye.jpg?auto=compress,format&crop=edges&fit=crop&ixlib=imgixjs-3.4.0&w=1946'),
    //     new Trailer( 4, 1,'4A','Utopia',210,1,'clean','https://www.gulfstreamcoach.com/media/uploads/1/18012_innsbruck295sbwextpassroadoct2018email.jpg')
    // ];
    // trailersChanged = new Subject<Trailer[]>();
    // startedEditing = new Subject<number>();

    trailerSource = new Subject<Trailer>();

        constructor(private http: HttpClient) {
    }

    getTrailer() {

        return  this.trailerSource.asObservable();
        ;
    }
    
    setTrailer(trailer:Trailer)
       {
           this.trailerSource.next(trailer);
           //this.currentTrailer
       }
    // setTrailer(trailer: Trailer[])
    // {
    //     this.trailer=trailer;
    //     this.trailersChanged.next(this.trailer.slice())
    // }    



    saveURL = 'http://localhost:9999/api/v1/trailer'
    getURL = "http://localhost:9999/api/v1/trailers"
    deleteURL="http://localhost:9999/api/v1/trailer/"

    
    saveTrailer(trailer: Trailer) {
        const headers = new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJiZ2FuYm9sZEBtdW0uZWR1IiwidXNlcm5hbWUiOiJiZ2FuYm9sZEBtdW0uZWR1Iiwicm9sZXMiOlsiQURNSU4iXSwiaWQiOjB9.ocp0q3a8ZIpQjnaCJgeKpEPQxXY061h_kr6EDF9Z-GkNA-2_qusNgSa9DmpSkxLhxfuqOvAUR2OOmA5dVTCQrw' })
        return this.http.post(this.saveURL, trailer,{ headers:headers});
    }

    getTrailers() {
        const headers = new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJiZ2FuYm9sZEBtdW0uZWR1IiwidXNlcm5hbWUiOiJiZ2FuYm9sZEBtdW0uZWR1Iiwicm9sZXMiOlsiQURNSU4iXSwiaWQiOjB9.ocp0q3a8ZIpQjnaCJgeKpEPQxXY061h_kr6EDF9Z-GkNA-2_qusNgSa9DmpSkxLhxfuqOvAUR2OOmA5dVTCQrw' })

        return this.http.get(this.getURL,{ headers:headers}).map(data => data as Array<Trailer>);
    }
    DeleteTrailer(index: number) {
        console.log("INDEX TO DELETE IS  "+index);
        //const url = `${this.deleteURL}/${index}`

        const url = `http://localhost:9999/api/v1/trailer/${index}`;
        const headers = new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJiZ2FuYm9sZEBtdW0uZWR1IiwidXNlcm5hbWUiOiJiZ2FuYm9sZEBtdW0uZWR1Iiwicm9sZXMiOlsiQURNSU4iXSwiaWQiOjB9.ocp0q3a8ZIpQjnaCJgeKpEPQxXY061h_kr6EDF9Z-GkNA-2_qusNgSa9DmpSkxLhxfuqOvAUR2OOmA5dVTCQrw' })
        return this.http.delete(url, { headers:new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJiZ2FuYm9sZEBtdW0uZWR1IiwidXNlcm5hbWUiOiJiZ2FuYm9sZEBtdW0uZWR1Iiwicm9sZXMiOlsiQURNSU4iXSwiaWQiOjB9.ocp0q3a8ZIpQjnaCJgeKpEPQxXY061h_kr6EDF9Z-GkNA-2_qusNgSa9DmpSkxLhxfuqOvAUR2OOmA5dVTCQrw' })}).subscribe(
            response=>console.log(response),
            error=>console.log(error)
          )
    }
}