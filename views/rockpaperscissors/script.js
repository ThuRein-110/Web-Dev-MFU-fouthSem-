const startCard = document.getElementById("startcard");
const choices = ["rock", "paper", "scissors"];
const resultText = document.getElementById("result-text");
const playBtn = document.getElementById("click");
const choiceElements = document.querySelectorAll(".choice");

function getChosenEle(){
    const chose = Math.floor(Math.random() * choices.length);
    return choices[chose];
}

function playTime(player, computer){
    const resultOftheGame = document.getElementById("resultOftheGame");
    if(player == computer){
        return resultOftheGame.innerHTML = "It's a tie!";
    } else if(
        (player == "rock" && computer == "paper") || 
        (player == "paper" && computer == "scissors") || 
        (player == "scissors" && computer == "rock")
    ){
        return resultOftheGame.innerHTML = "You lose!";
    } else {
        return resultOftheGame.innerHTML = "You win!";
    }
}

function showResult(playerchoice, computerchoice){
    startCard.innerHTML = 
    `
     <div style="display:flex; justify-content:center; gap:20px; align-items:center;">
            <div>
                <h4>You</h4>
                <img src="img/${playerchoice}.jpg" style="width:150px; height:200px; object-fit:cover;">
            </div>
            <div>
                <h4>Computer</h4>
                <img src="img/${computerchoice}.jpg" style="width:150px; height:200px; object-fit:cover;">
            </div>
        </div>
    `;
}

// Click on player choice
choiceElements.forEach(choiceEl =>{
    choiceEl.addEventListener("click", () => {
        const playerChoice = choiceEl.dataset.choice;
        const computerChoice = getChosenEle();
        playTime(playerChoice, computerChoice);
        showResult(playerChoice, computerChoice);
    });
});

// Optional: random play button
playBtn.addEventListener("click", () => {
    const playerChoice = choices[Math.floor(Math.random() * choices.length)];
    const computerChoice = getChosenEle();
    playTime(playerChoice, computerChoice);
    showResult(playerChoice, computerChoice);
});