
let choices = ["rock", "paper", "scissors"];
let gameStats = { wins: 0, loses: 0, ties: 0 };

function Rock(){

  const randomNumber = Math.random();
  let isAlive = true;
  let Computer = isAlive;
  
  if(randomNumber >= 0 && randomNumber < 1/3){
    Computer = 'rock';
  } else if(randomNumber >= 1/3 && randomNumber < 2/3){
    Computer = 'paper';
  
  }else if(randomNumber >= 2/3 && randomNumber < 1){
    Computer = 'scissors';
  }
  console.log(Computer);
  
  let result = '';
  
  if(Computer === 'rock'){
    result = 'Tie';
    gameStats.ties++;
  
  }else if(Computer === 'paper'){
    result ='You lose';
    gameStats.loses++;
  
  }else if(Computer === 'scissors'){
    result = 'You win';
    gameStats.wins++;
  
  }
  alert(`You picked rock. Computer picked ${Computer}. ${result}`);
  {
  document.getElementById("game-Stats").innerText =
    "Wins: " +
    gameStats.wins +
    " | Loses: " +
    gameStats.loses +
    " | Ties: " +
    gameStats.ties;
  }
    
  }

  function Paper(){

    const randomNumber = Math.random();
    let isAlive = true;
    let Computer = isAlive;
    
    if(randomNumber >= 0 && randomNumber < 1/3){
      Computer = 'rock';
    } else if(randomNumber >= 1/3 && randomNumber < 2/3){
      Computer = 'paper';
    
    }else if(randomNumber >= 2/3 && randomNumber < 1){
      Computer = 'scissors';
    }
    console.log(Computer);
    
    let result = '';
    
    if(Computer === 'rock'){
      result = 'You win';
      gameStats.wins++;
    
    }else if(Computer === 'paper'){
      result ='Tie';
      gameStats.ties++;
    
    }else if(Computer === 'scissors'){
      result = 'You lose';
      gameStats.loses++;
    
    }
    alert(`You picked paper. Computer picked ${Computer}. ${result}`);

    {
      document.getElementById("game-Stats").innerText =
        "Wins: " +
        gameStats.wins +
        " | Loses: " +
        gameStats.loses +
        " | Ties: " +
        gameStats.ties;
    }

    }
  
    function Scissors(){

      const randomNumber = Math.random();
      let isAlive = true;
      let Computer = isAlive;
      
      if(randomNumber >= 0 && randomNumber < 1/3){
        Computer = 'rock';
      } else if(randomNumber >= 1/3 && randomNumber < 2/3){
        Computer = 'paper';
      
      }else if(randomNumber >= 2/3 && randomNumber < 1){
        Computer = 'scissors';
      }
      console.log(Computer);
      
      let result = '';
      
      if(Computer === 'rock'){
        result = 'You lose';
        gameStats.loses++;
      
      }else if(Computer === 'paper'){
        result ='You win';
        gameStats.wins++;
      
      }else if(Computer === 'scissors'){
        result = 'Tie';
        gameStats.ties++; 
      
      }
      alert(`You picked scissors. Computer picked ${Computer}. ${result}`);

      document.getElementById("game-Stats").innerText =
        "Wins: " +
        gameStats.wins +
        " | Loses: " +
        gameStats.loses +
        " | Ties: " +
        gameStats.ties;

      }
  