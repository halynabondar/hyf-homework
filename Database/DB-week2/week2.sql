-- Class exercises --

-- 1. Get all the tasks assigned to Pavel;
SELECT COUNT(*) AS pavels_task
FROM task
         JOIN user on user.id = task.user_id
WHERE user.name LIKE '%Pavel%';

-- 2. Find how many tasks each user is responsible for;
SELECT user.name,
       COUNT(*) AS count_tasks_per_user
FROM `user`
         JOIN task ON task.user_id = user.id
GROUP BY user.id;

-- 3. Find how many tasks with a status=Done each user is responsible for;
SELECT user.id, COUNT(*)
FROM `user`
         JOIN task ON user.id = task.user_id
         JOIN status ON status.id = task.status_id
WHERE status.name = 'Done'
GROUP BY user.id;

-- Part 1: Working with tasks --

-- Add a task with these attributes: title, description, created, updated, due_date, status_id, user_id
INSERT INTO task (id, title, description, created, updated, due_date, status_id, user_id)
VALUES (1, 'Task Title', 'Task Description', '2023-01-01', '2023-01-02', '2023-02-01', 1, 1);

-- Change the title of a task
UPDATE task
SET title = 'New Title'
WHERE id = 1;

-- Change a task due date
UPDATE task
SET due_date = '2024-10-10 10:00:00'
WHERE id = 1;

-- Change a task status
UPDATE task
SET status_id = 2
WHERE id = 1;

-- Mark a task as complete
UPDATE task
SET status_id = 3
WHERE id = 1;

-- Delete a task
DELETE
FROM task
WHERE id = 1;

-- Part 2: School database --

-- Create a new database containing the following tables:
CREATE DATABASE SchoolDatabase;

USE SchoolDatabase;

-- Class: with the columns: id, name, begins (date), ends (date)
CREATE TABLE Class
(
    id     INT AUTO_INCREMENT PRIMARY KEY,
    name   VARCHAR(255)                                NOT NULL,
    begins DATE                                        NOT NULL,
    ends   DATE                                        NOT NULL,
    status ENUM ('not-started', 'ongoing', 'finished') NOT NULL
);

-- Student: with the columns: id, name, email, phone, class_id (foreign key)
CREATE TABLE Student
(
    id       INT AUTO_INCREMENT PRIMARY KEY,
    name     VARCHAR(255) NOT NULL,
    email    VARCHAR(255) NOT NULL,
    phone    VARCHAR(20),
    class_id INT,
    FOREIGN KEY (class_id) REFERENCES Class (id)
);

-- Create an index on the name column of the student table.
CREATE INDEX idx_student_name ON Student (name);

-- Add a new column to the class table named status which can only have the following values: not-started, ongoing, finished (hint: enumerations).
ALTER TABLE Class
    ADD COLUMN status ENUM ('not-started', 'ongoing', 'finished') NOT NULL DEFAULT 'not-started';

-- Part 3: More queries --

-- Get all the tasks assigned to users whose email ends in @spotify.com
SELECT *
FROM task
         JOIN user ON task.user_id = user.id
WHERE user.email LIKE '%@spotify.com';

-- Get all the tasks for 'Donald Duck' with status 'Not started'
SELECT task.*
FROM task
         JOIN user ON task.user_id = user.id
         JOIN status ON task.status_id = status.id
WHERE user.name = 'Donald Duck'
  AND status.name = 'Not started';

-- Get all the tasks for 'Maryrose Meadows' that were created in september (hint: month(created)=month_number)
SELECT task.*
FROM task
         JOIN user ON task.user_id = user.id
WHERE user.name = 'Maryrose Meadows'
  AND MONTH(task.created) = 9;

-- Find how many tasks where created in each month, e.g. how many tasks were created in october, how many tasks were created in november, etc. (hint: use group by)
SELECT MONTH(created) AS month, COUNT(*) AS task_count
FROM task
GROUP BY MONTH(created);

-- Part 4: Creating a database --

-- Create Genre table
CREATE TABLE Genre
(
    genre_id INT AUTO_INCREMENT PRIMARY KEY,
    name     VARCHAR(100) NOT NULL
);

-- Create Book table
CREATE TABLE Book
(
    book_id        INT AUTO_INCREMENT PRIMARY KEY,
    title          VARCHAR(255) NOT NULL,
    author         VARCHAR(255) NOT NULL,
    published_year YEAR,
    genre_id       INT,
    FOREIGN KEY (genre_id) REFERENCES Genre (genre_id)
);

-- Create Member table
CREATE TABLE Member
(
    member_id INT AUTO_INCREMENT PRIMARY KEY,
    name      VARCHAR(255)        NOT NULL,
    email     VARCHAR(255) UNIQUE NOT NULL,
    phone     VARCHAR(20)
);

-- Create Rack table
CREATE TABLE Rack
(
    rack_id  INT AUTO_INCREMENT PRIMARY KEY,
    location VARCHAR(50) NOT NULL
);

-- Create BookRack table (Linking Table for Many-to-Many Relationship)
CREATE TABLE BookRack
(
    book_id INT,
    rack_id INT,
    PRIMARY KEY (book_id, rack_id),
    FOREIGN KEY (book_id) REFERENCES Book (book_id),
    FOREIGN KEY (rack_id) REFERENCES Rack (rack_id)
);

-- Create BorrowingLog table
CREATE TABLE BorrowingLog
(
    log_id      INT AUTO_INCREMENT PRIMARY KEY,
    borrow_date DATE NOT NULL,
    return_date DATE,
    book_id     INT,
    member_id   INT,
    FOREIGN KEY (book_id) REFERENCES Book (book_id),
    FOREIGN KEY (member_id) REFERENCES Member (member_id)
);