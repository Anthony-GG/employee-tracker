INSERT INTO department (id, name)
VALUES (1, "Marketing"),
       (2, "Finance"),
       (3, "Human Resources"),
       (4, "Information Technology"),
       (5, "Management");

INSERT INTO role (id, title, salary, department_id)
VALUES (1550, "Lead Marketing", 2540.15,1),
       (2000, "Investor", 0, 2),
       (3900, "Lead Recruiter", 3432.12, 3),
       (4020, "IT Specialist", 2103.54, 4),
       (5999, "Director of Marketing", 5231.85, 5);

INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUES (125, "Robin", "Robinson", 5999, NULL),
       (64, "Anthony", "Iacano", 4020, 125);

SELECT * FROM department;
SELECT * FROM role;
SELECT * FROM employee;
              