import { Component, EventEmitter, Input, Output } from '@angular/core';
import { navOption } from 'src/app/interfaces/nav-options';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent{
  @Input() navOptions: navOption[] = [];
  @Output() navOptionSelected = new EventEmitter<string>();
  constructor() { }

  // Cambia el estado de la opción seleccionada a true y de las demás a false
  changeOption(opt: navOption): void{
    if( !opt.isActive){
      this.navOptions.forEach( option => {
        option.option === opt.option ? option.isActive = true : option.isActive = false;
      });
      this.navOptionSelected.emit(opt.option);
    }
  }

}
