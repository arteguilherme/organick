import CategoryModel from "~/server/models/Category.model";

export default defineEventHandler(async (event) => {
  return await CategoryModel.find();
});
