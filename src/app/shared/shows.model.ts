export interface IShow {
  id: number;
  type: 'movie' | 'series';
  title: string;
  year: number;
  language:
    | 'en'
    | 'fr'
    | 'de'
    | 'it'
    | 'es'
    | 'pt'
    | 'ru'
    | 'ja'
    | 'ko'
    | 'zh'
    | 'ar'
    | 'he'
    | 'nl'
    | 'vi'
    | 'id'
    | 'th'
    | 'ms'
    | 'hi'
    | 'bn'
    | 'ur'
    | 'fa'
    | 'sw'
    | 'te'
    | 'pa'
    | 'gu'
    | 'ta'
    | 'mr'
    | 'kn';
  rating: 'G' | 'PG' | 'PG-13' | 'R' | 'NC-17';
  image: string;
}

export class Shows {
  movies;

  constructor(shows?: { movies: IShow[]; series?: IShow[] }) {
    this.movies = shows?.movies || [
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
        title: 'The Godfather: Part II',
        year: 1974,
        language: 'en',
        rating: 'R',
        image:
          'https://m.media-amazon.com/images/M/MV5BMWMwMGQzZTItY2JlNC00OWZiLWIyMDctNDk2ZDQ2YjRjMWQ0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_FMjpg_UX1000_.jpg',
      },
      {
        id: 4,
        type: 'movie',
        title: 'The Dark Knight',
        year: 2008,
        language: 'en',
        rating: 'R',
        image:
          'https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_FMjpg_UX1000_.jpg',
      },
      {
        id: 5,
        type: 'movie',
        title: '12 Angry Men',
        year: 1957,
        language: 'en',
        rating: 'R',
        image:
          'https://m.media-amazon.com/images/M/MV5BMWU4N2FjNzYtNTVkNC00NzQ0LTg0MjAtYTJlMjFhNGUxZDFmXkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_FMjpg_UX1000_.jpg',
      },
      {
        id: 6,
        type: 'movie',
        title: 'Titanic',
        year: 1997,
        language: 'en',
        rating: 'R',
        image:
          'https://m.media-amazon.com/images/M/MV5BMDdmZGU3NDQtY2E5My00ZTliLWIzOTUtMTY4ZGI1YjdiNjk3XkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_.jpg',
      },
      {
        id: 7,
        type: 'movie',
        title: 'Pulp Fiction',
        year: 1994,
        language: 'en',
        rating: 'R',
        image:
          'https://m.media-amazon.com/images/M/MV5BNGNhMDIzZTUtNTBlZi00MTRlLWFjM2ItYzViMjE3YzI5MjljXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_FMjpg_UX1000_.jpg',
      },
      {
        id: 8,
        type: 'movie',
        title: "Schindler's List",
        year: 1993,
        language: 'en',
        rating: 'R',
        image:
          'https://m.media-amazon.com/images/M/MV5BNDE4OTMxMTctNmRhYy00NWE2LTg3YzItYTk3M2UwOTU5Njg4XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg',
      },
      {
        id: 9,
        type: 'movie',
        title: 'Alien',
        year: 1979,
        language: 'en',
        rating: 'R',
        image:
          'https://m.media-amazon.com/images/M/MV5BOGQzZTBjMjQtOTVmMS00NGE5LWEyYmMtOGQ1ZGZjNmRkYjFhXkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_FMjpg_UX1000_.jpg',
      },
    ];
  }
}
