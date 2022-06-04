import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { Movie } from 'src/app/interfaces/movies-response';
import { navOption } from 'src/app/interfaces/nav-options';
import { ApiService } from 'src/app/services/api.service';
import { ShareMoviesService } from '../../services/share-movies.service';
import { Genre } from '../../interfaces/genres-response';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [
  ]
})
export class HomeComponent implements OnInit, OnDestroy {
  genres: Genre[] = [];
  movies: Movie[] = [];
  popularMovies: Movie[] = [];
  navOptions: navOption[] = [
    {
      name: 'Mejor Valoradas',
      option: 'valoradas',
      isActive: true
    },
    {
      name: 'Más Populares',
      option: 'populares',
      isActive: false
    },
    {
      name: 'En Cines',
      option: 'cines',
      isActive: false
    },
    {
      name: 'Próximamente',
      option: 'proximamente',
      isActive: false
    }
  ];
  navOption: string = 'valoradas';


  @HostListener('window:scroll', ['$event'])
  onScroll(event: Event) {
    const scrollPosition = (document.documentElement.scrollTop || document.body.scrollTop) + 1000;
    const maxScrollPosition = (document.documentElement.scrollHeight || document.body.scrollHeight);
    if (scrollPosition >= maxScrollPosition) {
      if(this.api.loading) return;
      this.getTopRatedMovies();
      console.log({scrollPosition, maxScrollPosition});
    }
  }

  constructor(
    private api: ApiService,
    private shareMoviesService: ShareMoviesService
  ) {
  }

  ngOnInit(): void {
    this.getPopularMovies();
    this.getGenres();
    this.getTopRatedMovies();
  }

  getGenres(): void{
    this.api.getGenres()
      .subscribe( genres => {
        this.genres = [...genres];
      });
  }

  getTopRatedMovies(): void{
    this.api.getTopRatedMovies()
      .subscribe( movies => {
        this.movies.push(...movies);
        this.shareMoviesService.shareMoviesObservableData = this.movies;// Actualiza la información del observable
        console.log(this.movies);
      });
  }

  // Obtiene las películas más populares y almacena las primeras 4
  getPopularMovies(): void{
    this.api.getPopularMovies()
      .subscribe( movies => {
        this.popularMovies = [...movies.slice(0,4)];
      });
  }

  // Cambia el estado de la opción seleccionada
  changeOption(opt: navOption): void{
    if( !opt.isActive){
      this.navOptions.forEach( option => {
        option.option === opt.option ? option.isActive = true : option.isActive = false;
      });
      this.navOption = opt.option;
    }
  }

  ngOnDestroy(): void{
    this.api.resetPages();
  }
}
