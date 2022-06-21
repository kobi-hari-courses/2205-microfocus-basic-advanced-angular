import { Component, HostBinding, OnInit } from '@angular/core';

@Component({
  selector: 'app-black',
  templateUrl: './blank.component.html',
  styleUrls: ['./blank.component.css']
})
export class BlankComponent implements OnInit {

  @HostBinding('style.background-color')
  myColor = 'magenta';

  constructor() { }

  ngOnInit(): void {
  }

}
