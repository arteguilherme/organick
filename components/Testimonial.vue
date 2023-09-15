<script setup>
import { StarIcon } from "@heroicons/vue/20/solid";
import { Carousel, Pagination, Slide } from "vue3-carousel";

const reviews = { href: "#", average: 5, totalCount: 117 };
const stats = [
  { name: "Organic", value: "100%" },
  { name: "Active Product", value: "285" },
  { name: "Organic Orchads", value: "350+" },
  { name: "Years of Farming", value: "25+" },
];
</script>
<template>
  <div class="relative isolate overflow-hidden bg-slate-50 py-16 sm:py-20">
    <img
      src="https://res.cloudinary.com/arteguilherme/image/upload/v1694708220/TestimonialImg_cs1xzn.png"
      alt=""
      class="absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center"
    />
    <div class="mx-auto max-w-6xl">
      <div class="text-center items-center">
        <span class="text-3xl small-text text-green-600">Testimonial</span>
        <h1
          class="mt-4 text-4xl font-bold tracking-tight text-blue-950 sm:text-5xl"
        >
          What Our Customer Saying?
        </h1>
      </div>

      <Carousel class="pb-28 border-b-[1px] border-gray-200">
        <Slide
          class="relative isolate overflow-hidden px-6 py-8 sm:py-12 lg:px-8"
          v-for="slide in 3"
          :key="slide"
        >
          <div class="mx-auto max-w-xl lg:max-w-3xl">
            <img
              class="mx-auto h-28 w-2h-28 rounded-full"
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt=""
            />
            <!-- Reviews -->
            <div class="flex justify-center my-4">
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
            <blockquote
              class="text-center text-xl text-gray-600 sm:text-lg sm:leading-7"
            >
              <p>
                Simply dummy text of the printing and typesetting industry.
                Lorem Ipsum simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been.
              </p>
            </blockquote>
            <div class="mt-4 text-center items-center">
              <div class="font-semibold text-blue-950 text-2xl">
                Sara Taylor
              </div>
              <div class="text-gray-600">Consumer</div>
            </div>
          </div>
        </Slide>

        <template #addons>
          <Pagination />
        </template>
      </Carousel>

      <div class="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
        <dl
          class="mt-16 grid grid-cols-1 gap-24 sm:mt-20 sm:grid-cols-2 lg:grid-cols-4"
        >
          <div
            v-for="stat in stats"
            :key="stat.name"
            class="flex justify-center w-52 h-52 bg-white text-blue-950 border-4 border-green-600 rounded-full"
          >
            <div
              class="flex flex-col justify-center items-center w-full rounded-full m-1 bg-gray-200"
            >
              <dd class="text-5xl text-center font-bold">
                {{ stat.value }}
              </dd>
              <dt class="text-lg font-medium text-center">{{ stat.name }}</dt>
            </div>
          </div>
        </dl>
      </div>
    </div>
  </div>
</template>
