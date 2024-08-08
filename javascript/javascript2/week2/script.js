// 1. Warmup array exercises
// 1.1. Doubling of number

let numbers = [1, 2, 3, 4];
let newNumbers = numbers
    .filter(number => number % 2 !== 0)
    .map(number => number * 2);
console.log("The doubled numbers are", newNumbers); // [2, 6]

// 1.3. Working with movies
// Create an array of movies containing the movies with a short title

const shortMoviesTitle = movies.filter(movie => movie.title.length < 20);
console.log(shortMoviesTitle);

// Create an array of movie titles with long movie titles

const longMoviesTitle = movies.filter(movie => movie.title.length > 20);
console.log(longMoviesTitle);

// Count the number of movies made between 1980-1989 (including both the years)

const movies1980s = movies.filter(movie => movie.year >= 1980 && movie.year <= 1989);
const countMovies1980s = movies1980s.length;
console.log(`The number of movies made between 1980 and 1989 is ${countMovies1980s}`);

// Create a new array that has an extra key called tag. The tag is based on the rating: Good (>= 7), Average (>= 4 and < 7), Bad (< 4)

const moviesWithTags = movies.map(movie => {
    let tag;

    if (movie.rating >= 7) {
        tag = "Good";
    } else if (movie.rating >= 4 && movie.rating < 7) {
        tag = "Average";
    } else {
        tag = "Bad";
    }
    return {...movie, tag};
})
console.log(moviesWithTags);

// Using chaining, first filter the movies array to only contain the movies rated higher than 6. Now map the movies array to only the rating of the movies.

const moviesWithHighRating = movies
    .filter(movie => movie.rating >= 6)
    .map(movie => movie.rating)
console.log(moviesWithHighRating);

// Count the total number of movies containing any of following keywords: Surfer, Alien or Benjamin. So if there were 3 movies that contained Surfer, 1 with Alien and 2 with Benjamin, you would return 6. Can you make sure the search is case-insensitive?

const keywords = ["surfer", "alien", "benjamin"];
const totalMoviesWithKeywords = movies.reduce((count, movie) => {
    const titleLower = movie.title.toLowerCase();
    const hasKeyword = keywords.some(keyword => titleLower.includes(keyword));
    return hasKeyword ? count + 1 : count;
}, 0);
console.log(totalMoviesWithKeywords);

// Create an array of movies where a word in the title is duplicated. Fx "Star Wars: The Clone Wars" the word Wars is duplicated. Here are some madeup examples of movies with duplicated words in the title: "The three men and the pistol", "Chase three - The final chase"

const duplicates = movies.filter((item, index) => movies.indexOf(item) !== index);
console.log(duplicates);

// Calculate the average rating of all the movies using reduce. Optional

const totalSum = movies.reduce((acc, rating) => acc + rating, 0);
const numMovies = movies.length;
const averageRating = totalSum / numMovies;
console.log("Average Rating:", averageRating);

// Count the total number of Good, Average and Bad movies using reduce. A return could fx be {goodMovies: 33, averageMovies: 45, goodMovies: 123} Optional