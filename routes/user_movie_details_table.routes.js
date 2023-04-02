const express= require("express")
const user_movie_details_routes= express.Router()

const {getuser_movie_details, postuser_movie_details, updateuser_movie_details, deleteuser_movie_details}= require("../controller/user_movie_details_table.controller")

user_movie_details_routes.get("/getuser_movie_details",getuser_movie_details)
user_movie_details_routes.post("/postuser_movie_details",postuser_movie_details)
user_movie_details_routes.put("/updateuser_movie_details/:user_movie_details_id",updateuser_movie_details)
user_movie_details_routes.delete("/deleteuser_movie_details/:user_movie_details_id",deleteuser_movie_details)

module.exports= {user_movie_details_routes}