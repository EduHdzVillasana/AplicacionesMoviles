import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalActuariaComponent} from '../modal-actuaria/modal-actuaria.component';



@Component({
  selector: 'app-la',
  templateUrl: './la.component.html',
  styleUrls: ['./la.component.scss'],
})
export class LAComponent implements OnInit {
  dataReturned:any;
  constructor(
    public modalController: ModalController
  ) { }

  async openModal() {
    const modal = await this.modalController.create({
      component: ModalActuariaComponent,
      componentProps: {
        "paramTitle": "Campo de trabajo",
        "paramempleo1":"Compañías aseguradoras",
        "paramempleo2":"Empresas del sector financiero ",
        "paramempleo3":"Empresas del sector Industrial",
        "paramempleo4":"Despachos de consultoría actuarial ",
        "paramempleo5":"Universidades e Instituciones Tecnológicas de educación media-superior y superior ",
        "paramempleo6":"Institutos de Investigación y Divulgación de la ciencia ",
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
