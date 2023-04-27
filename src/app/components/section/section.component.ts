import { Component, Input } from '@angular/core';
import {
  faCirclePlus,
  faFolderPlus,
  faPlugCircleMinus,
  faPlus,
  faPlusSquare,
  faSplotch,
  faTable,
  faTableCellsLarge,
  faTableColumns,
  faTableList,
  faTabletAndroid,
  faWandSparkles,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.css'],
})
export class SectionComponent {
  @Input() name: string = '';
  @Input() sectionId: 'new-movies' | 'catalog' | undefined;
  faSplotch = faWandSparkles;
  faTableCellsLarge = faTable;
}
