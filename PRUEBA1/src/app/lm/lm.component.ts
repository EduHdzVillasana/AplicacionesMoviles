import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import{ModalMatematicasComponent } from '../modal-matematicas/modal-matematicas.component'

@Component({
  selector: 'app-lm',
  templateUrl: './lm.component.html',
  styleUrls: ['./lm.component.scss'],
})
export class LmComponent implements OnInit {
  dataReturned:any;
  constructor(
    public modalController: ModalController
  ) { }

  async openModal() {
    const modal = await this.modalController.create({
      component: ModalMatematicasComponent,
      componentProps: {
        "paramTitle": "Campo de trabajo",
        "paramempleo1":"Industrias en el sector público o privado",
        "paramempleo2":"Docencia ",
        "paramempleo3":"Investigación",
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
