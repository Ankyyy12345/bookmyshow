const express= require("express")

const add_movie_routes= express.Router()

const {getadd_movie, postadd_movie, updateadd_movie, deleteadd_movie} =require("../controller/add_movie_table.controller")

const add_movie_validation = require ("../validation/add_movie_validation")

 add_movie_routes.get("/getadd_movie",getadd_movie)
 add_movie_routes.post("/postadd_movie",add_movie_validation,postadd_movie)
 add_movie_routes.put("/updateadd_movie/:movie_id",add_movie_validation,updateadd_movie)
 add_movie_routes.delete("/deleteadd_movie/:movie_id",deleteadd_movie) 

module.exports= {add_movie_routes}

