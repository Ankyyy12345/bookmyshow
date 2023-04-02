const express= require("express")
const registration_routes= express.Router()

const {getregistration, postregistration,postlogin, updateregistration, deleteregistration}= require("../controller/registration_controller")

registration_routes.get("/getregistration",getregistration)
registration_routes.post("/postregistration",postregistration)
registration_routes.put("/updateregistration/:id",updateregistration)
registration_routes.delete("/deleteregistration/:id",deleteregistration)
registration_routes.post("/postlogin",postlogin)
module.exports= {registration_routes}