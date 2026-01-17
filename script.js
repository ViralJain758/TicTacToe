let turn = new Audio("assets/ting.mp3")
let over = new Audio("assets/gameover.mp3")
let info = document.getElementById("info")
let resetBtn = document.getElementById('reset')
let image = document.getElementById("image")

let flag = false
let letter = "X"

const changeTurn = ()=>{
    return letter === "X" ? "O" : "X";
}

const checkWin = ()=>{
    let check = document.getElementsByClassName('boxtxt');
    let wins = [[0,1,2], [3,4,5], [6,7,8], [0,3,6], [1,4,7], [2,5,8], [0,4,8], [2,4,6]]
    wins.forEach(e =>{
        if ((check[e[0]].innerText === check[e[1]].innerText) && (check[e[0]].innerText === check[e[2]].innerText) && check[e[0]].innerText !== ''){
            over.play();
            image.style = "width: 200px";
            info.innerText = letter + ' Won!!';
            flag = true;
        }
    })
}

let boxes = document.getElementsByClassName("box")
Array.from(boxes).forEach(element =>{
    element.addEventListener('click', ()=> {
        let boxText = element.querySelector('.boxtxt')
        if(boxText.innerText === ''){
            boxText.innerText = letter;
            turn.play();
            checkWin();
            if (flag === true){
                return;
            }
            letter = changeTurn();
            info.innerText = "Turn for " + letter;
        }
    })
})

resetBtn.addEventListener('click', ()=>{
    boxText = document.querySelectorAll('.boxtxt');
    boxText.forEach(element =>{
        element.innerText = '';
    })
    flag = false;
    image.style = "width: 0";
    letter = "X";
    info.innerText = "Turn for " + letter;
});
