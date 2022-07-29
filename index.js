const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const render = require("./src/page-template")
const fs = require("fs");

const teamMembers = {
    manager: null,
    engineers: [],
    interns:[]
};

const idArray =[]

function createManager(){

    inquirer.prompt([

//Prompt for Manager ID input
        {
            type: 'input',
            name: 'managerName',
            validate: (answer) => {
                if (answer !== ''){
                    return true;
                }
                return "Please enter at least one character";
            },
        },
//Prompt for Manager ID input
        {
            type: 'input',
            name: 'managerID',
            message: "Please enter team manager Id.",
            validate: (answer) => {
                const pass = answer.match(/^[1-9]\d*$/)
                if (pass){
                    return true
                }
                return 'Please enter a positive number greater than 0'
            },

        },
//Prompt for Manager email input
        {
            type: 'input',
            name: 'managerEmail',
            message: "Please enter team manager's email.",
            validate: (answer) => {
                const pass = answer.match(/\S+@\S+\.\S+/);
                if (pass){
                    return true
                }
                return 'Please enter a valid email.'
            },

        },

//Prompt for Manager office number input
        {
            type: 'input',
            name: 'managerOfficeNumber',
            message: "Please enter team manager's office number.",
            validate: (answer) => {
                const pass = answer.match(/^[1-9]\d*$/)
                if (pass){
                    return true
                }
                return 'Please enter a positive number greater than 0'
            },

        },
    ]).then((answers) => {
        const manager = new Manager(
            answers.managerName,
            answers.managerID,
            answers.managerEmail,
            answers.managerOfficeNumber
        )
        teamMembers.manager = manager;
        idArray.push(answers.managerID);
        buildTeam();

    });
};


function buildTeam(){
    fs.writeFile("dist/team.html", render(teamMembers), (err) => {
        if(err){
            console.log(err);
        }
    });


}

createManager();