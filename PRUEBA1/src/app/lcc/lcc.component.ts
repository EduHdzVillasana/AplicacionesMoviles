import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalComputacionalesComponent } from '../modal-computacionales/modal-computacionales.component';

@Component({
  selector: 'app-lcc',
  templateUrl: './lcc.component.html',
  styleUrls: ['./lcc.component.scss'],
})
export class LccComponent implements OnInit {
  dataReturned:any;
  constructor(
    public modalController: ModalController
  ) { }
  async openModal() {
    const modal = await this.modalController.create({
      component: ModalComputacionalesComponent,
      componentProps: {
        "paramTitle": "Campo de trabajo",
        "paramempleo1":" Departamento de Sistemas",
        "paramempleo2":" Desarrollo de Software ",
        "paramempleo3":"Tecnologías de la Información ",
        "paramempleo4":"Soporte Tecnológico de instituciones públicas y privadas ",
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
