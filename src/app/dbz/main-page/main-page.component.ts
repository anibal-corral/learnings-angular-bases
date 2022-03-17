import { Component, OnInit } from '@angular/core';
import { Character } from '../interfaces/dbz.interface';



@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {
  
  characters:Character[]=[
    {name:'Goku',power:700000},
    {name:'Vegeta', power:699999}
];
newCharacter:Character ={name:'Roshi', power:3000}
  constructor() { }

  ngOnInit(): void {
  }

  addNewCharacter(newCharacter:Character){

    // console.log('Main page component');
    // console.log('New Character', newCharacter);
    this.characters.push({...newCharacter});
    
  }
  
  
 
}
