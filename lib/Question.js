module.exports = {
    whatYouwantTodo: {
        name: 'decision',
        type: "list",
        message: "What would you like to do?",
        choices: ["ADD", "VIEW ALL Employee", "UPDATE"]
    },


    whouWouldyouliketoadd: function (roles) {
        return [
            {
                name: 'first_name',
                type: "input",
                message: "user name ?",
            },
            {
                name: 'last_name',
                type: "input",
                message: "user last name  ?",
            },
            // {
            //     name: 'departement',
            //     type: "list",
            //     choices: ["IT", "FINANCE", "legal"]
            // },  
            {
                name: 'role_id',
                type: "list",
                message: "Employee's role?",
                choices: roles
            },
            // {
            //     name: 'salary',
            //     type: "input",
            //     message: "what is the user Salaray"
            // },

        ]
    },
    whouWouldyouliketoview: [
        {
            name: 'user',
            type: "input",
            message: "View all the users ?",
        },


    ],
    UpdateEmployeerole: [
        {
            name: 'role',
            type: "input",
            message: "Would you like to update employee role?",
        },


    ],
}
