const express = require("express")
const cancel_booking_routes = express.Router()

const { getcancel_booking, postcancel_booking, updatecancel_booking,deletecancel_booking}= require("../controller/cancel_booking_table.controller")

cancel_booking_routes.get("/getcancel_booking", getcancel_booking)
cancel_booking_routes.post("/postcancel_booking", postcancel_booking)
cancel_booking_routes.put("/updatecancel_booking/:cancellation_id", updatecancel_booking)
cancel_booking_routes.delete("deletecancel_booking/:cancellation_id", deletecancel_booking)

module.exports= {cancel_booking_routes}