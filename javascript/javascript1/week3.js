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

const nameToRemove = "Ahmad";
const nameToRemoveIndex = names.indexOf(nameToRemove);

if (nameToRemoveIndex !== -1) {
    names.splice(nameToRemoveIndex, 1);
}
console.log(names); // ['Peter', 'Yana', 'kristina', 'Rasmus', 'Samuel', 'katrine', 'Tala']

// When will we be there?

const travelInformation = {
    speed: 50,
    destinationDistance: 432,
};

function calculateTime(){
    const time = travelInformation.destinationDistance / travelInformation.speed;
    const hours = Math.floor(time);
    const minutes= Math.floor((time - hours) * 60);
    return `${hours} hours and ${minutes} minutes`;
}

const travelTime = calculateTime(travelInformation);
console.log(travelTime); // 8 hours and 38 minutes

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

const activities = [];

function addActivity(date, activity, duration) {
    activities.push({ date, activity, duration });
}

addActivity("23/10-18", "Youtube", 30);
addActivity('24/2-18', "Netflix", 50);
addActivity('29/1-18', "Writing", 90);

function showStatus(activities) {
    if (!activities.length) {
        return "Add some activities before calling showStatus";
    }

    const totalActivities = activities.length;
    const durationLimit = 200;
    let totalDuration = 0;

    for (let index = 0; index < activities.length; index++) {
        const activity = activities[index];
        totalDuration += activity.duration;
    }

    if (totalDuration > durationLimit) {
        return "You have reached your limit, no more smartphoning for you!";
    }

    return `You have added ${totalActivities} activities. They amount to ${totalDuration} min. of usage.`;
}

const activitiesStatus = showStatus(activities);
console.log(activitiesStatus);

function longestActivity(activities) {
    let longest = activities[0];

    for (let index = 0; index < activities.length; index++) {
        const activity = activities[index];
        if (activity.duration > longest.duration) {
            longest = activity;
        }
    }

    return `The longest activity is ${longest.activity} with ${longest.duration} minutes.`
}

console.log(longestActivity(activities));