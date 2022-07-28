const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const render = require("./src/page-template")
const fs = require("fs");

const teamMembers = [];





function buildTeam(){
    fs.writeFile("dist/team.html", render(teamMembers), (err) => {
        if(err){
            console.log(err);
        }
    });


}

buildTeam();