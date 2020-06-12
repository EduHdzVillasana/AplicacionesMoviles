import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import{}from 'rxjs/observable/timer';
import { timer } from 'rxjs';
import { AndroidPermissions } from '@ionic-native/android-permissions/ngx';

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
    private statusBar: StatusBar,
    private androidPermissions: AndroidPermissions
  ) {
    this.sideMenu();
    this.initializeApp();
   
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.androidPermissions.requestPermissions([
        this.androidPermissions.PERMISSION.CAMERA,
        this.androidPermissions.PERMISSION.GET_ACCOUNTS,
        this.androidPermissions.PERMISSION.ACCESS_BACKGROUND_LOCATION,
        this.androidPermissions.PERMISSION.ACCESS_FINE_LOCATION,
        this.androidPermissions.PERMISSION.ACCESS_NETWORK_STATE,
        this.androidPermissions.PERMISSION.READ_PHONE_STATE,
        this.androidPermissions.PERMISSION.ACCESS_COARSE_LOCATION,
        this.androidPermissions.PERMISSION.ACCESS_NOTIFICATION_POLICY,
        this.androidPermissions.PERMISSION.ANSWER_PHONE_CALLS,
        this.androidPermissions.PERMISSION.CALL_PHONE,
        this.androidPermissions.PERMISSION.INTERNET

      ]);
      this.androidPermissions.checkPermission(this.androidPermissions.PERMISSION.CAMERA).then(
        result => console.log('Has permission?', result.hasPermission),
        err => this.androidPermissions.requestPermission(this.androidPermissions.PERMISSION.CAMERA)
      ); 
      this.sideMenu();
      this.statusBar.styleDefault();
      this.splashScreen.hide();
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
        title: "Solicitar Información",
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
