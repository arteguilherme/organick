<script setup>
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
  {
    id: 5,
    name: "Feijao",
    href: "/products/teste",
    imageSrc: "https://res.cloudinary.com/arteguilherme/image/upload/v1694694208/organick/Feijao-removebg_csqdjn.png",
    imageAlt: "Front of men's Basic Tee in black.",
    price: "$9.00",
  },
  {
    id: 6,
    name: "Castanha",
    href: "/products/teste",
    imageSrc: "https://res.cloudinary.com/arteguilherme/image/upload/v1694694203/organick/Castanha01-removebg_tdpdz4.png",
    imageAlt: "Front of men's Basic Tee in black.",
    price: "$26.00",
  },
  {
    id: 7,
    name: "Ovos",
    href: "/products/teste",
    imageSrc: "https://res.cloudinary.com/arteguilherme/image/upload/v1694694189/organick/Ovos-removebg_kufxlf.png",
    imageAlt: "Front of men's Basic Tee in black.",
    price: "$11.00",
  },
  {
    id: 8,
    name: "Pao",
    href: "/products/teste",
    imageSrc: "https://res.cloudinary.com/arteguilherme/image/upload/v1694694190/organick/Pao-removebg_nfdpci.png",
    imageAlt: "Front of men's Basic Tee in black.",
    price: "$8.00",
  },
  {
    id: 9,
    name: "Abobora",
    href: "/products/teste",
    imageSrc: "https://res.cloudinary.com/arteguilherme/image/upload/v1694694199/organick/AboboraVerde01-removebg_hpefwk.png",
    imageAlt: "Front of men's Basic Tee in black.",
    price: "$10.00",
  },
  {
    id: 10,
    name: "Castanha de Caju",
    href: "/products/teste",
    imageSrc: "https://res.cloudinary.com/arteguilherme/image/upload/v1694694205/organick/CastanhadeCaju-removebg_hukmho.png",
    imageAlt: "Front of men's Basic Tee in black.",
    price: "$25.00",
  },
  {
    id: 11,
    name: "Milho Verde",
    href: "/products/teste",
    imageSrc: "https://res.cloudinary.com/arteguilherme/image/upload/v1694694186/organick/MilhoVerde-removebg_wzs29x.png",
    imageAlt: "Front of men's Basic Tee in black.",
    price: "$9.00",
  },
  {
    id: 12,
    name: "Castanha de Amendoa",
    href: "/products/teste",
    imageSrc: "https://res.cloudinary.com/arteguilherme/image/upload/v1694694205/organick/CastanhadeAmendoa-removebg_vtps4q.png",
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
