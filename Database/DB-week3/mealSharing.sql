CREATE DATABASE meal_sharing;

USE meal_sharing;

CREATE TABLE meal
(
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255),
    description TEXT,
    location VARCHAR(255),
    `when` DATETIME,
    max_reservations INT,
    price DECIMAL,
    created_date DATE,
    image_url VARCHAR(255)
);

CREATE TABLE reservation
(
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    number_of_guests INT,
    meal_id INT,
    created_date date,
    contact_phonenumber VARCHAR(255),
    contact_name VARCHAR(255),
    contact_email VARCHAR(255),
    FOREIGN KEY (meal_id) REFERENCES meal(id)
);

CREATE TABLE review
(
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255),
    description TEXT,
    meal_id INT,
    stars INT,
    created_date DATE,
    FOREIGN KEY (meal_id) REFERENCES meal(id)
);

INSERT INTO meal (title, description, location, `when`, max_reservations, price, created_date, image_url)
VALUES
    ('Italian Feast', 'A delightful Italian dinner with pasta and tiramisu.', 'Rome', '2024-11-10 19:00:00', 10, 20.00, '2024-10-01', 'https://example.com/images/italian_feast.jpg'),
    ('Sushi Night', 'A sushi-making experience with fresh fish and sake.', 'Tokyo', '2024-11-15 18:00:00', 8, 35.00, '2024-10-01', 'https://example.com/images/sushi_night.jpg'),
    ('BBQ Party', 'Grilled meats, veggies, and more at a cozy outdoor BBQ.', 'Austin', '2024-11-20 17:30:00', 15, 25.00, '2024-10-01', 'https://example.com/images/bbq_party.jpg'),
    ('Mexican Fiesta', 'Authentic Mexican cuisine with tacos and margaritas.', 'Mexico City', '2024-11-25 19:00:00', 12, 18.00, '2024-10-05', 'https://example.com/images/mexican_fiesta.jpg'),
    ('French Delight', 'Classic French dishes with a gourmet touch.', 'Paris', '2024-11-30 20:00:00', 10, 45.00, '2024-10-05', 'https://example.com/images/french_delight.jpg'),
    ('Indian Spice Night', 'Enjoy a variety of Indian curries and naan bread.', 'Mumbai', '2024-12-01 18:00:00', 15, 22.00, '2024-10-10', 'https://example.com/images/indian_spice.jpg'),
    ('Tapas Night', 'Experience Spanish tapas and paella.', 'Barcelona', '2024-12-05 19:30:00', 10, 30.00, '2024-10-15', 'https://example.com/images/tapas_night.jpg'),
    ('Seafood Extravaganza', 'Fresh seafood dishes prepared by a top chef.', 'Sydney', '2024-12-10 18:00:00', 8, 40.00, '2024-10-20', 'https://example.com/images/seafood_extravaganza.jpg'),
    ('Burger Bonanza', 'Juicy burgers with various toppings and sides.', 'New York', '2024-12-15 17:00:00', 20, 15.00, '2024-10-22', 'https://example.com/images/burger_bonanza.jpg'),
    ('Pizza Party', 'Create your own pizza with fresh ingredients.', 'Naples', '2024-12-20 18:30:00', 10, 18.00, '2024-10-25', 'https://example.com/images/pizza_party.jpg'),
    ('Korean BBQ Feast', 'Interactive Korean BBQ with delicious sides.', 'Seoul', '2024-12-25 19:00:00', 12, 28.00, '2024-10-30', 'https://example.com/images/korean_bbq.jpg'),
    ('Middle Eastern Delights', 'A variety of Middle Eastern mezze and main dishes.', 'Beirut', '2024-12-30 19:00:00', 15, 20.00, '2024-10-31', 'https://example.com/images/middle_eastern.jpg'),
    ('Southern Comfort', 'Classic Southern dishes with a modern twist.', 'Nashville', '2025-01-05 18:00:00', 10, 22.00, '2024-11-01', 'https://example.com/images/southern_comfort.jpg'),
    ('Greek Night', 'A selection of Greek dishes with wine pairings.', 'Athens', '2025-01-10 19:30:00', 10, 25.00, '2024-11-03', 'https://example.com/images/greek_night.jpg'),
    ('Dim Sum Delights', 'Assorted dim sum and traditional Chinese tea.', 'Hong Kong', '2025-01-15 17:30:00', 8, 18.00, '2024-11-04', 'https://example.com/images/dim_sum.jpg'),
    ('Pizza Making Workshop', 'Learn how to make your own pizza from scratch.', 'Chicago', '2025-01-20 18:00:00', 10, 15.00, '2024-11-05', 'https://example.com/images/pizza_workshop.jpg'),
    ('Tex-Mex Fiesta', 'A lively Tex-Mex dinner with tacos and nachos.', 'Dallas', '2025-01-25 18:30:00', 12, 20.00, '2024-11-06', 'https://example.com/images/tex_mex.jpg'),
    ('Thai Night', 'An array of spicy and flavorful Thai dishes.', 'Bangkok', '2025-01-30 19:00:00', 10, 25.00, '2024-11-07', 'https://example.com/images/thai_night.jpg'),
    ('German Beer Garden', 'Bratwurst, pretzels, and a selection of beers.', 'Munich', '2025-02-05 17:00:00', 20, 30.00, '2024-11-08', 'https://example.com/images/german_beer.jpg'),
    ('Vegan Brunch', 'A delicious and diverse vegan brunch menu.', 'Los Angeles', '2025-02-10 10:00:00', 15, 18.00, '2024-11-10', 'https://example.com/images/vegan_brunch.jpg');

