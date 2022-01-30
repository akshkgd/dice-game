function rollDice(){
    let dice = document.getElementById("dice");
    dice.classList.add('dice-animate');
    dice.innerHTML = '';
    setTimeout(function(){
        dice.classList.remove('dice-animate');
        let diceNumber = Math.floor(Math.random()*7);
        if(diceNumber == 0)
        diceNumber = 1;
        document.getElementById('dice').innerHTML = diceNumber;
    }, 500);


    
}