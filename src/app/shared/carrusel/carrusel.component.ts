import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { EnvService } from 'src/app/services/env.service';

@Component({
  selector: 'app-carrusel',
  templateUrl: './carrusel.component.html',
  styles: [
  ]
})
export class CarruselComponent implements OnInit {
  popularMovies: any = [];
  imgUrl: string;

  constructor(
    private api: ApiService,
    private env: EnvService
  ) {
    this.imgUrl = this.env.IMG_URL;
  }

  ngOnInit(): void {
    this.getPopularMovies();
  }

  getPopularMovies():void{
    this.api.getPopularMovies()
      .subscribe(data => {
        this.popularMovies = data.results.slice(0,4);
        console.log(this.popularMovies);
      });
  }

}
