import { Component, OnInit } from '@angular/core';
import { CounterService } from 'src/app/services/counter.service';

@Component({
  selector: 'app-counter-reader',
  templateUrl: './counter-reader.component.html',
  styleUrls: ['./counter-reader.component.css']
})
export class CounterReaderComponent implements OnInit {
  value: number | undefined = undefined;

  constructor(private counterService: CounterService) { }

  ngOnInit(): void {
    this.counterService
        .getValue()
        .subscribe(val => this.value = val);
  }

}
