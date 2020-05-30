import { Component, OnInit } from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import {DomSanitizer} from '@angular/platform-browser';
 



@Component({
  selector: 'app-solicitar-inf',
  templateUrl: './solicitar-inf.component.html',
  styleUrls: ['./solicitar-inf.component.scss'],
})
export class SolicitarInfComponent implements OnInit {
  image: any = null;

  constructor(
    private camera: Camera,
    public _DomSanitizer: DomSanitizer,
  ) { }

  ngOnInit() {}
  
  
  async openCamera() {
    const options: CameraOptions = {
      quality: 30,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    };

    await this.camera.getPicture(options).then((imageData) => {
      // imageData is either a base64 encoded string or a file URI
      // If it's base64 (DATA_URL):
      
      const base64Image = 'data:image/jpeg;base64,' + imageData;
      // const base64Image = imageData;
      this.image = base64Image;
      console.log(this.image);
            }
            
        
    , (err) => {
      // Handle error
    });
  }

  PaisOptions: any = {
    header: 'Seleccionar pais'
  };
  LicenciaturasOptions: any = {
    header: 'Seleccionar licenciatura'
  };
  licenciaturas=[
    {
      name:"Actuaria"
    },
    {
      name:"Ciencias Computacionales"
    },
    {
      name:"Fisica"
    },
    {
      name:"Matematicas"
    },
    {
      name:"Multimedia y Animacion"
    },
    {
      name:"Seguridad en Tecnologia de la Informacion"
    },
  ]
  
