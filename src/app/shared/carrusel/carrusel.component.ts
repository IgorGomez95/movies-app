import { Component, Input, OnInit } from '@angular/core';
import { Movie } from 'src/app/interfaces/movies-response';

@Component({
  selector: 'app-carrusel',
  templateUrl: './carrusel.component.html',
  styles: [
  ]
})
export class CarruselComponent implements OnInit {
  @Input() popularMovies: Movie[] = [];
  @Input() imgUrl: string = '';

  constructor(
  ) {
  }

  ngOnInit(): void {
  }



}
