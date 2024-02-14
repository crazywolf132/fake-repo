// User validation schemas
const Joi = require('joi');

const userSchemas = {
  create: Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().min(8).required(),
    name: Joi.string().min(2).max(100).required(),
    role: Joi.string().valid('user', 'admin').default('user')
  }),
  
  update: Joi.object({
    email: Joi.string().email(),
    name: Joi.string().min(2).max(100),
    role: Joi.string().valid('user', 'admin')
  }).min(1),
  
  login: Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().required()
  })
};

function validate(schema) {
  return (req, res, next) => {
    const { error } = schema.validate(req.body);
    if (error) {
      return res.status(400).json({
        error: 'Validation failed',
        details: error.details.map(d => d.message)
      });
    }
    next();
  };
}

module.exports = {
  schemas: userSchemas,
  validate
};