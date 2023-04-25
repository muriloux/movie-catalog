import { IShow } from '../models/show.model';

export class ShowsService {
  private _movies: IShow[] = [];
  private _series: IShow[] = [];

  constructor(shows?: { movies: IShow[]; series: IShow[] | [] }) {
    if (shows) {
      this._movies = shows.movies;
      this._series = shows.series;
      return;
    }
    console.log(
      '\nShows service constructor: \nNo show data provided, using mockup data.'
    );
    this._movies = [
      {
        id: 1,
        type: 'movie',
        title: 'The Shawshank Redemption',
        year: 1994,
        language: 'en',
        rating: 'R',
        image:
          'https://m.media-amazon.com/images/M/MV5BNDE3ODcxYzMtY2YzZC00NmNlLWJiNDMtZDViZWM2MzIxZDYwXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_FMjpg_UX1000_.jpg',
      },
      {
        id: 2,
        type: 'movie',
        title: 'The Godfather',
        year: 1972,
        language: 'en',
        rating: 'R',
        image:
          'https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_FMjpg_UX1000_.jpg',
      },
      {
        id: 3,
        type: 'movie',
        title: 'The Dark Knight',
        year: 2008,
        language: 'en',
        rating: 'R',
        image:
          'https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_FMjpg_UX1000_.jpg',
      },
      {
        id: 4,
        type: 'movie',
        title: 'Pulp Fiction',
        year: 1994,
        language: 'en',
        rating: 'R',
        image:
          'https://m.media-amazon.com/images/M/MV5BNGNhMDIzZTUtNTBlZi00MTRlLWFjM2ItYzViMjE3YzI5MjljXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_FMjpg_UX1000_.jpg',
      },
      {
        id: 5,
        type: 'movie',
        title: 'Inception',
        year: 2010,
        language: 'en',
        rating: 'R',
        image:
          'https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_FMjpg_UX1000_.jpg',
      },
      {
        id: 6,
        type: 'movie',
        title: 'Fight Club',
        year: 1999,
        language: 'en',
        rating: 'R',
        image:
          'https://m.media-amazon.com/images/M/MV5BMmEzNTkxYjQtZTc0MC00YTVjLTg5ZTEtZWMwOWVlYzY0NWIwXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_FMjpg_UX1000_.jpg',
      },
      {
        id: 7,
        type: 'movie',
        title: 'Forrest Gump',
        year: 1994,
        language: 'en',
        rating: 'R',
        image:
          'https://m.media-amazon.com/images/M/MV5BNWIwODRlZTUtY2U3ZS00Yzg1LWJhNzYtMmZiYmEyNmU1NjMzXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_FMjpg_UX1000_.jpg',
      },
      {
        id: 8,
        type: 'movie',
        title: 'The Lord of the Rings: The Return of the King',
        year: 2003,
        language: 'en',
        rating: 'R',
        image:
          'https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_FMjpg_UX1000_.jpg',
      },
    ];
  }

  setMovies(movies: IShow[]) {
    this._movies = movies;
  }
  setSeries(series: IShow[]) {
    this._series = series;
  }
  getMovies() {
    return this._movies;
  }
  getSeries() {
    return this._series;
  }
}
