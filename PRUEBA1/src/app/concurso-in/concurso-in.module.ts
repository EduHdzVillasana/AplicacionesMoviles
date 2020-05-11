import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ConcursoInComponent} from '../concurso-in/concurso-in.component';

@NgModule({
  imports: [
   
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: ConcursoInComponent
      },
    ])
  ],
  declarations: [ConcursoInComponent]
})
export class ConcursoInModule {}
