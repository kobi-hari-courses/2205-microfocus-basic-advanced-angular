import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  toggles: boolean[] = [false, false, false, false];

  toggle(index: number) {
    this.toggles[index] = !this.toggles[index];
  }
}
