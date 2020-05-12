import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ComoLlegarComponent } from '../como-llegar/como-llegar.component';

@NgModule({
  imports: [
   
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: ComoLlegarComponent
      },
    ])
  ],
  declarations: [ComoLlegarComponent]
})
export class ComoLlegarModule {}
