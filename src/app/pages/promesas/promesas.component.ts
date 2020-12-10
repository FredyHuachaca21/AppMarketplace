import { Component, OnInit } from '@angular/core';
import { ReplaySubject } from 'rxjs';

@Component({
  selector: 'app-promesas',
  templateUrl: './promesas.component.html',
  styleUrls: ['./promesas.component.css']
})
export class PromesasComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    
    this.getUsuarios().then(usuarios =>{
      console.log(usuarios);
    });
    // const promesa = new Promise((resolve, reject)=>{
    //   if(false){
    //     resolve('hola munfo');
    //   }else{
    //     reject('Algo salió mal');
    //   }
    // });
    
    // promesa.then((mensaje)=>{
    //   console.log(mensaje);
    // })
    // .catch(error => console.log('Error en mi promesa', error));
    
    // console.log('fin del init');
  }

  getUsuarios(){

    const promesa = new Promise(resolve =>{
      fetch('https://reqres.in/api/users')
      .then(resp=> resp.json())
      .then(body => resolve(body.data));
    });
    return promesa;
  }

}
