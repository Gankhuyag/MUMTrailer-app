import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TrailerComponent } from './trailer/trailer.component';
import { TrailerListComponent } from './trailers/trailer-list/trailer-list.component';
import { TrailersComponent } from './trailers/trailers.component';
import { LoginComponent } from './login';
import { RegisterComponent } from './register';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
 
  { path: '', component: HomeComponent},
  { path: 'register', component: RegisterComponent},
  { path: 'trailer', component: TrailerComponent},   
  { path: 'login', component: LoginComponent},
  { path: 'trailer-list', component: TrailersComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
