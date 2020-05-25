
import{ModalLmyaComponent} from '../modal-lmya/modal-lmya.component'

import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalController, IonRange } from '@ionic/angular';
import {Howl} from 'howler';

/////////////////////////////////////////
export interface Track{//////////////////
  name: string;//////////////////////////
  path: string;//////////////////////////
}

@Component({
  selector: 'app-lmya',
  templateUrl: './lmya.component.html',
  styleUrls: ['./lmya.component.scss'],
})
export class LmyaComponent implements OnInit {
  
playlist: Track[]=[
  {
    name: 'Licenciatura en Multimedia y Animación Digital',
    path: 'assets/lmad.mp3'
  }
];

activeTrack: Track=null;
player: Howl=null;
isPlaying=false;
progress=0;
@ViewChild('range',{static:false})range:IonRange;
start(track:Track){
  if(this.player){
    this.player.stop();
  }
  this.player=new Howl({
    src:[track.path],
    html5:true,
    onplay: ()=>{
      console.log('onPlay');
      this.isPlaying=true;
      this.activeTrack=track;
      this.updateProgress();
    },
    onend: ()=>{
      console.log('onEnd');
    }
  });
  this.player.play();
}
tooglePlayer(pause){
  this.isPlaying=!pause;
  if(pause){
    this.player.pause();
  }else{
    this.player.play();
  }

}
seek(){
  let newValue=+this.range.value;
  let duration=this.player.duration();
  this.player.seek(duration*(newValue/100));
}
updateProgress(){
  let seek=this.player.seek();
  this.progress=(seek/this.player.duration())*100||0;
  setTimeout(()=>{
    this.updateProgress();
  },1000)
}

/////////////////////////////////////////////////////////
  dataReturned:any;
  constructor(
    public modalController: ModalController
  ) { }
  async openModal() {
    const modal = await this.modalController.create({
      component: ModalLmyaComponent,
      componentProps: {
        "paramTitle": "Campo de trabajo",
        "paramempleo1":"Diseño y producción de videojuegos.",
        "paramempleo2":"Animación y efectos especiales en cine y televisión. ",
        "paramempleo3":"Aplicaciones para la simulación de procesos industriales en tiempo real.",
        "paramempleo4":"Comercio Electrónico sobre WEB ",
        "paramempleo5":"Producción multimedia en diversos sectores.",
        "paramempleo6":"Desarrollo de hardware, software, aplicaciones científicas y de entretenimiento",
        "paramempleo7":"Sistemas de entretenimiento bajo entornos de realidad virtual",
        "paramempleo8":"Modelado por computadora",
        "paramempleo9":"Industria Cinematográfica",
        "paramempleo10":"Producción de comics animados",
      }
    });
 
    modal.onDidDismiss().then((dataReturned) => {
      if (dataReturned !== null) {
        this.dataReturned = dataReturned.data;
        //alert('Modal Sent Data :'+ dataReturned);
      }
    });
 
    return await modal.present();
  }

  ngOnInit() {}

}
