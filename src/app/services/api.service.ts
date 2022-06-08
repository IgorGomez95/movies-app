// Servicio encargado de realizar las peticiones a la API de themoviedb
// utilizando la librería HttpClient
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { EnvService } from './env.service';

import { LocalStorageService } from './local-storage.service';

import { Movie, MoviesResponse } from '../interfaces/movies-response';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  topRatedPage = 1;
  topPopularPage = 1;
  inCinemasPage = 1;
  upcomingPage = 1;
  loading = false;

  constructor(
    private http: HttpClient,
    private env: EnvService,
    private localStorageService: LocalStorageService
  ) { }

  get params(){
    return {
      api_key: this.env.api_key,
      language: 'es-MX'
    }
  }


  resetPages(){
    this.topRatedPage = 1;
    this.topPopularPage = 1;
    this.inCinemasPage = 1;
    this.upcomingPage = 1;
  }

  getPopularMovies(): Observable<Movie[]> {
    return  this.http.get<MoviesResponse>(`${ this.env.API_URL }movie/popular`, { params: this.params }).pipe(
      map( resp => resp.results )
    );
  }

  getTopRatedMovies(): Observable<Movie[]> {
    if( this.loading ) return of([]);
    this.loading = true;
    return this.http.get<MoviesResponse>(`${ this.env.API_URL }movie/top_rated`, { params: {...this.params, page: this.topRatedPage} }).pipe(
      map( resp =>  { // map para transformar el objeto MoviesResponse para retornar sólo el arreglo de peliculas
        resp.results = this.checkMoviesInWatchlist(resp.results);
        return resp.results
      }),
      tap( () => { // tap es un operador que se ejecuta despues de que se ejecuta el observable
        this.topRatedPage++;
        this.loading = false;
      })
    );
  }

  getTopPopularMovies(): Observable<Movie[]> {
    if( this.loading ) return of([]);
    this.loading = true;
    return  this.http.get<MoviesResponse>(`${ this.env.API_URL }movie/popular`, { params: {...this.params, page: this.topPopularPage} }).pipe(
      map( resp =>  {
        resp.results = this.checkMoviesInWatchlist(resp.results);
        return resp.results
      }),
      tap( () => {
        this.topPopularPage++;
        this.loading = false;
      })
    );
  }

  getMoviesInCinemas(): Observable<Movie[]> {
    if( this.loading ) return of([]);
    this.loading = true;
    return  this.http.get<MoviesResponse>(`${ this.env.API_URL }movie/now_playing`, { params: {...this.params, page: this.inCinemasPage} }).pipe(
      map( resp =>  {
        resp.results = this.checkMoviesInWatchlist(resp.results);
        return resp.results
      }),
      tap( () => {
        this.inCinemasPage++;
        this.loading = false;
      })
    );
  }

  getUpcomingMovies(): Observable<Movie[]> {
    if( this.loading ) return of([]);
    this.loading = true;
    return  this.http.get<MoviesResponse>(`${ this.env.API_URL }movie/upcoming`, { params: {...this.params, page: this.upcomingPage} }).pipe(
      map( resp =>  {
        resp.results = this.checkMoviesInWatchlist(resp.results);
        return resp.results
      }),
      tap( () => {
        this.upcomingPage++;
        this.loading = false;
      })
    );
  }

  // Método para obtener la información de una pelicula por id
  getMovieDetails(id: number): Observable<Movie> {
    return this.http.get<Movie>(`${ this.env.API_URL }movie/${ id }`, { params: this.params }).pipe(
      map( movie => {
        this.localStorageService.existsMovie(movie.id).then( exists => { // Checa si la pelicula ya esta en la watchlist
          movie.isInWatchlist = exists; // Se asigna el resultado true o false
        });
        return movie;
      }),
      catchError( err => of(null)) // Si hay un error se retorna un observable vacio
    );
  }

  // Método que recibe un arreglo de peliculas y checa si estan en la watchlist
  checkMoviesInWatchlist(movies: Movie[]): Movie[] {
    movies.map( async movie => {
      const exists = await this.localStorageService.existsMovie(movie.id);
      exists ? movie.isInWatchlist = true : movie.isInWatchlist = false;
    });
    return movies;
  }
}
