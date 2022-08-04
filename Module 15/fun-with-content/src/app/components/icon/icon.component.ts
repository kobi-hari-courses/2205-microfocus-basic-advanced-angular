import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.css']
})
export class IconComponent implements OnInit, OnDestroy {

  constructor() { }

  ngOnInit(): void {
    console.log('app icon was created and initialized');
  }

  ngOnDestroy(): void {
    console.log('app icon was destroyed');
  }

}
