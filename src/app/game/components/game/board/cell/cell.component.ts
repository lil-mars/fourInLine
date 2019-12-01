import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Cell } from '../../../../../core/models/cell.model';

@Component({
  selector: 'app-cell',
  templateUrl: './cell.component.html',
  styleUrls: ['./cell.component.css']
})
export class CellComponent implements OnInit {
  @Input() cell: Cell;
  @Output() selectedCell = new EventEmitter<Cell>();
  constructor() {
  }

  clickedCell(cell: Cell) {
    this.selectedCell.emit(cell);
  }

  ngOnInit() {

  }

}
