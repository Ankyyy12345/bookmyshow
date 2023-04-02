const express= require("express")
const booking_confirmation_routes= express.Router()

const {getbooking_confirmation, postbooking_confirmation, updatebooking_confirmation, deletebooking_confirmation} =require("../controller/booking_confirmation_table.controller")

booking_confirmation_routes.get("/getbooking_confirmation", getbooking_confirmation)
booking_confirmation_routes.post("/postbooking_confirmation", postbooking_confirmation)
booking_confirmation_routes.put("/updatebooking_confirmation/:booking_confirmation_id", updatebooking_confirmation)
booking_confirmation_routes.delete("/deletebooking_confirmation/:booking_confirmation_id", deletebooking_confirmation)

module.exports ={booking_confirmation_routes}