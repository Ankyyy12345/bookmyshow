const express= require("express")
const user_movie_selection_routes= express.Router()

const {getuser_movie_selection, postuser_movie_selection, updateuser_movie_selection, deleteuser_movie_selection}= require("../controller/user_movie_selection_table.controller")

user_movie_selection_routes.get("/getuser_movie_selection",getuser_movie_selection)
user_movie_selection_routes.post("/postuser_movie_selection",postuser_movie_selection)
user_movie_selection_routes.put("/updateuser_movie_selection/:movie_name",updateuser_movie_selection)
user_movie_selection_routes.delete("/deleteuser_movie_selection/:movie_name",deleteuser_movie_selection)

module.exports= {user_movie_selection_routes}