import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { CatalogComponent } from './components/catalog/catalog.component';
import { MovieCardComponent } from './components/movie-card/movie-card.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SlideArrowButtonComponent } from './components/carousel/slide-arrow-button/slide-arrow-button.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchBarComponent,
    CarouselComponent,
    CatalogComponent,
    MovieCardComponent,
    SlideArrowButtonComponent,
  ],
  imports: [BrowserModule, FontAwesomeModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
