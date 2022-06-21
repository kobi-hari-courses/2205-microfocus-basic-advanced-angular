import { Directive, ElementRef, HostBinding, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[highlight]'
})
export class HighlightDirective {
  @HostBinding('style.background-color')
  ourColor = 'cyan';


  @HostListener('click')
  whenTheUserClicks() {
    this.ourColor = 'rgba(0, 255, 255, 0.15)';
  }


  constructor(
    private elem: ElementRef, 
    private renderer: Renderer2
  ) {

    // elem.nativeElement.style.backgroundColor = 'yellow';

    // renderer.setStyle(elem.nativeElement, 'background-color', 'pink');

  }

}
