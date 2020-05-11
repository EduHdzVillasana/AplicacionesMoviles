import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-licenciaturas',
  templateUrl: './licenciaturas.component.html',
  styleUrls: ['./licenciaturas.component.scss'],
})
export class LicenciaturasComponent implements OnInit {
  licenciaturas:any 
  constructor( private route:Router,) {

    this.menulicenciaturas();
   }

  ngOnInit() {}
  menulicenciaturas(){
    this.licenciaturas=[
      {
        name: "Actuaria",
        image: '../../assets/actuaria.png',
        url:"la",
        color:"rgba(7, 55, 211, 0.829);",
      },
      {
        name: "Ciencias Computacionales",
        image: '../../assets/computacionales.png',
        url:"lcc"
      },
      {
        name: "Fisica",
        image: '../../assets/fisica.png',
        url:"lf"
      },
      {
        name: "Matematicas",
        image: '../../assets/matematicas.png',
        url:"lm"
      },
      {
        name: "Multimiedia y Animacion Digital",
        image: '../../assets/multimedia.png',
        url:"lmya"
      },
      {
        name: "Seguridad en Tecnologias de la Informacion",
        image: '../../assets/seguridad.png',
        url:"lsti"
      },
    ]
  }
  info(menu){
    this.route.navigate([menu.url]);
  }
 
}
