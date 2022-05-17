import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  // data
  isBusy: boolean = false;
  keyword: string = '';
  results: string[] = [];

  // actions
  setKeyword(value: string) {
    this.keyword = value;
  }

  search() {
    this.results = [];
    this.isBusy = true;

    setTimeout(() => {
      this.isBusy = false;
      this.results = [
        `${this.keyword} 1`, 
        `${this.keyword} 2`, 
        `${this.keyword} 3`, 
      ]

    }, 3000);
  }


}
