import { Pipe, PipeTransform } from '@angular/core';
import { Lista } from '../models/lista.model';

@Pipe({
  name: 'filtroCompletado',
  pure: false //paraactualizar sin recargar pagina
})
export class FiltroCompletadoPipe implements PipeTransform {

  transform(listas: Lista[], completada: boolean = true): Lista[] {

    return listas.filter(lista=> lista.terminada === completada);
  }

}
