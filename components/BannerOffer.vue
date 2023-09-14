<template>
  <div class="mx-auto max-w-7xl py-16 sm:py-28">
    <div
      class="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2"
    >
      <div v-for="feature in features" :key="feature.id" class="relative">
        <img
          :src="`_nuxt/assets/images/${feature.images}`"
          alt=""
          class="rounded-3xl"
        />
        <div class="absolute top-28 px-14 max-w-[21.5rem]">
          <span
            class="text-3xl small-text"
            :class="feature.id === 1 ? 'text-white' : 'text-green-600'"
          >
            {{ feature.name }}
          </span>
          <p
            class="text-4xl font-bold"
            :class="feature.id === 1 ? 'text-white' : 'text-blue-950'"
          >
            {{ feature.description }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const features = [
  {
    id: 1,
    images: "PhotoEsquerda.jpg",
    name: "Natural!!",
    description: "Get Garden Fresh Fruits",
  },
  {
    id: 2,
    images: "PhotoDireita.jpg",
    name: "Offer!!",
    description: "Get 10% off on Vegetables",
  },
];
</script>
