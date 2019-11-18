const Joi = require('@hapi/joi');

const postCreation = data => {
    const schema = {
        title : Joi.string().max(60).required(),
        body : Joi.string().max(500).required(),
        rate: Joi.number().integer().min(1).max(5)
    };
    return Joi.validate(data , schema);
}

module.exports.postCreation = postCreation;