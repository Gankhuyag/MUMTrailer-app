import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TrailerComponent } from './trailer/trailer.component';
import { TrailerListComponent } from './trailers/trailer-list/trailer-list.component';
import { HeaderComponent } from './header/header.component';
import { TrailerItemComponent } from './trailers/trailer-list/trailer-item/trailer-item.component';
import {TrailerDetailComponent} from './trailers/trailer-detail/trailer-detail.component';
import {MatSelectModule} from '@angular/material/select';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {DemoMaterialModule} from 'src/app/material-module'
import {SelectOverviewExample} from 'src/app/selectView/select-view'
import {FileDropDirective, FileSelectDirective} from  'ng2-file-upload'; //"ng2-file-upload";
import {HttpClientModule} from "@angular/common/http";
import { TrailersComponent } from './trailers/trailers.component';
import { TrailerListEditComponent } from './trailers/trailer-list/trailer-list-edit/trailer-list-edit.component';
import { DataService } from './trailers/trailer-list/data.service';
import { TrailerService } from './trailer/trailer.service';
import { StoreService } from './store.service';
//import {Http, Response} from '@angular/http'
//import {CustomMaterialModule} from "./file-upload/material.module";
 
//import { FileUploadComponent } from './file-upload/file-upload.component';
//import { TComponent } from './t/t.component';

@NgModule({
  declarations: [
    AppComponent,
    TrailerComponent,
    TrailerListComponent,
    HeaderComponent,
    TrailerItemComponent,
    TrailerDetailComponent,
    SelectOverviewExample,
    FileSelectDirective,
    FileDropDirective,
    TrailersComponent,
    TrailerListEditComponent,
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatSelectModule,
    BrowserAnimationsModule,
    HttpClientModule,
    DemoMaterialModule,
    ReactiveFormsModule.withConfig({warnOnNgModelWithFormControl: 'never'}),
    
  ],
  providers: [DataService,TrailerService,StoreService],
  bootstrap: [AppComponent]
})
export class AppModule { }
