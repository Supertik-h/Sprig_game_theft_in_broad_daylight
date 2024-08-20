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
const door = "d"
const floor = "f"

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
  [ door, bitmap`
LLLLLLLLLLLLLLLL
L..L11.1.1.1..LL
L.LL11.1.1.1..LL
L.L.11.1.1.1.LLL
L.L.11.1.1.1.L.L
L.L.1111.1.1.L.L
L.L.1001.1.1.L.L
L.L.1101.1.1.L.L
L.L.1111.1.1.L.L
L.L.11.1.1.1.L.L
L.L.11.1.1.1.L.L
L.L.11.1.1.1LL.L
L.L.11.1.1.1L..L
LLL.11.1.1.1L..L
LL..11.1.1.1L..L
LLLLLLLLLLLLLLLL` ],
  [ floor, bitmap`
LLLLL1LLLLLL1LLL
L1L1111LL1111L1L
L111111LLLL1111L
LL11LL11L111L111
LL11L11LL1L111LL
1LL1111LL111111L
L111111LL111111L
LLLL1LLL1LLLL1LL
LLLLLLLLLLL1LLLL
L1L11111L111111L
L111111LL1L1L1LL
L111L11LL11111LL
L1L1111L1111111L
L1L11L1LL111L11L
L1111111L111111L
LLL1LLLLLLLL1LLL` ],
  
)

setSolids([player_fat, player_thin, prison_grate])

let level = 0
const levels = [
  map`
..p..
..p..
dpppp
g12..
.....`
]

setMap(levels[level])

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

afterInput(() => {
  
})