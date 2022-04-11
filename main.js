// let aiSequence = 0;
// let playSequence = 0;
let aiArray = [];
let playerArray = [];
let blue = document.querySelector("#blue")
let yellow = document.querySelector("#yellow")
let red = document.querySelector("#red")
let green = document.querySelector("#green")
let aiTurn = false
let playerTurn = false
let round = 0

const button = document.querySelectorAll('button')
const colors = [blue, yellow, red, green]
const startBtn = document.querySelector('.start')


blue.addEventListener('click', () =>{
        playerArray.push('blue')
        blue.classList.add('changeColor');
        setTimeout(() => {
                blue.classList.remove('changeColor')
        },500)
        console.log(playerArray)
})
yellow.addEventListener('click', () =>{
        playerArray.push('yellow')
        yellow.classList.add('changeColor');
        setTimeout(() => {
                yellow.classList.remove('changeColor')
        },500)
        console.log(playerArray)
})
red.addEventListener('click', () =>{
        playerArray.push('red')
        red.classList.add('changeColor');
        setTimeout(() => {
                red.classList.remove('changeColor')
        },500)
        console.log(playerArray)
})
green.addEventListener('click', () =>{
        playerArray.push('green')
        green.classList.add('changeColor');
        setTimeout(() => {
                green.classList.remove('changeColor')
        },500)
        console.log(playerArray)
})

function newRound() {
        round += 1;
        console.log(`It is round ${round}`)
      };

function addRandomColor() {
    let addedColor = colors[parseInt(Math.random() * colors.length)]
        setTimeout(function() {
        addedColor.classList.add('changeColor');
        setTimeout(function() {
        addedColor.classList.remove("changeColor");
        }, 700);
        });
        aiArray.push(addedColor.id)
        console.log(aiArray)
        
};






  function startGame() {
         if (aiTurn === false){
         aiTurn = true
         addRandomColor()
         newRound()
 }
        
  };


  function playerRepeat() {
        if (aiTurn === true)
        aiTurn = false; 
        playerTurn = true;
  };

  startBtn.addEventListener('click', () =>
        startGame()
  );













//   '{
//         if (aiTurn === false){
//                 aiTurn = true
//                 playerTurn = true
//         }
//   }




//   startBtn.addEventListener('click', () => {
//     // addRandomColor()
// //     let highlighted =["blue", "yellow", "red", "green"]
//     let randomNum = Math.floor(Math.random() * highlighted.length)
//     let randomButton = button[randomNum]
//     randomButton.style.backgroundColor = highlighted[randomNum]
//     console.log(highlighted[randomNum], 'is highlighted')
//      timing = setInterval(() =>
//     randomButton.style.backgroundColor = highlighted[randomNum], 1000
//     )

// //     clearInterval(timing, 1000)
//         let neutral = ["lightcoral", "lightblue", "rgb(231, 231, 158)", "lightgreen"]
//   })
  
//   setTimeout(function() {
//         computerArray[i].classList.add("changeColor");
//         setTimeout(function() {
//             computerArray[i].classList.remove("changeColor");
//         }, 300)}];


// function lightColor(color) {
//     if(aiTurn === true)
// }