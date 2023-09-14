<script setup>
import Banner from "@/components/Banner.vue";
import BannerOffer from "@/components/BannerOffer.vue";
import AboutUs from "@/components/AboutUs.vue";
import ProductCard from "@/components/ProductCard.vue";
import Testimonial from "@/components/Testimonial.vue";
import EcoFriendly from "@/components/EcoFriendly.vue";
import News from "@/components/News.vue";
import Newsletter from "@/components/Newsletter.vue";
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";

import { ArrowRightCircleIcon } from "@heroicons/vue/20/solid";

const products = [
  {
    id: 1,
    name: "Brocolis",
    href: "#",
    imageSrc: "https://res.cloudinary.com/arteguilherme/image/upload/v1694694202/organick/Brocolis-removebg_aufhos.png",
    imageAlt: "Front of men's Basic Tee in black.",
    price: "$13.00",
  },
  {
    id: 2,
    name: "Banana",
    href: "#",
    imageSrc: "Banana-removebg.png",
    imageAlt: "Front of men's Basic Tee in black.",
    price: "$16.00",
  },
  {
    id: 3,
    name: "Castanha",
    href: "#",
    imageSrc: "Castanha02-removebg.png",
    imageAlt: "Front of men's Basic Tee in black.",
    price: "$21.00",
  },
  {
    id: 4,
    name: "Tomate",
    href: "#",
    imageSrc: "Tomate-removebg.png",
    imageAlt: "Front of men's Basic Tee in black.",
    price: "$12.00",
  },
  {
    id: 5,
    name: "Feijao",
    href: "#",
    imageSrc: "Feijao-removebg.png",
    imageAlt: "Front of men's Basic Tee in black.",
    price: "$9.00",
  },
  {
    id: 6,
    name: "Castanha",
    href: "#",
    imageSrc: "Castanha01-removebg.png",
    imageAlt: "Front of men's Basic Tee in black.",
    price: "$26.00",
  },
  {
    id: 7,
    name: "Ovos",
    href: "#",
    imageSrc: "Ovos-removebg.png",
    imageAlt: "Front of men's Basic Tee in black.",
    price: "$11.00",
  },
  {
    id: 8,
    name: "Pao",
    href: "#",
    imageSrc: "Pao-removebg.png",
    imageAlt: "Front of men's Basic Tee in black.",
    price: "$8.00",
  },
];
const offers = [
  {
    id: 1,
    name: "Couve Flor",
    href: "#",
    imageSrc: "CouveFlor-removebg.png",
    imageAlt: "Front of men's Basic Tee in black.",
    price: "$13.00",
  },
  {
    id: 2,
    name: "Abobora Verde",
    href: "#",
    imageSrc: "AboboraVerde-removebg.png",
    imageAlt: "Front of men's Basic Tee in black.",
    price: "$14.00",
  },
  {
    id: 3,
    name: "Cebola",
    href: "#",
    imageSrc: "Cebola-removebg.png",
    imageAlt: "Front of men's Basic Tee in black.",
    price: "$7.00",
  },
  {
    id: 4,
    name: "Repolho",
    href: "#",
    imageSrc: "Repolho-removebg.png",
    imageAlt: "Front of men's Basic Tee in black.",
    price: "$9.00",
  },
];
const reviews = { href: "#", average: 4, totalCount: 117 };
</script>

<template>
  <Header />
  <Banner />
  <BannerOffer />
  <AboutUs />
  <div class="overflow-hidden py-14 sm:py-24">
    <div class="mx-auto max-w-7xl">
      <div class="text-center items-center">
        <span class="text-3xl small-text text-green-600">Organick</span>
        <h1
          class="mt-4 text-4xl font-bold tracking-tight text-blue-950 sm:text-5xl"
        >
          Our Products
        </h1>
      </div>
      <div class="mx-auto max-w-2xl py-8 sm:py-8 lg:max-w-7xl">
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
      <div class="flex justify-center mt-14">
        <NuxtLink
          to="/products"
          class="flex items-center w-48 px-8 py-4 rounded-md justify-between bg-blue-950 hover:bg-blue-900 text-lg text-white ease-linear transition-all duration-150"
        >
          <span class="text-base font-bold">Load More</span>
          <ArrowRightCircleIcon class="w-6 h-6 opacity-20" />
        </NuxtLink>
      </div>
    </div>
  </div>
  <Testimonial />
  <div class="overflow-hidden py-14 sm:py-24 bg-cyan-950">
    <div class="mx-auto max-w-7xl">
      <div class="">
        <span class="text-3xl small-text text-green-600">Offer</span>
        <h1
          class="mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl"
        >
          We Offer Organic For You
        </h1>
      </div>
      <div class="mx-auto max-w-2xl py-8 sm:py-8 lg:max-w-7xl">
        <div
          class="mt-6 grid grid-cols-1 gap-x-4 gap-y-5 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-6"
        >
          <ProductCard
            v-for="product in offers"
            :key="product.id"
            :product="product"
          />
        </div>
      </div>
    </div>
  </div>
  <EcoFriendly />
  <Gallery />
  <News />
  <Newsletter />
  <Footer />
</template>
