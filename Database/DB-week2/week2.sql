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
WHERE
    status.name = 'Done'
GROUP BY
    user.id;

