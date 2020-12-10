import { Component} from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.css']
})
export class ProgressComponent{

  progreso1: number = 25;
  progreso2: number = 35;
  progreso3: number = 45;

  getProgreso1(){
    return `${this.progreso1}%`;
  }
  getProgreso2(){
    return `${this.progreso2}%`;
  }
  getProgreso3(){
    return `${this.progreso3}%`;
  }

  // cambioValorHijo(valor: number){
  //   console.log('hey', valor);
  // }

}
