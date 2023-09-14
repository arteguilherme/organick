<script setup>
import Header from "@/components/Header.vue";
import TeamCard from "@/components/TeamCard.vue";

import {
  ArrowRightCircleIcon,
  CreditCardIcon,
  PhoneArrowUpRightIcon,
  ShoppingCartIcon,
  ShoppingBagIcon,
} from "@heroicons/vue/20/solid";

import OrganicIcon from "@/assets/images/Trator.svg";
import PostBoxIcon from "@/assets/images/Industria.svg";

const features = [
  {
    name: "Modern Agriculture Equipment",
    icon: OrganicIcon,
  },
  {
    name: "No growth hormones are used",
    icon: PostBoxIcon,
  },
];
const teams = [
  {
    id: 1,
    name: "Giovani Bacardo",
    imageSrc: "Giovani.jpg",
    role: "Farmer",
    socialNetwork: [
      { name: "facebook", link: "https://www.facebook.com/giovani_bacardo" },
      { name: "twitter", link: "https://www.twitter.com/giovani_bacardo" },
    ],
  },
  {
    id: 2,
    name: "Marianne Loreno",
    imageSrc: "Marianne.jpg",
    role: "Designer",
    socialNetwork: [
      { name: "instagram", link: "https://www.instagram.com/marianne_loreno" },
      { name: "facebook", link: "https://www.facebook.com/marianne_loreno" },
      { name: "twitter", link: "https://www.twitter.com/marianne_loreno" },
    ],
  },
  {
    id: 3,
    name: "Riga Pelore",
    imageSrc: "Riga.jpg",
    role: "Farmer",
    socialNetwork: [
      { name: "instagram", link: "https://www.instagram.com/riga_pelore" },
      { name: "facebook", link: "https://www.facebook.com/riga_pelore" },
      { name: "twitter", link: "https://www.twitter.com/riga_pelore" },
    ],
  },
];
</script>
<template>
  <Header />
  <div class="relative isolate overflow-hidden bg-blue-950 py-10 sm:py-10">
    <img
      src="@/assets/images/BannerAboutus.jpg"
      alt=""
      class="absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center"
    />
    <div class="mx-auto max-w-screen-2xl px-2 sm:px-6 lg:px-8">
      <div class="flex justify-center items-center h-[10rem]">
        <h2 class="text-5xl font-extrabold text-blue-950">Quem Somos</h2>
      </div>
    </div>
  </div>
  <div class="overflow-hidden py-16 sm:py-28">
    <div class="mx-auto max-w-7xl">
      <div
        class="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2"
      >
        <img
          src="@/assets/images/AboutUS.png"
          alt="Product screenshot"
          class="w-full"
        />
        <div class="">
          <span class="text-3xl small-text text-green-600">About Us</span>
          <div class="lg:max-w-md">
            <h3
              class="mt-4 text-4xl font-bold tracking-tight text-blue-950 sm:text-5xl"
            >
              We do Creative Things for Success
            </h3>
          </div>
          <p class="mt-6 text-lg text-gray-600">
            Simply dummy text of the printing and typesetting industry. Lorem
            had ceased to been the industry's standard dummy text ever since the
            1500s, when an unknown printer took a galley. <br /><br />Simply
            dummy text of the printing and typesetting industry. Lorem had
            ceased to been the industry's standard dummy text ever since the
            1500s, when an unknown printer took a galley.
          </p>
          <div
            class="flex justify-between my-10 max-w-xl text-base text-gray-600 lg:max-w-none"
          >
            <div
              v-for="feature in features"
              :key="feature.name"
              class="flex items-center space-x-4"
            >
              <img
                :src="feature.icon"
                class="h-14 w-3h-14 text-green-600"
                :alt="feature.name"
              />
              <h2 class="font-semibold text-2xl text-blue-950">
                {{ feature.name }}
              </h2>
            </div>
          </div>
          <NuxtLink
            to="/create_account"
            class="flex items-center w-48 px-8 py-4 rounded-md justify-between bg-blue-950 hover:bg-blue-900 text-lg text-white ease-linear transition-all duration-150"
          >
            <span class="text-base font-bold">Explore More</span>
            <ArrowRightCircleIcon class="w-6 h-6 opacity-20" />
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
  <div class="bg-slate-100">
    <div class="mx-auto max-w-screen-2xl px-2 py-32 sm:px-6 lg:px-8">
      <div
        class="mx-auto items-center grid max-w-2xl grid-cols-1 gap-x-16 lg:mx-0 lg:max-w-none lg:grid-cols-2"
      >
        <div class="mb-4">
          <div class="mb-10">
            <span class="text-3xl small-text text-green-600">
              Why Choose us?
            </span>
            <h3
              class="mt-4 text-4xl font-bold tracking-tight text-blue-950 sm:text-5xl"
            >
              We do not buy from the open market & traders.
            </h3>
            <p class="mt-6 text-lg text-gray-600">
              Simply dummy text of the printing and typesetting industry. Lorem
              had ceased to been the industry's standard the 1500s, when an
              unknown.
            </p>
          </div>
          <div class="flex flex-col mt-4">
            <div
              class="flex sm:w-1/2 px-2 py-4 rounded-full items-center bg-gray-200"
            >
              <div class="text-light-green p-4">
                <ArrowRightCircleIcon class="h-6 w-6 text-green-600" />
              </div>
              <h3 class="text-blue-950 text-xl font-semibold">
                100% Produto Natural
              </h3>
            </div>
            <p class="text-lg text-gray-600 py-4 px-16">
              Simply dummy text of the printing and typesetting industry. When
              an unknown printer took a galley.
            </p>
          </div>
          <div class="flex flex-col mt-4">
            <div
              class="flex sm:w-1/2 px-2 py-4 rounded-full items-center bg-gray-200"
            >
              <div class="text-light-green p-4">
                <ArrowRightCircleIcon class="h-6 w-6 text-green-600" />
              </div>
              <h3 class="text-blue-950 text-xl font-semibold">
                Aumenta a resistência
              </h3>
            </div>
            <p class="text-lg text-gray-600 py-4 px-16">
              Simply dummy text of the printing and typesetting industry. When
              an unknown printer took a galley.
            </p>
          </div>
        </div>
        <img
          class="hidden sm:block rounded-3xl"
          src="_nuxt/assets/images/NosEscolher.jpg"
          alt="Fruit image"
        />
      </div>
      <div
        class="pt-12 px-24 grid grid-cols-1 gap-y-10 gap-x-4 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8"
      >
        <div class="flex justify-center">
          <div
            class="flex flex-col items-center justify-center bg-white px-6 py-10 rounded-3xl"
          >
            <div class="bg-gray-100 text-blue-950 mb-4 p-4 rounded-lg">
              <ShoppingCartIcon class="h-8 w-8 text-blue-950" />
            </div>
            <h2 class="text-2xl text-blue-950 font-extrabold text-center">
              Política de Retorno
            </h2>
            <p class="text-lg text-center text-gray-600 py-4">
              Simply dummy text of the printing and typesetting industry. When
              an unknown printer took a galley.
            </p>
          </div>
        </div>
        <div class="flex justify-center">
          <div
            class="flex flex-col items-center justify-center bg-white px-6 py-14 rounded-3xl"
          >
            <div class="bg-gray-100 text-blue-950 mb-4 p-4 rounded-lg">
              <ShoppingBagIcon class="h-8 w-8 text-blue-950" />
            </div>
            <h2 class="text-2xl text-blue-950 font-extrabold text-center">
              100% Fresco
            </h2>
            <p class="text-lg text-center text-gray-600 py-4">
              Simply dummy text of the printing and typesetting industry. When
              an unknown printer took a galley.
            </p>
          </div>
        </div>
        <div class="flex justify-center">
          <div
            class="flex flex-col items-center justify-center bg-white px-6 py-10 rounded-3xl"
          >
            <div class="bg-gray-100 text-blue-950 mb-4 p-4 rounded-lg">
              <PhoneArrowUpRightIcon class="h-8 w-8 text-blue-950" />
            </div>
            <h2 class="text-2xl text-blue-950 font-extrabold text-center">
              Suporte 24hs
            </h2>
            <p class="text-lg text-center text-gray-600 py-4">
              Simply dummy text of the printing and typesetting industry. When
              an unknown printer took a galley.
            </p>
          </div>
        </div>
        <div class="flex justify-center">
          <div
            class="flex flex-col items-center justify-center bg-white px-6 py-10 rounded-3xl"
          >
            <div class="bg-gray-100 text-blue-950 mb-4 p-4 rounded-lg">
              <CreditCardIcon class="h-8 w-8 text-blue-950" />
            </div>
            <h2 class="text-2xl text-blue-950 font-extrabold text-center">
              Pagamento seguro
            </h2>
            <p class="text-lg text-center text-gray-600 py-4">
              Simply dummy text of the printing and typesetting industry. When
              an unknown printer took a galley.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="overflow-hidden py-14 sm:py-24">
    <div class="mx-auto max-w-screen-2xl">
      <div class="text-center items-center">
        <span class="text-3xl small-text text-green-600">Team</span>
        <h1
          class="mt-4 text-4xl font-bold tracking-tight text-blue-950 sm:text-5xl"
        >
          Our Organic Experts
        </h1>
        <div class="m-auto lg:max-w-4xl">
          <p class="text-lg text-center text-gray-600 py-4">
            Simply dummy text of the printing and typesetting industry. Lorem
            had ceased to been the industry's standard dummy text ever since the
            1500s, when an unknown printer took a galley.
          </p>
        </div>
      </div>
      <div
        class="mx-auto mt-10 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8"
      >
        <TeamCard v-for="team in teams" :key="team.id" :team="team" />
      </div>
    </div>
  </div>

  <div class="py-14 sm:py-24 bg-cyan-950">
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
        class="mt-6 grid grid-cols-1 gap-x-4 gap-y-5 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-6"
      >
        <NuxtLink to="/categories" class="h-80 space-y-2">
          <img
            src="@/assets/images/Temperos.jpg"
            alt=""
            class="h-full w-full rounded-2xl object-cover object-right md:object-center"
          />
          <h3 class="text-white font-medium text-center">Temperos</h3>
        </NuxtLink>
        <NuxtLink to="/categories" class="h-80 space-y-2">
          <img
            src="@/assets/images/Castanhas.jpg"
            alt=""
            class="h-full w-full rounded-2xl object-cover object-right md:object-center"
          />
          <h3 class="text-white font-medium text-center">Castanhas</h3>
        </NuxtLink>
        <NuxtLink to="/categories" class="h-80 space-y-2">
          <img
            src="@/assets/images/Roma.jpg"
            alt=""
            class="h-full w-full rounded-2xl object-cover object-right md:object-center"
          />
          <h3 class="text-white font-medium text-center">Frutas</h3>
        </NuxtLink>
        <NuxtLink to="/categories" class="h-80 space-y-2">
          <img
            src="@/assets/images/Gengibre.jpg"
            alt=""
            class="h-full w-full rounded-2xl object-cover object-right md:object-center"
          />
          <h3 class="text-white font-medium text-center">Vegetais</h3>
        </NuxtLink>
      </div>
    </div>
  </div>
  <Newsletter />
  <Footer />
</template>
