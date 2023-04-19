import { Component } from '@angular/core';
import { IShow } from 'src/app/models/show.model';
import { ShowsService } from 'src/app/services/shows.service';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css'],
})
export class CatalogComponent {
  movies: IShow[];

  constructor() {
    const shows = new ShowsService();
    this.movies = shows.getMovies();
  }
}
