import { Component, Input } from '@angular/core';
import {
  faChevronLeft,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-slide-arrow-button',
  templateUrl: './slide-arrow-button.component.html',
  styleUrls: ['./slide-arrow-button.component.css'],
})
export class SlideArrowButtonComponent {
  @Input() isRight: boolean = false;
  @Input() isLeft: boolean = false;

  onHover() {
    console.log('hover');
  }

  faChevronLeft = faChevronLeft;
  faChevronRight = faChevronRight;
}
