import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import{ModalFisicaComponent} from '../modal-fisica/modal-fisica.component'

@Component({
  selector: 'app-lf',
  templateUrl: './lf.component.html',
  styleUrls: ['./lf.component.scss'],
})
export class LfComponent implements OnInit {
  dataReturned:any;
  constructor(
    public modalController: ModalController
  ) { }
  async openModal() {
    const modal = await this.modalController.create({
      component: ModalFisicaComponent,
      componentProps: {
        "paramTitle": "Campo de trabajo",
        "paramempleo1":"Industria y servicios",
        "paramempleo2":"Sector salud ",
        "paramempleo3":"Docencia",
        "paramempleo4":"Investigación ",
        
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
