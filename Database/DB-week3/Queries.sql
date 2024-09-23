USE mealSharing;

-- Meal queries --

-- Get all meals

SELECT *
FROM Meal;

-- Add a new meal
INSERT INTO Meal (title, description, location, `when`, max_reservations, price, created_date)
VALUES ('Italian Pasta',
        'A classic Italian pasta dish with tomato sauce and basil.',
        'New York City',
        '2024-03-01 18:30:00',
        50,
        15.99,
        CURDATE());

-- Get a meal with any id, fx 1
SELECT *
FROM Meal
WHERE id = 1;

-- Update a meal with any id, fx 1. Update any attribute fx the title or multiple attributes
UPDATE Meal
SET title       = 'Updated Italian Pasta',
    description = 'An updated description for the classic Italian pasta dish.',
    price       = 18.99
WHERE id = 1;

-- Delete a meal with any id, fx 1
DELETE
FROM Meal
WHERE id = 1;

-- Reservation queries --

-- Get all reservations
SELECT *
FROM Reservation;

-- Add a new reservation
INSERT INTO Reservation (number_of_guests, meal_id, created_date, contact_phonenumber, contact_name, contact_email)
VALUES (4,
        1,
        CURDATE(),
        '123-456-7890',
        'John Doe',
        'john@example.com');

-- Get a reservation with any id, fx 1
SELECT *
FROM Reservation
WHERE id = 1;

-- Update a reservation with any id, fx 1. Update any attribute fx the title or multiple attributes
UPDATE Reservation
SET number_of_guests    = 5,
    contact_name        = 'Jane Doe',
    contact_phonenumber = '987-654-3210'
WHERE id = 1;

-- Delete a reservation with any id, fx 1
DELETE
FROM Reservation
WHERE id = 10;

-- Review queries --

-- Get all reviews
SELECT *
FROM Review;

-- Add a new review
INSERT INTO Review (title, description, meal_id, stars, created_date)
VALUES ('Excellent Meal',
        'The meal was delicious and well-prepared.',
        1,
        5,
        CURDATE());

-- Get a review with any id, fx 1
SELECT *
FROM Review
WHERE id = 1;

-- Update a review with any id, fx 1. Update any attribute fx the title or multiple attributes
UPDATE Review
SET title = 'Updated Review Title',
    stars = 4
WHERE id = 1;

-- Delete a review with any id, fx 1
DELETE
FROM Review
WHERE id = 1;

-- Additional queries --

-- Get meals that has a price smaller than a specific price fx 90
SELECT *
FROM Meal
WHERE price < 90;

-- Get meals that still has available reservations
SELECT m.id, m.title, m.max_reservations, COALESCE(reserved_count, 0) AS reserved_count
FROM Meal m
         LEFT JOIN (SELECT meal_id, COUNT(*) as reserved_count
                    FROM Reservation
                    GROUP BY meal_id) r ON m.id = r.meal_id
WHERE COALESCE(reserved_count, 0) < m.max_reservations;

-- Get meals that partially match a title. Rød grød med will match the meal with the title Rød grød med fløde
SELECT *
FROM Meal
WHERE title LIKE 'Rød grød med%';

-- Get meals that has been created between two dates
SELECT *
FROM Meal
WHERE created_date BETWEEN '2024-01-01' AND '2024-12-31';

-- Get only specific number of meals fx return only 5 meals
SELECT *
FROM Meal
LIMIT 5;

-- Get the meals that have good reviews
SELECT m.*
FROM Meal m
         JOIN Review r ON m.id = r.meal_id
WHERE r.stars >= 4;

-- Get reservations for a specific meal sorted by created_date
SELECT *
FROM Reservation
WHERE meal_id = 'specific_meal_id'
ORDER BY created_date DESC;

-- Sort all meals by average number of stars in the reviews
SELECT m.*, AVG(r.stars) AS average_rating
FROM Meal m
         JOIN Review r ON m.id = r.meal_id
GROUP BY m.id, m.title, m.description, m.created_date
ORDER BY average_rating DESC;