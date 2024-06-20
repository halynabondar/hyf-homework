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
console.log(nameToRemove);

console.log(names); // ['Peter', 'Yana', 'kristina', 'Rasmus', 'Samuel', 'katrine', 'Tala']

// // When will we be there?

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

// // Series duration of my life

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

// //// Smart-ease - Back to the basics!
// //NOnoN0nOYes

const notes = [];

function saveNote(content, id){
    notes.push({content, id});
}

saveNote("Pick up groceries", 1);
saveNote("Do laundry", 2);

console.log(notes); // [{content: 'Pick up groceries', id: 1}, {content: 'Do laundry', id: 2}]

// Get a note

function getNote(id) {

    if (typeof id !== 'number' || id === undefined){
        console.error('Invalid ID: ID must be a number.');
        return null;
    }

    for (let note of notes) {
        if (note.id === id) {
            return note;
        }
    }

        console.error(`Note with ID ${id} not found.`);
        return null;
}

const firstNote = getNote(1);
console.log(firstNote); // {content: 'Pick up groceries', id: 1}

const nonExistentNote = getNote(3);
console.log(nonExistentNote); // null

// Log out notes

function logOutNotesFormatted() {
    notes.forEach((notes) =>  console.log(`The note with id: ${notes.id}, has the following note text: ${notes.content}`))
}
logOutNotesFormatted(); // should log out the text below

// The note with id: 1, has the following note text: Pick up groceries
// The note with id: 2, has the following note text: Do laundry

//// CactusIO-interactive (Smart phone usage app)
// Adding an activity

/*
let activities = [];
function addActivity(date, activity, duration) {
    activities.push({date, activity, duration});
    }

addActivity("23/7-18", "Youtube", 30);
console.log(activities)

// Show my status

function showStatus(){
    console.log()
    if (activities === ""){
    console.log("Add some activities before calling showStatus")
    } else{
        return `You have added 3 activities. They amount to 78 min. of usage`
    }
}*/
