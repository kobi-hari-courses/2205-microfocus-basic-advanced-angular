import { Component, EventEmitter, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-expander',
  templateUrl: './expander.component.html',
  styleUrls: ['./expander.component.css']
})
export class ExpanderComponent implements OnInit {
  @Input()
  header: string = '';

  @Input()
  content: string = '';

  private _isExpanded: boolean = true;
  public get isExpanded(): boolean {
    return this._isExpanded;
  }

  toggle() {
    this._isExpanded = !this._isExpanded;
    this.toggled.emit(this._isExpanded);
  }

  toggled = new EventEmitter<boolean>();


  constructor() { }

  ngOnInit(): void {
  }

}
