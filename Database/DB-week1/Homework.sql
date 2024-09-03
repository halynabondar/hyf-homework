-- 1. Find out how many tasks are in the task table
SELECT COUNT(*)
FROM task;

-- 2. Find out how many tasks in the task table do not have a valid due date
SELECT COUNT(*)
FROM task
WHERE due_date IS NULL;

-- 3. Find all the tasks that are marked as done
SELECT task.*
FROM task
         JOIN status ON task.status_id = status.id
WHERE status.name = 'Done';

-- 4. Find all the tasks that are not marked as done
SELECT task.*
FROM task
         JOIN status ON task.status_id = status.id
WHERE status.name != 'Done';

-- 5. Get all the tasks, sorted with the most recently created first
SELECT *
FROM task
ORDER BY created DESC;

-- 6. Get the single most recently created task
SELECT *
FROM task
ORDER BY created DESC
LIMIT 1;

-- 7. Get the title and due date of all tasks where the title or description contains database
SELECT *
FROM task
WHERE title LIKE '%database%'
   OR description LIKE '%database%';

-- 8. Get the title and status (as text) of all tasks
SELECT title,
       status_id
FROM task;

-- 9. Get the name of each status, along with a count of how many tasks have that status
SELECT status.name, COUNT(*)
FROM task
         JOIN status ON task.status_id = status.id
GROUP BY status.name;

-- 10. Get the names of all statuses, sorted by the status with most tasks first
SELECT status.name, COUNT(task.status_id) AS status_count
FROM status
         JOIN task on task.status_id = status.id
GROUP BY
    task.status_id
ORDER BY status_count DESC;


-- Class exercises
-- Implement the following queries:

-- Select the names and phones of all users;
SELECT name,
       phone
FROM user;

-- Select the name of the user with id=10;
SELECT name
FROM user
WHERE id = 10;

-- Find how many users exist in the database;
SELECT COUNT(*) AS user_count
FROM mysql.user;

-- Select the names of the first 5 users in the database;
SELECT name
FROM user
LIMIT 5;

-- Select the names of the last 3 users in the database;
SELECT name
FROM user
ORDER BY name DESC
LIMIT 3;

-- Sum all the ids in the user table;
SELECT SUM(id) AS total_id_sum
FROM user;

-- Select all users and order them alphabetically by name;
SELECT *
FROM user
ORDER BY name;

-- Find all tasks that include SQL either on the title or on the description;
SELECT *
FROM task
WHERE title LIKE '%SQL%'
   OR description LIKE '%SQL%';

-- Find the title of all tasks that the user Maryrose is responsible for;
SELECT t.title
FROM task t
         JOIN user u ON t.user_id = u.id
WHERE u.name = '%Maryrose%';

-- Find how many tasks each user is responsible for;
SELECT u.name, COUNT(*) AS task_count
FROM task t
         JOIN user u ON t.user_id = u.id
GROUP BY u.name;

-- Find how many tasks with a status=Done each user is responsible for;
SELECT u.name, COUNT(*) AS done_task_count
FROM task t
         JOIN user u ON t.user_id = u.id
WHERE t.status_id = 3
GROUP BY u.name;