<script setup>
import { ArrowRightCircleIcon } from "@heroicons/vue/20/solid";

const features = [
  {
    name: "Organic Foods Only",
    description:
      "Simply dummy text of the printing and typesetting industry. Lorem Ipsum",
    icon: 'https://res.cloudinary.com/arteguilherme/image/upload/v1694694184/organick/Leave_tvses8.svg',
  },
  {
    name: "Quality Standards",
    description:
      "Simply dummy text of the printing and typesetting industry. Lorem Ipsum",
    icon: 'https://res.cloudinary.com/arteguilherme/image/upload/v1694694192/organick/PostBox_yclghr.svg',
  },
];
</script>

<template>
  <div class="overflow-hidden bg-slate-100 py-16 sm:py-28">
    <div class="mx-auto max-w-screen-2xl">
      <div
        class="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2"
      >
        <img
          src="https://res.cloudinary.com/arteguilherme/image/upload/v1694694210/organick/Photo-1_trsvql.png"
          alt="Product screenshot"
          class="w-full"
        />
        <div class="">
          <span class="text-3xl small-text text-green-600">About Us</span>
          <p
            class="mt-4 text-4xl font-bold tracking-tight text-blue-950 sm:text-5xl"
          >
            We Believe in Working Accredited Farmers
          </p>
          <p class="mt-6 text-lg text-gray-600">
            Simply dummy text of the printing and typesetting industry. Lorem
            had ceased to been the industry's standard dummy text ever since the
            1500s, when an unknown printer took a galley.
          </p>
          <dl
            class="my-10 max-w-xl space-y-8 text-base text-gray-600 lg:max-w-none"
          >
            <div
              v-for="feature in features"
              :key="feature.name"
              class="flex items-center space-x-10 pr-9"
            >
              <div class="bg-white py-4 px-6 rounded-2xl">
                <img
                  :src="feature.icon"
                  class="h-14 w-3h-14 text-green-600"
                  :alt="feature.name"
                />
              </div>
              <div>
                <dt class="font-semibold text-2xl text-blue-950">
                  {{ feature.name }}
                </dt>
                <dd class="text-lg">{{ feature.description }}</dd>
              </div>
            </div>
          </dl>
          <NuxtLink
            to="/products"
            class="flex items-center w-48 px-8 py-4 rounded-md justify-between bg-blue-950 hover:bg-blue-900 text-lg text-white ease-linear transition-all duration-150"
          >
            <span class="text-base font-bold">Shop Now</span>
            <ArrowRightCircleIcon class="w-6 h-6 opacity-20" />
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>
