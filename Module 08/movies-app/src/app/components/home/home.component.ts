import { Component, OnInit } from '@angular/core';
import { from, Observable } from 'rxjs';
import { MoviesService } from 'src/app/core/services/movies.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  count$!: Observable<number>;

  constructor(private movies: MoviesService) { }

  ngOnInit(): void {
    this.count$ = from(this.movies.getCount());
  }

}
