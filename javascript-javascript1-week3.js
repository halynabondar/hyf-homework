// Its warmup time!
// Item array removal

const names = [
    "Peter",
    "Ahmad",
    "Yana",
    "kristina",
    "Rasmus",
    "Samuel",
    "katrine",
    "Tala",
];
const nameToRemove = names.splice(1, 1);

console.log(names); // ['Peter', 'Yana', 'kristina', 'Rasmus', 'Samuel', 'katrine', 'Tala']

// When will we be there?

const travelInformation = {
    speed: 50,
    destinationDistance: 432,
};

const travelTime = calculateTime(travelInformation);
console.log(travelTime); // 8 hours and 38 minutes

function calculateTime(){
    const time = travelInformation.destinationDistance / travelInformation.speed;
    const hours = Math.floor(time);
    const minutes= Math.floor((time - hours) * 60);
    return `${hours} hours and ${minutes} minutes`;
}