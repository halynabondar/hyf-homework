//Flight booking fullname function

function getFullname(firstname, surname, useFormalName, gender){
    let fullname1 = "Halyna";
    let fullname2 = "Bondar";
    // console.log(fullname1 + " " + fullname2);

    const fullName = `${firstname} ${surname}`;
    let formalPrefix = '';
    if (useFormalName) {
        formalPrefix = (!gender || gender === 'male') ? 'Lord ' : 'Lady ';
    }
    const result=`${formalPrefix}${fullName}`;
    console.log(result);
    return result;
}
getFullname();

getFullname("Benjamin", "Hughes", true);
getFullname("Benjamin", "Hughes", false);

// Event application

function getEventWeekday(daysFromToday){
    const daysOfWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

    const today = new Date();
    const todayIndex = today.getDay();

    const eventDayIndex = (todayIndex + daysFromToday) % 7;

    return daysOfWeek[eventDayIndex];
}

console.log(getEventWeekday(9));
console.log(getEventWeekday(2));
