INSERT INTO department (id, name)
VALUES (1000, "Marketing"),
       (2000, "Finance"),
       (3000, "Human Resources"),
       (4000, "Information Technology"),
       (5000, "Management");

INSERT INTO role (id, title, salary, department_id)
VALUES (1550, "Lead Marketing", 2540.15,1000),
       (2000, "Investor", 0, 2000),
       (3900, "Lead Recruiter", 3432.12, 3000),
       (4020, "IT Specialist", 2103.54, 4000),
       (5999, "Director of Marketing", 5231.85, 5000);

INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUES (125, "Robin", "Robinson", 5999, NULL),
       (64, "Anthony", "Iacano", 4020, 125);

--prints the information to the console for verification and visibility purposes
SELECT * FROM department;
SELECT * FROM role;
SELECT * FROM employee;
              