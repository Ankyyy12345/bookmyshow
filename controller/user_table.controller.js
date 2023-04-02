
var db = require("../model/connection")
const jwt = require("jsonwebtoken")

const uuid = require("uuid").v4

const bcrypt = require("bcrypt");
const conn = require("../model/connection");

let getuser = async (req, res) => {
    try {
        const data = req.body;
        const q1 = " select * from user_registration"
        await db.query(q1, data, (error, result, fields) => {
            if (error) {
                res.send(error.sqlMessage)
            } res.send(result)
        })
    } catch (error) {
        res.send(error.sqlMessage)
    }
};


// let postuser = async(req, res) =>{
//     try{
//         const data = req.body;
//         const q1 = "insert into user_registration set ?"
//         await db.query (q1,data,(error,result, fields) =>{
//             if(error){
//                 res.send(error.sqlMessage)
//             }
//             res.send(result)
//         })
//     }catch(error){
// 
//         res.send(error.sqlMessage);
//     } 
// };

// Destructuring//

let usersignup = async (req, res) => {
    const {email, name, phone, password, address, adhaar_number } = req.body
    const salt = await bcrypt.genSalt(8);
    console.log("salt", salt)
    const pass = await bcrypt.hash(password, salt);
    console.log("pass",pass) 
    const data = { email, name, phone, user_id: uuid(), password:pass, address,  adhaar_number }
 
    const query = "insert into user_registration set ?";
    await conn.query(query, data, (error, result) => {
        if (error) {
            return res.send(error.sqlMessage);
        }
        else {
            res.send(result); 
        }
    }); 
};




let userlogin = async(req, res) => {
    try {
        const { email, password } = req.body;

        const query1 = "select * from user_registration where email =?";
        await conn.query(query1, email, async(error, result) => {
            if (error) {
                res.json({ error: error.sqlMessage });
            }
            const pass = result[0].password;
            const email = result[0].email;
            const passcheck = await bcrypt.compare(password, pass);

            if (!passcheck) {
                res.json({ password: "password not matched" });
            }

            const token = await jwt.sign({ email }, "anurag");
            res.json({ response: 200, token });
        })
    } catch (error) {
        res.send(error.sqlMessage)
    }
};


let updateuser = async (req, res) => {
    try {
        const data = [req.body, req.params.user_id]
        const q1 = "update user_registration set ? where user_id = ? "
        await db.query(q1, data, (error, result, fields) => {
            if (error) {
                return res.send(error.sqlMessage)
            }
            res.send(result)
        })
    } catch (error) {
        res.send(error.sqlMessage)
    }
}


let deleteuser = async (req, res) => {
    try {
        const data = [req.params.user_id]
        const q1 = " delete from user_registration where user_id = ?"
        await db.query(q1, data, (error, result, fields) => {
            if (error) {
                res.send(error.sqlMessage)
            }
            res.send(result)
        })
    } catch (error) {
        res.send(error.sqlMessage)
    }
};

module.exports = { getuser, usersignup, userlogin, updateuser, deleteuser }