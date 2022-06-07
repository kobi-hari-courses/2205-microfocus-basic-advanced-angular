import { Injectable } from '@angular/core';
import { ALL_MOVIES } from '../models/all-movies';
import { Movie } from '../models/movie.model';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor() { }

  private delay(millis: number): Promise<void> {
    return new Promise<void>(resolve => setTimeout(resolve, millis));
  }

  async getCount(): Promise<number> {
    await this.delay(500);
    return ALL_MOVIES.length;
  }

  async getAllTitles(): Promise<string[]> {
    await this.delay(1000);
    return ALL_MOVIES.map(m => m.caption);
  }

  async getMovieByIndex(index: number): Promise<Movie | undefined> {
    await this.delay(1000);
    return ALL_MOVIES[index];
  }

  async getMovie(title: string): Promise<Movie | undefined> {
    await this.delay(1000);
    return ALL_MOVIES.find(m => m.caption === title);
  }

}
