let aiSequence = 0;
let playSequence = 0;
let aiArray = [];
let playerArray = [];
let blue = document.querySelector("#btn_one")
let yellow = document.querySelector("#btn_two")
let red = document.querySelector("#btn_three")
let green = document.querySelector("#btn_four")
let aiTurn = true
let playerTurn = false
let round = 1

const button = document.querySelectorAll('button')
// const colors = [blue, yellow, red, green]
const startBtn = document.querySelector('.start')




 

blue.addEventListener('click', () =>{
        console.log('yoyo')
})
yellow.addEventListener('click', () =>{
        console.log('yoyo')
})
red.addEventListener('click', () =>{
        console.log('yoyo')
})
green.addEventListener('click', () =>{
        console.log('yoyo')
})


const addRandomColor = () => {
    let addedColor = colors[parseInt(Math.random() * colors.length)]

    console.log(addedColor)
};

// function lightColor(color) {
//     if(aiTurn === true)
// }


function newRound() {
    round += 1;
    aiArray.push(addRandomColor())
    console.log(aiArray)
  }


  function startGame() {

  }

  startBtn.addEventListener('click', () => {
    // addRandomColor()
    let highlighted =["blue", "yellow", "red", "green"]
    let randomNum = Math.floor(Math.random() * highlighted.length)
    let randomButton = button[randomNum]
    randomButton.style.backgroundColor = highlighted[randomNum]
  });

  