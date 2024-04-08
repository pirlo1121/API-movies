import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../envirionments/environments';
import { Observable } from 'rxjs';
import { dataMovie } from '../interfaces/dataMovie';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  apiUrl: string = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getMovies(searchTerm: string): Observable<dataMovie>{
    return this.http.get<dataMovie>(this.apiUrl + '&s=' + searchTerm)

  }
}
