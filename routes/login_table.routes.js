const express= require("express")
const login_routes = express.Router()

const {getlogin, updatelogin, deletelogin}= require("../controller/login_table.controller")


login_routes.get("/getlogin",getlogin)

login_routes.put("/updatelogin/:email",updatelogin)
login_routes.delete("/deletelogin/:email",deletelogin)

module.exports= {login_routes}