import CategoryModel from "~/server/models/Category.model";
import { CategorySchema } from "~/server/validation"

export default defineEventHandler(async (event) => {
    const body = await readBody(event)

    let {value, error} = CategorySchema.validate(body)

    if (error) {
      throw createError({
        message: error.message.replace(/"/g, ""),
        statusCode: 400,
        fatal: false,
      });
    }

    try {
        await CategoryModel.create(body)
        return {message: "Category Created"}
    } catch (error: any) {
        throw createError({
          message: error.message,
        });
    }
})