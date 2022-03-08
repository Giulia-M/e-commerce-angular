import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MoviesHomeRoutingModule } from './movie-home-routing.module';
import { MoviesHomeComponent } from './movies-home.component';
import { MovieComponent } from './movie/movie.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [MoviesHomeComponent, MovieComponent],
  imports: [CommonModule, MoviesHomeRoutingModule, FormsModule],
  providers: [],
})
export class MoviesHomeModule {}
