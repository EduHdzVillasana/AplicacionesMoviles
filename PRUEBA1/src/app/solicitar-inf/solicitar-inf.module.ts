import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import {SolicitarInfComponent} from '../solicitar-inf/solicitar-inf.component';

@NgModule({
  imports: [
   
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: SolicitarInfComponent
      },
    ])
  ],
  declarations: [SolicitarInfComponent]
})
export class SolicitarInfModule {}
