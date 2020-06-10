import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-fcfm',
  templateUrl: './fcfm.component.html',
  styleUrls: ['./fcfm.component.scss'],
})
export class FCFMComponent implements OnInit {

  constructor(private route:Router) { }

  ngOnInit() {}
  gotoContacto(){
    this.route.navigate(['contacto']);
  }
 
}
