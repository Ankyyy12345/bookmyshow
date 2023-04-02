
var db = require("../model/connection")

let getuser_booking = async(req,res) =>{
   try{
        const data = req.body;
        const q1 = " select * from user_booking"
        await db.query (q1, data,(error, result, fields) =>{
            if(error){
                res.send(error.sqlMessage)
            }res.send(result)
        })
    }catch(error){
        res.send(error.sqlMessage)
    }
};


let postuser_booking = async(req, res) =>{
    try{
        const data = req.body;
        const q1 = "insert into user_booking set ?"
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


let updateuser_booking= async(req, res) =>{
    try{
        const data =[ req.body , req.params.booking_id]
        const q1 = "update user_booking set ? where booking_id = ? "
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


let deleteuser_booking = async(req, res) =>{
    try{
        const data =[req.params.booking_id]
        const q1 = " delete from user_booking where booking_id = ?"
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

module.exports = {getuser_booking, postuser_booking, updateuser_booking, deleteuser_booking}