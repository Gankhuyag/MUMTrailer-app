import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, FormsModule, Validators, NgForm} from "@angular/forms";
import {FileUploader} from "ng2-file-upload";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import { Trailer } from './trailer.model';
import { trailerType } from './TrailerType.model';

export class TrailerType {
  value: string;
  viewValue: string;
  constructor (value: string, viewValue: string)
{
    this.value=value;
    this.viewValue=viewValue;
 }
}
export interface TrailerLocation {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-trailer',
  templateUrl: './trailer.component.html',
  styleUrls: ['./trailer.component.css']
})

export class TrailerComponent implements OnInit {
  countries = ['USA', 'Canada', 'Uk']
 // countryForm: FormGroup;
  roomSelect: string
  locSelect : string
 
  trailerTypes: TrailerType[] = [
    {value: '1', viewValue: '1 Badroom'},
    {value: '2', viewValue: '2 Badroom'},
    {value: '3', viewValue: '3 Badroom'}
  ];
  trailerLocations: TrailerLocation[] = [
    {value: 'Utopia', viewValue: 'Utopia'},
    {value: '1000N 4 street', viewValue: '1000N 4 street'},
    {value: '1000N 5 street', viewValue: '1000N 5 street'}
  ];

  uploadForm: FormGroup;

  public uploader:FileUploader = new FileUploader({
    isHTML5: true
  });
  title: string = 'Angular File Upload';
  trailerStatus: number =0;
  imagePath: string='';
  constructor(private fb: FormBuilder, private http: HttpClient ) { }

  uploadSubmit(form:NgForm){
        const fvalue=form.value;
        this.trailerStatus=fvalue.status;         
        for (var i = 0; i < this.uploader.queue.length; i++) {
          let fileItem = this.uploader.queue[i]._file;
          if(fileItem.size > 10000000){
            alert("Each File should be less than 10 MB of size.");
            return;
          }
        }
        for (var j = 0; j < this.uploader.queue.length; j++) {
          let data = new FormData();
          let fileItem = this.uploader.queue[j]._file;
          console.log(fileItem.name);
          this.imagePath=fileItem.name;
          data.append('file', fileItem);
          data.append('fileSeq', 'seq'+j);
          data.append( 'dataType', this.uploadForm.controls.type.value);
          this.uploadFile(data).subscribe(data => alert(data.message));
        }
        this.uploader.clearQueue();
  }

  uploadFile(data: FormData): Observable<any> {
    //debugger
    return this.http.post<any>('http://localhost:8080/upload', data);
  }

  ngOnInit() {
    this.uploadForm = this.fb.group({
      document: [null, null],
      type:  [null, Validators.compose([Validators.required])]
    });
  }
  onAddTrailer(form:NgForm)
  {
    const value=form.value;

    console.log(value.trailerid);
    console.log(value.typeid);
    console.log(value.number);    
    console.log(value.location);
    console.log(value.amount);
    console.log(value.status);     
    console.log(this.trailerStatus);
    console.log(this.imagePath);
   

    // const trailer: Trailer = new Trailer(value.trailerid, value.typeid,value.number,value.location,value.amount,value.status,value.feature,value.imagePath); 
    //const trailer: Trailer = new Trailer(1, 1,'4A','Utopia',120,1,'value.feature','value.imagePath'); 
    var trailer: Trailer = {
      "trailerid" : value.trailerid,
      "typeid": value.typeid,
      "number": value.number,
      "location" : value.location,
      "amount" : value.amount,
      "status": this.trailerStatus,
      "feature": value.feature,
      "imagePath": this.imagePath 
      }; 
  
    this.createTrailer(trailer).subscribe(trailer => alert(trailer.status));
   
    // data: FormData; 
    // this.http.post<any>('http://localhost:'http://localhost:8080/upload'/upload', data);
    // onSubmit = function (user) {
    //   console.log(user.value);
  }
  createTrailer(trailer: Trailer): Observable<Trailer> {
    return this.http.post<Trailer>('http://localhost:8080/api/v1/trailer', trailer);
} 
}
