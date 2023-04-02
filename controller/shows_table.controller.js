
var db = require("../model/connection")

let getshow = async(req,res) =>{
   try{
        const data = req.body;
        const q1 = " select * from shows"
        await db.query (q1, data,(error, result, fields) =>{
            if(error){
                res.send(error.sqlMessage)
            }res.send(result)
        })
    }catch(error){
        res.send(error.sqlMessage)
    }
};


let postshow = async(req, res) =>{
    try{
        const data = req.body;
        const q1 = "insert into shows set ?"
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


let updateshow= async(req, res) =>{
    try{
        const data =[ req.body , req.params.show_id]
        const q1 = "update shows set ? where show_id = ? "
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


let deleteshow = async(req, res) =>{
    try{
        const data =[req.params.show_id]
        const q1 = " delete from shows where show_id = ?"
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

module.exports = {getshow, postshow, updateshow, deleteshow}