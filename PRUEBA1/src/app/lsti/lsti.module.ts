import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { LstiComponent} from '../lsti/lsti.component';

@NgModule({
  imports: [
   
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: LstiComponent
      },
    ])
  ],
  declarations: [LstiComponent]
})
export class LstiModule {}
