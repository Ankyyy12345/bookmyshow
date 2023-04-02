
const db = require("../model/connection");

let getbooking_confirmation = async(req,res)=>{
    try{
        const q1 = "select * from booking_confirmation"
        await db.query(q1, (error,result,fields)=>{
            if(error){
                res.send(error.sqlMessage)
            }res.send(result)
        })
    }catch(error){
        res.send(error.sqlMessage)
    }
};


let postbooking_confirmation = async(req, res) => {
    try{
        const data = req.body;
        const q1 = "insert into booking_confirmation SET ?";
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


let updatebooking_confirmation = async (req, res) => {
    try{
        const data =[req.body, req.params.booking_confirmation_id]
        const q2 = "update booking_confirmation SET ? where bookig_confirmation_id = ? "
        await db.query(q2, data, (err, result, fields) =>{
            if(err){
                res.send(err.sqlMessage);
            }res.send(result)
        })
    }catch(err){
        res.send(err.sqlMessage);
    }
}


let deletebooking_confirmation = async (req, res) =>{
    try{
        const data = req.params.booking_confirmation_id;
        const q2 = "delete from booking_confirmation where booking_confirmation_id = ? "
        await db.query(q2, data, (err, result, fields) =>{
            if(err){
                res.send(err.sqlMessage);
            }res.send(result)
        })
    }catch(err){
        res.send(err.sqlMessage);
    }
}  


module.exports = {getbooking_confirmation, postbooking_confirmation, updatebooking_confirmation, deletebooking_confirmation}