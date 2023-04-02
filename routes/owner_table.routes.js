const express= require("express")
const owner_routes= express.Router()

const {getowner, postowner, updateowner, deleteowner}= require("../controller/owner_table.controller")

owner_routes.get("/getowner",getowner)
owner_routes.post("/postowner",postowner)
owner_routes.put("/updateowner/:owner_id",updateowner)
owner_routes.delete("/deleteowner/:owner_id",deleteowner)

module.exports= {owner_routes}