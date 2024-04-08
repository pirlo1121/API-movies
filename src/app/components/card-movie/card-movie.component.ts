import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-movie',
  templateUrl: './card-movie.component.html',
  styleUrls: ['./card-movie.component.css']
})
export class CardMovieComponent {
  @Input('movie') movie:any;

  constructor(){  }

  ngOninit():void{
    console.log(this.movie);
  }

  getImage(){
    return this.movie.Poster !== 'N/A' ? this.movie.Poster : 'http://via.placeholder.com/600'
  }
}
