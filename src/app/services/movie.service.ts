import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../envirionments/environments';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  apiUrl: string = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getMovies(searchTerm: string): Observable<any>{
    return this.http.get(this.apiUrl + '&s=' + searchTerm)

  }
}
