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
  
  
)

setSolids([player_fat, box, player_thin, prison_grate, door_t, door_f])

var score  = 0
var checker = 0
let level = 0
let is_door_t_open = 0
let is_door_f_open = 0

addText(`Score: ${score}`,{x: 10, y: 0, color: color`0`})

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
pppo.p.ss`
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
  
   if(is_door_t_open == 1){
    setSolids([player_fat, box,  player_thin, prison_grate, door_f])
  }

  if(is_door_f_open == 1){
    setSolids([player_fat, box, player_thin, prison_grate, door_t])
  }

  if(tilesWith(red, player_thin).length >= 1){
    setSolids([player_fat, box, player_thin, prison_grate, door_t])
  }

  if(tilesWith(green, player_fat).length >= 1){
    setSolids([player_fat, box, player_thin, prison_grate])
  }
  
  if(tilesWith(player_fat, lever_r).length >= 1){
    leverR.remove()
    addSprite(leverR.x, leverR.y, lever_l);
     let leverL = getFirst(lever_l);
    setSolids([player_fat, box, player_thin, prison_grate])
   setTimeout(() => {
      leverL.remove(), setSolids([player_fat, box, player_thin, prison_grate, door_t]), addSprite(leverR.x, leverR.y, lever_r);
  }, 7000);
   
  }
  if(tilesWith(player_thin, lever_r).length >= 1){
    leverR.remove()
    addSprite(leverR.x, leverR.y, lever_l);
     let leverL = getFirst(lever_l);
    setSolids([player_fat, box, player_thin, prison_grate])
   setTimeout(() => {
      leverL.remove(), setSolids([player_fat, box, player_thin, prison_grate, door_t]), addSprite(leverR.x, leverR.y, lever_r);
  }, 6000);
   
  }
  
  for (let i = 0; i < golds.length; i++) {
    if (fato.x === golds[i].x && fato.y === golds[i].y) {
      golds[i].remove()
      score += 1;
      clearText()
      addText(`Score: ${score}`, { x: 10, y: 0, color: color`0` })

    }
  }
  for (let i = 0; i < golds.length; i++) {
    if (thino.x === golds[i].x && thino.y === golds[i].y) {
      golds[i].remove()
      score += 1;
      clearText()
      addText(`Score: ${score}`, { x: 10, y: 0, color: color`0` })

    }
  }

  if(tilesWith(box, orange).length >= 1){
    setSolids([player_fat, box, player_thin, prison_grate, door_t])
    setTimeout(() => {
      setSolids([player_fat, box, player_thin, prison_grate, door_f, door_t])
  }, 10000);
  }

  if(tilesWith(player_fat, vision).length >= 1){
    addText(`Game over`, { x: 3, y: 6, color: color`0` })
     getAll().forEach(sprite => {
    sprite.remove();
    });
  }



  
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
    setSolids([player_fat, box, player_thin, prison_grate, door_t, door_f])
  }
});
