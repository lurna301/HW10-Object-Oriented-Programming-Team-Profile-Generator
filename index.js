const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const fs = require("fs");

const teamMembers = [];


function render(teamMembers){
    return "this will be html"
}

function buildTeam(){
    fs.writeFile("dist/team.html", render(teamMembers), (err) => {
        if(err){
            console.log(err);
        }
    });


}

buildTeam();