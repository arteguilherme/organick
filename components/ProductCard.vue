<template>
  <NuxtLink :to="product.href" class="group relative bg-gray-100 rounded-2xl">
    <div
      class="relative aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md lg:aspect-none group-hover:opacity-75 lg:h-80"
    >
      <span
        class="absolute top-4 left-4 bg-blue-950 text-white px-2 py-1 rounded-lg"
        >Vegetable</span
      >
      <img
        :src="`http://localhost:3000/_nuxt/assets/images/${product.imageSrc}`"
        :alt="product.imageAlt"
        class="h-full w-full object-cover object-center lg:h-full lg:w-full"
      />
    </div>
    <div class="m-6">
      <div class="border-b-2 border-gray-200 pb-3">
        <h3 class="text-xl text-blue-950 font-bold">
          {{ product.name }}
        </h3>
      </div>
      <div class="flex items-center justify-between">
        <div class="flex space-x-2 mt-3 items-center">
          <p class="font-medium text-gray-400 line-through">
            {{ product.price }}
          </p>
          <p class="text-lg font-bold text-blue-950">
            {{ product.price }}
          </p>
        </div>
        <!-- Reviews -->
        <div class="mt-2">
          <h3 class="sr-only">Reviews</h3>
          <div class="flex items-center">
            <div class="flex items-center">
              <StarIcon
                v-for="rating in [0, 1, 2, 3, 4]"
                :key="rating"
                :class="[
                  reviews.average > rating
                    ? 'text-yellow-500'
                    : 'text-gray-300',
                  'h-5 w-5 flex-shrink-0',
                ]"
                aria-hidden="true"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </NuxtLink>
</template>
<script setup>
import { StarIcon } from "@heroicons/vue/20/solid";
const reviews = { href: "#", average: 4, totalCount: 117 };
const props = defineProps({
  product: { type: Object, required: true },
});
</script>
