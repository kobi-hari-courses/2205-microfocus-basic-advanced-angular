import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { from, Observable } from 'rxjs';
import { MoviesService } from 'src/app/core/services/movies.service';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.css']
})
export class MoviesListComponent implements OnInit {
  captions$!: Observable<string[]>;

  constructor(
    private movies: MoviesService, 
    private router: Router) { }

  ngOnInit(): void {
    this.captions$ = from(this.movies.getAllTitles());
  }

  onSelectMovie(index: number) {
    this.router.navigate(['movies', index]);
  }

}
