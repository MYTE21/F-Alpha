const Joi = require('@hapi/joi');

const postCreation = data => {
    const schema = {
        title : Joi.string().max(60).required(),
        body : Joi.string().max(500).required(),
    };
    return Joi.validate(data , schema);
}

module.exports.postCreation = postCreation;