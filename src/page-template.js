function renderManager(manager){
    return `
    <div class="card employee-card">
    <div class="card-header">
        <h2 class="card-title">${manager.getName()}</h2>
        <h3 class="card-title">${manager.getRole()}</h3>
    </div>
    </div>

    <div class="card-body">
        <ul class="list-group">
          
            <li class="list-group-item">Email: <a href="mailto:${manager.getEmail()}">${manager.getEmail()}</li>
            <li class="list-group-item">Office Number: ${manager.getOffice()}</li>
        </ul>
    </div>
    `;
}   
function renderEngineers(engineers){
    const markup = engineers.map((engineer) => {
        return `
        <div class="card employee-card">
    <div class="card-header">
        <h2 class="card-title">${engineer.getName()}</h2>
        <h3 class="card-title">${engineer.getRole()}</h3>
    </div>
    </div>

    <div class="card-body">
        <ul class="list-group">
           
            <li class="list-group-item">Email: <a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</li>
            <li class="list-group-item">GitHub:  <a href="https://github.com/${engineer.getGithub()}"></li>
        </ul>
    </div>
        `;
    });
    return markup.join(',');
    
    
}
 function renderInterns(interns){
     const markup = interns.map((intern) => {
         return `
        <div class="card employee-card">
     <div class="card-header">
        <h2 class="card-title">${intern.getName()}</h2>
         <h3 class="card-title">${intern.getRole()}</h3>
     </div>
     </div>

     <div class="card-body">
        <ul class="list-group">

             <li class="list-group-item">Email: <a href="mailto:${intern.getEmail()}">${intern.getEmail()}</li>
            <li class="list-group-item">School: ${intern.getSchool()}</li>
         </ul>
     </div>
         `;
     });
    return markup.join(',');
 }

function generateTeam(teamMembers){
    return `
        ${renderManager(teamMembers.manager)}
        ${renderEngineers(teamMembers.engineers)}
        ${renderInterns(teamMembers.interns)}
    
    `
}

function render(teamMembers){
    return  `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
        <title>My Team</title>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.1.1/css/fontawesome.min.css" integrity="sha384-zIaWifL2YFF1qaDiAo0JFgsmasocJ/rqu7LKYH8CoBEXqGbb9eO+Xi3s6fQhgFWM" crossorigin="anonymous"></link>
        <link rel="stylesheet" href="style.css">
    </head>
    <body>

    
        <div class="container-fluid">
            <div class="row">
                <div class="col-12 jumbotron mb-3 team-heading">
                    <h1 class="text-center">My Team</h1>
                </div>
            </div>
        </div>
        <div class="container">
            <div class="row">
                <div class="team-area col-12 d-flex justify-content-center">
                        ${generateTeam(teamMembers)}
                </div>
            </div>
        </div>

    </body>
    </html> 
    `

    
   
};

module.exports = render;