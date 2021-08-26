import { TimerService } from './../timer.service';
import { Component, Input  } from '@angular/core';
import { Exercise } from '../exercise';


@Component({
  selector: 'app-config',
  templateUrl: './config.component.html',
  styleUrls: ['./config.component.css']
})
export class ConfigComponent {

  /**Padrão: A configuração é um array de exercicíos */
  exercise: Exercise ={
    name: "",
    duration: 30,
    repetitions: 3,
    preparation: 15,
    rest: 30,
  }
  constructor(public ts: TimerService) { }

  add(){
    this.ts.add(this.exercise);
    this.exercise = {...this.exercise, name: ''}
  }

  delete(i:number){
    this.ts.delete(i);
  }

}
