import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { retry } from "rxjs/operators";

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styleUrls: ['./rxjs.component.css']
})
export class RxjsComponent  {

  constructor() { 
    

    this.retorbaObservable().pipe(
      retry(1)
    )
    .subscribe(
      valor => console.log('Subs:', valor),
      error => console.warn('Error', error),
      ()=> console.info('Obs terminado')
    );

  }

  retorbaObservable(): Observable<number> {
    let i = -1;
    
   return  new Observable<number>(observer =>{

      const intervalo =  setInterval(()=>{
        i++;
        observer.next(i);

        if(i === 5){
            clearInterval(intervalo);
            observer.complete();
        }

        if(i ===2){
          i=0
          observer.error(' i llegó al valor de 2');
        }
      }, 1000)
      
    });

  }


}
