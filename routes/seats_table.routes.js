const express= require("express")
const seat_routes= express.Router()

const {getseat, postseat, updateseat, deleteseat}= require("../controller/seats_table.controller")

seat_routes.get("/getseats",getseat)
seat_routes.post("/postseats",postseat)
seat_routes.put("/updateseats/:seats_id",updateseat)
seat_routes.delete("/deleteseats/:seats_id",deleteseat)

module.exports= {seat_routes}