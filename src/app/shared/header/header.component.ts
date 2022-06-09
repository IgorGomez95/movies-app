import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  search(term: string): void {
    term = term.trim();
    if(term.length === 0){
      return;
    }
    this.router.navigate(['/search', term]);
  }

}
