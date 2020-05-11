import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';

@Component({
  selector: 'app-modal-lmya',
  templateUrl: './modal-lmya.component.html',
  styleUrls: ['./modal-lmya.component.scss'],
})
export class ModalLmyaComponent implements OnInit {
  modalTitle:string;
  modalempleo1:string;
  modalempleo2:string;
  modalempleo3:string;
  modalempleo4:string;
  modalempleo5:string;
  modalempleo6:string;
  modalempleo7:string;
  modalempleo8:string;
  modalempleo9:string;
  modalempleo10:string;

  constructor(
    private modalController: ModalController,
    private navParams: NavParams
  ) { }

  ngOnInit() {
    console.table(this.navParams);
    this.modalTitle = this.navParams.data.paramTitle;
    this.modalempleo1=this.navParams.data.paramempleo1;
    this.modalempleo2=this.navParams.data.paramempleo2;
    this.modalempleo3=this.navParams.data.paramempleo3;
    this.modalempleo4=this.navParams.data.paramempleo4;
    this.modalempleo5=this.navParams.data.paramempleo5;
    this.modalempleo6=this.navParams.data.paramempleo6;
    this.modalempleo7=this.navParams.data.paramempleo7;
    this.modalempleo8=this.navParams.data.paramempleo8;
    this.modalempleo9=this.navParams.data.paramempleo9;
    this.modalempleo10=this.navParams.data.paramempleo10;

  }
  async closeModal() {
    const onClosedData: string = "Wrapped Up!";
    await this.modalController.dismiss(onClosedData);
  }

}
