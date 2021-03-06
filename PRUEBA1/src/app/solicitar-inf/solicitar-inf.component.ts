import { Component, OnInit } from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import {DomSanitizer} from '@angular/platform-browser';
import { EmailComposer } from '@ionic-native/email-composer/ngx';

@Component({
  selector: 'app-solicitar-inf',
  templateUrl: './solicitar-inf.component.html',
  styleUrls: ['./solicitar-inf.component.scss'],
})
export class SolicitarInfComponent implements OnInit {
  image: any = null;
  Nombre="";
  Apellidos="";
  Pais="";
  Ciudad="";
  Telefono="";
  Correo="";
  Licenciatura="";
  Descripcion="";
 

  constructor(
    private camera: Camera,
    public _DomSanitizer: DomSanitizer,
    private emailComposer: EmailComposer

  ) { }

  ngOnInit() {}
  
  async openCamera() {
    const options: CameraOptions = {
      quality: 30,
      destinationType: this.camera.DestinationType.FILE_URI,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    };

    await this.camera.getPicture(options).then((imageData) => {
      // imageData is either a base64 encoded string or a file URI
      // If it's base64 (DATA_URL):
      
      // const base64Image = 'data:image/jpeg;base64,' + imageData;
      // const base64Image = imageData;
      this.image = imageData;
      // console.log(this.image);
      //       }
        
    }, (err) => {
      // console.log('Image error: ', err);
      // Handle error
    });
  }
  sendmail() {
    this.emailComposer.isAvailable().then((available: boolean) =>{
      if(available) {
        //Now we know we can send
      }
     });
     var strbody="<body style='margin: 0; padding: 0;'>" +
     "<table border='1' cellpadding='0' cellspacing='0' width='100%'>"  +
     "<tr><td>Nombre:" + this.Nombre + " " + this.Apellidos + "</td></tr><br>" +
     "<tr><td>País:" + this.Pais + " " + "</td></tr><br>" +
     "<tr><td> Ciudad:" + this.Ciudad + " " + "</td></tr><br>" +
     "<tr><td> Telefono:" + this.Telefono + " " + "</td></tr><br>" +
     "<tr><td> Correo:" + this.Correo + " " + "</td></tr><br>" +
     "<tr><td> Licenciatura:" + this.Licenciatura + " " + "</td></tr><br>" +
     "<tr><td> Descripcion de su duda:" + this.Descripcion + " " + "</td></tr><br>" +
     "</table></body>";
     let email = {
       to: 'fcfmpruebas1@gmail.com',
       cc: 'destinydelafuente@hotmail.com',
       attachments: [
          this.image
       ],
       subject:'Solicitar información',
       body: strbody,
       isHtml: true
     }
     
     // Send a text message using default options
     this.emailComposer.open(email);
  }

  PaisOptions: any = {
    header: 'Seleccionar país'
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
      name:"Física"
    },
    {
      name:"Matemáticas"
    },
    {
      name:"Multimedia y Animación"
    },
    {
      name:"Seguridad en Tecnología de la Información"
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
