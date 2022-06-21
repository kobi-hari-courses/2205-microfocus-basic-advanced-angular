import { Directive, ElementRef, EventEmitter, HostBinding, HostListener, Input, OnInit, Output, Renderer2 } from '@angular/core';

@Directive({
  selector: '[highlight]', 
  exportAs: 'hl'
})
export class HighlightDirective implements OnInit {
  public wasClicked = false;


  @Input('highlight')
  color = 'yellow';


  @Output()
  vanished = new EventEmitter<string>();


  @HostBinding('style.transition')
  transition = '1s';



  @HostBinding('style.background-color')
  ourColor = 'yellow';


  @HostListener('click')
  whenTheUserClicks() {
    if (!this.wasClicked) {
      this.wasClicked = true;
      const highlightColor = this.ourColor;
      setTimeout(() => {
        this.ourColor = 'transparent';
      }, 2000);

      setTimeout(() => {
        this.vanished.emit(highlightColor);
      }, 3000);
    }

  }


  constructor(
    private elem: ElementRef, 
    private renderer: Renderer2
  ) {

    // elem.nativeElement.style.backgroundColor = 'yellow';

    // renderer.setStyle(elem.nativeElement, 'background-color', 'pink');

  }

  ngOnInit(): void {
    console.log(`Highlight directive, color = "${this.color}" (${typeof(this.color)})`);

    this.ourColor = this.color ? this.color : 'yellow';
    
  }

}
