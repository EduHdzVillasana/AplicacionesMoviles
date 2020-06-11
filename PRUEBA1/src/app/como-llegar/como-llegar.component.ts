import { Component, OnInit } from '@angular/core';// sin el oninit
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { NativeGeocoder, NativeGeocoderOptions, NativeGeocoderResult } from '@ionic-native/native-geocoder/ngx';
import { LoadingController } from '@ionic/angular';//

declare var google;//

@Component({
  selector: 'app-como-llegar',
  templateUrl: './como-llegar.component.html',
  styleUrls: ['./como-llegar.component.scss'],
})
export class ComoLlegarComponent implements OnInit {

  address: string;

  // Location coordinates
  latitude: number;
  longitude: number;
  accuracy: number;

  mapRef = null;//
  //Geocoder configuration
  geoencoderOptions: NativeGeocoderOptions = {
    useLocale: true,
    maxResults: 5
  };

  //RUTAS
  directionsService = new google.maps.DirectionsService();
  directionsDisplay = new google.maps.DirectionsRenderer();
  constructor(
    private geolocation: Geolocation,
    private nativeGeocoder: NativeGeocoder,
    private loadingCtrl: LoadingController //
  ) {
    //this.getGeolocation(); Lo quite para implementar el del video
  }
  public async getLocation() {
    const rta = await this.geolocation.getCurrentPosition();

    this.latitude = rta.coords.latitude;
    this.longitude = rta.coords.longitude;


    return {
      lat: rta.coords.latitude,
      lng: rta.coords.longitude
    }
      ;
  }
  ngOnInit() {
    this.loadMap();
  }
  async loadMap() {
    const loading = await this.loadingCtrl.create();
    loading.present();
    const myLatLng = await this.getLocation();
    const mapEle: HTMLElement = document.getElementById('map');
    const indicatorsEle: HTMLElement = document.getElementById('indicators');
    this.mapRef = new google.maps.Map(mapEle,
      {
        center: myLatLng,
        zoom: 12
      });

    //RUTAS
    this.directionsDisplay.setMap(this.mapRef);
    this.directionsDisplay.setPanel(indicatorsEle);
    google.maps.event.addListenerOnce(this.mapRef, 'idle', () => {
      loading.dismiss();
      this.addMaker(myLatLng.lat, myLatLng.lng);
      this.addMaker(25.725695, -100.315135)
      this.calculateRoute(myLatLng.lat, myLatLng.lng);
    });

  }


  //ruta facu

  destination = { lat: 25.725695, lng: -100.315135 };
  origin = this.getLocation();
  private calculateRoute(lat: number, lng: number) {
    this.directionsService.route({

      origin: { lat, lng },
      destination: this.destination,
      travelMode: google.maps.TravelMode.DRIVING,
    }, (response, status) => {
      if (status === google.maps.DirectionsStatus.OK) {
        this.directionsDisplay.setDirections(response);
      } else {
        alert('Could not display directions due to: ' + status);
      }
    });
  }

  private addMaker(lat: number, lng: number) {
    const marker = new google.maps.Marker({
      position: { lat, lng },
      map: this.mapRef,
      title: 'Hello World!'
    });
  }

}
