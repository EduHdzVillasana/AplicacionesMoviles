import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ModalLmyaComponent} from '../modal-lmya/modal-lmya.component';

@NgModule({
  imports: [
   
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: ModalLmyaComponent
      },
    ])
  ],
  declarations: [ModalLmyaComponent]
})
export class ModalLmyaModule {}
