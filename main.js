let aiSequence = 0;
let playSequence = 0;
let aiArray = [];
let playerArray = [];
let blue = document.querySelector("#btn_one")
let yellow = document.querySelector("#btn_two")
let red = document.querySelector("#btn_three")
let green = document.querySelector("#btn_four")
let aiTurn = false
let playerTurn = false
let round = 1

const button = document.querySelectorAll('button')
const colors = [blue, yellow, red, green]
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


function addRandomColor() {
    let addedColor = colors[parseInt(Math.random() * colors.length)]
        // addedColor.classList.add('changeColor')
        // console.log(addedColor)
        setTimeout(function() {
                addedColor.classList.add('changeColor');
                setTimeout(function() {
                    addedColor.classList.remove("changeColor");
                }, 500);
        });
}



function newRound() {
    round += 1;
    aiArray.push(addRandomColor())
    console.log(aiArray)
  }


  function startGame() {
        // if (startBtn {
         if (aiTurn === false){
         aiTurn = true
         playerTurn = true
         addRandomColor()
 }
        
  }




  startBtn.addEventListener('click', () =>
        startGame()
  )













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