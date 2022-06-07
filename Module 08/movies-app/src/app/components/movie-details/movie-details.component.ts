import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Movie } from 'src/app/core/models/movie.model';
import { MoviesService } from 'src/app/core/services/movies.service';
import { map, switchAll } from 'rxjs/operators';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {
  movie$!: Observable<Movie | undefined>;

  constructor(
    private movies: MoviesService, 
    private route: ActivatedRoute, 
    private router: Router
  ) { }

  ngOnInit() {
    let index$ = this.route.params.pipe(
      map(prms => Number(prms['movieNumber']) )
    );

    this.movie$ = index$.pipe(
      map(index => this.movies.getMovieByIndex(index)), 
      switchAll()
    )
  }

  goNext() {
    let index = Number(this.route.snapshot.params['movieNumber']);
    this.router.navigate(['movies', index + 1]);
  }

  goPrev() {
    let index = Number(this.route.snapshot.params['movieNumber']);
    this.router.navigate(['movies', index - 1]);
  }

  goEdit() {
    let index = Number(this.route.snapshot.params['movieNumber']);
    this.router.navigate(['movies', index, 'edit']);
  } 

}
