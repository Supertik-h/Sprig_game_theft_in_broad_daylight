/*
@title: Theft_in_broad_daylight
@author: Julia Nadolska
@tags: []
@addedOn: 2024-00-00
*/

const player_fat = "1"
const player_thin = "2"
const prison_grate = "p"
const gold = "g"
const door_f = "d"
const door_t = "t"
const floor = "f"
const bed = "b"
const green = "e"
const red = "r"
const hole = "h"
const box = "x"
const lever_r = "l"
const lever_l = "v"
const police = "i"
const vision = "s"
const orange = "o"
const button = "n"
const secure_door = "@"
const card = "("

setLegend(
  [ player_fat, bitmap`
................
................
......6666......
......6756......
......6666......
....60000006....
....62222226....
....60000006....
.....222222.....
.....000000.....
......7755......
......7755......
................
................
................
................` ],
  [ player_thin, bitmap`
.......CC.......
......CCCC......
......6666......
......6756......
......6666......
.....600006.....
.....622226.....
.....600006.....
.....622226.....
.....600006.....
.....622226.....
......0000......
......7755......
......7755......
......7755......
......7755......` ],
  [ prison_grate, bitmap`
LLLLLLLLLLLLLLLL
L..L.L..L..L..LL
L.LL.L.LL..L.LLL
LLL..L.L..LL.L.L
LL...L.L..L..L.L
L...LL.L..L..L.L
L...L.LL.LL.LL.L
L..LL.L..L..L..L
L..L..L..L..L..L
L..L..L..L..L..L
L..L..L.LL..L..L
L.LL..L.L..LL..L
L.L..LL.L..L...L
L.L..L..L..L..LL
L.L..L..L..L.LLL
LLLLLLLLLLLLLLLL` ],
  [ box, bitmap`
................
................
................
...0000000000...
...0CCCCCCCC0...
...0C0CC0C0C0...
...0CCCCCCCC0...
...0C0CC0CCC0...
...0CCCCCCCC0...
...0CCC0CC0C0...
...0C0CCCCCC0...
...0CCCC0CCC0...
...0000000000...
................
................
................` ],
  [ gold, bitmap`
................
................
................
................
................
................
......FFF.......
.....FF6FF......
....FF666FF.....
....F66666F.....
....F66666F.....
....FFFFFFF.....
................
................
................
................` ],
  [ door_f, bitmap`
LLLLLLLLLLLLLLLL
L..L22.2.2.2..LL
L.LL22.2.2.2..LL
L.L.22.2.2.2.LLL
L.L.22.2.2.2.L.L
L.L.2222.2.2.L.L
L.L.2002.2.2.L.L
L.L.2202.2.2.L.L
L.L.2222.2.2.L.L
L.L.22.2.2.2.L.L
L.L.22.2.2.2.L.L
L.L.22.2.2.2LL.L
L.L.22.2.2.2L..L
LLL.22.2.2.2L..L
LL..22.2.2.2L.LL
LLLLLLLLLLLLLLLL` ],
  [ door_t, bitmap`
LLLLLLLLLLLLLLLL
L..L22.2.2.2..LL
L.LL22.2.2.2..LL
L.L.22.2.2.2.LLL
L.L.22.2.2.2.L.L
L.L.2222.2.2.L.L
L.L.2002.2.2.L.L
L.L.2202.2.2.L.L
L.L.2222.2.2.L.L
L.L.22.2.2.2.L.L
L.L.22.2.2.2.L.L
L.L.22.2.2.2LL.L
L.L.22.2.2.2L..L
LLL.22.2.2.2L..L
LL..22.2.2.2L..L
LLLLLLLLLLLLLLLL` ],
  [ floor, bitmap`
1111111111111111
1111111111111111
1111111111111111
1111111111111111
1111111111111111
1111111111111111
1111111111111111
1111111111111111
1111111111111111
1111111111111111
1111111111111111
1111111111111111
1111111111111111
1111111111111111
1111111111111111
1111111111111111` ],
  [ bed, bitmap`
................
................
................
................
................
.33333333332222.
.33333333332222.
.33333333332222.
.33333333332222.
.33333333332222.
.33333333332222.
.C............C.
.C............C.
................
................
................` ],
  [ green, bitmap`
................
................
..444444444444..
..444444444444..
..444444444444..
..444444444444..
..444444444444..
..444444444444..
..444444444444..
..444444444444..
..444444444444..
..444444444444..
..444444444444..
..444444444444..
................
................` ],
  [ red, bitmap`
................
................
..333333333333..
..333333333333..
..333333333333..
..333333333333..
..333333333333..
..333333333333..
..333333333333..
..333333333333..
..333333333333..
..333333333333..
..333333333333..
..333333333333..
................
................` ],
  [ hole, bitmap`
................
................
................
................
......LLLL......
.....LLL0LL.....
....LL000LLL....
....L00000LL....
....LL00000L....
.....LL0000L....
.....LL00LLL....
......LLLLL.....
................
................
................
................` ],
  
  [ lever_r, bitmap`
................
................
................
................
.........LL.....
........LLL.....
.......LLL......
.......LL.......
....CCCLLCCC....
....CCCCCCCC....
....CCCCCCCC....
................
................
................
................
................` ],
  [ lever_l, bitmap`
................
................
................
................
.....LL.........
.....LLL........
......LLL.......
.......LL.......
....CCCLLCCC....
....CCCCCCCC....
....CCCCCCCC....
................
................
................
................
................` ],
  [ police, bitmap`
.......35.......
......5555......
.....555555.....
......6666......
......6756......
......6666......
.....555555.....
.....555F55.....
.....655556.....
.....655556.....
......5555......
......7755......
......7755......
......7755......
......7755......
................` ],
  [ vision, bitmap`
1111111111111111
1222222222222221
1222222222222221
1222222222222221
1222222222222221
1222222222222221
1222222222222221
1222222222222221
1222222222222221
1222222222222221
1222222222222221
1222222222222221
1222222222222221
1222222222222221
1222222222222221
1111111111111111` ],
  [ orange, bitmap`
................
................
..999999999999..
..999999999999..
..999999999999..
..999999999999..
..999999999999..
..999999999999..
..999999999999..
..999999999999..
..999999999999..
..999999999999..
..999999999999..
..999999999999..
................
................` ],
  [ button, bitmap`
................
................
................
................
................
................
................
.....LLLLLL.....
.....LLLLLL.....
.....LLLLLL.....
................
................
................
................
................
................` ],
  [ secure_door, bitmap`
LLLLLLLLLLLLLLLL
L..L77777777..LL
L.LL77.7.7.7..LL
L.L.77.7.7.7.LLL
L.L.77.7.7.7.L.L
L.L.77777777.L.L
L.L.70077777.L.L
L.L.77077777.L.L
L.L.77777777.L.L
L.L.77.7.7.7.L.L
L.L.77.7.7.7.L.L
L.L.77.7.7.7LL.L
L.L.77777777L..L
LLL.77777777L..L
LL..77.7.7.7L..L
LLLLLLLLLLLLLLLL` ],
  [ card, bitmap`
................
................
................
................
................
................
.....DDDDDDD....
.....D44444D....
.....D44444D....
.....DDDDDDD....
................
................
................
................
................
................` ],
  
  
)

