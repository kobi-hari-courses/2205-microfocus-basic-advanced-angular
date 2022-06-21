import { Directive, HostBinding, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[underline]'
})
export class UnderlineDirective implements OnInit {
  @Input('underline')
  color: string = 'red';

  @HostBinding('style.text-decoration')
  effectiveColor: string = '';


  constructor() { }


  ngOnInit(): void {
    const theColor = this.color ? this.color : 'red';
    this.effectiveColor = theColor + ' underline';
    
  }

}
