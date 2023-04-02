const {response} = require("express");
const conn = require("../model/connection")
var db = require("../model/connection");

let getadd_movie = async(req,res)=>{
    try{
        const q1 = "select * from add_movie"
        await db.query(q1, (error,result,fields)=>{
            if(error){
                res.send(error.sqlMessage)
            }res.send(result)
        })
    }catch(error){
        res.send(error.sqlMessage)
    }
};


let postadd_movie = async(req, res) => {
    try{
        const data = req.body.id
        const q1 = "insert into add_movie SET ?";
        await db.query(q1, data, (err, result, fields) => {
            if (err){
                res.send(err.sqlMessage);
            }
            res.send(result);
        })
    } catch (err){
        res.send(err.sqlMessage);
    }
};


let updateadd_movie = async (req, res) => {
    try{
        const data =[req.body, req.params.movie_id]
        const q2 = "update add_movie SET ? where movie_id = ? "
        await db.query(q2, data, (err, result, fields) =>{
            if(err){
                res.send(err.sqlMessage);
            }res.send(result)
        })
    }catch(err){
        res.send(err.sqlMessage);
    }
}


let deleteadd_movie = async (req, res) =>{
    try{
        const data = req.params.movie_id;
        const q2 = "delete from add_movie where movie_id = ? "
        await db.query(q2, data, (err, result, fields) =>{
            if(err){
                res.send(err.sqlMessage);
            }res.send(result)
        })
    }catch(err){
        res.send(err.sqlMessage);
    }
}  


module.exports = {getadd_movie, postadd_movie, updateadd_movie, deleteadd_movie}