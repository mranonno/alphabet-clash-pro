function hideElementById(elementId) {
    document.getElementById(elementId).classList.add('hidden');
}

function showElementById(elementId) {
    document.getElementById(elementId).classList.remove('hidden');
}
function setKeyboardBackground(elementId) {
    document.getElementById(elementId).classList.add('bg-amber-500')
}
function getRandomAlphabet() {
    // create random alphabet by array string
    const alphabetString = 'abcdefghijklmnopqrstuvwxyz';
    const alphabets = alphabetString.split('');
    // create random number 0-25 and their round number
    const randomNumber = Math.round(Math.random() * 25)
    const randomAlphabet = alphabets[randomNumber]
    // show random alphabet in display
    const displayById = document.getElementById('displaySection');
    displayById.innerText = randomAlphabet;
    setKeyboardBackground(randomAlphabet);

}