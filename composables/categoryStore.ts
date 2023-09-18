import { defineStore } from "pinia";
import { ICategory } from "~/types";
export const useCategoryStore = defineStore("category-store", {
  state: () => ({
    categories: [] as ICategory[],
  }),
  actions: {
    async getAll() {
      try {
        let data = await $fetch<ICategory[]>("/api/categories");
        return data as ICategory[];
      } catch (error: any) {
        createError({
          message: error.message,
        });
      }
    },
    async create(category: ICategory) {
      await $fetch("/api/categories/create", {
        method: "POST",
        body: category,
      })
        .catch((e) => {
          createError({
            message: e.data.message,
          });
        })
        .then(async () => {
          await this.getAll();
          return { message: "Category created" };
        });

    },
  },
});