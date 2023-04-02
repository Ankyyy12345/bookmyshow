const joi = require ("joi");
const add_movie_validation = require("./add_movie_validation");

const schema = joi.object({
    theater_id: joi.number().integer().min(1).max(500).required(),
    theater_name: joi.string().min(1).max(500).required(),
    theater_address: joi.string().min(1).max(500).required(),
    theater_type: joi.string().min(1).max(500).required(),
    theater_size: joi.string().min(1).max(500).required(),
    owner_id: joi.number().integer().min(1).max(500).required()
})

const add_theater_validation = async(req, res, next) =>{
    const value = schema.validate(req.body)
    if(value.error){
        res.send({ error: value.error.details[0] })
    }
    else{
        next()
    }
}

module.exports = add_theater_validation
