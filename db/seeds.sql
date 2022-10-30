INSERT INTO department (department_name)
VALUES
("Security"),
("Engineering"),
("Administration"),
("Finance"),
("Networking"),
("Information Technology");

INSERT INTO employee_role (id, title, salary)
VALUES
(1, "Sr. Lead", 80000),
(2, "Security Team Leader", 60000),
(3, "Jr. Networking Admin", 65000),
(4, "Full Stack Web Developer", 90000),
(5, "Board of Directors Chairman", 100000),
(6, "Driver", 40000, 6);

INSERT INTO employee (id, first_name, last_name, manager_id)
VALUES
(1, "Philip", "Schreiber", 2),
(2, "Sarah", "Holt", 3),
(3, "Daniel", "Holt", 4),
(4, "Regina", "Schreiber", 5);