import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


  values = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday'];

  flag = true;

  muNumber: 1 | 2 | 3 = 2;

  toggleFlag() {
    this.flag = !this.flag;
  }


}
