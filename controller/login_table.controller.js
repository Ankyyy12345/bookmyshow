
const db = require("../model/connection")


let getlogin = async(req, res) =>{
    try{
        const q1 = "select * from login"
        await db.query(q1,(error, result, fields)=>{
        if(error){
            res.send(error.sqlMessage)
        }res.send(result)
        })
    }catch(error){
        res.send(error.sqlMessage)
    }
};












// let postlogin = async(req, res) =>{
//     try{
//         const data = req.body
//         const q1= "insert into login set ?"
//         await db.query(q1, data,(error, result, fields) => {
//             if(error){
//                 res.send(error.sqlMessage)
//             }res.send(result)
//         })
//     }catch(error){
//                res.send(error.sqlMessage)
//     }
// };

let updatelogin = async(req, res)=>{
    try{
        const data= [req.body, req.params.email]
        const q1 = "update login set ? where email = ? "
        await db.query(q1, data,(error, result, fields)=>{
        if(error){
            res.send(error.sqlMessage)
        }res.send(result)
        })
    }catch(error){
        res.send(error.sqlMessage)
    }
};

let deletelogin = async(req, res)=>{
    try{
        const data = req.params.email
        const q1 = "delete from login where email = ?"
        await db.query(q1, data,(error,result, fields)=>{
            if(error){
                res.send(error.sqlMessage)
            }res.send(result)
        })
    }catch(error){
        res.send(error.sqlMessage)
    }
};
module.exports = {getlogin, updatelogin,deletelogin}

