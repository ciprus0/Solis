const mysql = require("mysql2")


module.exports = mysql.createConnection({
    host: "localhost",
    user: "ciprus0",
    password: "Gray29to!",
    database : "nightbux",
    supportBigNumbers: true,
    bigNumberStrings: true
})//.then(console.log("connected"))
