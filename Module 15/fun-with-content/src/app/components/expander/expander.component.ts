import { AfterContentInit, Component, ContentChild, EventEmitter, Input, OnInit } from '@angular/core';
import { ExpanderToggleDirective } from './expander-toggle.directive';

@Component({
  selector: 'app-expander',
  templateUrl: './expander.component.html',
  styleUrls: ['./expander.component.css']
})
export class ExpanderComponent implements OnInit, AfterContentInit {
  // if the user supplied us with a toggle button, we use the toggle button for toggling
  // but if the user did not supply a toggle button, we will toggle when the user clicks on the header

  @ContentChild(ExpanderToggleDirective)
  private toggleDirective: ExpanderToggleDirective | null = null;

  private _isExpanded: boolean = true;
  public get isExpanded(): boolean {
    return this._isExpanded;
  }

  toggle() {
    this._isExpanded = !this._isExpanded;
    this.toggled.emit(this._isExpanded);
  }

  onHeaderClicked() {
    console.log('header area clicked');
    if (!this.toggleButtonExists) {
      this.toggle();
    }
  }

  toggled = new EventEmitter<boolean>();

  toggleButtonExists: boolean = false;


  constructor(
    
  ) {
   }

  ngOnInit(): void {
  }

  ngAfterContentInit(): void {
    this.toggleButtonExists = Boolean(this.toggleDirective);
  }

}
