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
        name: "Actuaría",
        image: '../../assets/actuaria.png',
        url:"la",
        color:"rgba(7, 55, 211, 0.829);",
        voz:"lcc.mp3"
      },
      {
        name: "Ciencias Computacionales",
        image: '../../assets/computacionales.png',
        url:"lcc",
        voz:"../../assets/lcc.mp3"
      },
      {
        name: "Física",
        image: '../../assets/fisica.png',
        url:"lf",
        voz:"lcc.mp3"
      },
      {
        name: "Matemáticas",
        image: '../../assets/matematicas.png',
        url:"lm",
        voz:"lcc.mp3"
      },
      {
        name: "Multimedia y Animación Digital",
        image: '../../assets/multimedia.png',
        url:"lmya",
        voz:"lcc.mp3"
      },
      {
        name: "Seguridad en Tecnologías de la Información",
        image: '../../assets/seguridad.png',
        url:"lsti",
        voz:"lcc.mp3"
      },
    ]
  }
  info(menu){
    this.route.navigate([menu.url]);
  }
   
  reproducir(lic)
  {
    
    console.log(lic);
    let reproducir=new Audio();
    reproducir.src=lic.voz;
    reproducir.load()
    reproducir.play()

}
}
