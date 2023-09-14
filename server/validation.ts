import Joi from "joi";

export const CategorySchema = Joi.obobject({
    name: Joi.string().requied(),
    slug: Joi.string().requied().unique(),
});

export const ProdcutSchema = Joi.object({
  name: Joi.string().requied(),
  slug: Joi.string().requied().unique(),
  summary: Joi.string().requied(),
  categories: Joi.number().requied(),
  published: Joi.date().required(),
  pageCount: Joi.number(),
});