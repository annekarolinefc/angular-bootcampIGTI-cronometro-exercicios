import { Component } from '@angular/core';
import { Exercise } from './exercise';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  /**1º ESTADO: propriedade de controle BOOLEANA - AO A CONFIGURAÇÃO ESTA ABERTA OU NAO */
  config: boolean = false;
   /**Iniciando com um array vazio */
  exercises: Exercise[]=[{
    name: 'Abdominal',
    duration: 20,
    repetitions: 3,
    preparation: 15,
    rest:20,}
  ];
}
