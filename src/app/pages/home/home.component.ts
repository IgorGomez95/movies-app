import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { Movie } from 'src/app/interfaces/movies-response';
import { navOption } from 'src/app/interfaces/nav-options';
import { ApiService } from 'src/app/services/api.service';
import { ShareMoviesService } from '../../services/share-movies.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [
  ]
})
export class HomeComponent implements OnInit, OnDestroy {
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
  navOptionSelected: string = 'valoradas';

  // Decorador que se ejecuta cuando se hace scroll
  @HostListener('window:scroll', ['$event'])
  onScroll(event: Event) {
    const scrollPosition = (document.documentElement.scrollTop || document.body.scrollTop) + 1000; // Obtiene la posición del scroll + 1000px para cargar peliculas antes de que el usuario llegue al final
    const maxScrollPosition = (document.documentElement.scrollHeight || document.body.scrollHeight); // Obtiene la posición máxima del scroll
    if (scrollPosition >= maxScrollPosition) {
      if(this.api.loading) return; // Si está cargando no vuelve a hacer la petición para cargar más peliculas
      this.getMoviesByOption(this.navOptionSelected);
    }
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

  getTopRatedMovies(): void{
    this.api.getTopRatedMovies()
      .subscribe( movies => {
        this.movies.push(...movies); // Agrega las nuevas películas a la lista de películas
        this.shareMoviesService.shareMoviesObservableData = this.movies;// Actualiza la información del observable
      });
  }

  getTopPopularMovies(): void{
    this.api.getTopPopularMovies()
      .subscribe( movies => {
        this.movies.push(...movies); // Agrega las nuevas películas a la lista de películas
        this.shareMoviesService.shareMoviesObservableData = this.movies;// Actualiza la información del observable
      });
  }

  getMoviesInCinemas(): void{
    this.api.getMoviesInCinemas()
      .subscribe( movies => {
        this.movies.push(...movies); // Agrega las nuevas películas a la lista de películas
        this.shareMoviesService.shareMoviesObservableData = this.movies;// Actualiza la información del observable
      });
  }

  getUpcomingMovies(): void{
    this.api.getUpcomingMovies()
      .subscribe( movies => {
        this.movies.push(...movies); // Agrega las nuevas películas a la lista de películas
        this.shareMoviesService.shareMoviesObservableData = this.movies;// Actualiza la información del observable
      });
  }

  // Obtiene las películas más populares y almacena las primeras 4
  getPopularMovies(): void{
    this.api.getPopularMovies()
      .subscribe( movies => {
        this.popularMovies = [...movies.slice(0,4)];
      });
  }

  // Recibe la opción del navbar seleccionada por el usuario
  changeOption(optionSelected: string): void{
    this.navOptionSelected = optionSelected; // Asigna la nueva opción al atributo navOptionSelected para que se pueda usar en el scope del componente
    this.movies = []; // Limpia la lista de películas
    this.api.resetPages(); // Resetea el contador de páginas
    this.getMoviesByOption(this.navOptionSelected); // Obtiene las películas por la opción seleccionada
  }

  getMoviesByOption(option: string): void{
    switch (option) {
      case 'valoradas':
        this.getTopRatedMovies(); // Obtiene las películas más valoradas
        break;
      case 'populares':
        this.getTopPopularMovies(); // Obtiene las películas más populares
        break;
      case 'cines':
        this.getMoviesInCinemas(); // Obtiene las películas en cines
        break;
      case 'proximamente':
        this.getUpcomingMovies(); // Obtiene las películas que están a punto de estrenar
        break;
      default:
        this.getTopRatedMovies(); // Por defecto se obtiene las mejor valoradas
        break;
    }
  }

  ngOnDestroy(): void{
    this.api.resetPages();
  }
}
