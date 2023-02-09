const Joi = require('joi');
const validate = require('./validate');

const registerSchema = Joi.object({
    firstName: Joi.string().required().trim().messages({
        'any.required': 'firstname is required',
        'string.empty': 'firstname is required',
        'string.base': 'firstname must be a string'
    }),
    lastName: Joi.string().required().trim().messages({
        'any.required': 'lastname is required',
        'string.empty': 'lastname is required',
        'string.base': 'lastname must be a string'
    }),
    userName: Joi.string().required().trim().messages({
        'any.required': 'username is required',
        'string.empty': 'username is required',
        'string.base': 'username must be a string'
    }),
    email: Joi.alternatives()
        .try(
            Joi.string().email({ tlds: false })
        )
        .messages({
            'string.empty': 'must be a valid email address'
        }),
    password: Joi.string().alphanum().min(6).required().trim().messages({
        'string.empty': 'password is required',
        'string.alphanum': 'password must be a number or alphabet',
        'string.min': 'password must have 6 characters'
    }),
    confirmPassword: Joi.string().valid(Joi.ref('password')).required().trim().messages({
        'any.only': 'password and confirm password did not match',
        'string.empty': 'confirm password is required'
    }).strip()
})


exports.validateRegister = validate(registerSchema)

// exports.validateLogin = validate(loginSchema)