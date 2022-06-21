import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'fun-with-directives';


  whenH2HighlightVanshes(color: string) {
    console.log('The highlight of h2 vanished, its color was ' + color);
  } 

}
