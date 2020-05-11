import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { LAComponent } from '../la/la.component';

@NgModule({
  imports: [
   
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component:LAComponent
      },
    ])
  ],
  declarations: [LAComponent]
})
export class LAModule {}
