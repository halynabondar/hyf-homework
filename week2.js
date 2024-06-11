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

// Weather wear

function weatherWear(temperature) {

    if (temperature < 0) {
        console.log("It's very cold. It is better to dress warmly!")
    } else if (temperature > 0 && temperature < 10) {
        console.log("It's still cold. It is better to wear pants, a sweater and a jacket!")
    } else if (temperature > 10 && temperature < 20){
        console.log("It's warm. It will be better to wear shorts and a T-shirt!")
    } else {
        console.log("It's very hot. It will be better to go to the beach!")
    }
}

weatherWear(-9);
weatherWear(9);
weatherWear(15);
weatherWear(25);
