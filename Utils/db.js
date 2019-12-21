const connection = require("./connection");


class DB {
    constructor(connection) {
        this.connection = connection;
    }

    viewAllRoles() {
        return this.connection.query(
            "SELECT role.id, role.title, department.Name_in_department AS department, role.salary FROM role LEFT JOIN department on role.department_id = department.id"
        )
    }

    createEmployee(employee) {
        return this.connection.query("INSERT INTO employee SET ?", employee)
    }
    viewEmployee(employee) {
        return this.connection.query(
            "SELECT * FROM  WHERE artist = ?;",
            [employee]
        );

    }



}

module.exports = new DB(connection);
