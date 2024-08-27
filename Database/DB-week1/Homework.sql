-- 1. Find out how many tasks are in the task table
SELECT COUNT(*) FROM task;

-- 2. Find out how many tasks in the task table do not have a valid due date
SELECT COUNT(*)
FROM task
WHERE due_date IS NULL;

-- 3. Find all the tasks that are marked as done
-- 4. Find all the tasks that are not marked as done
-- 5. Get all the tasks, sorted with the most recently created first
-- 6. Get the single most recently created task
-- 7. Get the title and due date of all tasks where the title or description contains database
-- 8. Get the title and status (as text) of all tasks
-- 9. Get the name of each status, along with a count of how many tasks have that status
-- 10. Get the names of all statuses, sorted by the status with most tasks first