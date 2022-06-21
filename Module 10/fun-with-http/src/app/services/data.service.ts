import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { first, firstValueFrom } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Movie } from '../models/movie.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {


  constructor(private http: HttpClient) { }

  getAllMovieTitles(): Promise<Movie[]> {
    const url = `${environment.baseUrl}/movies`;
    const res = firstValueFrom(this.http.get<Movie[]>(url));
    return res;
  }

  getMovieById(id: number): Promise<Movie> {
    const url = `${environment.baseUrl}/movies/${id}`;
    const res = firstValueFrom(this.http.get<Movie>(url));
    return res;
  }
}
