const express= require("express")
const user_booking_routes= express.Router()

const {getuser_booking, postuser_booking, updateuser_booking, deleteuser_booking}= require("../controller/user_booking_table.controller")

user_booking_routes.get("/getuser_booking",getuser_booking)
user_booking_routes.post("/postuser_booking",postuser_booking)
user_booking_routes.put("/updateuser_booking/:booking_id",updateuser_booking)
user_booking_routes.delete("/deleteuser_booking/:booking_id",deleteuser_booking)

module.exports= {user_booking_routes}