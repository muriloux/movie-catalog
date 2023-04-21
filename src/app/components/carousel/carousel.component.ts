import { Component } from '@angular/core';
import { IShow } from 'src/app/models/show.model';
import { ShowsService } from 'src/app/services/shows.service';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css'],
})
export class CarouselComponent {
  movies: IShow[];

  slide(direction: string) {
    console.log(direction);
  }

  prevSlide() {
    console.log('previous');
  }

  nextSlide() {
    console.log('next');
  }

  constructor() {
    const shows = new ShowsService();
    this.movies = shows.getMovies();
  }
}
