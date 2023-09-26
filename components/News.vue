<script setup>
import { ArrowRightCircleIcon, UserIcon } from "@heroicons/vue/20/solid";

const news = [
  {
    id: 1,
    title: "The Benefits of Vitamin D & How to Get It",
    imageSrc:
      "https://res.cloudinary.com/arteguilherme/image/upload/v1694694210/organick/Lettuce_lcllge.jpg",
    summery:
      "Simply dummy text of the printing and typesetting industry. Lorem Ipsum",
    auth: "By Rachi Card",
    created_at: "2323-11-25 12:30",
  },
  {
    id: 2,
    title: "Our Favourite Summertime Tommeto",
    imageSrc:
      "https://res.cloudinary.com/arteguilherme/image/upload/v1694694211/organick/Tomato_pib5jw.jpg",
    summery:
      "Simply dummy text of the printing and typesetting industry. Lorem Ipsum",
    auth: "By Rachi Card",
    created_at: "2323-11-25 12:30",
  },
];
</script>
<template>
  <div class="mx-auto max-w-7xl px-6 py-16 sm:py-28">
    <div
      class="grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 mb-10 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3"
    >
      <div class="col-span-2 max-w-2xl">
        <span class="text-3xl small-text text-green-600">News</span>
        <p
          class="mt-4 text-4xl font-bold tracking-tight text-blue-950 sm:text-5xl"
        >
          Discover weekly content about organic food, & more
        </p>
      </div>

      <div class="flex justify-end mt-14">
        <NuxtLink
          to="/news"
          class="flex items-center w-48 h-16 px-8 py-4 rounded-md justify-between border-2 border-blue-950 text-blue-950 hover:bg-blue-950 hover:text-white text-lg ease-linear transition-all duration-150"
        >
          <span class="text-base font-bold">More News</span>
          <ArrowRightCircleIcon class="w-6 h-6" />
        </NuxtLink>
      </div>
    </div>

    <div
      class="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2"
    >
      <div v-for="item in news" :key="item.id">
        <div class="relative">
          <img
            :src="`${item.imageSrc}`"
            alt=""
            class="rounded-3xl mb-56 sm:mb-0"
          />
          <div
            class="absolute top-0 flex flex-col items-center rounded-full m-10 pt-3 w-20 h-20 bg-white"
          >
            <span class="text-2xl font-bold text-blue-950">
              {{
                new Intl.DateTimeFormat("en-US", {
                  day: "numeric",
                }).format(new Date(item.created_at))
              }}</span
            >
            <span class="text-xl font-bold leading-3 text-blue-950">
              {{
                new Intl.DateTimeFormat("en-US", {
                  month: "short",
                }).format(new Date(item.created_at))
              }}
            </span>
          </div>
          <div
            class="absolute top-24 sm:top-60 p-10 m-8 rounded-3xl bg-white space-y-2 drop-shadow-xl"
          >
            <div class="flex items-center space-x-2">
              <UserIcon class="w-6 h-6 text-yellow-300" />
              <span class="text-blue-950">{{ item.auth }}</span>
            </div>
            <h2 class="text-blue-950 font-extrabold text-2xl">
              {{ item.title }}
            </h2>
            <p class="text-gray-700 text-lg">{{ item.summery }}</p>
            <NuxtLink
              to="/news/teste"
              class="flex items-center w-48 px-8 py-4 rounded-md justify-between bg-yellow-300 hover:bg-blue-950 text-lg text-blue-950 hover:text-yellow-300 ease-linear transition-all duration-150"
            >
              <span class="text-base font-bold">Read More</span>
              <ArrowRightCircleIcon class="w-6 h-6" />
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
