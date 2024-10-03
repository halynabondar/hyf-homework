# CREATE DATABASE meal_sharing;
#
# USE meal_sharing;
#
# CREATE TABLE meal
# (
#     id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
#     title VARCHAR(255),
#     description TEXT,
#     location VARCHAR(255),
#     `when` DATETIME,
#     max_reservations INT,
#     price DECIMAL,
#     created_date DATE
# );
#
# CREATE TABLE reservation
# (
#     id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
#     number_of_guests INT,
#     meal_id INT,
#     created_date date,
#     contact_phonenumber VARCHAR(255),
#     contact_name VARCHAR(255),
#     contact_email VARCHAR(255),
#     FOREIGN KEY (meal_id) REFERENCES meal(id)
# );
#
# CREATE TABLE review
# (
#     id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
#     title VARCHAR(255),
#     description TEXT,
#     meal_id INT,
#     stars INT,
#     created_date DATE,
#     FOREIGN KEY (meal_id) REFERENCES meal(id)
# );

# INSERT INTO meal (title, description, location, `when`, max_reservations, price, created_date)
# VALUES
#     ('Italian Feast', 'A delightful Italian dinner with pasta and tiramisu.', 'Rome', '2024-10-10 19:00:00', 10, 20.00, '2024-10-01'),
#     ('Sushi Night', 'A sushi-making experience with fresh fish and sake.', 'Tokyo', '2024-10-15 18:00:00', 8, 35.00, '2024-10-01'),
#     ('BBQ Party', 'Grilled meats, veggies, and more at a cozy outdoor BBQ.', 'Austin', '2024-10-20 17:30:00', 15, 25.00, '2024-10-01');
#
INSERT INTO reservation (number_of_guests, meal_id, created_date, contact_phonenumber, contact_name, contact_email)
VALUES
    (4, 2, '2024-10-02', '123-456-7890', 'John Doe', 'johndoe@example.com'),
    (2, 2, '2024-10-03', '987-654-3210', 'Jane Smith', 'janesmith@example.com'),
    (5, 3, '2024-10-04', '555-123-4567', 'Alice Johnson', 'alicejohnson@example.com');

# INSERT INTO review (title, description, meal_id, stars, created_date)
# VALUES
#     ('Amazing Italian Dinner!', 'The pasta was homemade and the dessert was incredible.', 2, 5, '2024-10-02'),
#     ('Best Sushi Experience', 'Fresh sushi and great company. Highly recommend!', 2, 4, '2024-10-03'),
#     ('Fun BBQ Party', 'Great BBQ and a chill atmosphere!', 3, 4, '2024-10-04');
