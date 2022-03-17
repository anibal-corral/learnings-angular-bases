import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Contador App';
  num:number=10;
base:number =5;

  sum(){
    this.num+=1;
  }
  sub(){
    this.num-=1;
  }
  accumulate(val:number){
    this.num+=val;
  }
}
