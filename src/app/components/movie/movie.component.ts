import { Component, Input } from '@angular/core';
import { IShow } from 'src/app/models/show.model';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css'],
})
export class MovieComponent {
  @Input() movie: IShow = {} as IShow;
}
