import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ModalComputacionalesComponent} from '../modal-computacionales/modal-computacionales.component';

@NgModule({
  imports: [
   
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: ModalComputacionalesComponent
      },
    ])
  ],
  declarations: [ModalComputacionalesComponent]
})
export class ModalComputacionalesModule {}
