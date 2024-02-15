// function play() {
//     const homeScreen = document.getElementById('home-screen');
//     homeScreen.classList.add('hidden');
//     const playGroundScreen = document.getElementById('play-ground');
//     playGroundScreen.classList.remove('hidden');
// }



function play() {
    hideElementById('home-screen');
    hideElementById('score-screen');
    showElementById('play-ground');
    setInitialValue('current-life', 5);
    setInitialValue('current-score', 0);
    getRandomAlphabet(); 
}
document.addEventListener('keyup', function (event) {
    const userPressed = event.key;
    const currentAlphabet = document.getElementById('displaySection');
    const displayAlphabet = currentAlphabet.innerText.toLowerCase();
    if (userPressed === displayAlphabet) {
        const initialScore = document.getElementById('current-score');
        const scoreText = initialScore.innerText;
        const scoreValue = parseInt(scoreText);
        const newScore = scoreValue+1;
        initialScore.innerText = newScore;
        removeKeyboardBackground(userPressed);
        getRandomAlphabet();
    }
    else {
        const initialLife = document.getElementById('current-life')
        const lifeText = initialLife.innerText;
        const lifeValue = parseInt(lifeText);
        const newLife = lifeValue - 1;
        initialLife.innerText = newLife;
        if (newLife === 0) {
            gameOver();
            removeKeyboardBackground(displayAlphabet);
        }
    }
})
function gameOver() {
    hideElementById('play-ground');
    showElementById('score-screen');
    const lastScore = document.getElementById('current-score').innerText;
    const finalResult = document.getElementById('final-result');
    finalResult.innerText = lastScore;
    
}


// function playAgain() {
//     showElementById('play-ground');
//     hideElementById('score-screen');
//     setInitialValue('current-life', 5);
//     setInitialValue('current-score', 0);

// }