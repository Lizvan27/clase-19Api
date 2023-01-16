import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-detalles',
  templateUrl: './detalles.component.html'
})
export class DetallesComponent {
  escribirPokemon: string = '';

  constructor(private router:Router){}

  buscar(){
    if(this.escribirPokemon.trim().length === 0){
      return;
    }
    this.router.navigate()
  }

}
