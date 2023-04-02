const express= require("express")
const admin_routes= express.Router()

const {getadmin, postadmin, updateadmin, deleteadmin}= require("../controller/admin_table.controller")

const admin_validation = require("../validation/admin_validation")

admin_routes.get("/getadmin",getadmin)
admin_routes.post("/postadmin",admin_validation,postadmin)
admin_routes.put("/updateadmin/:admin_id",admin_validation,updateadmin)
admin_routes.delete("/deleteadmin/:admin_id",deleteadmin)

module.exports= {admin_routes}