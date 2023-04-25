import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { CatalogComponent } from './components/catalog/catalog.component';
import { MovieCardComponent } from './components/movie-card/movie-card.component';
import { SlideArrowButtonComponent } from './components/carousel/slide-arrow-button/slide-arrow-button.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        SearchBarComponent,
        CarouselComponent,
        CatalogComponent,
        MovieCardComponent,
        SlideArrowButtonComponent,
      ],
      imports: [FontAwesomeModule],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'movie-catalog'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('movie-catalog');
  });
});
