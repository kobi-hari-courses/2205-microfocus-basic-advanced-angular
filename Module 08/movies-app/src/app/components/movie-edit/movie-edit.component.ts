import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Movie } from 'src/app/core/models/movie.model';
import { MoviesService } from 'src/app/core/services/movies.service';
import { map, switchAll } from 'rxjs/operators';

@Component({
  selector: 'app-movie-edit',
  templateUrl: './movie-edit.component.html',
  styleUrls: ['./movie-edit.component.css']
})
export class MovieEditComponent implements OnInit {
  movie$!: Observable<Movie | undefined>;

  
  constructor(
    private movies: MoviesService, 
    private route: ActivatedRoute, 
  ) { }

  ngOnInit(): void {
    let index$ = this.route.params.pipe(
      map(prms => Number(prms['movieNumber']) )
    );

    this.movie$ = index$.pipe(
      map(index => this.movies.getMovieByIndex(index)), 
      switchAll()
    )
  }

}
