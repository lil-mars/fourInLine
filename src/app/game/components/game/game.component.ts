import { AfterViewInit, Component, ElementRef, OnInit } from '@angular/core';
import { Cell } from "../../../core/models/cell.model";

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit, AfterViewInit {
  winnerSound = new Audio();
  gameSound = new Audio();
  playerTurnOriginal: boolean;

  ngOnInit() {

    this.gameSound.load();
    this.gameSound.play();
  }

  constructor(
    private elementRef: ElementRef
  ) {
    this.playerTurnOriginal = true;
    this.gameSound.src = 'assets/sound/retro.mp3';
    this.winnerSound.src = 'assets/sound/cheer.mp3';
  }

  ngAfterViewInit() {
    // tslint:disable-next-line:max-line-length
    this.elementRef.nativeElement.ownerDocument.body.style.backgroundImage = 'https://png.pngtree.com/thumb_back/fw800/back_pic/03/51/65/225791ee54c627b.jpg';
  }

  getPlayerPlaying() {
    if (!this.playerTurnOriginal) {
      return 'Turno jugador celeste';
    } else {
      return 'Turno jugador amarillo';
    }
  }

  onGameEnd(cell) {
    this.winnerSound.load();
    this.winnerSound.play();
    const name = cell.content === 'plus' ? 'Amarillo' : 'Celeste';
    const color = cell.content === 'plus' ? 'yellow' : '#1b5a8f';
    const title = 'FELICIDADES !!!';
    const text = `El ganador es el jugador ${name}`;
    /* tslint: disable */
    Swal.fire({
      title,
      text,
      width: 490,
      color: 'red',
      height: 300,
      padding: '3em',
      confirmButtonText: 'Volver a Jugar',
      background: color,
      backdrop: `
        rgba(0,0,123,0.4)
        url("https://media1.tenor.com/images/9ac208d112c709a4980815f9f30ff6fc/tenor.gif?itemid=5665698")
        center top
        no-repeat        
      `,
    }).then((res) => {
      if (res) {
        window.location.reload();
      }
    });
  }

}
