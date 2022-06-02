import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ShareMoviesService } from 'src/app/services/share-movies.service';
import { Movie } from '../../interfaces/movies-response';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styles: [
  ]
})
export class GridComponent implements OnInit {
  movies$: Observable<Movie[]>; //variable que recibe un observable por eso el signo de dolar
  constructor(
    shareMoviesService: ShareMoviesService //inicialización de dependencia sin tipo de accesibilidad ya que solo se usa en el constructor
  ) {
    this.movies$ = shareMoviesService.shareMoviesObservable; //se recibe el set de películas actualizados
  }

  ngOnInit(): void {
  }

}
