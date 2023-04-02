const joi = require("joi")

const schema = joi.object({
    admin_id: joi.number().integer().min(1).max(500).required(),
    password: joi.number().integer().min(1).max(500).required(),
    email: joi.string().min(1).max(500).required()
})

const admin_validation = async (req, res, next) => {
    const value = await schema.validate(req.body)
    if (value.error) {
        res.send({ error: value.error.details[0] })
    } else {
        next()
    }

}

module.exports = admin_validation