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

//Prompt for Manager Name input
        {
            type: 'input',
            name: 'name',
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
        createTeam();

    });
};

function createTeam() {

    inquirer.prompt( {

        type: 'list',
        name: 'choice',
        message: 'Which type of team member would you like to add?',
        choices: [
            'Engineer',
            'Intern',
            'I do not want ot add any more'
        ]

    }).then((answers) => {
        switch (answers.choice){
            case "Engineer":
                addEngineer();
                break;
            case "Intern":
                addIntern();
                break;
            default:
                buildTeam();
        }
    })
   
};

function addEngineer() {
    inquirer.prompt([

        //Prompt for Engineer ID input
                {
                    type: 'input',
                    name: 'name',
                    validate: (answer) => {
                        if (answer !== ''){
                            return true;
                        }
                        return "Please enter at least one character";
                    },
                },
        //Prompt for Engineer ID input
                {
                    type: 'input',
                    name: 'id',
                    message: "Please enter id.",
                    validate: (answer) => {
                        const pass = answer.match(/^[1-9]\d*$/)
                        if (pass){
                            if(idArray.includes(answer)){
                                return "This id is already taken"
                            }else{
                                return true;
                            }
                        }
                        return 'Please enter a positive number greater than 0'
                    },
        
                },
        //Prompt for email input
                {
                    type: 'input',
                    name: 'email',
                    message: "Please enter email address.",
                    validate: (answer) => {
                        const pass = answer.match(/\S+@\S+\.\S+/);
                        if (pass){
                            return true
                        }
                        return 'Please enter a valid email.'
                    },
        
                },
        
        //Prompt for Engineer office github input
                {
                    type: 'input',
                    name: 'github',
                    message: "Please enter github.",
                    validate: (answer) => {
                        if (answer !== ''){
                            return true;
                        }
                        return "Please enter at least one character";
                    },
        
                },
            ]).then((answers) => {
                const engineer = new Engineer(
                    answers.name,
                    answers.id,
                    answers.email,
                    answers.github
                )
                teamMembers.engineers.push(engineer);
                idArray.push(answers.id);
                createTeam();
        
            });
        };



function addIntern() {

    inquirer.prompt([

        //Prompt for intern name input
                {
                    type: 'input',
                    name: 'name',
                    validate: (answer) => {
                        if (answer !== ''){
                            return true;
                        }
                        return "Please enter at least one character";
                    },
                },
        //Prompt for intern id input
                {
                    type: 'input',
                    name: 'id',
                    message: "Please enter id.",
                    validate: (answer) => {
                        const pass = answer.match(/^[1-9]\d*$/)
                        if (pass){
                            if(idArray.includes(answer)){
                                return "This id is already taken"
                            }else{
                                return true;
                            }
                        }
                        return 'Please enter a positive number greater than 0'
                    },
        
                },
        //Prompt for email input
                {
                    type: 'input',
                    name: 'email',
                    message: "Please enter email address.",
                    validate: (answer) => {
                        const pass = answer.match(/\S+@\S+\.\S+/);
                        if (pass){
                            return true
                        }
                        return 'Please enter a valid email.'
                    },
        
                },
        
        //Prompt for intern school
                {
                    type: 'input',
                    name: 'school',
                    message: "Please enter school.",
                    validate: (answer) => {
                        if (answer !== ''){
                            return true;
                        }
                        return "Please enter at least one character";
                    },
        
                },
            ]).then((answers) => {
                const intern = new Intern(
                    answers.name,
                    answers.id,
                    answers.email,
                    answers.school
                )
                teamMembers.interns.push(intern);
                idArray.push(answers.id);
                createTeam();
        
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