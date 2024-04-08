import { Component } from '@angular/core';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent {

  constructor(private moviesServices: MovieService){}

  getMovies(searchTerm: string){
    this.moviesServices.getMovies(searchTerm).subscribe(data =>{
      console.log(data)
    });
    }

}
