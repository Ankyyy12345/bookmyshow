
var db = require("../model/connection")

let getscreen = async(req,res) =>{
   try{
        const data = req.body;
        const q1 = " select * from screens"
        await db.query (q1, data,(error, result, fields) =>{
            if(error){
                res.send(error.sqlMessage)
            }res.send(result)
        })
    }catch(error){
        res.send(error.sqlMessage)
    }
};


let postscreen = async(req, res) =>{
    try{
        const data = req.body;
        const q1 = "insert into screens set ?"
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


let updatescreen= async(req, res) =>{
    try{
        const data =[ req.body , req.params.screen_id]
        const q1 = "update screens set ? where screen_id = ? "
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


let deletescreen = async(req, res) =>{
    try{
        const data =[req.params.screen_id]
        const q1 = " delete from screens where screen_id = ?"
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

module.exports = {getscreen, postscreen, updatescreen, deletescreen}