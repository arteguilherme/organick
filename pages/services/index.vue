<script setup>
import { ArrowRightCircleIcon } from "@heroicons/vue/20/solid";
</script>
<template>
  <Header />
  <div class="relative isolate overflow-hidden bg-blue-950 py-10 sm:py-10">
    <img
      src="https://res.cloudinary.com/arteguilherme/image/upload/v1694694212/organick/BannerServices_ikx9az.jpg"
      alt=""
      class="absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center"
    />
    <div class="mx-auto max-w-screen-2xl px-2 sm:px-6 lg:px-8">
      <div class="flex justify-center items-center h-[10rem]">
        <h2 class="text-5xl font-extrabold text-blue-950">Services</h2>
      </div>
    </div>
  </div>
  <div class="overflow-hidden py-16 sm:py-28">
    <div class="mx-auto max-w-7xl">
      <div class="text-center items-center">
        <div class="mx-auto max-w-lg">
          <span class="text-3xl small-text text-green-600">What we Grow</span>
          <h1
            class="mt-4 text-4xl font-bold tracking-tight text-blue-950 sm:text-5xl"
          >
            Better Agriculture for Better Future
          </h1>
        </div>
      </div>
      <div
        class="mx-auto grid max-w-2xl grid-cols-1 lg:mx-0 lg:max-w-none lg:grid-cols-4"
      >
        <div class="space-y-8 mt-28">
          <div class="flex flex-col justify-end items-end space-y-1">
            <img src="https://res.cloudinary.com/arteguilherme/image/upload/v1694694194/organick/ServicesIcon1_hvlzl3.svg" alt="Milk icon" />
            <h2 class="text-2xl font-medium text-blue-950">Dairy Products</h2>
            <p class="text-lg text-gray-600 text-right">
              Sed ut perspiciatis unde omnis iste natus error sit voluptat
              accusantium doloremqlaudantium. Sed ut perspiciatis
            </p>
          </div>
          <div class="flex flex-col justify-end items-end space-y-1">
            <img src="https://res.cloudinary.com/arteguilherme/image/upload/v1694694194/organick/ServicesIcon2_gt1gi6.svg" alt="Milk icon" />
            <h2 class="text-2xl font-medium text-blue-950">Store Services</h2>
            <p class="text-lg text-gray-600 text-right">
              Sed ut perspiciatis unde omnis iste natus error sit voluptat
              accusantium doloremqlaudantium. Sed ut perspiciatis
            </p>
          </div>
          <div class="flex flex-col justify-end items-end space-y-1">
            <img src="https://res.cloudinary.com/arteguilherme/image/upload/v1694694195/organick/ServicesIcon3_jubzyj.svg" alt="Milk icon" />
            <h2 class="text-2xl font-medium text-blue-950">
              Delivery Services
            </h2>
            <p class="text-lg text-gray-600 text-right">
              Sed ut perspiciatis unde omnis iste natus error sit voluptat
              accusantium doloremqlaudantium. Sed ut perspiciatis
            </p>
          </div>
        </div>
        <div class="flex justify-center col-start-2 col-span-2">
          <img
            class="w-full"
            src="https://res.cloudinary.com/arteguilherme/image/upload/v1694694197/organick/ServicesImage-removebg_yyvn0m.png"
            alt=""
          />
        </div>
        <div class="space-y-8 mt-28">
          <div class="flex flex-col justify-start items-start space-y-1">
            <img src="https://res.cloudinary.com/arteguilherme/image/upload/v1694694195/organick/ServicesIcon4_butcrz.svg" alt="Milk icon" />
            <h2 class="text-2xl font-medium text-blue-950">
              Agricultural Services
            </h2>
            <p class="text-lg text-gray-600">
              Sed ut perspiciatis unde omnis iste natus error sit voluptat
              accusantium doloremqlaudantium. Sed ut perspiciatis
            </p>
          </div>
          <div class="flex flex-col justify-start items-start space-y-1">
            <img src="https://res.cloudinary.com/arteguilherme/image/upload/v1694694196/organick/ServicesIcon5_rus66w.svg" alt="Milk icon" />
            <h2 class="text-2xl font-medium text-blue-950">Organic Products</h2>
            <p class="text-lg text-gray-600">
              Sed ut perspiciatis unde omnis iste natus error sit voluptat
              accusantium doloremqlaudantium. Sed ut perspiciatis
            </p>
          </div>
          <div class="flex flex-col justify-start items-start space-y-1">
            <img src="https://res.cloudinary.com/arteguilherme/image/upload/v1694694196/organick/ServicesIcon6_mnkcli.svg" alt="Milk icon" />
            <h2 class="text-2xl font-medium text-blue-950">Fresh Vegetables</h2>
            <p class="text-lg text-gray-600">
              Sed ut perspiciatis unde omnis iste natus error sit voluptat
              accusantium doloremqlaudantium. Sed ut perspiciatis
            </p>
          </div>
        </div>
      </div>
      <div class="flex justify-center">
        <NuxtLink
          to="/services/teste"
          class="flex items-center w-48 px-8 py-4 rounded-md justify-between border-2 border-blue-950 hover:bg-blue-950 hover:text-white text-lg text-blue-950 ease-linear transition-all duration-150"
        >
          <span class="text-base font-bold">Explore More</span>
          <ArrowRightCircleIcon class="w-6 h-6" />
        </NuxtLink>
      </div>
    </div>
  </div>
  <div
    class="bg-[url(https://res.cloudinary.com/arteguilherme/image/upload/v1694694210/organick/SomenteOrganicos_t0hhbt.jpg)] bg-cover bg-center h-[50rem] mb-10"
  >
    <div class="mx-auto flex justify-center max-w-screen-2xl py-28 px-6">
      <div class="mb-4 w-3/6 flex flex-col justify-center items-center">
        <h2 class="text-4xl text-center text-green-600 font-yellow-tail mb-3">
          Organic Only
        </h2>
        <h3 class="text-5xl text-center mb-6 text-blue-950 font-extrabold">
          Everyday Fresh & Clean
        </h3>
        <p class="text-lg text-center text-gray-600">
          Simply dummy text of the printing and typesetting industry. Lorem had
          ceased to been the industry's standard dummy text ever since the
        </p>
        <div
          class="bg-green-600 w-16 h-16 mt-10 rounded-full flex justify-center items-center drop-shadow-lg"
        >
          <Icon name="uil:play" class="text-2xl text-white" />
        </div>
      </div>
    </div>
  </div>
  <Footer />
</template>
