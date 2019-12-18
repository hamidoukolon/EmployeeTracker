module.exports ={
    whatYouwantTodo: {
        name: 'decision',
        type: "list",
        message: "What would you like to do?",
        choices: ["ADD", "VIEW", "UPDATE"]
    },


    whouWouldyouliketoadd:[
    {
        name: 'departement',
        type: "input",
        message: "What would you like to add an departement ?",
    },
    {
        name: 'roles',
        type: "input",
        message: "What would you like to add an role ?",
    },
    {
        name: 'employee',
        type: "input",
        message: "What would you like to add an Employee ?",
    },  

],
    whouWouldyouliketoview:[
        {
            name: 'departement',
            type: "input",
            message: "What is the departement you want to view ?",
        },
        {
            name: 'roles',
            type: "input",
            message: "What is the role you want to view ?",
        },
        {
            name: 'employee',
            type: "input",
            message: "What employee you want to view ?",
        },  
    
],
UpdateEmployeerole:[
    {
        name: 'role',
        type: "input",
        message: "Would you like to update employee role?",
    },
 

],
}
