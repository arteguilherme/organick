<script setup>
import ProductCard from "@/components/ProductCard.vue";

const products = [
  {
    id: 1,
    name: "Brocolis",
    href: "#",
    imageSrc: "Brocolis-removebg.png",
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
  {
    id: 9,
    name: "Abobora",
    href: "#",
    imageSrc: "AboboraVerde01-removebg.png",
    imageAlt: "Front of men's Basic Tee in black.",
    price: "$10.00",
  },
  {
    id: 10,
    name: "Castanha de Caju",
    href: "#",
    imageSrc: "CastanhadeCaju-removebg.png",
    imageAlt: "Front of men's Basic Tee in black.",
    price: "$25.00",
  },
  {
    id: 11,
    name: "Milho Verde",
    href: "#",
    imageSrc: "MilhoVerde-removebg.png",
    imageAlt: "Front of men's Basic Tee in black.",
    price: "$9.00",
  },
  {
    id: 12,
    name: "Castanha de Amendoa",
    href: "#",
    imageSrc: "CastanhadeAmendoa-removebg.png",
    imageAlt: "Front of men's Basic Tee in black.",
    price: "$35.00",
  },
];
</script>
<template>
  <Header />
  <div class="mx-auto max-w-7xl mb-10">
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
