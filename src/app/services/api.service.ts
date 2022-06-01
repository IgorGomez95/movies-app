// Servicio encargado de realizar las peticiones a la API de themoviedb
// utilizando la librería HttpClient
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { EnvService } from './env.service';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    private http: HttpClient,
    private env: EnvService
  ) { }

  getPopularMovies(): Observable<any> {
    return  this.http.get(this.env.API_URL + 'popular', {params: {api_key: this.env.api_key, language: 'es-MX', page: '1'}});
  }
}
