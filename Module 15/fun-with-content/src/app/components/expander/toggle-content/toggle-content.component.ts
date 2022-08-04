import { Component, Input, OnInit, Optional } from '@angular/core';
import { ExpanderComponent } from '../expander.component';

@Component({
  selector: 'button[expander-toggle]',
  templateUrl: './toggle-content.component.html',
  styleUrls: ['./toggle-content.component.css']
})
export class ToggleContentComponent implements OnInit {
  @Input()
  labelOn: string = 'Less...';

  @Input()
  labelOff: string = 'More...';

  constructor(@Optional() public expander: ExpanderComponent | null) { }

  ngOnInit(): void {
  }

}
