import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppComponent } from './app.component';
import { SectionComponent } from './components/section/section.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { SlideArrowButtonComponent } from './components/carousel/slide-arrow-button/slide-arrow-button.component';
import { CatalogComponent } from './components/catalog/catalog.component';
import { MovieCardComponent } from './components/movie-card/movie-card.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { NavBarItemComponent } from './components/nav-bar/nav-bar-item/nav-bar-item.component';
import { FeaturedComponent } from './components/featured/featured.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchBarComponent,
    CarouselComponent,
    CatalogComponent,
    MovieCardComponent,
    SlideArrowButtonComponent,
    SectionComponent,
    NavBarComponent,
    NavBarItemComponent,
    FeaturedComponent,
  ],
  imports: [BrowserModule, FontAwesomeModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
