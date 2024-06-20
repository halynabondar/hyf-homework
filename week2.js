//Flight booking fullname function

function getFullname(firstname, surname, useFormalName, gender){
    const fullName = `${firstname} ${surname}`.trim();
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
    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    const today = new Date();
    const todayIndex = today.getDay();

    const eventDayIndex = Math.abs(todayIndex + daysFromToday) % 7;

    return daysOfWeek[eventDayIndex];
}

console.log(getEventWeekday(9));
console.log(getEventWeekday(2));

// Weather wear

function weatherWear(temperature) {

    if (temperature < 0) {
        return "It's very cold. It is better to dress warmly!";
    } else if (temperature > 0 && temperature < 10) {
        return "It's still cold. It is better to wear pants, a sweater and a jacket!";
    } else if (temperature > 10 && temperature < 20){
        return "It's warm. It will be better to wear shorts and a T-shirt!";
    } else {
        return "It's very hot. It will be better to go to the beach!";
    }
}

console.log(weatherWear(-9));
console.log(wweatherWear(9));
console.log(wweatherWear(15));
console.log(wweatherWear(25));

// Student manager

const class07Students = [];
function addStudentToClass(studentName) {
    if (studentName === "") {
        console.log("Cannot be empty!");
        return;
    }

    if (getNumberOfStudents() >= 6) {
        if (studentName !== "Queen") {
            console.log("Cannot add more students to class 07.");
            return;
        } else {
            console.log("Long live the Queen!");
        }
    }

    if (class07Students.indexOf(studentName) !== -1) {
        console.log(`${studentName} is already in the class!`);
        return;
    }

    console.log(`${studentName} added into the class!`);
    class07Students.push(studentName);
}

function getNumberOfStudents() {
    return class07Students.length;
}

addStudentToClass("Ole"); // 1
addStudentToClass("Alisa"); // 2
addStudentToClass("Alex"); // 3
addStudentToClass("Ole"); // 3
console.log(`Students count: ${getNumberOfStudents()}`);
addStudentToClass("Sumbal"); // 4
addStudentToClass("Anita"); // 5
addStudentToClass("Christian"); // 6
addStudentToClass("Henrik"); // 6
addStudentToClass("Queen"); // 7
addStudentToClass("Queen"); // 7

console.log(`Students count: ${getNumberOfStudents()}`);

// Candy helper

const prices = [
    { type: 'Sweet', price: 0.5 },
    { type: 'Chocolate', price: 0.7 },
    { type: 'Toffee', price: 1.1 },
    { type: 'Chewing-gum', price: 0.03 },
]

const amountToSpend = Math.random() * 100;
const boughtCandyPrices = [];
function addCandy(candyType, weight) {
    const priceRecord = prices.find(price => price.type === candyType)
    const candiesCost = priceRecord.price * weight;
    boughtCandyPrices.push(candiesCost);
}

function canBuyMoreCandy(){
    // Array prototype does not implement min/max, therefore sorting in ascending order and taking first one
    const minPriceRecord = prices.sort((a, b) => a.price - b.price)[0];

    let totalCost = 0;

    // for (let i= 0; i < remainingBudget.length; i++){
    //     totalCost += boughtCandyPrices[i];
    // }

    boughtCandyPrices.forEach(candyCost => totalCost += candyCost);

    const remainingBudget = amountToSpend - totalCost;
    if (remainingBudget >= minPriceRecord.price){
        console.log("You can buy more, so please do!");
    } else {
        console.log("Enough candy for you!");
    }
}

addCandy("Sweet", 20);
addCandy("Chocolate", 2);
canBuyMoreCandy()