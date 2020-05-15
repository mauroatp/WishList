import { Component } from '@angular/core';
import { DeseosService } from '../../services/deseos.service';
import { Router, ActivatedRoute } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {



  constructor(public deseosService: DeseosService,
              private router: Router,
              private alertCTrl: AlertController,
              private route: ActivatedRoute) {

  }

async agregarLista(){
  
  const alert = await this.alertCTrl.create({
    header: 'Nueva lista',
    //subHeader: 'Subtitle',
    //message: 'This is an alert message.',
    inputs: [{
      name: 'titulo',
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
        text:'Crear',
        handler:(data)=>{
          console.log(data);
          if(data.titulo.length === 0){
            return;
          }
          const id = this.deseosService.crearListas( data.titulo);

          this.router.navigateByUrl(`tabs/tab1/agregar/${id}`);
        }
      }
    ]
  });

   alert.present();
}



}