setSolids([player_fat, box, player_thin, prison_grate, door_t, door_f])

var score  = 0
var checker = 0
let level = 0
let is_door_t_open = 0
let is_door_f_open = 0


addText(`Score: ${score}`,{x: 9, y: 0, color: color`0`})

const levels = [
  map`
.1bp....
...p..g.
pdpp...h
........
........
..g.ptpp
....p.rb
e...p..2`,
  map`
..t..p..h
.gp..pg..
..p..pss.
.lp..pis.
dpp..pss.
12p..p...
grpg.p.ss
bbpx.d.si
pppo.p.ss`,
  map`
sisg..p..h
sss.r.d...
......p..g
.ppppppppp
.pg.bbp..g
.pl.12t.x.
.ppppppp..
.pngsipo..
.t..sspppd
np........`,
  map`

...12.dh.p.
.ppppdpppp.
.p....g....
.p.ppdpppp.
gp.p.....p.
.p.po..x.p.
.p.p.gpptp.
.p.pppp..p.
.p......lpg
.ppppppppp.
...........`,
  map`
hppppppsssp
.sss.ogsisp
.sis.x.sssp
.sss....tnp
gpppdsssp.p
.....sisp.p
tppppsssp.p
.sssppppp.p
lsisp.....p
.sssp...g.p
.......21.p`,
  map`
ph...p.....p
p....d.x..op
pppppp@ppppp
....op..(p..
.x...p...p..
.....p...p..
@ppdpppdpptp
.(p..p.....n
..p.(p.x...o
..p@pppppp@p
..p.lp..np..
12p..t...t.(`
]


setBackground("f")

let levelNumber = 0
setMap(levels[level])

setPushables({
  [  player_fat ]: [box],
  [  player_thin ]: [box]
})


/* fat player movement*/
onInput("s", () => {
  getFirst(player_fat).y += 1
})
onInput("w", () => {
  getFirst(player_fat).y -= 1
})
onInput("d", () => {
  getFirst(player_fat).x += 1
})
onInput("a", () => {
  getFirst(player_fat).x -= 1
})


/* thin player movement*/
onInput("k", () => {
  getFirst(player_thin).y += 1
})
onInput("i", () => {
  getFirst(player_thin).y -= 1
})
onInput("l", () => {
  getFirst(player_thin).x += 1
})
onInput("j", () => {
  getFirst(player_thin).x -= 1
})

