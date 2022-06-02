import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { interval, Observable, Subscription } from 'rxjs';
import { CounterService } from 'src/app/services/counter.service';

@Component({
  selector: 'app-counter-reader',
  templateUrl: './counter-reader.component.html',
  styleUrls: ['./counter-reader.component.css'], 
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CounterReaderComponent implements OnInit {
  value$!: Observable<number>;

  // this is just to demonstrate onPush
  foo: number = 42;

  constructor(private counterService: CounterService) { }

  ngOnInit(): void {
    this.value$ = this.counterService.getValue();

    interval(1000).subscribe(_ => {
      this.foo++;
      console.log(`foo changed to ${this.foo}`);
    });
  }

}
