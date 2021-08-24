import { Component, OnInit } from '@angular/core';
import { Exercise } from '../exercise';

@Component({
  selector: 'app-config',
  templateUrl: './config.component.html',
  styleUrls: ['./config.component.css']
})
export class ConfigComponent {
  /**Iniciando com um array vazio */
  exercises: Exercise[]=[];

  /**Padrão: A configuração é um array de exercicíos */
  exercise: Exercise ={
    name: "",
    duration: 30,
    repetitions: 3,
    preparation: 15,
    rest: 30,
  }
  constructor() { }

  add(){
    this.exercises.push(this.exercise);
    this.exercise = {...this.exercise, name: ''};
  }
  delete(i: number){
    this.exercises.splice(i, 1)
  }

}
