const Joi = require("@hapi/joi");

const signUpValidation = (data) => {
  const schema = Joi.object().keys({
    username: Joi.string().alphanum().min(3).max(30).required(),
    title: Joi.string().required(),
    password: Joi.string()
      .regex(/^[a-zA-Z0-9]{8,30}$/)
      .required(),
    email: Joi.string().email().required(),
  });
  return schema.validate(data);
};

const signInValidation = (data) => {
  const schema = Joi.object().keys({
    password: Joi.string()
      .regex(/^[a-zA-Z0-9]{6,30}$/)
      .required(),
    email: Joi.string().email().required(),
  });
  return schema.validate(data);
};

module.exports = {
  signUpValidation,
  signInValidation,
};
