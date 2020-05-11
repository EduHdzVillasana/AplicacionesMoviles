import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';

@Component({
  selector: 'app-modal-computacionales',
  templateUrl: './modal-computacionales.component.html',
  styleUrls: ['./modal-computacionales.component.scss'],
})
export class ModalComputacionalesComponent implements OnInit {
  modalTitle:string;
  modalempleo1:string;
  modalempleo2:string;
  modalempleo3:string;
  modalempleo4:string;
  constructor(
    private modalController: ModalController,
    private navParams: NavParams,
  ) { }

  ngOnInit() {
    console.table(this.navParams);
    this.modalTitle = this.navParams.data.paramTitle;
    this.modalempleo1=this.navParams.data.paramempleo1;
    this.modalempleo2=this.navParams.data.paramempleo1;
    this.modalempleo3=this.navParams.data.paramempleo1;
    this.modalempleo4=this.navParams.data.paramempleo1;
  }
  async closeModal() {
    const onClosedData: string = "Wrapped Up!";
    await this.modalController.dismiss(onClosedData);
  }

}
