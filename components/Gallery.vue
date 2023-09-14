<template>
  <div class="overflow-hidden py-14 sm:py-24 bg-cyan-50">
    <div
      class="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3"
    >
      <div v-for="gallery in galleries" :key="gallery.id">
        <div class="relative">
          <img :src="`@/assets/images/${gallery.imageSrc}`" alt="" class="" />
          <routerLink
            to="#"
            class="absolute top-56 left-40 bg-white text-blue-950 text-2xl px-14 py-5 rounded-xl hover:bg-blue-950 hover:text-white ease-linear transition-all duration-150"
            >{{ gallery.title }}</routerLink
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const galleries = [
  { id: 1, imageSrc: "OrangeJuice.jpg", title: "Organic Juice" },
  { id: 2, imageSrc: "OrganicFood.jpg", title: "Organic Food" },
  { id: 3, imageSrc: "NutsCookis.jpg", title: "Nuts Cookis" },
];
</script>
