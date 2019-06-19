import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'MUMTrailer-App';
  loadedFeature = 'trailer';
  onNavigate(feature: string) {

    this.loadedFeature = feature;

  } 
  onLoginEmit(msg:string)

  {
    console.log("Login event fired "+msg)
  }

  
}
