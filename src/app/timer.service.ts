import {Injectable, Input} from '@angular/core';
import { Exercise } from './exercise';

@Injectable({
  providedIn:'root'
})

export class TimerService{

  //array de exercicios
  exercises: Exercise[]=[{
      name: 'Abdominal',
      duration: 20,
      repetitions: 3,
      preparation: 15,
      rest:20,
  }];
  //estado atual do cronometro
  //exercicio atual
  currentEx: number;
  //repetiçao atual
  currentRep: number;
  //fase atual
  phase: number;
  //tempo atual
  timeLeft: number;

  restart(){
    this.currentEx= 0;
    this.currentRep= 0;
    this.phase = 0;
    this.timeLeft = this.getTimeOfCurrentPhase();
    }

    decrementeTimeLeft(){
      if(this.timeLeft > 0){
        this.timeLeft++;
    } else{
      this.next()
    }
    }

  next(){
    if(this.phase<2){
      this.phase++;

    } else {
      const ex = this.exercises[this.currentEx]
      if (this.currentRep<ex.repetitions-1){
        this.currentRep++;
        this.phase=1
      } else {
        if(this.currentEx<this.exercises.length-1){
          this.currentEx++;
          this.currentRep=0;
          this.phase=0;
        }else{
        console.log("olá");
        //
        }
      }
    }
    this.timeLeft = this.getTimeOfCurrentPhase();
 }

  private getTimeOfCurrentPhase(){
    const ex = this.exercises[this.currentEx];
    switch(this.phase){
      case 0: return ex.preparation*10;
      case 1: return ex.duration*10;
      case 2: return ex.rest*10;
    }
  }


  add(exercise: Exercise){
    this.exercises.push(exercise);
    }

  delete(i: number){
    this.exercises.splice(i, 1)
  }

}
