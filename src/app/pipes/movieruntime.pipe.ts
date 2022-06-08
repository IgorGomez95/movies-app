import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'movieruntime'
})
export class MovieruntimePipe implements PipeTransform {

  /**
    * Pipe para mostrar la duración de una película en formato de horas y minutos
    * @param {number} runtime duración de una película en minutos.
    * @return {string} regresa la duración de una película en formato de horas y minutos.
  */
  transform(runtime: number): string {
    if(runtime < 60) return `${runtime} min`;	// Si la duración es menor a 60 minutos, se regresa la duración en minutos
    const hours = Math.floor(runtime / 60);	// Se divide la duración en minutos por 60 para obtener la cantidad de horas
    const minutes = runtime % 60;	// Se obtiene la cantidad de minutos restantes
    return `${hours} h ${minutes} min`;	// Se regresa la duración en formato de horas y minutos
  }

}
