import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css']
})
export class HeroeComponent implements OnInit {
name:string = 'Batman';
age:number=45;
  constructor() { }

  ngOnInit(): void {
  }
  getName():string{
    return `${this.name} -  ${this.age}`;
  }

  get nameCapitalized(){
    return this.name.toUpperCase();
  }

  changeName():void{
    this.name='Thor';
  }
  changeAge():void{
    this.age=30;
  }

}
