function hideElementById(elementId) {
    document.getElementById(elementId).classList.add('hidden');
}
function showElementById(elementId) {
    document.getElementById(elementId).classList.remove('hidden');
}
function setKeyboardBackground(elementId) {
    document.getElementById(elementId).classList.add('bg-amber-500')
}
function removeKeyboardBackground(elementId) {
    document.getElementById(elementId).classList.remove('bg-amber-500')

}
function setInitialValue(element, value) {
    const currentText = document.getElementById(element);
    currentText.innerText = value;
}

// function getCurrentValueById(element) {
//     const initialScore = document.getElementById(element);
//         const scoreText = initialScore.innerText;
//         parseInt(scoreText);
// }
function getRandomAlphabet() {
    // create random alphabet by array string
    const alphabetString = 'abcdefghijklmnopqrstuvwxyz';
    const alphabets = alphabetString.split('');
    // create random number 0-25(A-Z) and their round number
    const randomNumber = Math.round(Math.random() * 25);
    const randomAlphabet = alphabets[randomNumber];
    // show random alphabet in display
    const displayById = document.getElementById('displaySection');
    displayById.innerText = randomAlphabet;
    setKeyboardBackground(randomAlphabet);
}