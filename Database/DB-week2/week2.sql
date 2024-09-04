-- Class exercises

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

-- Part 1: Working with tasks

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