
const db = require("../model/connection")


let getcancel_booking = async(req, res) =>{
    try{
        const q1 = "select * from cancel_booking"
        await db.query(q1,(error, result, fields)=>{
        if(error){
            res.send(error.sqlMessage)
        }res.send(result)
        })
    }catch(error){
        res.send(error.sqlMessage)
    }
};

let postcancel_booking = async(req, res) =>{
    try{
        const data = req.body
        const q1= "insert into cancel_booking set ?"
        await db.query(q1, data,(error, result, fields) => {
            if(error){
                res.send(error.sqlMessage)
            }res.send(result)
        })
    }catch(error){
               res.send(error.sqlMessage)
    }
};

let updatecancel_booking = async(req, res)=>{
    try{
        const data= [req.body, req.params.cancel_booking_id]
        const q1 = "update cancel_booking set ? where canel_booking_id ? "
        await db.query(q1, data,(error, result, fields)=>{
        if(error){
            res.send(error.sqlMessage)
        }res.send(result)
        })
    }catch(error){
        res.send(error.sqlMessage)
    }
};

let deletecancel_booking = async(req, res)=>{
    try{
        const data = req.params.cancel_booking_id
        const q1 = "delete from cancel_booking where cancel_booking_id ?"
        await db.query(q1, data,(error,result, fields)=>{
            if(error){
                res.send(error.sqlMessage)
            }res.send(result)
        })
    }catch(error){
        res.send(error.sqlMessage)
    }
};
module.exports = { getcancel_booking, postcancel_booking, updatecancel_booking,deletecancel_booking}

