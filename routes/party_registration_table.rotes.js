const express= require("express")
const party_routes= express.Router()

const {getparty, postparty, updateparty, deleteparty}= require("../controller/party_registration_table.controller")

party_routes.get("/getparty",getparty)
party_routes.post("/postparty",postparty)
party_routes.put("/updateparty/:party_id",updateparty)
party_routes.delete("/deleteparty/:party_id",deleteparty)

module.exports= {party_routes}