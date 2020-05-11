import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import{ModalLstiComponent} from '../modal-lsti/modal-lsti.component'
@Component({
  selector: 'app-lsti',
  templateUrl: './lsti.component.html',
  styleUrls: ['./lsti.component.scss'],
})
export class LstiComponent implements OnInit {
  dataReturned:any;
  constructor(
    public modalController: ModalController
  ) { }
  async openModal() {
    const modal = await this.modalController.create({
      component: ModalLstiComponent,
      componentProps: {
        "paramTitle": "Campo de trabajo",
        "paramempleo1":"Diseñador de software",
        "paramempleo2":"Seguridad Informática",
        "paramempleo3":"Administrador de Redes",
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
