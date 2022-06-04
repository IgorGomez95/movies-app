import { Component, Input, OnInit } from '@angular/core';
import { Movie } from 'src/app/interfaces/movies-response';

@Component({
  selector: 'app-carrusel',
  templateUrl: './carrusel.component.html',
  styleUrls: ['./carrusel.component.css']
})
export class CarruselComponent implements OnInit {
  @Input() popularMovies: Movie[] = [];// Se reciben las peliculas populares desde el componente padre home

  constructor(
  ) {
  }

  ngOnInit(): void {
  }



}
