
var db = require("../model/connection")

let getuser_movie_details = async (req, res) => {
    try {
        const data = req.body;
        const q1 = " select * from user_movie_details"
        await db.query(q1, data, (error, result, fields) => {
            if (error) {
                res.send(error.sqlMessage)
            } res.send(result)
        })
    } catch (error) {
        res.send(error.sqlMessage)
    }
};


let postuser_movie_details = async (req, res) => {
    try {
        const data = req.body;
        const q1 = "insert into user_movie_details set ?"
        await db.query(q1, data, (error, result, fields) => {
            if (error) {
                res.send(error.sqlMessage)
            }
            res.send(result)
        })
    } catch (error) {

        res.send(error.sqlMessage);
    }
};


let updateuser_movie_details = async (req, res) => {
    try {
        const data = [req.body, req.params.user_movie_details_id]
        const q1 = "update user_movie_details set ? where user_movie_details_id = ? "
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


let deleteuser_movie_details = async (req, res) => {
    try {
        const data = [req.params.user_movie_details_id]
        const q1 = " delete from user_movie_details where user_movie_details_id = ?"
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

module.exports = { getuser_movie_details, postuser_movie_details, updateuser_movie_details, deleteuser_movie_details }