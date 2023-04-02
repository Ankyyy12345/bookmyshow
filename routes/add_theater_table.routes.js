const express= require("express")
const add_theater_routes= express.Router()

const {getadd_theater, postadd_theater, updateadd_theater, deleteadd_theater} =require("../controller/add_theater_table.controller")

const add_theater_validation = require("../validation/add_theater_validation")

 add_theater_routes.get("/getadd_theater",getadd_theater)
 add_theater_routes.post("/postadd_theater",add_theater_validation,postadd_theater)
 add_theater_routes.put("/updateadd_theater/:theater_id",add_theater_validation,updateadd_theater)
 add_theater_routes.delete("/deleteadd_theater/:theater_id",deleteadd_theater)

module.exports= {add_theater_routes}