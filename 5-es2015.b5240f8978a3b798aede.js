(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{rZCR:function(l,n,u){"use strict";u.r(n);var e=u("8Y7J");class t{}var o=u("pMnS"),r=u("SVse");class c{constructor(){this.selectedCell=new e.m}clickedCell(l){this.selectedCell.emit(l)}ngOnInit(){}}var i=e.mb({encapsulation:0,styles:[[".item[_ngcontent-%COMP%]{border:3px solid red;display:table-cell}.btn-white[_ngcontent-%COMP%]{opacity:.5;filter:alpha(opacity=50)}.cell[_ngcontent-%COMP%]{width:100%;height:116px}.bg-bluesky[_ngcontent-%COMP%]{background-color:#2b9095}.bg-yellow[_ngcontent-%COMP%]{background-color:#cca627}"]],data:{}});function a(l){return e.Ab(0,[(l()(),e.ob(0,0,null,null,0,"button",[["class","btn btn-danger bg-transparent cell"]],null,[[null,"click"]],(function(l,n,u){var e=!0,t=l.component;return"click"===n&&(e=!1!==t.clickedCell(t.cell)&&e),e}),null,null))],null,null)}function s(l){return e.Ab(0,[(l()(),e.ob(0,0,null,null,0,"button",[["class","btn btn-warning bg-yellow cell"]],null,[[null,"click"]],(function(l,n,u){var e=!0,t=l.component;return"click"===n&&(e=!1!==t.clickedCell(t.cell)&&e),e}),null,null))],null,null)}function b(l){return e.Ab(0,[(l()(),e.ob(0,0,null,null,0,"button",[["class","btn btn-secondary bg-bluesky cell"]],null,[[null,"click"]],(function(l,n,u){var e=!0,t=l.component;return"click"===n&&(e=!1!==t.clickedCell(t.cell)&&e),e}),null,null))],null,null)}function d(l){return e.Ab(0,[(l()(),e.db(16777216,null,null,1,null,a)),e.nb(1,16384,null,0,r.i,[e.L,e.I],{ngIf:[0,"ngIf"]},null),(l()(),e.db(16777216,null,null,1,null,s)),e.nb(3,16384,null,0,r.i,[e.L,e.I],{ngIf:[0,"ngIf"]},null),(l()(),e.db(16777216,null,null,1,null,b)),e.nb(5,16384,null,0,r.i,[e.L,e.I],{ngIf:[0,"ngIf"]},null)],(function(l,n){var u=n.component;l(n,1,0,!u.cell.filled),l(n,3,0,u.cell.filled&&"plus"===u.cell.content),l(n,5,0,u.cell.filled&&"minus"===u.cell.content)}),null)}class g{constructor(l,n,u,e){this.row=l,this.col=n,this.content=u,this.filled=e}}class h{constructor(){this.gameEnded=new e.m,this.playerEmitter=new e.m,this.clickSound=new Audio,this.cells=[],this.clickSound.src="assets/sound/ring.mp3",this.playerTurn=!0,this.playerEmitter.emit(this.playerTurn);for(let l=0;l<6;l++){this.cells[l]=[];for(let n=0;n<7;n++)this.cells[l][n]=new g(l,n,null,!1)}}onSelectCell(l){console.log(l);const n=this.playerTurn?"plus":"minus";this.playerTurn=!this.playerTurn,this.playerEmitter.emit(this.playerTurn),this.fillColumn(l,n),this.checkEndGame(),console.log(this.playerTurn),"Player vs AI"!==this.gameMode||this.playerTurn||(this.automaticMove(),this.clickSound.load(),this.clickSound.play())}automaticMove(){const l=Math.floor(7*Math.random()),n=Math.floor(6*Math.random()),u=new g(n,l,null,!1);this.onSelectCell(u)}checkEndGame(){this.cells.forEach((l,n,u)=>{l.forEach((l,n)=>{l.filled&&this.checkFourInLine(l)&&setTimeout(()=>{this.gameEnded.emit(l)},200)})})}checkFourInLine(l){const n=this.checkHorizontalCondition(l),u=this.checkVerticalCondition(l),e=this.checkTopDiagonal(l),t=this.checkBottomDiagonal(l);return n||u||e||t}checkBottomDiagonal(l){const n=l.row+4;if(n>6||l.col-4<0)return!1;{let u=!0,e=l.col;for(let t=l.row;t<n;t++){if(l.content!==this.cells[t][e].content){u=!1;break}e--}return u}}checkTopDiagonal(l){const n=l.row+4;if(n>6||l.col+4>7)return!1;{let u=!0,e=l.col;for(let t=l.row;t<n;t++){if(l.content!==this.cells[t][e].content){u=!1;break}e++}return u}}checkVerticalCondition(l){const n=l.row+4;if(n>6)return!1;{let u=!0;for(let e=l.row;e<n;e++)if(l.content!==this.cells[e][l.col].content){u=!1;break}return u}}checkHorizontalCondition(l){const n=l.col+4;if(n>7)return!1;{let u=!0;for(let e=l.col;e<n;e++)if(l.content!==this.cells[l.row][e].content){u=!1;break}return u}}fillColumn(l,n){for(let u=5;u>=0;u--)if(!this.cells[u][l.col].filled){this.cells[u][l.col].filled=!0,this.cells[u][l.col].content=n;break}}ngOnInit(){}}var m=e.mb({encapsulation:0,styles:[[""]],data:{}});function p(l){return e.Ab(0,[(l()(),e.ob(0,0,null,null,2,"td",[["align","center"]],null,null,null,null,null)),(l()(),e.ob(1,0,null,null,1,"app-cell",[],null,[[null,"selectedCell"]],(function(l,n,u){var e=!0;return"selectedCell"===n&&(e=!1!==l.component.onSelectCell(u)&&e),e}),d,i)),e.nb(2,114688,null,0,c,[],{cell:[0,"cell"]},{selectedCell:"selectedCell"})],(function(l,n){l(n,2,0,n.context.$implicit)}),null)}function f(l){return e.Ab(0,[(l()(),e.ob(0,0,null,null,2,"tr",[],null,null,null,null,null)),(l()(),e.db(16777216,null,null,1,null,p)),e.nb(2,278528,null,0,r.h,[e.L,e.I,e.q],{ngForOf:[0,"ngForOf"]},null)],(function(l,n){l(n,2,0,n.context.$implicit)}),null)}function y(l){return e.Ab(0,[(l()(),e.ob(0,0,null,null,2,"table",[["class",""],["style","border: 3px solid black ; width: 100%; min-height: 700px"]],null,null,null,null,null)),(l()(),e.db(16777216,null,null,1,null,f)),e.nb(2,278528,null,0,r.h,[e.L,e.I,e.q],{ngForOf:[0,"ngForOf"]},null)],(function(l,n){l(n,2,0,n.component.cells)}),null)}class k{constructor(l){this.elementRef=l,this.winnerSound=new Audio,this.gameSound=new Audio,this.gameMode=null,this.playerTurnOriginal=!0,this.gameSound.src="assets/sound/retro.mp3",this.winnerSound.src="assets/sound/cheer.mp3"}ngOnInit(){}onChangeGameMode(l){this.gameMode=l}ngAfterViewInit(){this.elementRef.nativeElement.ownerDocument.body.style.backgroundImage="https://png.pngtree.com/thumb_back/fw800/back_pic/03/51/65/225791ee54c627b.jpg"}getPlayerPlaying(){return this.playerTurnOriginal?"Turno jugador amarillo":"Turno jugador celeste"}onGameEnd(l){this.winnerSound.load(),this.winnerSound.play(),Swal.fire({title:"FELICIDADES !!!",text:"El ganador es el jugador "+("plus"===l.content?"Amarillo":"Celeste"),width:490,color:"red",height:300,padding:"3em",confirmButtonText:"Volver a Jugar",background:"plus"===l.content?"yellow":"#1b5a8f",backdrop:'\n        rgba(0,0,123,0.4)\n        url("https://media1.tenor.com/images/9ac208d112c709a4980815f9f30ff6fc/tenor.gif?itemid=5665698")\n        center top\n        no-repeat        \n      '}).then(l=>{l&&window.location.reload()})}playSound(){this.gameSound.load(),this.gameSound.play()}}var w=e.mb({encapsulation:0,styles:[["body[_ngcontent-%COMP%]{background-color:red}"]],data:{}});function v(l){return e.Ab(0,[(l()(),e.ob(0,0,null,null,17,"div",[],null,null,null,null,null)),(l()(),e.ob(1,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),e.ob(2,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),e.ob(3,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),e.ob(4,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),e.ob(5,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),e.ob(6,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),e.ob(7,0,null,null,1,"h1",[["class","display-4 text-danger"]],null,null,null,null,null)),(l()(),e.zb(-1,null,["Selecciona el modo de Juego:"])),(l()(),e.ob(9,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),e.ob(10,0,null,null,7,"div",[["class","row"]],null,null,null,null,null)),(l()(),e.ob(11,0,null,null,3,"div",[["class","col-6 offset-3 "]],null,null,null,null,null)),(l()(),e.ob(12,0,null,null,1,"button",[["class","text-center btn btn-outline-danger  btn-lg btn-block"],["type","button"]],null,[[null,"click"]],(function(l,n,u){var e=!0;return"click"===n&&(e=!1!==l.component.onChangeGameMode("Player vs player")&&e),e}),null,null)),(l()(),e.zb(-1,null,[" Jugador VS Jugador "])),(l()(),e.ob(14,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),e.ob(15,0,null,null,2,"div",[["class","col-6 offset-3 "]],null,null,null,null,null)),(l()(),e.ob(16,0,null,null,1,"button",[["class","text-center btn btn-outline-danger  btn-lg btn-block"],["type","button"]],null,[[null,"click"]],(function(l,n,u){var e=!0;return"click"===n&&(e=!1!==l.component.onChangeGameMode("Player vs AI")&&e),e}),null,null)),(l()(),e.zb(-1,null,[" Jugador VS Maquina "]))],null,null)}function E(l){return e.Ab(0,[(l()(),e.ob(0,0,null,null,7,"div",[],null,null,null,null,null)),(l()(),e.ob(1,0,null,null,4,"div",[],null,null,null,null,null)),(l()(),e.ob(2,0,null,null,1,"h1",[["class","display-4 text-danger"]],null,null,null,null,null)),(l()(),e.zb(3,null,["",""])),(l()(),e.ob(4,0,null,null,1,"app-board",[],null,[[null,"playerEmitter"],[null,"gameEnded"]],(function(l,n,u){var e=!0,t=l.component;return"playerEmitter"===n&&(e=!1!==(t.playerTurnOriginal=u)&&e),"gameEnded"===n&&(e=!1!==t.onGameEnd(u)&&e),e}),y,m)),e.nb(5,114688,null,0,h,[],{gameMode:[0,"gameMode"]},{gameEnded:"gameEnded",playerEmitter:"playerEmitter"}),(l()(),e.ob(6,0,null,null,1,"h1",[["align","center"]],[[2,"text-warning",null],[2,"text-primary",null]],null,null,null,null)),(l()(),e.zb(7,null,["",""]))],(function(l,n){l(n,5,0,n.component.gameMode)}),(function(l,n){var u=n.component;l(n,3,0,u.gameMode),l(n,6,0,u.playerTurnOriginal,!u.playerTurnOriginal),l(n,7,0,u.getPlayerPlaying())}))}function C(l){return e.Ab(0,[(l()(),e.ob(0,0,null,null,7,"div",[],null,null,null,null,null)),(l()(),e.ob(1,0,null,null,4,"div",[],null,null,null,null,null)),(l()(),e.ob(2,0,null,null,1,"h1",[["class","display-4 text-danger"]],null,null,null,null,null)),(l()(),e.zb(3,null,["",""])),(l()(),e.ob(4,0,null,null,1,"app-board",[],null,[[null,"playerEmitter"],[null,"gameEnded"]],(function(l,n,u){var e=!0,t=l.component;return"playerEmitter"===n&&(e=!1!==(t.playerTurnOriginal=u)&&e),"gameEnded"===n&&(e=!1!==t.onGameEnd(u)&&e),e}),y,m)),e.nb(5,114688,null,0,h,[],{gameMode:[0,"gameMode"]},{gameEnded:"gameEnded",playerEmitter:"playerEmitter"}),(l()(),e.ob(6,0,null,null,1,"h1",[["align","center"]],[[2,"text-warning",null],[2,"text-primary",null]],null,null,null,null)),(l()(),e.zb(7,null,["",""]))],(function(l,n){l(n,5,0,n.component.gameMode)}),(function(l,n){var u=n.component;l(n,3,0,u.gameMode),l(n,6,0,u.playerTurnOriginal,!u.playerTurnOriginal),l(n,7,0,u.getPlayerPlaying())}))}function I(l){return e.Ab(0,[(l()(),e.ob(0,0,null,null,16,"div",[["class",""]],null,null,null,null,null)),(l()(),e.ob(1,0,null,null,3,"h1",[["align","center"],["class","display-4 text-white"]],null,null,null,null,null)),(l()(),e.zb(-1,null,["4 EN LINEA BY: "])),(l()(),e.ob(3,0,null,null,1,"a",[["href","https://github.com/x-lil-peep-x"],["style","color: greenyellow"],["target","_blank"]],null,null,null,null,null)),(l()(),e.zb(-1,null,["ET"])),(l()(),e.ob(5,0,null,null,11,"div",[["class","container"]],null,null,null,null,null)),(l()(),e.ob(6,0,null,null,4,"div",[["class","row"]],null,null,null,null,null)),(l()(),e.ob(7,0,null,null,3,"div",[["class","col-2 offset-5"]],null,[[null,"click"]],(function(l,n,u){var e=!0;return"click"===n&&(e=!1!==l.component.playSound()&&e),e}),null,null)),(l()(),e.ob(8,0,null,null,2,"button",[["class","btn btn-outline-warning"]],null,null,null,null,null)),(l()(),e.zb(-1,null,[" Musica "])),(l()(),e.ob(10,0,null,null,0,"i",[["class","fa fa-music"]],null,null,null,null,null)),(l()(),e.db(16777216,null,null,1,null,v)),e.nb(12,16384,null,0,r.i,[e.L,e.I],{ngIf:[0,"ngIf"]},null),(l()(),e.db(16777216,null,null,1,null,E)),e.nb(14,16384,null,0,r.i,[e.L,e.I],{ngIf:[0,"ngIf"]},null),(l()(),e.db(16777216,null,null,1,null,C)),e.nb(16,16384,null,0,r.i,[e.L,e.I],{ngIf:[0,"ngIf"]},null)],(function(l,n){var u=n.component;l(n,12,0,null===u.gameMode),l(n,14,0,"Player vs AI"===u.gameMode),l(n,16,0,"Player vs player"===u.gameMode)}),null)}function M(l){return e.Ab(0,[(l()(),e.ob(0,0,null,null,1,"app-game",[],null,null,null,I,w)),e.nb(1,4308992,null,0,k,[e.k],null,null)],(function(l,n){l(n,1,0)}),null)}var x=e.kb("app-game",k,M,{},{},[]);u("cUpR"),u("HDdC"),u("DH7j"),u("EY2u"),u("ZUHj"),u("l7GE"),u("lJxs"),u("Cfvw");class S{constructor(){this._accessors=[]}add(l,n){this._accessors.push([l,n])}remove(l){for(let n=this._accessors.length-1;n>=0;--n)if(this._accessors[n][1]===l)return void this._accessors.splice(n,1)}select(l){this._accessors.forEach(n=>{this._isSameGroup(n,l)&&n[1]!==l&&n[1].fireUncheck(l.value)})}_isSameGroup(l,n){return!!l[0].control&&l[0]._parent===n._control._parent&&l[1].name===n.name}}const T=new e.o("NgFormSelectorWarning");class A{}class O{static withConfig(l){return{ngModule:O,providers:[{provide:T,useValue:l.warnOnDeprecatedNgFormSelector}]}}}var _=u("iInd");class P{}u.d(n,"GameModuleNgFactory",(function(){return z}));var z=e.lb(t,[],(function(l){return e.wb([e.xb(512,e.j,e.W,[[8,[o.a,x]],[3,e.j],e.v]),e.xb(4608,r.k,r.j,[e.s,[2,r.q]]),e.xb(4608,S,S,[]),e.xb(1073742336,r.b,r.b,[]),e.xb(1073742336,_.l,_.l,[[2,_.q],[2,_.k]]),e.xb(1073742336,P,P,[]),e.xb(1073742336,A,A,[]),e.xb(1073742336,O,O,[]),e.xb(1073742336,t,t,[]),e.xb(1024,_.i,(function(){return[[{path:"",component:k,children:[]}]]}),[])])}))}}]);