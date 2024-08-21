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
  
)

setSolids([player_fat, player_thin, prison_grate, door_t, door_f])

var score  = 0
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
e...p..2`
]


setBackground("f")

const currentLevel = levels[level];
setMap(currentLevel)

setPushables({
  [  player_fat ]: []
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
  /*
  if (is_door_t_open == 1) {
    let solidsArr = [player_fat, player_thin, prison_grate, door_f];
    let elementIndexToRemove = solidsArr.indexOf("door_t");
    modifiedSetSolids(solidsArr, elementIndexToRemove);
  }

  if (is_door_f_open == 1) {
    let solidsArr = [player_fat, player_thin, prison_grate, door_t];
    let elementIndexToRemove = solidsArr.indexOf("door_f");
    modifiedSetSolids(solidsArr, elementIndexToRemove);
  }

  if (tilesWith(red, player_thin).length >= 1) {
    is_door_f_open = 1;
  }

  if (tilesWith(green, player_fat).length >= 1) {
    is_door_t_open = 1;
  }
  */
   if(is_door_t_open == 1){
    setSolids([player_fat, player_thin, prison_grate, door_f])
  }

  if(is_door_f_open == 1){
    setSolids([player_fat, player_thin, prison_grate, door_t])
  }

  if(tilesWith(red, player_thin).length >= 1){
    setSolids([player_fat, player_thin, prison_grate, door_t])
  }

  if(tilesWith(green, player_fat).length >= 1){
    setSolids([player_fat, player_thin, prison_grate])
  }
});
