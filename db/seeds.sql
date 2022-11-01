-- USE employees_db

INSERT INTO department (department_name)
VALUES
("Security"),
("Engineering"),
("Administration"),
("Finance"),
("Networking"),
("Information Technology");

INSERT INTO employee_role (id, title, salary, department_id)
VALUES
(1, "Sr. Lead", 80000, 2),
(2, "Security Team Leader", 60000, 1),
(3, "Jr. Networking Admin", 65000, 5),
(4, "Full Stack Web Developer", 90000, 2),
(5, "Board of Directors Chairman", 100000, 3),
(6, "Driver", 40000, 1);

INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUES
(1, "Philip", "Schreiber", 4, 2),
(2, "Sarah", "Holt", 5, 3),
(3, "Daniel", "Holt", 2, 4),
(4, "Regina", "Schreiber", 6, 5);