import { Component, OnInit } from '@angular/core';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';

@Component({
  selector: 'app-concurso-in',
  templateUrl: './concurso-in.component.html',
  styleUrls: ['./concurso-in.component.scss'],
})
export class ConcursoInComponent implements OnInit {

  constructor( private iab: InAppBrowser) {
   
   }

  ngOnInit() {}
  
  GoToIngreso(){
    this.iab.create('https://www.uanl.mx/tramites/concurso-de-ingreso-a-licenciatura/','_system');
  }
  //https://www.uanl.mx/wp-content/uploads/2020/01/Guia-EXANI-II-25a-edicion-2020.pdf
  GoToExani(){
    this.iab.create('https://www.uanl.mx/wp-content/uploads/2020/01/Guia-EXANI-II-25a-edicion-2020.pdf','_system');
  }


}