/*
let originalSetSolids = setSolids;

let modifiedSetSolids = (arr, elementIndexToRemove) => {
  const modifiedArr = [...arr]; 
  modifiedArr.splice(elementIndexToRemove, 1); 
  originalSetSolids(modifiedArr); 
*/

afterInput(() => {

  let fato = getFirst(player_fat)
  let thino = getFirst(player_thin)
  let leverR = getFirst(lever_r);
  let leverL = getFirst(lever_l);
  let golds = getAll(gold)
  let cardo = getAll(card)
  
   if(is_door_t_open == 1){
    setSolids([player_fat, box,  player_thin, prison_grate, door_f, secure_door])
  }

  if(is_door_f_open == 1){
    setSolids([player_fat, box, player_thin, prison_grate, door_t, secure_door])
  }
  // opening the door using color 

  if(tilesWith(red, player_thin).length >= 1){
    setSolids([player_fat, box, player_thin, prison_grate, door_t, secure_door])
  }

  if(tilesWith(green, player_fat).length >= 1){
    setSolids([player_fat, box, player_thin, prison_grate, secure_door])
  }
  
  // lever interaction
  if(tilesWith(player_fat, lever_r).length >= 1){
    leverR.remove()
    addSprite(leverR.x, leverR.y, lever_l);
     let leverL = getFirst(lever_l);
    setSolids([player_fat, box, player_thin, prison_grate, door_f, secure_door])
   setTimeout(() => {
      leverL.remove(), setSolids([player_fat, box, player_thin, prison_grate, door_t, secure_door]), addSprite(leverR.x, leverR.y, lever_r);
  }, 8000);
   
  }
  if(tilesWith(player_thin, lever_r).length >= 1){
    leverR.remove()
    addSprite(leverR.x, leverR.y, lever_l);
     let leverL = getFirst(lever_l);
    setSolids([player_fat, box, player_thin, prison_grate, door_f,secure_door ])
   setTimeout(() => {
      leverL.remove(), setSolids([player_fat, box, player_thin, prison_grate, door_t, door_f, secure_door]), addSprite(leverR.x, leverR.y, lever_r);
  }, 8000);
   
  }
  // collecting gold
  for (let i = 0; i < golds.length; i++) {
    if (fato.x === golds[i].x && fato.y === golds[i].y) {
      golds[i].remove()
      score += 1;
      clearText()
      addText(`Score: ${score}`, { x: 0, y: 0, color: color`0` })

    }
  }
  for (let i = 0; i < golds.length; i++) {
    if (thino.x === golds[i].x && thino.y === golds[i].y) {
      golds[i].remove()
      score += 1;
      clearText()
      addText(`Score: ${score}`, { x: 9, y: 0, color: color`0` })

    }
  }

  if(tilesWith(box, orange).length >= 1){
    setSolids([player_fat, box, player_thin, prison_grate, door_t, secure_door])
    setTimeout(() => {
      setSolids([player_fat, box, player_thin, prison_grate, door_f, door_t, secure_door])
  }, 10000);
  }

  //button collison
  if(tilesWith(player_fat, button).length >= 1){
    setSolids([player_fat, box, player_thin, prison_grate, door_f, secure_door])
   setTimeout(() => {
      setSolids([player_fat, box, player_thin, prison_grate, door_t, door_f, secure_door])
  }, 8000);
  }
  if(tilesWith(player_thin, button).length >= 1){
    setSolids([player_fat, box, player_thin, prison_grate, door_f, secure_door])
   setTimeout(() => {
      setSolids([player_fat, box, player_thin, prison_grate, door_t, door_f, secure_door])
  }, 8000);
  }
  
  // collision with vision
  if(tilesWith(player_fat, vision).length >= 1){
    addText(`Game over`, { x: 5, y: 6, color: color`0` })
     getAll().forEach(sprite => {
    sprite.remove();
    });
  }

  if(tilesWith(player_thin, vision).length >= 1){
    addText(`Game over`, { x: 5, y: 6, color: color`0` })
     getAll().forEach(sprite => {
    sprite.remove();
    });
  }
  
  for (let i = 0; i < cardo.length; i++) {
    if (fato.x === cardo[i].x && fato.y === cardo[i].y) {
      cardo[i].remove()
      setSolids([player_fat, box, player_thin, prison_grate, door_t, door_f])
      setTimeout(() => {
      setSolids([player_fat, box, player_thin, prison_grate, door_t, door_f, secure_door])
  }, 8000);
    }
  }


  // jumping into the hole
  if(tilesWith(player_fat, hole).length >= 1){
    fato.remove()
    checker += 1
  }

  if(tilesWith(player_thin, hole).length >= 1){
    thino.remove()
    checker += 1
  }
  if(checker == 2){
    checker = 0
    levelNumber++
    setMap(levels[levelNumber])
    setSolids([player_fat, box, player_thin, prison_grate, door_t, door_f, secure_door])
  }
});
