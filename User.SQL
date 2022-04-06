-- Total number of users in the system
 Select Count(id) from Users;

-- Total number of Users in the Accounting Department
Select Count(id) from Users
WHERE Department!= 'Accounting';

-- Total number of Users that have not activated their account
Select count(id) from Users
WHERE Status!= 'Activated'

-- First 5 Users that registered for an account in the system
Select * from Users
order by Created_dt asc
limit 5;

-- All Users whose age is greater than 18 but less than 26
Select * from Users
WHERE Age >18 AND Age <26;

-- Users that registered for an account last week Thursday
Select * from Users
WHERE Created_dt = '06-01-2022';

-- All users that registered for an account between last week Saturday and this week Monday
Select * from Users
WHERE Created_dt Between '08-01-2022' AND '10-01-2022';

-- Activate all pending users in the system
UPDATE User
SET Status = 'Activated'
WHERE Status ='pending';

-- Update the User whose name is Tim to Timothy
UPDATE User
SET Name = 'Timothy'
WHERE Status = 'Tim';

-- Total Number of Users in each Department
Select count(id), Department from Users
Group by Department;
    