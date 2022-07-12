import { Component, Inject, OnInit } from '@angular/core';
import { A_TOKEN } from 'src/app/injection-tokens';

@Component({
  selector: 'app-a-presenter',
  templateUrl: './a-presenter.component.html',
  styleUrls: ['./a-presenter.component.css']
})
export class APresenterComponent implements OnInit {

  constructor(@Inject(A_TOKEN) public a: number[]) { }

  ngOnInit(): void {
  }

}
