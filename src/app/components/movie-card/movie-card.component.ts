import { Component, Input } from '@angular/core';
import { IShow } from 'src/app/models/show.model';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.css'],
})
export class MovieCardComponent {
  @Input() movie: IShow = {} as IShow;
}
