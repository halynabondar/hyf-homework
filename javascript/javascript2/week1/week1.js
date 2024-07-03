// 1.2. Find and count the Danish letters

const danishString = "Jeg har en blå bil";
console.log(countDanishLetter(danishString)); // returns {total: 1, å: 1}

const danishString2 = "Blå grød med røde bær";
console.log(countDanishLetter(danishString2)); // returns {total: 4, æ: 1, ø: 2, å: 1}

function countDanishLetter(inputString){
    const danishLetters = ['æ', 'ø', 'å'];
    const lettersCount = {
        total: 0,
    };

    for (let i = 0; i < inputString.length; i++) {
        danishLetters.forEach(danishLetter => {
            if (inputString[i] === danishLetter) {
                if (!lettersCount[danishLetter]) {
                    lettersCount[danishLetter] = 1;
                } else {
                    lettersCount[danishLetter] += 1;
                }
                lettersCount.total += 1;
            }
        });
    }
    return lettersCount;
}

// 2. Spirit animal name generator

const button = document.getElementById('btn');
const input = document.getElementById('input');

const spiritAnimals =[
    "The Crying Butterfly",
    "The Wise Owl",
    "The Fearless Lion",
    "The Dancing Dolphin",
    "The Cunning Fox",
    "The Graceful Swan",
    "The Strong Bear",
    "The Gentle Deer",
    "The Brave Wolf",
    "The Mystical Dragonfly"
];
input.addEventListener('input', (event) => {
    const inputValue = event.target.value;
});

function animalName() {
    button.textContent = "Try again";
    let inputValue = input.value;
    const randIndex= Math.floor(Math.random() * spiritAnimals.length);
    if (inputValue === "") {
        alert("Please enter your name!");
    } else {
        alert(`${inputValue}: ${inputValue} - ${spiritAnimals[randIndex]}.`);
    }

}

button.addEventListener('click', animalName);
