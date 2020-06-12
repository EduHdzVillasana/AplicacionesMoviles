import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { Camera } from '@ionic-native/camera/ngx';
import { CameraMock } from '../app/solicitar-inf/camera.mock';
import {ModalActuariaModule} from './modal-actuaria/modal-actuaria.module';
import {ModalComputacionalesModule} from './modal-computacionales/modal-computacionales.module';
import{ModalFisicaModule} from './modal-fisica/modal-fisica.module'
import{ModalLmyaModule}from './modal-lmya/modal-lmya.module'
import{ModalLstiModule} from './modal-lsti/modal-lsti.module'
import{ModalMatematicasModule} from './modal-matematicas/modal-matematicas.module';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { EmailComposer } from '@ionic-native/email-composer/ngx';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { NativeGeocoder } from '@ionic-native/native-geocoder/ngx';
import { AndroidPermissions } from '@ionic-native/android-permissions/ngx';


@NgModule({
  declarations: [
    AppComponent,
  ],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,ModalActuariaModule,ModalComputacionalesModule,ModalFisicaModule,ModalLmyaModule,
    ModalLstiModule,ModalMatematicasModule,
    ],
  providers: [
    StatusBar,
    SplashScreen,
    Camera,
    EmailComposer,
    Geolocation,
    NativeGeocoder,
    AndroidPermissions,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    // {provide: Camera, useClass: CameraMock},
    InAppBrowser,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
