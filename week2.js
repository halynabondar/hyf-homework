//Flight booking fullname function

// function getFullname(firstname, surname, useFormalName, gender){
//     let fullname1 = "Halyna";
//     let fullname2 = "Bondar";
//     // console.log(fullname1 + " " + fullname2);
//
//     const fullName = `${firstname} ${surname}`;
//     let formalPrefix = '';
//     if (useFormalName) {
//         formalPrefix = (!gender || gender === 'male') ? 'Lord ' : 'Lady ';
//     }
//     const result=`${formalPrefix}${fullName}`;
//     console.log(result);
//     return result;
// }
// getFullname();
//
// getFullname("Benjamin", "Hughes", true);
// getFullname("Benjamin", "Hughes", false);

// Event application

// function getEventWeekday(daysFromToday){
//     const daysOfWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
//
//     const today = new Date();
//     const todayIndex = today.getDay();
//
//     const eventDayIndex = (todayIndex + daysFromToday) % 7;
//
//     return daysOfWeek[eventDayIndex];
// }
//
// console.log(getEventWeekday(9));
// console.log(getEventWeekday(2));

// Weather wear

// function weatherWear(temperature) {
//
//     if (temperature < 0) {
//         console.log("It's very cold. It is better to dress warmly!")
//     } else if (temperature > 0 && temperature < 10) {
//         console.log("It's still cold. It is better to wear pants, a sweater and a jacket!")
//     } else if (temperature > 10 && temperature < 20){
//         console.log("It's warm. It will be better to wear shorts and a T-shirt!")
//     } else {
//         console.log("It's very hot. It will be better to go to the beach!")
//     }
// }
//
// weatherWear(-9);
// weatherWear(9);
// weatherWear(15);
// weatherWear(25);

// Student manager

const class07Students = [];
function addStudentToClass(studentName) {
    if (studentName === "") {
        console.log("Can not be empty!");
        return;
    }

    if (getNumberOfStudents() >= 6) {
        if (studentName !== "Queen") {
            console.log("Too many!");
            return;
        } else {
            console.log("Long live the Queen!");
        }
    }

    if (class07Students.indexOf(studentName) !== -1) {
        console.log(`${studentName} already in the class!`);
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

// Candy helper optional

const boughtCandyPrices = [];
function addCandy(candyType, weight) {
    const priceCandy = boughtCandyPrices.push;

}

addCandy("sweet", 20);