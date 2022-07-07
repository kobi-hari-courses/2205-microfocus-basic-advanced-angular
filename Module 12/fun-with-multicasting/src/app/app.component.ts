import { Component } from '@angular/core';
import { DataService } from './services/data.service';
import { Data2Service } from './services/data2.service';

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

  constructor(private dataService: DataService, private d2: Data2Service){}
}
