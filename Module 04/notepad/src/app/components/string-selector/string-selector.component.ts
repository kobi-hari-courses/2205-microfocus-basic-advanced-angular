import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-string-selector',
  templateUrl: './string-selector.component.html',
  styleUrls: ['./string-selector.component.css']
})
export class StringSelectorComponent implements OnInit {
  @Input()
  options: string[] = [];

  @Input()
  selectedOption: string = '';


  @Output()
  selectionRequested = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  onSelectOption(value: string) {
    this.selectionRequested.emit(value);
  }

}


/*

Events through the lifecycle of a component

A. Lifetime begining - happens once
---------------------
1. The constructor is called
2. The angular engine populates the inputs
3. Angular engine calls a lifecycle hook called: "ngOnInit"
4. The view is initialized
5. The ViewChild properties are populated
6. The ngAfterViewInit lifecycle hook is called

B. Lifetime middle - happens more than once
-------------------------------------------
1. Angular sets value to one of the Inputs (or more)
2. It then calls the ngOnChanges lifecycle hook and passes a SimpleChanges structure containing information
   about the inputs that changed and their previous value, their current value and is it the first change to this 
   property


C. Lifetime conclusion - happens once
-------------------------------------
1. Angular calls the ngOnDestroy lifecycle hook
2. It then destroys the component



*/
