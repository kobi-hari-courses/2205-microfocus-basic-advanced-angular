import { Component, OnInit } from '@angular/core';
import { Lazy1Service } from 'src/app/services/lazy-1.service';
import { Lazy2Service } from 'src/app/services/lazy-2.service';

@Component({
  selector: 'app-lazy-services-consumer',
  templateUrl: './lazy-services-consumer.component.html',
  styleUrls: ['./lazy-services-consumer.component.css']
})
export class LazyServicesConsumerComponent implements OnInit {
  val1!: number;
  val2!: number;


  constructor(
    private lazy1: Lazy1Service, 
    private lazy2: Lazy2Service) { }

  ngOnInit(): void {
    this.val1 = this.lazy1.getValue();
    this.val2 = this.lazy2.getValue();
  }

}
