import {
  Component,
  ElementRef,
  SimpleChange,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import { IShow } from 'src/app/models/show.model';
import { ShowsService } from 'src/app/services/shows.service';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css'],
})
export class CarouselComponent {
  movies: IShow[] = [];
  activeMovieNumber = 1;
  @ViewChild('carousel', { static: false }) carouselEl:
    | ElementRef<HTMLDivElement>
    | undefined;
  @ViewChild('movie', { static: false }) movieEl:
    | ElementRef<HTMLDivElement>
    | undefined;

  ngAfterViewInit(changes: SimpleChanges) {}

  prevSlide() {
    if (this.activeMovieNumber === 1) {
      return;
    }

    if (this.activeMovieNumber > 5) {
      this.activeMovieNumber = (this.activeMovieNumber % 5) + 1;
    }
    this.activeMovieNumber -= 1;
    this.carouselEl?.nativeElement
      .querySelector(`#movie${this.activeMovieNumber}`)
      ?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }

  nextSlide() {
    if (this.activeMovieNumber === this.movies.length) {
      return;
    }

    if (this.activeMovieNumber % 5 !== 0 && this.activeMovieNumber < 5) {
      this.activeMovieNumber = 5;
    }
    this.activeMovieNumber += 1;
    this.carouselEl?.nativeElement
      .querySelector(`#movie${this.activeMovieNumber}`)
      ?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }

  constructor() {
    const shows = new ShowsService();
    const movies = shows.getMovies();
    const moviesLength = movies.length;
    if (!(moviesLength < 5 || moviesLength > 10)) {
      this.movies = movies;
    } else {
      throw new Error(
        `Invalid number of movies\n Must have at least 5 and at most 10 \n Got: ${moviesLength}`
      );
    }
  }
}
