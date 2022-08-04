import { Directive, HostBinding, HostListener, Optional } from '@angular/core';
import { ExpanderComponent } from './expander.component';

@Directive({
  selector: 'button[expander-toggle]',
})
export class ExpanderToggleDirective {
  @HostListener('click')
  onClick() {
    this.expanderComponent?.toggle();
  }

  constructor(
    @Optional() private expanderComponent: ExpanderComponent | null) {
    console.log(expanderComponent);
  }
}
