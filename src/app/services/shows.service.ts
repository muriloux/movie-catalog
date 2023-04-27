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
        plot: 'Over the course of several years, two convicts form a friendship, seeking consolation and, eventually, redemption through basic compassion.',
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
        plot: 'The aging patriarch of an organized crime dynasty in postwar New York City transfers control of his clandestine empire to his reluctant youngest son.',
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
        plot: 'When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.',
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
        plot: 'The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.',
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
        plot: 'A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O., but his tragic past may doom the project and his team to disaster.',
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
        plot: 'An insomniac office worker and a devil-may-care soap maker form an underground fight club that evolves into much more.',
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
        plot: 'The presidencies of Kennedy and Johnson, the Vietnam War, the Watergate scandal and other historical events unfold from the perspective of an Alabama man with an IQ of 75, whose only desire is to be reunited with his childhood sweetheart.',
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
        plot: "Gandalf and Aragorn lead the World of Men against Sauron's army to draw his gaze from Frodo and Sam as they approach Mount Doom with the One Ring.",
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
