import { from } from 'rxjs';
import { Movie } from "src/app/interfaces/movies-response";
import { ApiService } from "src/app/services/api.service";
import { HomeComponent } from "./home.component";
import { ShareMoviesService } from '../../services/share-movies.service';

describe('HomeComponent', () => {
  let component: HomeComponent; // Instancia del componente
  const apiService = new ApiService(null,null,null); // Instancia del servicio de la api
  const shareMoviesService = new ShareMoviesService(); // Instancia del servicio de compartir peliculas

  const Movies: Movie[] = [{
    "adult": false,
    "backdrop_path": "/7ucaMpXAmlIM24qZZ8uI9hCY0hm.jpg",
    "genre_ids": [
      14,
      12,
      28
    ],
    "id": 338953,
    "original_language": "en",
    "original_title": "Fantastic Beasts: The Secrets of Dumbledore",
    "overview": "Professor Albus Dumbledore knows ",
    "popularity": 6020.168,
    "poster_path": "/jrgifaYeUtTnaH7NF5Drkgjg2MB.jpg",
    "release_date": new Date(),
    "title": "Fantastic Beasts: The Secrets of Dumbledore",
    "video": false,
    "vote_average": 6.8,
    "vote_count": 1565,
    "isInWatchlist": false,
    "genres": [
      {
        "id": 14,
        "name": "Fantasy"
      }],
    "runtime": null,
    "success": true,
    "status": "Released"
  }];

  beforeEach(() => {
    component = new HomeComponent(apiService, shareMoviesService); // Crea una nueva instancia del componente antes de cada prueba
  });

  it('getPopularMovies debe de cargar películas populares', () => {
    spyOn(apiService, 'getPopularMovies').and.callFake(() => { // Llamada falsa a la api que retorna las peliculas
      return  from([Movies]);
    });
    component.getPopularMovies();
    expect(component.popularMovies.length).toBeGreaterThan(0); // Se espera que la longitud de las peliculas sea mayor a 0
  });

  it('getTopRatedMovies debe de cargar películas top rated', () => {
    spyOn(apiService, 'getTopRatedMovies').and.callFake(() => {
      return  from([Movies]);
    });
    component.getTopRatedMovies();
    expect(component.movies.length).toBeGreaterThan(0);
  });

  it('getTopPopularMovies debe de cargar películas top populares', () => {
    spyOn(apiService, 'getTopPopularMovies').and.callFake(() => {
      return  from([Movies]);
    });
    component.getTopPopularMovies();
    expect(component.movies.length).toBeGreaterThan(0);
  });

  it('getMoviesInCinemas debe de cargar películas en cines', () => {
    spyOn(apiService, 'getMoviesInCinemas').and.callFake(() => {
      return  from([Movies]);
    });
    component.getMoviesInCinemas();
    expect(component.movies.length).toBeGreaterThan(0);
  });

  it('getUpcomingMovies debe de cargar películas próximas en lanzarse', () => {
    spyOn(apiService, 'getUpcomingMovies').and.callFake(() => {
      return  from([Movies]);
    });
    component.getUpcomingMovies();
    expect(component.movies.length).toBeGreaterThan(0);
  });
});
