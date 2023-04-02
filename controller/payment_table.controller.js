
var db = require("../model/connection")

let getpayment = async(req,res) =>{
   try{
        const data = req.body;
        const q1 = " select * from payment"
        await db.query (q1, data,(error, result, fields) =>{
            if(error){
                res.send(error.sqlMessage)
            }res.send(result)
        })
    }catch(error){
        res.send(error.sqlMessage)
    }
};


let postpayment = async(req, res) =>{
    try{
        const data = req.body;
        const q1 = "insert into payment set ?"
        await db.query (q1, data,(error,result, fields) =>{
            if(error){
                res.send(error.sqlMessage)
            }
            res.send(result)
        })
    }catch(error){

        res.send(error.sqlMessage);
    } 
};


let updatepayment= async(req, res) =>{
    try{
        const data =[ req.body , req.params.payment_id]
        const q1 = "update payment set ? where payment_id = ? "
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


let deletepayment = async(req, res) =>{
    try{
        const data =[req.params.payment_id]
        const q1 = " delete from payment where payment_id = ?"
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

module.exports = {getpayment, postpayment, updatepayment, deletepayment}