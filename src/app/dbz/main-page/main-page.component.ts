import { Component, OnInit } from '@angular/core';
import { Character } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';



@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {
  // characters:Character[]=[];

newCharacter:Character ={name:'Roshi', power:3000};

// get characters():Character[]{
//   return this.dbzService.characters;
// }
  constructor(private dbzService:DbzService) {
// //Cuando se construya este componente entonces va a buscar los datos desde el service.
// this.characters = this.dbzService.characters;

   }

  ngOnInit(): void {
  }

  // addNewCharacter(newCharacter:Character){

  //   // console.log('Main page component');
  //   // console.log('New Character', newCharacter);
  //   // this.dbzService.characters.push({...newCharacter});
  //   this.characters.push({...newCharacter});
  // }
  
  
 
}
