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
    created_date DATE
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