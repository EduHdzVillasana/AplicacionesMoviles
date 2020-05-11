import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ModalLstiComponent} from '../modal-lsti/modal-lsti.component';

@NgModule({
  imports: [
   
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component:ModalLstiComponent
      },
    ])
  ],
  declarations: [ModalLstiComponent]
})
export class ModalLstiModule {}
