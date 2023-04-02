const express= require("express")
const screen_routes= express.Router()

const {getscreen, postscreen, updatescreen, deletescreen}= require("../controller/screens_table.controller")

screen_routes.get("/getscreens",getscreen)
screen_routes.post("/postscreens",postscreen)
screen_routes.put("/updatescreens/:screen_id",updatescreen)
screen_routes.delete("/deletescreens/:screen_id",deletescreen)

module.exports= {screen_routes}