import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import{ModalLmyaComponent} from '../modal-lmya/modal-lmya.component'
@Component({
  selector: 'app-lmya',
  templateUrl: './lmya.component.html',
  styleUrls: ['./lmya.component.scss'],
})
export class LmyaComponent implements OnInit {
  dataReturned:any;
  constructor(
    public modalController: ModalController
  ) { }
  async openModal() {
    const modal = await this.modalController.create({
      component: ModalLmyaComponent,
      componentProps: {
        "paramTitle": "Campo de trabajo",
        "paramempleo1":"Diseño y producción de videojuegos.",
        "paramempleo2":"Animación y efectos especiales en cine y televisión. ",
        "paramempleo3":"Aplicaciones para la simulación de procesos industriales en tiempo real.",
        "paramempleo4":"Comercio Electrónico sobre WEB ",
        "paramempleo5":"Producción multimedia en diversos sectores.",
        "paramempleo6":"Desarrollo de hardware, software, aplicaciones científicas y de entretenimiento",
        "paramempleo7":"Sistemas de entretenimiento bajo entornos de realidad virtual",
        "paramempleo8":"Modelado por computadora",
        "paramempleo9":"Industria Cinematográfica",
        "paramempleo10":"Producción de comics animados",
      }
    });
 
    modal.onDidDismiss().then((dataReturned) => {
      if (dataReturned !== null) {
        this.dataReturned = dataReturned.data;
        //alert('Modal Sent Data :'+ dataReturned);
      }
    });
 
    return await modal.present();
  }

  ngOnInit() {}

}
