import { Component, Input } from '@angular/core';
import {
  faTable,
  faWandSparkles,
  faStar,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.css'],
})
export class SectionComponent {
  @Input() name: string = '';
  @Input() sectionId: 'new-shows' | 'catalog' | 'featured' | undefined;
  faSplotch = faWandSparkles;
  faTable = faTable;
  faStar = faStar;
}
