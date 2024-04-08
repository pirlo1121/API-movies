import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Subscription, debounceTime, distinct, filter, from, fromEvent, map, switchMap, tap } from 'rxjs';
import { Movie } from 'src/app/interfaces/movie';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit, OnDestroy {
  movies: Movie[] =[];
  @ViewChild('movieSearchInput', {static: true}) movieSearchInput! : ElementRef;
  movieSubscription!: Subscription;

  constructor(private moviesServices: MovieService){}

  ngOnInit(): void {
    this.movieSubscription = fromEvent<Event>(this.movieSearchInput.nativeElement, 'keyup').pipe(
      map((event: Event) => {
        const searchTerm = (event.target as HTMLInputElement).value;
        return searchTerm;
      }),
      filter((searchTerm: string)=> searchTerm.length > 3),
      tap((searchTerm: string)=> console.log(searchTerm)),
      debounceTime(500),
      distinct(),
      switchMap((searchTerm: string)=> this.moviesServices.getMovies(searchTerm))
    ).subscribe((movies: Movie[]) =>{
      this.movies = movies !== undefined ? movies : [];

    })
  }
  ngOnDestroy(): void {
    this.movieSubscription.unsubscribe();
  }

}
