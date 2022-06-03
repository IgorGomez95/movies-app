import { Component, HostListener, OnInit } from '@angular/core';
import { Movie } from 'src/app/interfaces/movies-response';
import { ApiService } from 'src/app/services/api.service';
import { EnvService } from 'src/app/services/env.service';
import { ShareMoviesService } from '../../services/share-movies.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [
  ]
})
export class HomeComponent implements OnInit {
  movies: Movie[] = [];
  popularMovies: Movie[] = [];


  @HostListener('window:scroll', ['$event'])
  onScroll(event: Event) {
    const scrollPosition = (document.documentElement.scrollTop || document.body.scrollTop) + 1000;
    const maxScrollPosition = (document.documentElement.scrollHeight || document.body.scrollHeight);
    if (scrollPosition >= maxScrollPosition) {
      if(this.api.loading) return;
      this.getTopRatedMovies();
      console.log({scrollPosition, maxScrollPosition});
    }
    // if(scrollPosition > maxScrollPosition){
    // }
  }

  constructor(
    private api: ApiService,
    private shareMoviesService: ShareMoviesService
  ) {
  }

  ngOnInit(): void {
    this.getPopularMovies();
    this.getTopRatedMovies();
  }

  getTopRatedMovies():void{
    this.api.getTopRatedMovies()
      .subscribe( movies => {
        this.movies.push(...movies);
        this.shareMoviesService.shareMoviesObservableData = this.movies;
        console.log(this.movies);
      });
  }

  // Obtiene las películas más populares y obtiene las primeras 4
  getPopularMovies():void{
    this.api.getPopularMovies()
      .subscribe( movies => {
        this.popularMovies = movies.slice(0,4);
      });
  }
}
