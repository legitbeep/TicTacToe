import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-square',
  template: `
      <!-- {{ rando }} -->
      <button style="height:100%;width:100%;" nbButton *ngIf="!value">{{ value }}</button>
      <button style="height:100%;width:100%;" nbButton hero status="success" *ngIf="value === 'X'">{{ value }}</button>
      <button style="height:100%;width:100%;" nbButton hero status="info" *ngIf="value === 'O'">{{ value }}</button>
  `,
  styles: [
  ]
})
export class SquareComponent {
   // declarations, logic, js stuff
   // ex
   // rando = Math.random();
   // set interval 
  //  constructor(){
  //    setInterval(() => {this.rando = Math.random()},1000)
  //  }

  @Input() value : "X" | "O" | null;
  constructor() {
    this.value = null;
  }
}
