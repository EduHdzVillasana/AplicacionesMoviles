import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ModalActuariaComponent} from '../modal-actuaria/modal-actuaria.component';

@NgModule({
  imports: [
   
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: ModalActuariaComponent
      },
    ])
  ],
  declarations: [ModalActuariaComponent]
})
export class ModalActuariaModule {}
