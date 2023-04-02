const joi = require("joi")

const schema = joi.object({
    movie_name: joi.string().min(1).max(500).required(),
    movie_description: joi.string().min(1).max(500).required(),
    movie_id: joi.number().integer().min(1).max(500).required(),
    language: joi.string().min(1).max(500).required(),
    gener: joi.string().min(1).max(500).required(),
    user_id: joi.number().integer().min(1).max(500).required()
})

const add_movie_validation = async (req, res, next) => {
    const value = await schema.validate(req.body)
    if (value.error) {
        res.send({ error: value.error.details[0] })
    } else {
        next()
    }

}

module.exports = add_movie_validation