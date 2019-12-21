// Dependencies
// =============================================================
var express = require("express");
var path = require("path");
const { prompt } = require('inquirer');
const question = require('./lib/Question.js')
var fs = require('fs')
const db = require("./Utils/db")
const connection = require('./Utils/connection');

const addEmployee = async () => {
  var roles = await db.viewAllRoles();
  const roleChoices = roles.map(x => ({ name: x.title, value: x.id }))
  const answer = await prompt(question.whouWouldyouliketoadd(roleChoices))

  const newEmp = await db.createEmployee(answer)
  console.log(newEmp)


  // prompt(question.whouWouldyouliketoadd)

  //   .then(function (answer) {
  //     // when finished prompting, insert a new item into the db with that info
  //     connection.query(
  //       "INSERT INTO employee SET ?",
  //       {
  //         first_name: answer.first_name,
  //         last_name: answer.last_name,
  //         role_id: answer.role,
  //         // Name_in_department: answer.title,
  //         salary: answer.salary

  //       },
  //       function (err) {
  //         if (err) throw err;
  //         // re-prompt the user for if they want to bid or post
  //         start();
  //       }
  //     );

  //   });
}
const viewEmployee = () => {
  // when finished prompting, insert a new item into the db with that info
  // prompt(question.whouWouldyouliketoview)
  //   .then(function (answer) {
  // when finished prompting, insert a new item into the db with that info
  connection.query(
    'SELECT * FROM Employee',
    function (err, results) {
      if (err) throw err;
      console.table(results)

      // re-prompt the user for if they want to bid or post
      start();
    })
  // });
}
const updateEmployee = () => {
  prompt(question.UpdateEmployeerole)
    .then(function (answer) {
      connection.query(
        "UPDATE auctions SET ? WHERE ?",
        [
          {
            highest_bid: answer.bid
          },
          {
            id: chosenItem.id
          }
        ],
        function (error) {
          if (error) throw err;
          console.log("");
          start();
        }
      );


    })
}


const start = async () => {
  try {
    let answer = await prompt(question.whatYouwantTodo);

    switch (answer.decision) {
      case "ADD":
        return addEmployee();
      case "VIEW ALL Employee":
        return viewEmployee();
      case "UPDATE":
        return updateEmployee();
    }
  } catch (err) {
    console.log(err)
  }
}

start();