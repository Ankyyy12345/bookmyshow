const {response} = require("express");
const conn = require("../model/connection")
var db = require("../model/connection");

let getadd_theater = async(req,res)=>{
    try{
        const q1 = "select * from add_theater"
        await db.query(q1,(error,result,fields)=>{
            if(error){
                // res.send({status:400,response:error.sqlMessage})
                res.send(error.sqlMessage)

            }
            // res.send({status:200,response:result})
            res.send(result)

        })
    }catch(error){
        res.send(error.sqlMessage)
    }
};


let postadd_theater = async(req, res) => {
    try{
        const data = req.body;
        const q1 = "insert into add_theater SET ?";
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


let updateadd_theater = async (req, res) => {
    try{
        const data =[req.body, req.params.theater_id]
        const q2 = "update add_theater SET ? where theater_id = ? "
        await db.query(q2, data, (err, result, fields) =>{
            if(err){
                res.send(err.sqlMessage);
            }res.send(result)
        })
    }catch(err){
        res.send(err.sqlMessage);
    }
}


let deleteadd_theater = async (req, res) =>{
    try{
        const data = req.params.theater_id;
        const q2 = "delete from add_theater where theater_id = ? "
        await db.query(q2, data, (err, result, fields) =>{
            if(err){
                res.send(err.sqlMessage);
            }res.send(result)
        })
    }catch(err){
        res.send(err.sqlMessage);
    }
}  


module.exports = {getadd_theater, postadd_theater, updateadd_theater, deleteadd_theater}