  paises=[
    {
      name:"Afganistán"
    },
    {
      name:"Albania"
    },
    {
      name:"Alemania"
    },
    {
      name:"Andorra"
    },
    {
      name:"Angola"
    },
    {
      name:"Antigua y Barbuda"
    },
    {
      name:"Arabia Saudita"
    },
    {
      name:"Argelia"
    },
    {
      name:"Argentina"
    },
    {
      name:"Armenia"
    },
    {
      name:"Australia"
    },
    {
      name:"Austria"
    },
    {
      name:"Azerbaiyan"
    },
    {
      name:"Bahamas"
    },
    {
      name:"Banglandes"
    },
    {
      name:"Barbados"
    },
    {
      name:"Barein"
    },
    {
      name:"Belgica"
    },
    {
      name:"Belice"
    },
    {
      name:"Benin"
    },
    {
      name:"Bielorrusia"
    }, 
    {
      name:"Birmania"
    }, 
    {
      name:"Bolivia"
    }, 
    {
      name:"Bosnia y Herzegovina"
    }, 
    {
      name:"Botsuana"
    }, 
    {
      name:" Brasil"
    }, 
    {
      name:"Brunéi"
    }, 
    {
      name:"Bulgaria"
    }, 
    {
      name:" Burkina Faso"
    }, 
    {
      name:" Burundi"
    }, 
    {
      name:" Bután"
    }, 
    {
      name:"Cabo Verde"
    },
    {
      name:"Camboya"
    },
    {
      name:"Camerún"
    },
    {
      name:" Canadá"
    },
    {
      name:"Catar"
    },
    {
      name:"Chad"
    },
    {
      name:"Chile"
    },
    {
      name:"China"
    },
    {
      name:"Chipre"
    },
    {
      name:"Ciudad del Vaticano"
    },
    {
      name:"Colombia"
    },
    {
      name:"Comoras"
    },
    {
      name:"Corea del Norte"
    },
    {
      name:"Corea del Sur"
    },
    {
      name:"Costa de Marfil"
    },
    {
      name:"Costa Rica"
    },
    {
      name:"Croacia"
    },
    {
      name:"Cuba"
    },
    {
      name:"Dinamarca"
    },
    {
      name:"Dominica"
    },
    {
      name:"Ecuador"
    },
    {
      name:" Egipto"
    },
    {
      name:" El Salvador"
    },
    {
      name:"Emiratos Árabes Unidos"
    },
    {
      name:"Eritrea"
    },
    {
      name:"Eslovaquia"
    },
    {
      name:" España"
    },
    {
      name:" Estados Unidos"
    },
    {
      name:" Estonia"
    },
    {
      name:" Etiopía"
    },
    {
      name:" Filipinas"
    },
    {
      name:"Finlandia"
    },
    {
      name:"Fiyi"
    },
    {
      name:"Francia"
    },
    {
      name:" Gabón"
    },
    {
      name:"Gambia"
    },
    {
      name:"Georgia"
    },
    {
      name:"Ghana"
    },
    {
      name:" Granada"
    },
    {
      name:"Grecia"
    },
    {
      name:"Guatemala"
    },
    {
      name:" Guyana"
    },
    {
      name:"Guinea"
    },
    {
      name:" Guinea ecuatorial"
    },
    {
      name:"Guinea-Bisáu"
    },
    {
      name:"Haití"
    },
    {
      name:" Honduras"
    },
    {
      name:" India"
    },
    {
      name:"Indonesia"
    },
    {
      name:"Irak"
    },
    {
      name:"Irán"
    },
    {
      name:"Irlanda"
    },
    {
      name:"Islandia"
    },
    {
      name:"Islas Marshall"
    },
    {
      name:"Islas Salomón"
    },
    {
      name:"Israel"
    },
    {
      name:"Italia"
    },
    {
      name:"Jamaica"
    },
    {
      name:"Japón"
    },
    {
      name:"Jordania"
    },
    {
      name:"Kazajistán"
    },
    {
      name:"Kenia"
    },
    {
      name:"Kirguistán"
    },
    {
      name:"Kiribati"
    },
    {
      name:"Kuwait"
    },
    {
      name:"Laos"
    },
    {
      name:"Lesoto"
    },
    {
      name:"Letonia"
    },
    {
      name:"Líbano"
    },
    {
      name:"Liberia"
    },
    {
      name:"Libia"
    },
    {
      name:"Liechtenstein"
    },
    {
      name:"Lituania"
    },
    {
      name:"Luxemburgo"
    },
    {
      name:"Macedonia del Norte"
    },
    {
      name:"Madagascar"
    },
    {
      name:"Malasia"
    },
    {
      name:"Malaui"
    },
    {
      name:"Maldivas"
    },
    {
      name:"Malí"
    },
    {
      name:"Malta"
    },
    {
      name:"Marruecos"
    },
    {
      name:"Mauricio"
    },
    {
      name:"Mauritania"
    },
    {
      name:"México"
    },
    {
      name:"Micronesia"
    },
    {
      name:"Moldavia"
    },
    {
      name:" Mónaco"
    },
    {
      name:"Mongolia"
    },
    {
      name:"Montenegro"
    },
    {
      name:"Mozambique"
    },
    {
      name:"Namibia"
    },
    {
      name:"Nauru"
    },
    {
      name:"Nepal"
    },
    {
      name:"Nicaragua"
    },
    {
      name:"Níger"
    },
    {
      name:"Nigeria"
    },
    {
      name:"Noruega"
    },
    {
      name:"Nueva Zelanda"
    },
    {
      name:"Omán"
    },
    {
      name:"Países Bajos"
    },
    {
      name:"Pakistán"
    },
    {
      name:"Palaos"
    },
    {
      name:"Panamá"
    },
    {
      name:"Papúa Nueva Guinea"
    },
    {
      name:"Paraguay"
    },
    {
      name:"Perú"
    },
    {
      name:"Polonia"
    },
    {
      name:"Portugal"
    },
    {
      name:"Reino Unido"
    },
    {
      name:"República Centroafricana"
    },
    {
      name:"República Checa"
    },
    {
      name:"República del Congo"
    },
    {
      name:"República Democrática del Congo"
    },
    {
      name:"República Dominicana"
    },
    {
      name:"Ruanda"
    },
    {
      name:"Rumanía"
    },
    {
      name:"Rusia"
    },
    {
      name:"Samoa"
    },
    {
      name:"San Cristóbal y Nieves"
    },
    {
      name:"San Marino"
    },
    {
      name:"San Vicente y las Granadinas"
    },
    {
      name:"Santa Lucía"
    },
    {
      name:"Santo Tomé y Príncipe"
    },
    {
      name:"Senegal"
    },
    {
      name:"Serbia"
    },
    {
      name:"Seychelles"
    },
    {
      name:"Sierra Leona"
    },
    {
      name:"Singapur"
    },
    {
      name:"Siria"
    },
    {
      name:"Somalia"
    },
    {
      name:"Sri Lanka"
    },
    {
      name:"Suazilandia"
    },
    {
      name:"Sudáfrica"
    },
    {
      name:"Sudán"
    },
    {
      name:"Sudán del Sur"
    },
    {
      name:"Suecia"
    },
    {
      name:"Suiza"
    },
    {
      name:"Surinam"
    },
    {
      name:"SeyTailandiachelles"
    },
    {
      name:"Tanzania"
    },
    {
      name:"Tayikistán"
    },
    {
      name:"Timor Oriental"
    },
    {
      name:"Togo"
    },
    {
      name:"Tonga"
    },
    {
      name:"Trinidad y Tobago"
    },
    {
      name:"Túnez"
    },
    {
      name:"Turkmenistán"
    },
    {
      name:"Turquía"
    },
    {
      name:"Tuvalu"
    },
    {
      name:"Ucrania"
    },
    {
      name:"Uganda"
    },
    {
      name:"Uruguay"
    },
    {
      name:"Uzbekistán"
    },
    {
      name:"Vanuatu"
    },
    {
      name:"Venezuela"
    },
    {
      name:"Vietnam"
    },
    {
      name:"Yemen"
    },
    {
      name:"Yibuti"
    },
    {
      name:"Zambia"
    },
    {
      name:"Zimbabue"
    }
 



  ]

  
}
