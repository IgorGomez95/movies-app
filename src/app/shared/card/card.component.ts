import { Component, Input, OnInit } from '@angular/core';
import { Movie } from '../../interfaces/movies-response';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styles: [
  ]
})
export class CardComponent implements OnInit {
  @Input() movie!: Movie;

  constructor() {

  }

  ngOnInit(): void {
  }

}
