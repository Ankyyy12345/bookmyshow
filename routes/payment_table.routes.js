const express= require("express")
const payment_routes= express.Router()

const {getpayment, postpayment, updatepayment, deletepayment}= require("../controller/payment_table.controller")

payment_routes.get("/getpayment",getpayment)
payment_routes.post("/postpayment",postpayment)
payment_routes.put("/updatepayment:/payment_id",updatepayment)
payment_routes.delete("/deletepayment:/payment_id",deletepayment)

module.exports= {payment_routes}