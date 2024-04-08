import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  movies: any[] =[];

  constructor(private moviesServices: MovieService){}

  ngOnInit(): void {

  }

  getMovies(searchTerm: string){
    this.moviesServices.getMovies(searchTerm).subscribe(data =>{
      // console.log(data)
      this.movies = data.Search;
    });
    }

}
