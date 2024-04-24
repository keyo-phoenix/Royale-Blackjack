let firstCard = 0
let secondCard = 0
let cards = []
sum = 0
let message = ""
let hasBlack = false;



let player = {
    name: "Blu Phoenix",
    chips: 155
}

let gameOver = document.getElementById("gameOver")
let isAlive = false;
let stand = document.getElementById("stand-button")
let gameTalk = document.getElementById("echoe");
let gameTalk2 = document.getElementById("echoe2");
let playerCards = document.getElementById("firstCard1");
let sct = document.getElementById("secondCard1");
let dfct = document.getElementById("dealerCard1");
let d2ct = document.getElementById("dealerCard2");
let lifeCount = document.getElementById("lifeCount");
let playerWin = document.getElementById("playerWins");
let dealerWin = document.getElementById("dealerWins");
let playerName = document.getElementById("playername");
playerName.textContent = player.name + " :$ " + player.chips

let gameActive = false; 

let dealerpoints = 0
let playerpoints = 0



let dealerCard1 = 0
let dealerCard2 = 0
let sum2 = 0

stand.addEventListener("click", function () {
    if (isAlive) {
        dealerCard1 = randomNum()
        dealerCard2 = randomNum() 
        dfct.textContent = [dealerCard1, dealerCard2] 
        sum2 = dealerCard1 + dealerCard2
        d2ct.textContent = sum2
        if (sum > sum2) {
            gameTalk.textContent = "Your Cards Sum is Higher, YOU WIN!"
            playerpoints += 1
            playerWin.textContent = playerpoints
            gameActive = false
            isAlive = false
            
        }
        else if (sum === sum2) {
            gameTalk.textContent = "DRAW!!" 
            gameActive = false
        }
        else {
            gameTalk.textContent = "Dealer has a higer cards Sum, YOU LOOSE!"
            dealerpoints += 1
            dealerWin.textContent = dealerpoints
            isAlive = false
            gameActive = false
        }

    
    }
    isAlive = false;
    gameActive = false; 
    gameOverf()


})



function randomNum() {
    let ran = Math.floor(Math.random() * 13) + 1
    if (ran < 2) {
        return 11
    }
    else if (ran > 10) {
        return 10
    }
    else {
        return ran
    }

}

function startGame() {
    if (gameActive === false) {
        isAlive = true
        firstCard = randomNum();
        secondCard = randomNum();
        cards = [firstCard, secondCard]
        sum = firstCard + secondCard;
        gameTalk2.textContent = ""
        if (dealerpoints >= 10 || playerpoints >= 10) {
        dealerWin.textContent = 0
        dealerpoints = 0
        playerWin.textContent = 0
        playerpoints = 0
        
        }
        let reset = 0

        dfct.textContent = reset
        d2ct.textContent = reset

        gameOver.textContent = ""

        renderGame()
    }
}



function renderGame() {
    gameActive = true

    playerCards.textContent = "Cards : "


    for (i = 0; i < cards.length; i++) {

        playerCards.textContent += cards[i] + " "

    }

    if (sum < 21) {
        message = "Do you want to draw a new card?"
        isAlive = true;
        hasBlack = false;
    }
    else if (sum === 21) {
        message = "You've got blackjack!!"
        playerpoints += 1
        
        playerWin.textContent = playerpoints
        hasBlack = true
        gameActive = false
        isAlive = false


    }
    else {
        message = "BUST!! You are out of the game"
        dealerpoints += 1
        if (dealerpoints === 10) {
    
            
            gameTalk2.textContent = "GAME OVER, DEALER WINS"
            isAlive = false
        }
        dealerWin.textContent = dealerpoints
        isAlive = false;
        hasBlack = false;
        gameActive = false


        


        



    }
    gameOverf()

    gameTalk.textContent = message
    sct.textContent = "Sum :"
    sct.textContent += " " + sum


}


function newCard() {
    if (isAlive && hasBlack === false && gameActive) {
        let card = randomNum()
        sum += card
        cards.push(card)

        renderGame()
    }
}



function gameOverf() {
    if (playerpoints === 10) {
    
            
        gameOver.textContent = "YOU WIN, CASHPOT Is YOURS"
        
    }
    else if (dealerpoints === 10) {
        gameOver.textContent = "GAME OVER"

    }

}
