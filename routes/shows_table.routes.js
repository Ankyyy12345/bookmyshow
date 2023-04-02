const express= require("express")
const show_routes= express.Router()

const {getshow, postshow, updateshow, deleteshow}= require("../controller/shows_table.controller")

show_routes.get("/getshows",getshow)
show_routes.post("/postshows",postshow)
show_routes.put("/updateshows/:show_id",updateshow)
show_routes.delete("/deleteshows/:show_id",deleteshow)

module.exports= {show_routes}