const { response } = require("express")
const conn = require("../model/connection")
var db = require("../model/connection")

let getowner = async(req,res) =>{
   try{
        const data = req.body;
        const q1 = " select * from owner"
        await db.query (q1, data,(error, result, fields) =>{
            if(error){
                res.send(error.sqlMessage)
            }res.send(result)
        })
    }catch(error){
        res.send(error.sqlMessage)
    }
};


let postowner = async(req, res) =>{
    try{
        const data = req.body;
        const q1 = "insert into owner set ?"
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


let updateowner = async(req, res) =>{
    try{
        const data =[ req.body , req.params.owner_id]
        const q1 = "update owner set ? where owner_id = ? "
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


let deleteowner = async(req, res) =>{
    try{
        const data =[req.params.owner_id]
        const q1 = " delete from owner where owner_id = ?"
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

module.exports = {getowner, postowner, updateowner, deleteowner}