import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { CounterService } from 'src/app/services/counter.service';

@Component({
  selector: 'app-counter-reader',
  templateUrl: './counter-reader.component.html',
  styleUrls: ['./counter-reader.component.css']
})
export class CounterReaderComponent implements OnInit, OnDestroy {
  value: number | undefined = undefined;
  sub = new Subscription();

  constructor(private counterService: CounterService) { }

  ngOnInit(): void {
    this.sub.add(this.counterService
        .getValue()
        .subscribe(val => {
          this.value = val;
          console.log('counter value changed to ' + val);
        }));
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();    
  }

}
