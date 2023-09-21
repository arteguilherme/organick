import Joi from "joi";

export const CategorySchema = Joi.object({
  name: Joi.string().required(),
  // slug: Joi.string().required(),
});

export const ProdcutSchema = Joi.object({
  name: Joi.string().required(),
  slug: Joi.string().required(),
  summary: Joi.string().required(),
  categories: Joi.number().required(),
  published: Joi.date().required(),
  pageCount: Joi.number(),
});
