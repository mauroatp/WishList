import { NgModule } from '@angular/core';
import { FiltroCompletadoPipe } from './filtro-completado.pipe';



@NgModule({
  declarations: [FiltroCompletadoPipe],
  exports: [FiltroCompletadoPipe]//exporto e pipes para utilizarlo desde los tabs
})
export class PipesModule { }
