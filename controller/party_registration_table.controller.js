const { response } = require("express")
const conn = require("../model/connection")
var db = require("../model/connection")

let getparty = async(req,res) =>{
   try{
        const data = req.body;
        const q1 = " select * from party_registration"
        await db.query (q1, data,(error, result, fields) =>{
            if(error){
                res.send(error.sqlMessage)
            }res.send(result)
        })
    }catch(error){
        res.send(error.sqlMessage)
    }
};


let postparty = async(req, res) =>{
    try{
        const data = req.body;
        const q1 = "insert into party_registration set ?"
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


let updateparty = async(req, res) =>{
    try{
        const data =[ req.body , req.params.party_id]
        const q1 = "update party_registration set ? where party_id = ? "
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


let deleteparty = async(req, res) =>{
    try{
        const data =[req.params.party_id]
        const q1 = " delete from party_registration where party_id = ?"
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

module.exports = {getparty, postparty, updateparty, deleteparty}