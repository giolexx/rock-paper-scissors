function getComputerChoice(){
    let Rock =1;
    let Paper=2;
    let Scissors =3;
    let ok=0,random;
    while(ok==0){
     random = Math.random()*10;
    random=random.toFixed(0);
    if(random>0 && random<=3)
        ok++;
    }
    if(random==1)
        return 'rock';
    if(random==2)
    return 'paper';
    if(random==3)
    return 'scissors';
}
function compareStrings (a1,a2){
    if(a1==a2)
        return true;
    return false;

}
//et computerSelection=getComputerChoice();
function playOneRound(playerSelection,computerSelection){
    let aux=computerSelection;
    playerSelection=playerSelection.toLowerCase();
    let message='xd';
    switch(playerSelection) {

      

        case "rock" : 
            if(compareStrings(aux,'scissors'))
                message='You won';
            else if(compareStrings(aux,'paper'))
                message='You lost';
            if(compareStrings(aux,playerSelection))
                message='Draw';
        break;

        case "paper" : 
            if(compareStrings(aux,'rock'))
                message="You won";
          else  if(compareStrings(aux,'scissors'))
                message='You lost';
          if(compareStrings(aux,playerSelection))
                message='Draw';
        break;

        case "scissors" : 
            if(compareStrings(aux,'paper'))
                message='You Won';
            else if(compareStrings(aux,'rock'))
                message='You lost';
                if(compareStrings(aux,playerSelection))
                message='Draw';
        break;
    }
   return message;
}
function game(){
    let playerScore=0,computerScore=0;
    for(let i=0;i<5;i++){
        let computerSelection =getComputerChoice();
        let playerSelection=prompt('Rock, paper or scissors',' ');
      //  if(playerSelection!='rock' || playerSelection!='paper' || playerSelection!='scissors')
        console.log(playOneRound(playerSelection, computerSelection));
        if(playOneRound(playerSelection, computerSelection)=='You won')
            playerScore++;
        else if (playOneRound(playerSelection, computerSelection)=='You lost' )
            computerScore++;
    }
    if(playerScore>computerScore)
        return 'You won the game';
    else if(playerScore<computerScore)
        return 'You lost the game';
     return 'You drawn the game';
}
alert(game());