import Joi = require("joi");

export const userSchema = Joi.object({
  username: Joi.string().min(3).max(30).required(),
  full_name: Joi.string(),
  email: Joi.string().email().required(),
  password: Joi.string().required(),
});

export const threadSChema = Joi.object({
  content: Joi.string(),
  filename: Joi.string(),
});

export const loginSchema = Joi.object().keys({
  email: Joi.string().email().required(),
  password: Joi.string().required(),
});

export const cardSchema = Joi.object({
  title: Joi.string(),
  content: Joi.string(),
  image: Joi.string(),
});
