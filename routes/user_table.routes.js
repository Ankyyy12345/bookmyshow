const express= require("express")
const user_routes= express.Router()

const {getuser,updateuser, usersignup , userlogin, deleteuser}= require("../controller/user_table.controller")

user_routes.get("/getuser",getuser)
user_routes.put("/updateuser/:user_id",updateuser)
user_routes.delete("/deleteuser/:user_id",deleteuser)
user_routes.post("/usersignup", usersignup)
user_routes.post("/userlogin", userlogin)
module.exports= {user_routes}