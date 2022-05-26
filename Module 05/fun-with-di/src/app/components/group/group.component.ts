import { Component, OnInit } from '@angular/core';
import { AdditionService } from 'src/app/services/addition.service';

@Component({
  selector: 'app-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.css'], 
  providers: [
    {
      provide: AdditionService, 
      useClass: AdditionService
    }
  ]
})
export class GroupComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

// 4 different types of providers - responsible for the instantiation of the dependency response
// 1. class provider
// 2. existing provider
// 3. value provider
// 4. factory provider
