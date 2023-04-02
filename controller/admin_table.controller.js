
const db= require("../model/connection")


let getadmin= async (req,res)=>{
    try{
        const q1 = "select * from admin"
        await db.query(q1, (error,result,fields)=>{
            if(error){
                res.send(error.sqlMessage)
            }res.send(result)
        })
    }catch(error){
        res.send(error.sqlMessage)
    }
};

let postadmin = async (req, res) => {
    try{
        const data = req.body;
        const q2 = "insert into admin SET ?";
        await db.query(q2, data, (err, result, fields) => {
            if (err){
                res.send(err.sqlMessage);
            }
            res.send(result);
        })
    } catch (err){
        res.send(err.sqlMessage);
    }
};

let updateadmin = async (req, res) => {
    try{
        const data =[req.body, req.params.admin_id]
        const q3 = "update admin SET ? where admin_id = ? "
        await db.query(q3, data, (err, result, fields) =>{
            if(err){
                res.send(err.sqlMessage);
            }res.send(result)
        })
    }catch(err){
        res.send(err.sqlMessage);
    }
}

let deleteadmin = async (req, res) =>{
    try{
        const data = req.params.admin_id;
        const q4 = "delete from admin where admin_id = ? "
        await db.query(q4, data, (err, result, fields) =>{
            if(err){
                res.send(err.sqlMessage);
            }res.send(result)
        })
    }catch(err){
        res.send(err.sqlMessage);
    }
}  


module.exports = {getadmin, postadmin, updateadmin, deleteadmin}