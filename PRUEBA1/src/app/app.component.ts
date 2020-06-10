import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import{}from 'rxjs/observable/timer';
import { timer } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  Menu: any;
  showSplash=true;
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.sideMenu();
    this.initializeApp();
   
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.sideMenu();
      timer(5000).subscribe(()=>this.showSplash= false)
    });
  }
  sideMenu(){
    this.Menu=
    [
      {
        title: "FCFM",
        icon : "business", 
        url: "fcfm",
      },
      {
        title: "Licenciaturas",
        icon : "reader",
        url : "licenciaturas",
      },
      {
        title: "Concurso Ingreso",
        icon: "medal",  
        url:"concurso-in"      
      },
      {
        title: "Solicitar Informacion",
        icon : "help",
        url: "solicitar-inf"
      },
      {
        title: "¿Cómo llegar?",
        icon : "compass",
        url: "como-llegar"
      },
      {
        title: "Contacto",
        icon : "call-outline",
        url: "contacto"
      }

    ]
  }
}
