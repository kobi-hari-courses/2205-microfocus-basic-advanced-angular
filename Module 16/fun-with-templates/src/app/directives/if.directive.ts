import { ThisReceiver } from '@angular/compiler';
import { Directive, ElementRef, Input, OnChanges, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[myIf]'
})
export class IfDirective {

  private _condition: boolean = false;

  @Input('myIf')
  get condition(): boolean {return this._condition;}
  set condition(value: boolean) {
    this._condition = value;
    this.invalidate();
  }

  invalidate() {
    if (this._condition === true) {
      if (this.vcr.length === 0) {
        this.vcr.createEmbeddedView(this.template);
      } 
    }

    if (this._condition === false) {
      if (this.vcr.length === 1) {
        this.vcr.clear();
      }
    }

  }

  constructor(
    private template: TemplateRef<any>, 
    private vcr: ViewContainerRef
  ) {
  }

}
