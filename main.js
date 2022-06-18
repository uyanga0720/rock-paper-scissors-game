const getUserChoice=userInput=>{
    userInput = userInput.toLowerCase();
    if (userInput ==='rock' || userInput ==='scissors'||
    userInput ==='paper'){
      return userInput
    }else{
    console.log('Error');
    }
    };
    /*console.log(getUserChoice('Paper'));
    console.log(getUserChoice('Paaper'));*/
    const getComputerChoice = () => {
      const randomNumber = (Math.floor(Math.random()*3));
      switch(randomNumber){
        case 0: 
        return 'rock';
       case 1:
        return 'paper';
        case 2:
         return 'scissors';
      }
      };
    //console.log(getComputerChoice());
    const determineWinner=(userChoice,computerChoice) => {
      if (userChoice===computerChoice){
        return 'This game is tie';
      };
      if(userChoice==='rock'){
      if(computerChoice==='paper'){
        return 'Sorry computer won';
      }
      else{
        return'YOU won';
          }
      }
      if(userChoice==='scissors'){
      if(computerChoice==='rock'){
        return 'Sorry computer won';
      }
      else{
        return'YOU won';
          }
      }
      if(userChoice==='paper'){
      if(computerChoice==='scissors'){
        return 'Sorry computer won';
      }
      else{
        return'YOU won';
          }
      }
    };
    
    
    //console.log(determineWinner('paper', 'scissors'));
    //console.log(determineWinner('paper', 'rock'));
    
    const playGame= () =>{
      const userChoice = getUserChoice('paper');
      const computerChoice = getComputerChoice();
      console.log('You threw: ' + userChoice);
      console.log('the computer threw: ' + computerChoice);
      console.log(determineWinner(userChoice,computerChoice));
    }
    
    playGame()
    
    
    
    
    
    
    
    
    
    
    
    