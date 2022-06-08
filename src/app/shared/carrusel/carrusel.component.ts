import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Movie } from 'src/app/interfaces/movies-response';

@Component({
  selector: 'app-carrusel',
  templateUrl: './carrusel.component.html',
  styleUrls: ['./carrusel.component.css']
})
export class CarruselComponent implements OnInit {
  @Input() popularMovies: Movie[] = [];// Se reciben las peliculas populares desde el componente padre home

  constructor(
    private router: Router
  ) {
  }

  ngOnInit(): void {
  }

  goToMovie(id: number) {
    this.router.navigate(['/movie', id]);
  }

}
