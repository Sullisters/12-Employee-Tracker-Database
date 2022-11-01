const express = require('express');
const  mysql = require('mysql2');
const inquirer = require('inquirer');

const PORT = process.env.port || 3001;
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const db = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: 'password',
        database: 'employees_db'
    },
    console.log(`Connected to the employees_db database`),
    beginQuestions()
);

//Begin Inquirer Prompts
function beginQuestions() {
    inquirer.prompt([
        {
            name: 'question',
            type: 'list',
            choices: ['View all departments', 'View all roles', 'View all employees', 'Add a department', 'Add a role', 'Add an employee', 'Update an employee role'],
            message: 'Please choose one of the following'
        }
    ]).then(answers => {
        switch (answers.question) {
            case 'View all departments':
                viewDepartment();
                break;
            
            case 'View all roles':
                viewRoles();
                break;
            
            case 'View all employees':
                viewEmployees();
                break;
            
            case 'Add a department':
                addDepartment();
                break;

            case 'Add a role':
                addRole();
                break;

            case 'Add an employee':
                addEmployee();
                break;

            case 'Update an employee role':
                updateEmployeeRole();
                break;
        }
    })
};

//View all Departments
function viewDepartment() {
    db.query('SELECT * FROM department', function(err, results) {
        console.table(results);
        beginQuestions()
    })
}

function viewRoles() {
    db.query('SELECT * FROM employee_role', function(err, results) {
        console.table(results);
        beginQuestions()
    })
}

function viewEmployees() {
    db.query('SELECT * FROM employee', function(err, results) {
        console.table(results);
        beginQuestions()
    })
}

function addDepartment() {
    inquirer.prompt([
        {
            name: 'department_name',
            type: 'input',
            message: 'Enter new Department name'
        }
    ]).then(answer => {
        db.query('INSERT INTO department SET ?', {
            department_name:answer.department_name
        })
        beginQuestions();
    })
}

function addRole() {
    inquirer.prompt([
        {
            name: 'title',
            type: 'input',
            message: 'Enter new Role name'
        },
        {
            name: 'salary',
            type: 'input',
            message: 'Enter Salary'
        },
        {
            name: 'department_id',
            type: 'input',
            message: 'Enter Department ID number'
        }
    ]).then(answer => {
        db.query('INSERT INTO employee_role SET ?', {
            title:answer.title,
            salary:answer.salary,
            department_id:answer.department_id
        })
        beginQuestions();
    })
}

function addEmployee() {
    inquirer.prompt([
        {
            name: 'first_name',
            type: 'input',
            message: 'Enter Employee first name'
        },
        {
            name: 'last_name',
            type: 'input',
            message: 'Enter Employee last name'
        },
        {
            name: 'role_id',
            type: 'input',
            message: 'Enter Employee role ID number'
        },
        {
            name: 'manager_id',
            type: 'input',
            message: 'Enter Employee Manager ID number'
        }
    ]).then(answer => {
        db.query('INSERT INTO employee SET ?', {
            first_name:answer.first_name,
            last_name:answer.last_name,
            role_id:answer.role_id,
            manager_id:answer.manager_id
        })
        beginQuestions();
    })
}

function updateEmployeeRole() {
    inquirer.prompt([
        {
            name: 'first_name',
            type: 'list',
            message: 'Choose Employee to Update',
            choices: ['Philip','Sarah','Regina','Daniel']
        },
        {
            name: 'title',
            type: 'list',
            message: 'Choose which Role ID update to',
            choices: [2,4,5,6]
        }
    ])
    .then(answer => {
        // db.query(`UPDATE employee_role WHERE SET ?`, {
        //     title:answer.title
        // })
        // db.query('UPDATE employee WHERE SET ?', {
        //     first_name: answer.first_name
        // })
        beginQuestions();
    })
}

app.use((req,res) => {
    res.status(404).end();
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
})