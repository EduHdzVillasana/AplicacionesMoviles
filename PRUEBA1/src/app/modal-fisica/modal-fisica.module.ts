import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ModalFisicaComponent} from '../modal-fisica/modal-fisica.component';

@NgModule({
  imports: [
   
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: ModalFisicaComponent
      },
    ])
  ],
  declarations: [ModalFisicaComponent]
})
export class ModalFisicaModule {}
