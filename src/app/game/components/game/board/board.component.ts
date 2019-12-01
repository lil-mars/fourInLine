import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Cell } from '../../../../core/models/cell.model';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {
  cells: Cell[][];
  @Output() gameEnded = new EventEmitter<Cell>();
  @Output() playerEmitter = new EventEmitter<boolean>();

  playerTurn: boolean;
  clickSound = new Audio();

  constructor() {
    this.cells = [];
    this.clickSound.src = 'assets/sound/ring.mp3';
    this.playerTurn = true;
    this.playerEmitter.emit(this.playerTurn);

    for (let indexRow = 0; indexRow < 6; indexRow++) {
      this.cells[indexRow] = [];
      for (let indexCol = 0; indexCol < 7; indexCol++) {
        this.cells[indexRow][indexCol] = new Cell(indexRow, indexCol, null, false);
      }
    }
  }

  onSelectCell(cell) {
    this.clickSound.load();
    this.clickSound.play();
    const content = this.playerTurn ? 'plus' : 'minus';
    this.playerTurn = !this.playerTurn;
    this.playerEmitter.emit(this.playerTurn);
    this.fillColumn(cell, content);
    this.checkEndGame();

  }

  checkEndGame() {
    // Check if game is finished

    this.cells.forEach((row, indexRow, array) => {
      // console.log(row);
      // console.log('IndexRow' + indexRow);
      // console.log(array);
      row.forEach((cell, indexCol) => {
        if (cell.filled) {
          if (this.checkFourInLine(cell)) {
            setTimeout(() => {
              this.gameEnded.emit(cell);
            }, 200);
          }
        }
      });
    });
  }

  private checkFourInLine(cell) {
    const horizontalCondition = this.checkHorizontalCondition(cell);
    const verticalCondition = this.checkVerticalCondition(cell);
    const topDiagonal = this.checkTopDiagonal(cell);
    const bottomDiagonal = this.checkBottomDiagonal(cell);
    return horizontalCondition || verticalCondition || topDiagonal || bottomDiagonal;
  }

  private checkBottomDiagonal(cell) {
    const maxRowBound = cell.row + 4;
    const maxColsBound = cell.col - 4;
    if (maxRowBound > 6 || maxColsBound < 0) {
      return false;
    } else {
      let condition = true;
      let indexCol = cell.col;
      for (let indexRow = cell.row; indexRow < maxRowBound; indexRow++) {
        if (cell.content !== this.cells[indexRow][indexCol].content) {
          condition = false;
          break;
        }
        indexCol--;
      }
      return condition;
    }
  }

  private checkTopDiagonal(cell) {
    const maxRowBound = cell.row + 4;
    const maxColsBound = cell.col + 4;
    if (maxRowBound > 6 || maxColsBound > 7) {
      return false;
    } else {
      let condition = true;
      let indexCol = cell.col;
      for (let indexRow = cell.row; indexRow < maxRowBound; indexRow++) {
        if (cell.content !== this.cells[indexRow][indexCol].content) {
          condition = false;
          break;
        }
        indexCol++;
      }
      return condition;
    }
  }

  private checkVerticalCondition(cell) {
    // Check vertical condition to win
    const maxRowBound = cell.row + 4;
    if (maxRowBound > 6) {
      return false;
    } else {
      let condition = true;
      for (let indexRow = cell.row; indexRow < maxRowBound; indexRow++) {
        if (cell.content !== this.cells[indexRow][cell.col].content) {
          condition = false;
          break;
        }
      }
      return condition;
    }
  }

  private checkHorizontalCondition(cell) {
    // Check horizontal condition to win
    const maxColsBound = cell.col + 4;
    if (maxColsBound > 7) {
      return false;
    } else {
      let condition = true;
      for (let indexCol = cell.col; indexCol < maxColsBound; indexCol++) {
        if (cell.content !== this.cells[cell.row][indexCol].content) {
          condition = false;
          break;
        }
      }
      return condition;
    }
  }


  fillColumn(cell, content) {
    // Filling columns
    for (let indexRow = 5; indexRow >= 0; indexRow--) {
      // console.log(this.cells[indexRow][cell.col].filled);
      if (!this.cells[indexRow][cell.col].filled) {
        this.cells[indexRow][cell.col].filled = true;
        this.cells[indexRow][cell.col].content = content;
        break;
      }
    }
  }


  ngOnInit() {

  }
}

