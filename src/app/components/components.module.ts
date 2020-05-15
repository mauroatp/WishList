import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListasComponent } from './listas/listas.component';
import { IonicModule } from '@ionic/angular';
import { PipesModule } from '../pipes/pipes.module';



@NgModule({
  declarations: [
    ListasComponent //agrego la lista
  ],
  exports: [ //agrego el exports
    ListasComponent
  ],
  imports: [
    CommonModule,
    IonicModule, //agrego esto para reutilizar el codigo ionic
    PipesModule
  ]
})
export class ComponentsModule { }
