import { AfterViewInit, ElementRef, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GameRoutingModule } from './game-routing.module';
import { GameComponent } from './components/game/game.component';
import { BoardComponent } from './components/game/board/board.component';
import { CellComponent } from './components/game/board/cell/cell.component';
import { FormsModule } from "@angular/forms";

@NgModule({
  declarations: [
    GameComponent,
    BoardComponent,
    CellComponent
  ],
  imports: [
    CommonModule,
    GameRoutingModule,
    FormsModule
  ]
})
export class GameModule{

}
