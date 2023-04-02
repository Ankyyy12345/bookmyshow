const db = require("../model/connection");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");


let getregistration = async(req,res) =>{
   try{
        const data = req.body;
        const q1 = " select * from registration"
        await db.query (q1, data,(error, result, fields) =>{
            if(error){
                res.send(error.sqlMessage)
            }res.send(result)
        })
    }catch(error){
        res.send(error.sqlMessage)
    }
};


let postregistration = async (req, res) => {
    //////destructuring//////////
    const {
      id,
      name,
      email,
      password,
     
    } = req.body;
    const salt = await bcrypt.genSalt(8);
    console.log("salt", salt);
    const Pass = await bcrypt.hash(password, salt);
    console.log("Pass", Pass);
  
    const data = {
      id,
      name,
      email,
      password: Pass,
    };
    try {
      // const qur = "SELECT * FROM signup WHERE EMAIL_Address = ?"
      const querry = `INSERT INTO registration(id, name,  email, password)  VALUES ('${data.id}','${data.name}','${data.email}','${data.password}')`;
      await db.query(querry, (err, result) => {
        if (err) throw err;
        return res.status(200).json({ result });
      });
    } catch (error) {
      console.log(error);
      return res.status(400).send(error);
    }
  };


    
let postlogin = async (req, res) => {
    try {
      const { email, password } = req.body;
  
      const query1 = "SELECT * FROM registration WHERE email = ? ";
  
      await db.query(query1, email, async (err, result) => {
        if (err) {
          return res.json({ status: 400, response: err.sqlMessage });
        }
        if (!result.length) {
          return res.json({
            status: 400,
            response: " Please enter a valid email",
          });
        }
        const address = result[0].email;
        const Pass = result[0].password;
        // const emailCheck = await bcrypt.compare(Email_Address, address);
        const passCheck = await bcrypt.compare(password, Pass);
        if (!passCheck) {
          return res.json({ status: 400, response: "Password not matched" });
        }
        // if(!emailCheck){
        //   return res.json({ status: 400, response: "Email not matched" });
        // }
        const token = await jwt.sign({ address }, "asdf");
        res.json({ status: 200, response: " Logged Successful", token, email });
      });
    } catch (err) {
      res.json({ status: 400, response: "Wrong email or password" });
    }
  };













let updateregistration= async(req, res) =>{
    try{
        const data =[ req.body , req.params.id]
        const q1 = "update registration set ? where id = ? "
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


let deleteregistration = async(req, res) =>{
    try{
        const data =[req.params.id]
        const q1 = " delete from registration where id = ?"
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

module.exports = {getregistration, postregistration,postlogin, updateregistration, deleteregistration}