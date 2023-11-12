INSERT INTO department (name)
VALUES ("Legal"),
       ("Finance"),
       ("Marketing"),
       ("Engineering"),
       ("Human Resources");

INSERT INTO role (title, salary, department_id)
VALUES ("Head of Legal",  200000, 1),
       ("Senior Legal Counsel",  120000, 1),
       ("Group Financial Controller",  240000, 2),
       ("Financial Accountant",  110000, 2),
       ("Commercial Analyst",  80000, 2),
       ("Chief Marketing Officer",  300000, 3),
       ("Head of Marketing",  190000, 3),
       ("Principal Software Engineer",  250000, 4),
       ("Human Resources Manager",  60000, 5);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Veronica", "Brown", 1, null),
       ("Miguel", "Brown", 2, 1),
       ("Muhammad", "Smith", 3, null),
       ("Tom", "Smith", 4, 3),
       ("Dom", "Smith", 5, 3),
       ("Jessica", "Sarah-Parker", 6, null),
       ("Parker", "Jessica-Sarah", 7, 6),
       ("Spider", "Mann", 8, null),
       ("Bat", "Mann", 8, null),
       ("Christopher", "Peacock", 9, null);
       