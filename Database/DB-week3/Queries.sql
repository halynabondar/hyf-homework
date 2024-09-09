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