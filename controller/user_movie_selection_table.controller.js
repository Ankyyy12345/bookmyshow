
var db = require("../model/connection")

let getuser_movie_selection = async(req,res) =>{
   try{
        const data = req.body;
        const q1 = " select * from user_movie_selection"
        await db.query (q1, data,(error, result, fields) =>{
            if(error){
                res.send(error.sqlMessage)
            }res.send(result)
        })
    }catch(error){
        res.send(error.sqlMessage)
    }
};


let postuser_movie_selection = async(req, res) =>{
    try{
        const data = req.body;
        const q1 = "insert into user_movie_selection set ?"
        await db.query (q1,data,(error,result, fields) =>{
            if(error){
                res.send(error.sqlMessage)
            }
            res.send(result)
        })
    }catch(error){

        res.send(error.sqlMessage);
    } 
};


let updateuser_movie_selection= async(req, res) =>{
    try{
        const data =[ req.body , req.params.movie_name]
        const q1 = "update user_movie_selection set ? where movie_name = ? "
        await db.query(q1, data,(error,result, fields) =>{
            if(error){
                res.send(error.sqlMessage)
            }
            res.send(result)
        })
    }catch(error){
        res.send(error.sqlMessage)
    } 
}


let deleteuser_movie_selection = async(req, res) =>{
    try{
        const data =[req.params.movie_name]
        const q1 = " delete from user_movie_selection where movie_name = ?"
        await db.query(q1, data,(error, result, fields) =>{
            if(error){
                res.send(error.sqlMessage)
            }
            res.send(result)
        })
    }catch(error){
        res.send(error.sqlMessage)
    }
};

module.exports = {getuser_movie_selection, postuser_movie_selection, updateuser_movie_selection, deleteuser_movie_selection}