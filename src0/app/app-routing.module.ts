import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TrailerComponent } from './trailer/trailer.component';
import { TrailerListComponent } from './trailers/trailer-list/trailer-list.component';
import { TrailersComponent } from './trailers/trailers.component';

const routes: Routes = [
  { path: '', redirectTo: '/trailer', pathMatch: 'full'},
  { path: 'trailer', component: TrailerComponent},
  { path: 'trailer-list', component: TrailersComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
