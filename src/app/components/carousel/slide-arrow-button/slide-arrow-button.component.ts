import { Component, EventEmitter, Input, Output } from '@angular/core';
import {
  faCircleChevronLeft,
  faCircleChevronRight,
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

  faCircleChevronLeft = faCircleChevronLeft;
  faCircleChevronRight = faCircleChevronRight;
}
