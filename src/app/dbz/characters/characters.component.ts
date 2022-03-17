import { Component, Input, OnInit } from '@angular/core';
import { Character } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit {

  // @Input() characters:Character[]=[];

  get characters():Character[]{
    return this.dbzService.characters;
  }

  constructor(private dbzService:DbzService) { }

  ngOnInit(): void {
  }

}
