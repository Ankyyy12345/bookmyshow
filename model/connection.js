const mysql= require("mysql")

const conn = mysql.createConnection({
    host: "localhost",
    password: "",
    user: "root",
    database: "book_my_show"
})

conn.connect((error)=>{
    if(error){
        console.log(error.sqlMessage)
    }
    else{
        console.log("database connected")
    }

})

module.exports = conn