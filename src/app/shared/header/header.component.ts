import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: [
  ]
})
export class HeaderComponent implements OnInit {
  showMenu = false;
  toggleNavbar(){
    this.showMenu = !this.showMenu;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
