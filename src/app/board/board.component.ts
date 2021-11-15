import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {
  squares : any[];
  winner : "X" | "O" | null;
  player : "X" | "O";
  draw : boolean;

  constructor() {
    this.squares = Array(9).fill(null);
    this.winner = null;
    this.player = (Math.random() > 0.5) ? "X" : "O";
    this.draw = false;
  }

  ngOnInit(): void {
    this.newGame();
  }

  newGame () {
    this.squares = Array(9).fill(null);
    this.winner = null;
    this.player = (Math.random() > 0.5) ? "X" : "O";
    this.draw = false;
  }

  makeMove(idx: number){
    if (!this.squares[idx] && !this.winner && !this.draw){
      this.squares.splice(idx,1,this.player);
      
      this.winner = this.calcWinner();
      this.draw = this.checkDraw();
      if (this.player === "X") this.player = "O";
      else this.player = "X";

    }
  }

  checkDraw():boolean {
    for(let i = 0 ; i<this.squares.length; i++){
      if ( this.squares[i] == null) return false;
    }
    return true;
  }

  calcWinner(): "X" | "O" | null {
    const lines = [
      [0,1,2],
      [3,4,5],
      [6,7,8],
      [0,4,8],
      [2,4,6],
      [0,3,6],
      [1,4,7],
      [2,5,8],
    ]
    for(var line of lines){
      const [a,b,c] = line;
      if ( this.squares[a] && this.squares[a] === this.squares[b] && this.squares[b] === this.squares[c])
        return this.squares[a];
    }
    return null;
  }
}
