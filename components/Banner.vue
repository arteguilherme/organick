<script setup>
import { ArrowRightCircleIcon } from "@heroicons/vue/20/solid";

const links = [
  { name: "Open roles", href: "#" },
  { name: "Internship program", href: "#" },
  { name: "Our values", href: "#" },
  { name: "Meet our leadership", href: "#" },
];
const stats = [
  { name: "Offices worldwide", value: "12" },
  { name: "Full-time colleagues", value: "300+" },
  { name: "Hours per week", value: "40" },
  { name: "Paid time off", value: "Unlimited" },
];
</script>

<template>
  <div class="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32">
    <img
      src="https://res.cloudinary.com/arteguilherme/image/upload/v1694694202/organick/bg_banner_ntidej.jpg"
      alt=""
      class="absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center"
    />
    <div
      class="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl"
      aria-hidden="true"
    ></div>
    <div
      class="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu"
      aria-hidden="true"
    ></div>
    <div class="mx-auto max-w-7xl px-6 lg:px-8 space-y-6">
      <div class="max-w-lg lg:mx-0 space-y-1">
        <span class="mt-6 text-3xl leading-8 small-text text-green-600">
          100% Natural Food
        </span>
        <h2 class="text-4xl font-bold tracking-tight text-blue-950 sm:text-6xl">
          Choose the best healthier way of life
        </h2>
      </div>
      <NuxtLink
        to="/products"
        class="flex items-center w-48 px-8 py-4 rounded-md justify-between bg-yellow-300 hover:bg-yellow-400 text-lg text-blue-950 ease-linear transition-all duration-150"
      >
        <span class="text-base font-bold">Explore Now</span>
        <ArrowRightCircleIcon class="w-6 h-6" />
      </NuxtLink>
    </div>
  </div>
</template>
