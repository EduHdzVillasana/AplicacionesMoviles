import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { LicenciaturasComponent } from '../licenciaturas/licenciaturas.component';

@NgModule({
  imports: [
   
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: LicenciaturasComponent
      },
    ])
  ],
  declarations: [LicenciaturasComponent]
})
export class LicenciaturasModule {}
