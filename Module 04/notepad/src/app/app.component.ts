import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // data
  colors: string[] = ['Red', 'Green', 'Blue', 'Black', 'Purple', 'Brown'];
  sizes: string[] = ['8px', '14px', '18px', '24px', '40px', '72px'];
  fonts: string[] = ['Arial', 'Tahoma', 'Verdana', 'Consolas', 'Times new roman', 'Segoe UI'];

  selectedColor: string = this.colors[0];
  selectedSize: string = this.sizes[0];
  selectedFont: string = this.fonts[0];

  // actions
  selectColor(value: string) {
    this.selectedColor = value;
    console.log(`The color ${value} was selected`);
  }

  selectSize(value: string) {
    this.selectedSize = value;
  }

  selectFont(value: string) {
    this.selectedFont = value;
  }
}
