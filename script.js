let are  = document.getElementById('area')
let cells = document.getElementsByClassName('cell')
let WhoWhins = document.getElementById("whoWins")
let currentPlayer = document.getElementById('currentPl')

let roundHistory = []



let player = 'X'

let ai  = 'O'


let stat = {
    'X':0,
    'O':0,
    'D':0

}

let winCombination = [
[1,2,3],
[4,5,6],
[7,8,9],
[1,4,7],
[2,5,8],
[3,6,9],
[1,5,9],
[3,5,7]
]


for(let i = 1;i<=9; i++){
    area.innerHTML += `<div class = 'cell'pos="${i}"></div>`
}
for(let i =0;i< cells.length;i++){
    cells[i].addEventListener('click',cellonClick)
}
function cellonClick(){
   let date = []
   if(!this.innerHTML){
    this.innerHTML=player
   }else{
    alert('ячейка бош эмес')
   }
   player=player==='X'?'O':"X"
}