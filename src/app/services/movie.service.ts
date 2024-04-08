import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../envirionments/environments';
import { Observable, map } from 'rxjs';
import { dataMovie } from '../interfaces/dataMovie';
import { Movie } from '../interfaces/movie';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  apiUrl: string = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getMovies(searchTerm: string): Observable<Movie[]>{
    return this.http.get<dataMovie>(this.apiUrl + '&s=' + searchTerm).pipe(
      map(response => {return response.Search})
    )

  }
}
