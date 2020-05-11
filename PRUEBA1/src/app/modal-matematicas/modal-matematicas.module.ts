import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ModalMatematicasComponent} from '../modal-matematicas/modal-matematicas.component';

@NgModule({
  imports: [
   
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: ModalMatematicasComponent
      },
    ])
  ],
  declarations: [ModalMatematicasComponent]
})
export class ModalMatematicasModule {}
