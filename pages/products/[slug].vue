<script setup>
import { ArrowRightCircleIcon, StarIcon } from "@heroicons/vue/20/solid";
import { TabGroup, TabList, Tab, TabPanels, TabPanel } from "@headlessui/vue";

const reviews = { href: "#", average: 4, totalCount: 117 };
const product = {
  id: 3,
  name: "Castanha",
    href: "/products/teste",
  imageSrc: "https://res.cloudinary.com/arteguilherme/image/upload/v1694694204/organick/Castanha02-removebg_wueeyl.png",
  imageAlt: "Front of men's Basic Tee in black.",
  summary:
    "Simply dummy text of the printing and typesetting industry. Lorem had ceased to been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.",
  price: "$21.00",
  categories: [{ id: 1, title: "Noses" }],
  description:
    "Welcome to the world of natural and organic. Here you can discover the bounty of nature. We have grown on the principles of health, ecology, and care. We aim to give our customers a healthy chemical-free meal for perfect nutrition. It offers about 8–10% carbs. Simple sugars — such as glucose and fructose — make up 70% and 80% of the carbs in raw.",
};
const products = [
  {
    id: 1,
    name: "Brocolis",
    href: "/products/teste",
    imageSrc: "https://res.cloudinary.com/arteguilherme/image/upload/v1694694202/organick/Brocolis-removebg_aufhos.png",
    imageAlt: "Front of men's Basic Tee in black.",
    price: "$13.00",
  },
  {
    id: 2,
    name: "Banana",
    href: "/products/teste",
    imageSrc: "https://res.cloudinary.com/arteguilherme/image/upload/v1694694200/organick/Banana-removebg_gyiabu.png",
    imageAlt: "Front of men's Basic Tee in black.",
    price: "$16.00",
  },
  {
    id: 3,
    name: "Castanha",
    href: "/products/teste",
    imageSrc: "https://res.cloudinary.com/arteguilherme/image/upload/v1694694204/organick/Castanha02-removebg_wueeyl.png",
    imageAlt: "Front of men's Basic Tee in black.",
    price: "$21.00",
  },
  {
    id: 4,
    name: "Tomate",
    href: "/products/teste",
    imageSrc: "https://res.cloudinary.com/arteguilherme/image/upload/v1694694198/organick/Tomate-removebg_qedo0k.png",
    imageAlt: "Front of men's Basic Tee in black.",
    price: "$12.00",
  },
];
</script>
<template>
  <Header />
  <div class="mx-auto max-w-7xl mb-10">
    <div class="m-auto grid grid-cols-3 md:grid-cols-5 lg:grid-cols-8 gap-x-14">
      <div
        class="relative bg-lightest-gray rounded-3xl col-span-1 md:col-span-2 lg:col-span-3"
      >
        <img
          class="object-cover object-center mix-blend-multiply"
          :src="`${product.imageSrc}`"
        />
        <span
          class="absolute top-10 left-10 font-medium px-4 py-1 rounded-lg bg-blue-950 text-white"
        >
          {{ product.categories[0].title }}
        </span>
      </div>
      <div
        class="grid content-center space-y-2 col-span-2 md:col-span-3 lg:col-span-5"
      >
        <h3 class="text-4xl font-semibold text-blue-950">
          {{ product.name }}
        </h3>
        <div class="flex items-center">
          <div class="flex items-center">
            <StarIcon
              v-for="rating in [0, 1, 2, 3, 4]"
              :key="rating"
              :class="[
                reviews.average > rating ? 'text-yellow-500' : 'text-gray-300',
                'h-5 w-5 flex-shrink-0',
              ]"
              aria-hidden="true"
            />
          </div>
        </div>
        <div class="flex items-baseline">
          <p class="text-xl font-medium text-gray-400 line-through">
            {{ product.price }}
          </p>
          <p class="pl-2 text-2xl font-bold text-blue-950">
            {{ product.price }}
          </p>
        </div>
        <p class="text-gray-600">{{ product.summary }}</p>
        <div class="flex flex-row items-center space-x-4">
          <span class="text-xl text-blue-950 font-bold">Quantidade:</span>
          <input
            id="quantidade"
            class="border-2 border-blue-950 rounded-2xl text-xl py-2 pl-4 w-20 text-center"
            type="number"
            :value="1"
          />
          <NuxtLink
            to="/cart"
            class="flex items-center w-48 px-8 py-3 rounded-2xl justify-between bg-blue-950 hover:bg-blue-900 text-lg text-white ease-linear transition-all duration-150"
          >
            <span class="text-base font-bold">Add To Cart</span>
            <ArrowRightCircleIcon class="w-6 h-6 opacity-20" />
          </NuxtLink>
        </div>
      </div>
    </div>
    <div class="w-full mb-10 px-2 py-16 sm:px-0">
      <TabGroup>
        <TabList class="flex justify-center space-x-2">
          <Tab as="template" v-slot="{ selected }">
            <button
              :class="[
                'rounded-lg py-4 px-10 font-medium text-white',
                'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-950 focus:outline-none focus:ring-2',
                selected
                  ? 'bg-blue-950 shadow'
                  : 'text-blue-900 bg-slate-100 hover:bg-blue-950 hover:text-white',
              ]"
            >
              Product Description
            </button>
          </Tab>
          <Tab as="template" v-slot="{ selected }">
            <button
              :class="[
                'rounded-lg py-4 px-10 font-medium text-white',
                'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-950 focus:outline-none focus:ring-2',
                selected
                  ? 'bg-blue-950 shadow'
                  : 'text-blue-900 bg-slate-100 hover:bg-blue-950 hover:text-white',
              ]"
            >
              Additional Info
            </button>
          </Tab>
        </TabList>

        <TabPanels class="mt-8">
          <TabPanel>
            {{ product.description }}
          </TabPanel>
          <TabPanel> Info </TabPanel>
        </TabPanels>
      </TabGroup>
    </div>

    <h3 class="text-4xl text-center mb-10 font-semibold text-blue-950">
      Related Products
    </h3>
    <div
      class="mt-6 grid grid-cols-1 gap-x-4 gap-y-5 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-6"
    >
      <ProductCard
        v-for="product in products"
        :key="product.id"
        :product="product"
      />
    </div>
  </div>
  <Newsletter />
  <Footer />
</template>
