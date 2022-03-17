import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {
heroes:string[] =['Goku', 'Vegeta', 'Trunks'];
deletedHeroe:string='';
  constructor() { }

  ngOnInit(): void {
  }
  deleteHeroe():void{
this.deletedHeroe = this.heroes.shift()||'';
  }

}
