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
