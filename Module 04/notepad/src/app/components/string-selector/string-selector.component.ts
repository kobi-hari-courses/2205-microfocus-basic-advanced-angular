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
