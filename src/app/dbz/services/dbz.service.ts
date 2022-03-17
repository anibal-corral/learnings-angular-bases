import { Injectable } from '@angular/core';
import { Character } from '../interfaces/dbz.interface';

@Injectable({
  providedIn: 'root'
})
export class DbzService {
  private _characters:Character[]=[
    {name:'Goku',power:700000},
    {name:'Vegeta', power:699999}
];

get characters():Character[]{

  return [...this._characters];//esto es para no pasar el arreglo por referencia
}
  constructor() {
console.log('DBZ Service Initialized');

   }

   addCharacter(c:Character):void{
     this._characters.push(c);
   }
}
