import { Template } from '@angular/compiler/src/render3/r3_ast';
import { Directive, TemplateRef } from '@angular/core';

@Directive({
  selector: '[selectorItem]'
})
export class ItemDirective {

  constructor(
    public template: TemplateRef<any>
  ) { }

}
