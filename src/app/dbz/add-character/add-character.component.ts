import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Character } from '../interfaces/dbz.interface';

@Component({
  selector: 'app-add-character',
  templateUrl: './add-character.component.html',
  styleUrls: ['./add-character.component.css']
})
export class AddCharacterComponent implements OnInit {
  // @Input() characters:Character[]=[];
  @Input() newCharacter:Character={name:'',power:0}; 
 @Output() onNewCharacter: EventEmitter<Character> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
      }
      addCharacter():void{
        if(this.newCharacter.name.trim().length===0) return;
        console.table(this.newCharacter);
        this.onNewCharacter.emit(this.newCharacter);
        this.initializeCharacter();
        
    
      }
      initializeCharacter():void{
        this.newCharacter.name='';
        this.newCharacter.power=0;
      }

}
