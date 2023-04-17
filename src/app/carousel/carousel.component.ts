import { Component } from '@angular/core';
import { Shows, IShow } from '../shared/shows.model';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css'],
})
export class CarouselComponent {
  private _movies: IShow[];
  private _max_movies: number;

  getMovies(): IShow[] {
    return this._movies;
  }

  setMovies(movies: IShow[]) {
    try {
      if (movies.length > this._max_movies) {
        throw new Error(`Too many movies\n
        Got ${movies.length} movies\n
        Expected ${this._max_movies} movies`);
      }
      this._movies = movies;
    } catch (error) {
      console.error(error);
    }
  }
  constructor() {
    this._max_movies = 10;
    this._movies = [];
    this.setMovies(new Shows().movies);
  }
}
