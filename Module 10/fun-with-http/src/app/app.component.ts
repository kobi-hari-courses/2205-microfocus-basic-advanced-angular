import { Component } from '@angular/core';
import { Movie } from './models/movie.model';
import { DataService } from './services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  movie: Movie | null = null;

  constructor(private data: DataService){}
  async getMovie(id: number) {
    this.movie = await this.data.getMovieById(id);
  }
}
