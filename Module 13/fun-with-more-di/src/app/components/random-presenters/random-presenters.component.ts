import { Component, Inject, OnInit } from '@angular/core';
import { RANDOM_VALUE, RANDOM_VALUE_GENERATOR } from 'src/app/injection-tokens';

@Component({
  selector: 'app-random-presenters',
  templateUrl: './random-presenters.component.html',
  styleUrls: ['./random-presenters.component.css'], 
})
export class RandomPresentersComponent implements OnInit {
  rand!: number;


  constructor(@Inject(RANDOM_VALUE_GENERATOR) public randGenerator: () => number) { }

  ngOnInit(): void {
    this.rand = this.randGenerator();
  }

}
