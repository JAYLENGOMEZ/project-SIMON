
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


blue.addEventListener('click', playerRepeat)

yellow.addEventListener('click', playerRepeat)
       
red.addEventListener('click', playerRepeat)
      
green.addEventListener('click', playerRepeat)

startBtn.addEventListener('click', () =>
        startGame()
);



function newRound() {
        round += 1;
        console.log(`It is round ${round}`)
      };

function addRandomColor() {
    let addedColor = colors[parseInt(Math.random() * colors.length)]
        setTimeout(function() {
        addedColor.classList.add('highlightColor');
        setTimeout(function() {
        addedColor.classList.remove("highlightColor");
        }, 700);
        });
        aiArray.push(addedColor.id)
        console.log(aiArray)
};



function playerRepeat(event) {
        event.target.classList.add('highlightColor')
        setTimeout(function(){
                event.target.classList.remove('highlightColor')
        }, 300)
        if (aiArray === playerArray)
        if (aiTurn === true)
        aiTurn = false; 
        playerTurn = true;
        playerArray.push(event.target.id)
        console.log(playerArray)
  };


  function startGame() {
         if (aiTurn === false){
         aiTurn = true
         newRound()
         setTimeout(addRandomColor(), 5000)
        
 }
        
  };


  

  












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

        // playerArray.push('blue')
        // blue.classList.add('changeColor');
        // setTimeout(() => {
        //         blue.classList.remove('changeColor')
        // },500)
        // console.log(playerArray)
// })

        // playerArray.push('green')
        // green.classList.add('changeColor');
        // setTimeout(() => {
        //         green.classList.remove('changeColor')
        // },500)
        // console.log(playerArray)
// })

  // playerArray.push('red')
        // red.classList.add('changeColor');
        // setTimeout(() => {
        //         red.classList.remove('changeColor')
        // },500)
        // console.log(playerArray)
// })

 // playerArray.push('yellow')
        // yellow.classList.add('changeColor');
        // setTimeout(() => {
        //         yellow.classList.remove('changeColor')
        // },500)
        // console.log(playerArray)
// })


// let aiSequence = 0;
// let playSequence = 0;