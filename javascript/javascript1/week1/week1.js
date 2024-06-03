//#1

const yearOfBirth = 1989;
const yearFuture = 2027;
const age = yearFuture - yearOfBirth;

console.log(`You will be ${age} years old in ${yearFuture}`);

//#2

const dogYearOfBirth = 2016;
const dogYearFuture = 2027;
let dogYear = dogYearFuture - dogYearOfBirth;
const shouldShowResultInDogYears = true;

if(shouldShowResultInDogYears) {
    dogYear = (dogYearFuture - dogYearOfBirth) * 7;
    console.log(`Your dog will be ${dogYear} dog years old in ${dogYearFuture}`);
} else {
    console.log(`Your dog will be ${dogYear} human years old in ${dogYearFuture}`)};

//#3

const myFriends = [
    {
        name: "Peter",
        width: 8,
        depth: 10,
        height: 10,
        gardenSizeInM2: 100,
        price: 2500000,
    },
    {
        name: "Julia",
        width: 5,
        depth: 11,
        height: 8,
        gardenSizeInM2: 70,
        price: 1000000,
    },
]

myFriends.forEach(myFriend => {
    const volumeInMeters = myFriend.width * myFriend.depth * myFriend.height;
    const housePrice = volumeInMeters * 2.5 * 1000 + myFriend.gardenSizeInM2 * 300;

    if(housePrice > myFriend.price){
        console.log(`${myFriend.name} pays too little! Calculated price: ${housePrice}. Actual price: ${myFriend.price}`);
    } else if(housePrice === myFriend.price) {
        console.log(`${myFriend.name} pays fair price! Actual price: ${myFriend.price}`);
    } else {
        console.log(`${myFriend.name} pays too high! Calculated price: ${housePrice}. Actual price: ${myFriend.price}`);
    }
})

//#4

const firstWords = ["Easy", "Awesome", "Corporate", "Company", "Corporation"];
const secondWords = ["Awesome", "Corporate", "Easy", "Corporation", "Company", "LTD", "AsP"];

const randomFirstNumber = Math.floor(Math.random() * firstWords.length);
const randomSecondNumber = Math.floor(Math.random() * secondWords.length);

const startupName = firstWords[randomFirstNumber] + " " + secondWords[randomSecondNumber];
const startupNameLength = startupName.length;
console.log(`The startup: "${startupName}" contains ${startupNameLength} characters`);