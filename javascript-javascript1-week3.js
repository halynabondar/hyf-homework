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

// Series duration of my life

const seriesDurations = [
    {
        title: "MasterChef",
        days: 22,
        hours: 6,
        minutes: 56,
    },
    {
        title: "Locke & key",
        days: 2,
        hours: 12,
        minutes: 23,
    },
    {
        title: "The Vampire Diaries",
        days: 7,
        hours: 14,
        minutes: 56,
    },
];

function durationInMinutes(days, hours, minutes) {
    return days * 24 * 60 + hours * 60 + minutes;
}
function logOutSeriesText() {
    const averageLifeSpanYears = 80;
    const totalLifeMinutes = averageLifeSpanYears * 365.25 * 24 * 60;

    let totalMinutesWatched = 0;

    seriesDurations.forEach(series => {
        const seriesMinutes = durationInMinutes(series.days, series.hours, series.minutes);
        totalMinutesWatched += seriesMinutes;

        const lifePercentage = (seriesMinutes / totalLifeMinutes) * 100;
        console.log(`${series.title} took ${lifePercentage.toFixed(2)}% of my life`);
    });

    const totalLifePercentage = (totalMinutesWatched / totalLifeMinutes) * 100;
    console.log(`In total that is ${totalLifePercentage.toFixed(2)}% of my life`);
}

logOutSeriesText();