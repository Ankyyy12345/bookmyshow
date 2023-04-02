
var db = require("../model/connection")

let getseat = async(req,res) =>{
   try{
        const data = req.body;
        const q1 = " select * from seats"
        await db.query (q1, data,(error, result, fields) =>{
            if(error){
                res.send(error.sqlMessage)
            }res.send(result)
        })
    }catch(error){
        res.send(error.sqlMessage)
    }
};


let postseat = async(req, res) =>{
    try{
        const data = req.body;
        const q1 = "insert into seats set ?"
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


let updateseat= async(req, res) =>{
    try{
        const data =[ req.body , req.params.seats_id]
        const q1 = "update seats set ? where seats_id = ? "
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


let deleteseat = async(req, res) =>{
    try{
        const data =[req.params.seats_id]
        const q1 = " delete from seats where seats_id = ?"
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

module.exports = {getseat, postseat, updateseat, deleteseat}