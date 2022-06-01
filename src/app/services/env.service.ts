// Servicio para la configuración del entorno de la aplicación
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EnvService {
  API_URL: string = 'https://api.themoviedb.org/3/movie/';// URL base de la API de themoviedb
  IMG_URL: string = 'https://image.tmdb.org/t/p/w342';// URL para obtener las imágenes
  api_key: string = '454daffd65d673762af542bc9a3298b6';// Key de acceso para la api de themoviedb

  API: string = 'http://localhost:3000/api';// URL base de la API manejo de usuarios
  constructor() { }
}
