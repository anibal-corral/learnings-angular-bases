import { Component, Input, OnInit } from '@angular/core';
import { Character } from '../interfaces/dbz.interface';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit {

  @Input() characters:Character[]=[];

  constructor() { }

  ngOnInit(): void {
  }

}