INSERT INTO review (title, description, meal_id, stars, created_date)
VALUES
    ('Fantastic Italian Dinner', 'The food was amazing and authentic.', 1, 5, '2024-11-10'),
    ('Great sushi experience!', 'Fresh fish and well-organized event.', 2, 4, '2024-11-12'),
    ('BBQ to remember', 'Perfectly cooked meats and a cozy setting.', 3, 5, '2024-11-14'),
    ('Could use more spices', 'The tacos were good but a bit mild.', 4, 3, '2024-11-16'),
    ('Exquisite French flavors', 'The dishes were beautifully presented.', 5, 5, '2024-11-18'),
    ('Too spicy for me!', 'The curry was delicious but very spicy.', 6, 3, '2024-11-20'),
    ('Great tapas experience', 'Loved the variety and flavors.', 7, 4, '2024-11-22'),
    ('Seafood delight', 'Fresh and perfectly cooked seafood.', 8, 5, '2024-11-24'),
    ('Burger overload', 'So many toppings! Really delicious.', 9, 4, '2024-11-26'),
    ('Perfect pizza night', 'Creating our own pizzas was so fun!', 10, 5, '2024-11-28'),
    ('Memorable BBQ night', 'Fun, engaging, and delicious food.', 11, 4, '2024-11-30'),
    ('Flavorful mezze', 'Great mix of flavors in the mezze.', 12, 5, '2024-12-02'),
    ('Comfort food at its best', 'Felt like a warm Southern hug.', 13, 4, '2024-12-04'),
    ('Loved the moussaka', 'Really rich flavors and well-cooked.', 14, 5, '2024-12-06'),
    ('Unique dim sum', 'Each dim sum item was better than the last.', 15, 4, '2024-12-08'),
    ('Workshop was fun', 'Learned so much about pizza making!', 16, 5, '2024-12-10'),
    ('Tex-Mex excellence', 'Great taste and atmosphere.', 17, 4, '2024-12-12'),
    ('Authentic Thai food', 'Spicy and delicious.', 18, 5, '2024-12-14'),
    ('A taste of Germany', 'Bratwurst was fantastic.', 19, 4, '2024-12-16'),
    ('Best vegan brunch', 'Healthy and tasty options.', 20, 5, '2024-12-18');

INSERT INTO reservation (number_of_guests, meal_id, created_date, contact_phonenumber, contact_name, contact_email)
VALUES
    (3, 1, '2024-11-02', '123-456-7890', 'Anna Martin', 'anna@example.com'),
    (4, 2, '2024-11-03', '234-567-8901', 'John Doe', 'john@example.com'),
    (2, 3, '2024-11-04', '345-678-9012', 'Jane Smith', 'jane@example.com'),
    (5, 4, '2024-11-05', '456-789-0123', 'Bob James', 'bob@example.com'),
    (6, 5, '2024-11-06', '567-890-1234', 'Lucy Brown', 'lucy@example.com'),
    (2, 6, '2024-11-07', '678-901-2345', 'Harry Wilson', 'harry@example.com'),
    (3, 7, '2024-11-08', '789-012-3456', 'Emma Davis', 'emma@example.com'),
    (4, 8, '2024-11-09', '890-123-4567', 'Olivia Clark', 'olivia@example.com'),
    (1, 9, '2024-11-10', '901-234-5678', 'Liam Lewis', 'liam@example.com'),
    (5, 10, '2024-11-11', '012-345-6789', 'Sophia Walker', 'sophia@example.com'),
    (3, 11, '2024-11-12', '123-456-7890', 'Mason Hall', 'mason@example.com'),
    (6, 12, '2024-11-13', '234-567-8901', 'Isabella Young', 'isabella@example.com'),
    (2, 13, '2024-11-14', '345-678-9012', 'Michael King', 'michael@example.com'),
    (4, 14, '2024-11-15', '456-789-0123', 'Emily Wright', 'emily@example.com'),
    (2, 15, '2024-11-16', '567-890-1234', 'Joshua Lopez', 'joshua@example.com'),
    (5, 16, '2024-11-17', '678-901-2345', 'Amelia Hill', 'amelia@example.com'),
    (3, 17, '2024-11-18', '789-012-3456', 'James Allen', 'james@example.com'),
    (2, 18, '2024-11-19', '890-123-4567', 'Evelyn Scott', 'evelyn@example.com'),
    (4, 19, '2024-11-20', '901-234-5678', 'Benjamin Green', 'benjamin@example.com'),
    (3, 20, '2024-11-21', '012-345-6789', 'Mia Adams', 'mia@example.com');