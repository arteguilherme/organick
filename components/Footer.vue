<script setup>
import { StarIcon } from "@heroicons/vue/20/solid";
</script>
<template>
  <div class="bg-white pb-10 sm:pb-16">
    <div class="mx-auto max-w-7xl">
      <div
        class="mx-auto mt-10 grid max-w-2xl grid-cols-1 space-y-16 sm:space-y-16 gap-x-8 lg:mx-0 lg:max-w-none lg:grid-cols-4"
      >
        <div
          class="sm:flex max-w-xl flex-col sm:border-r border-gray-200 px-6 sm:px-0 sm:pr-10 items-end"
        >
          <h2 class="mb-6 text-3xl font-bold text-blue-950">Contact Us</h2>
          <div class="space-y-6">
            <div class="sm:flex flex-col items-end">
              <h3 class="text-gray-700 font-bold text-lg">Email</h3>
              <span class="text-gray-700 text-lg">needhelp@Organia.com</span>
            </div>
            <div class="sm:flex flex-col items-end">
              <h3 class="text-gray-700 font-bold text-lg">Phone</h3>
              <span class="text-gray-700 text-lg">666 888 888</span>
            </div>
            <div class="sm:flex flex-col items-end">
              <h3 class="text-gray-700 font-bold text-lg">Address</h3>
              <span class="text-gray-700 text-lg"
                >88 road, borklyn street, USA</span
              >
            </div>
          </div>
        </div>
        <div
          class="sm:flex sm:col-start-2 col-span-2 flex-col items-center px-10"
        >
          <img
            src="https://res.cloudinary.com/arteguilherme/image/upload/v1694694185/organick/logo_organick_zn7a9a.svg"
            alt="Logo Organick"
            class="mb-4"
          />
          <p class="text-gray-700 text-center">
            Simply dummy text of the printing and typesetting industry. Lorem
            Ipsum simply dummy text of the printing
          </p>
          <div class="sm:flex justify-between space-x-2 mt-10">
            <NuxtLink
              to="https://www.instagram.com/organick"
              class="bg-gray-100 p-4 rounded-full text-blue-950"
              ><Icon
                name="uil:instagram"
                class="text-2xl text-blue-950 hover:text-green-600 transition duration-150 ease-out hover:ease-in"
            /></NuxtLink>
            <NuxtLink
              to="https://www.facebook.com/organick"
              class="bg-gray-100 p-4 rounded-full text-blue-950"
              ><Icon
                name="uil:facebook"
                class="text-2xl text-blue-950 hover:text-green-600 transition duration-150 ease-out hover:ease-in"
            /></NuxtLink>
            <NuxtLink
              to="https://twitter.com/organick"
              class="bg-gray-100 p-4 rounded-full text-blue-950"
              ><Icon
                name="uil:twitter"
                class="text-2xl text-blue-950 hover:text-green-600 transition duration-150 ease-out hover:ease-in"
            /></NuxtLink>
          </div>
        </div>
        <div
          class="sm:flex max-w-xl flex-col sm:border-l border-gray-200 px-6 sm:px-0 sm:pl-10"
        >
          <h2 class="mb-6 text-3xl font-bold text-blue-950">Utility Pages</h2>
          <ul class="space-y-3">
            <li
              class="text-blue-950 hover:text-green-400 transition duration-150 ease-out hover:ease-in"
            >
              <NuxtLink to="/">Style Guide</NuxtLink>
            </li>
            <li
              class="text-blue-950 hover:text-green-400 transition duration-150 ease-out hover:ease-in"
            >
              <NuxtLink to="/">404 Not Found</NuxtLink>
            </li>
            <li
              class="text-blue-950 hover:text-green-400 transition duration-150 ease-out hover:ease-in"
            >
              <NuxtLink to="/">Password Protected</NuxtLink>
            </li>
            <li
              class="text-blue-950 hover:text-green-400 transition duration-150 ease-out hover:ease-in"
            >
              <NuxtLink to="/">Licences</NuxtLink>
            </li>
            <li
              class="text-blue-950 hover:text-green-400 transition duration-150 ease-out hover:ease-in"
            >
              <NuxtLink to="/">Changelog</NuxtLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  <div class="flex p-4 justify-center border-t border-gray-200 text-gray-500">
    <p>
      Copyright © <strong>Organick</strong> | Designed by
      <strong>VictorFlow</strong> Templates - Powered by
      <strong>Webflow</strong>
    </p>
  </div>
</template>
