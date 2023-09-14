<script setup></script>
<template>
  <Header />
  <div class="relative isolate overflow-hidden bg-blue-950 py-10 sm:py-10">
    <img
      src="https://res.cloudinary.com/arteguilherme/image/upload/v1694694201/organick/BannerPortfolio_vw4rzs.jpg"
      alt=""
      class="absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center"
    />
    <div class="mx-auto max-w-screen-2xl px-2 sm:px-6 lg:px-8">
      <div class="flex justify-center items-center h-[10rem]">
        <h2 class="text-5xl font-extrabold text-blue-950">Services</h2>
      </div>
    </div>
  </div>

  <div class="py-14 sm:py-24">
    <div class="mx-auto max-w-7xl">
      <div class="text-center items-center">
        <span class="text-3xl small-text text-green-600">Team</span>
        <h1
          class="mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl"
        >
          What We Offer for You
        </h1>
      </div>
      <div
        class="mt-6 grid grid-cols-1 gap-x-4 gap-y-5 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-6"
      >
        <NuxtLink to="/categories" class="h-80">
          <img
            src="https://res.cloudinary.com/arteguilherme/image/upload/v1694694198/organick/Temperos_xxjmc9.jpg"
            alt=""
            class="h-full rounded-2xl object-cover object-center"
          />
          <h3 class="text-blue-950 font-medium">Temperos</h3>

          <span class="small-text text-green-600">Team</span>
        </NuxtLink>
        <NuxtLink to="/categories" class="h-80">
          <img
            src="https://res.cloudinary.com/arteguilherme/image/upload/v1694694205/organick/Castanhas_zucmxx.jpg"
            alt=""
            class="h-full rounded-2xl object-cover object-center"
          />
          <h3 class="text-blue-950 font-medium">Castanhas</h3>

          <span class="small-text text-green-600">Team</span>
        </NuxtLink>
        <NuxtLink to="/categories" class="h-80">
          <img
            src="https://res.cloudinary.com/arteguilherme/image/upload/v1694694194/organick/Roma_txsxl2.jpg"
            alt=""
            class="h-full rounded-2xl object-cover object-center"
          />
          <h3 class="text-blue-950 font-medium">Frutas</h3>

          <span class="small-text text-green-600">Team</span>
        </NuxtLink>
        <NuxtLink to="/categories" class="h-80">
          <img
            src="https://res.cloudinary.com/arteguilherme/image/upload/v1694694185/organick/Gengibre_guz0qo.jpg"
            alt=""
            class="h-full rounded-2xl object-cover object-center"
          />
          <h3 class="text-blue-950 font-medium">Vegetais</h3>

          <span class="small-text text-green-600">Team</span>
        </NuxtLink>
      </div>
    </div>
  </div>
  <Newsletter />
  <Footer />
</template>
