// function play() {
//     const homeScreen = document.getElementById('home-screen');
//     homeScreen.classList.add('hidden');
//     const playGroundScreen = document.getElementById('play-ground');
//     playGroundScreen.classList.remove('hidden');
// }

function play() {
    hideElementById('home-screen');
    showElementById('play-ground');
    getRandomAlphabet();   
}