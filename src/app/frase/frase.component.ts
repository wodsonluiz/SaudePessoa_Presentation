import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-frase',
  templateUrl: './frase.component.html',
  styleUrls: ['./frase.component.css']
})
export class FraseComponent implements OnInit {

  showConfig(){
    this.configService.get
  }
  constructor() { }

  ngOnInit() {
  }
}
