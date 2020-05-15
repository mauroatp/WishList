import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { DeseosService } from '../../services/deseos.service';
import { Router } from '@angular/router';
import { Lista } from '../../models/lista.model';
import { AlertController, IonList } from '@ionic/angular';

@Component({
  selector: 'app-listas',
  templateUrl: './listas.component.html',
  styleUrls: ['./listas.component.scss'],
})
export class ListasComponent implements OnInit {

@ViewChild('listaHtmlActualizar') listaDesdeHtml: IonList;//tomo e valor del ion-list para que cuando actualize se cierre el boton de editar// @ViewChild(IonList) busca el tipo sino # busca por la referencia en html
@Input() terminada = true; //se lo paso en html del tab

  constructor( public deseosService: DeseosService, //public para utilizarlo desde el html
                private router: Router,
                private alertCTrl: AlertController) { }

  ngOnInit() {}

  listaSeleccionada(lista: Lista){

    if(this.terminada)
      this.router.navigateByUrl(`tabs/tab2/agregar/${lista.id}`);
      else
      this.router.navigateByUrl(`tabs/tab1/agregar/${lista.id}`);
  }

  borrarLista(lista: Lista){
    this.deseosService.borrarLista(lista); 

  }

  async editarNombreLista(lista: Lista){

    const alert = await this.alertCTrl.create({
      header: 'Editar lista',
      //subHeader: 'Subtitle',
      //message: 'This is an alert message.',
      inputs: [{
        name: 'titulo',
        value: lista.titulo,
        type:'text',
        placeholder: 'Nombre de la lista'
      }],
      buttons: [
        {
        text:'Cancelar',
        role:'cancel',
        handler:()=>{
          console.log('se cierra con cacel');
        }
      },
        {
          text:'Actualizar',
          handler:(data)=>{
            console.log(data);
            if(data.titulo.length === 0){
              return;
            }
            lista.titulo = data.titulo;
            this.deseosService.guardarStorage();
            this.listaDesdeHtml.closeSlidingItems();
          }
        }
      ]
    });
  
     alert.present();

  }
}
