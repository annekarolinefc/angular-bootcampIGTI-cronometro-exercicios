import { TimerService } from './../timer.service';
import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})

export class TimerComponent implements OnInit, OnDestroy{
  //intervalo
interval: number;

constructor(public ts: TimerService){//INJETANDO O SERVIÇO

}
  ngOnDestroy() {
    this.pause();
  }

ngOnInit(): void {
  this.ts.restart();
}

formatPhase(phase: number){
  switch(phase){
    case 0: return "Preparação";
    case 1: return "Exercício";
    case 2: return "Descanso";
    default: return 'erro';
  };
}

start(){
  if(!this.interval){
    let lastTime = Date.now();
    this.interval = window.setInterval(()=>{
      let currentTime = Date.now();
      let ellapsedTime = currentTime - lastTime;
      lastTime = currentTime;
      this.ts.decrementeTimeLeft(ellapsedTime);
    }, 100);
  }
}

pause(){
  if(this.interval){
    clearInterval(this.interval);
    this.interval = undefined;
  }
}

restart(){
  this.ts.restart();
}

next(){
  this.ts.next();
}

}
