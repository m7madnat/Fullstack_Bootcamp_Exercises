const guessSpan = document.querySelector('#guess');
const divGuess = document.querySelector('#divGuess');
const AZ = 'abcdefghijklmnopqrstuvwxyz';
let guesses = [];

function randomizeLetter() {
    return AZ[Math.floor(Math.random() * AZ.length)];
}

function checkLetter(event) {
    if (event.key.toLowerCase() == GuessLetter) //guessed
    {
        guessSpan.innerHTML = GuessLetter;
        guessSpan.style.color = "green";
        msgSpan.style.visibility = 'visible';
        msgSpan.textContent = 'Right letter!'
        msgSpan.style.color = 'green';
        document.removeEventListener('keyup', checkLetter);
        guesses.push(event.key.toLowerCase())
        guessesString.textContent = guesses;
        againString.style.visibility = 'visible';
        againString.textContent = 'Would you like to play again?';
        restartBtn.style.visibility = 'visible';

    } else if (AZ.includes(event.key.toLowerCase())) //wrong guess
    {
        if (guesses.includes(event.key.toLowerCase())) //already tried this letter
        {
            msgSpan.style.visibility = 'visible';
            msgSpan.textContent = 'You already tried this letter!';
            msgSpan.style.color = 'red';
        } else {
            guesses.push(event.key.toLowerCase())
            msgSpan.style.visibility = 'visible';
            msgSpan.textContent = 'Nope, Wrong letter';
            msgSpan.style.color = 'red';
            guessesString.textContent = guesses;
        }
    } else if (event.key != 'F5') {
        msgSpan.style.visibility = 'visible';
        msgSpan.textContent = 'Enter Only letter please';
        msgSpan.style.color = 'red';
    }
}

let GuessLetter = randomizeLetter();

const msgSpan = document.createElement('span');
msgSpan.style.visibility = 'hidden';
msgSpan.style.display = 'block';
msgSpan.style.marginTop = '20px';

const againString = document.createElement('div');
againString.style.visibility = 'hidden';
againString.style.display = 'block';
againString.style.marginTop = '20px';

const restartBtn = document.createElement('button');
restartBtn.textContent = 'Play Again';
restartBtn.style.visibility = 'hidden';
restartBtn.style.marginTop = '10px';

const KeysGuess = document.createElement('div');
KeysGuess.style.visibility = 'visible';
KeysGuess.textContent = 'Keys guessed: ';
KeysGuess.style.display = 'block';
KeysGuess.style.fontStyle = 'Bold';
KeysGuess.style.fontSize = '25px';
KeysGuess.style.marginTop = '40px';

const guessesString = document.createElement('span');
guessesString.style.display = 'block';
guessesString.style.marginTop = '5px';
guessesString.style.fontSize = '20px';



divGuess.append(msgSpan, againString, restartBtn, KeysGuess, guessesString);

document.addEventListener('keyup', checkLetter);
restartBtn.addEventListener('click', () => {
    location.reload();
})