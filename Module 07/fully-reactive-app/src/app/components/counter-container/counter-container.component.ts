import { Component, OnInit } from '@angular/core';
import { CounterService } from 'src/app/services/counter.service';

@Component({
  selector: 'app-counter-container',
  templateUrl: './counter-container.component.html',
  styleUrls: ['./counter-container.component.css'],
  providers: [CounterService]
})
export class CounterContainerComponent implements OnInit {
  isShowingReader = true;

  toggleReader() {
    this.isShowingReader = !this.isShowingReader;
  }

  constructor() {}

  ngOnInit(): void {}
}
