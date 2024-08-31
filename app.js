function startGame() {
    document.getElementById('startPage');
    document.getElementById('gamePage');
  }
  
  function playGame(userchoice)  {
    var choices = ['Heads', 'Tails'];
    var randomChoice = choices[Math.floor(Math.random() * choices.length)];
        
    if (userchoice=== randomChoice) {
        document.getElementById('result').textContent = 'You won the toss!';
    } else {
        document.getElementById('result').textContent = 'You lost the toss.';
    }
  }