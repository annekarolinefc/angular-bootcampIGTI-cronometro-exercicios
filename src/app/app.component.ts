import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  /**1º ESTADO: propriedade de controle BOOLEANA - AO A CONFIGURAÇÃO ESTA ABERTA OU NAO */
  config: boolean = false;
}
