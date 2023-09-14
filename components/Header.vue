<template>
  <header class="bg-white">
    <div
      class="mx-auto flex max-w-screen-2xl items-center justify-between p-6 lg:px-8"
    >
      <NuxtLink to="/"><img :src="LogoOrganick" alt="my-logo" /></NuxtLink>
      <PopoverGroup class="hidden lg:flex lg:gap-x-8">
        <NuxtLink to="/" class="font-semibold leading-6 text-blue-950"
          >Home</NuxtLink
        >
        <NuxtLink to="/about" class="font-semibold leading-6 text-blue-950"
          >About</NuxtLink
        >
        <Popover class="relative">
          <PopoverButton
            class="flex items-center gap-x-1 font-semibold leading-6 text-blue-950"
          >
            Pages
            <ChevronDownIcon
              class="h-5 w-5 flex-none text-gray-400"
              aria-hidden="true"
            />
          </PopoverButton>

          <transition
            enter-active-class="transition ease-out duration-200"
            enter-from-class="opacity-0 translate-y-1"
            enter-to-class="opacity-100 translate-y-0"
            leave-active-class="transition ease-in duration-150"
            leave-from-class="opacity-100 translate-y-0"
            leave-to-class="opacity-0 translate-y-1"
          >
            <PopoverPanel
              class="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5"
            >
              <div class="p-4">
                <div
                  v-for="item in products"
                  :key="item.name"
                  class="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50"
                >
                  <div
                    class="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white"
                  >
                    <component
                      :is="item.icon"
                      class="h-6 w-6 text-gray-600 group-hover:text-indigo-600"
                      aria-hidden="true"
                    />
                  </div>
                  <div class="flex-auto">
                    <NuxtLink
                      :to="item.to"
                      class="block font-semibold text-gray-800"
                    >
                      {{ item.name }}
                      <span class="absolute inset-0" />
                    </NuxtLink>
                    <p class="mt-1 text-gray-600">{{ item.description }}</p>
                  </div>
                </div>
              </div>
              <div
                class="grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50"
              >
                <NuxtLink
                  v-for="item in callsToAction"
                  :key="item.name"
                  :to="item.to"
                  class="flex items-center justify-center gap-x-2.5 p-3 text-sm font-semibold leading-6 text-gray-800 hover:bg-gray-100"
                >
                  <component
                    :is="item.icon"
                    class="h-5 w-5 flex-none text-gray-400"
                    aria-hidden="true"
                  />
                  {{ item.name }}
                </NuxtLink>
              </div>
            </PopoverPanel>
          </transition>
        </Popover>
        <NuxtLink to="/products" class="font-semibold leading-6 text-blue-950"
          >Shop</NuxtLink
        >
        <NuxtLink to="/projexts" class="font-semibold leading-6 text-blue-950"
          >Projects</NuxtLink
        >
        <NuxtLink to="/news" class="font-semibold leading-6 text-blue-950"
          >News</NuxtLink
        >
      </PopoverGroup>
      <div class="flex items-center">
        <div class="relative w-full">
          <input
            id="search-products"
            name="search"
            type="text"
            autocomplete="search"
            class="w-full rounded-full border-0 bg-gray-100 px-3.5 py-3 text-gray-500 shadow-sm focus:outline-none sm:text-sm sm:leading-6"
          />
          <button
            type="submit"
            class="absolute right-1 top-[.15rem] flex-none rounded-full bg-green-600 px-3 py-3 text-sm font-semibold text-white shadow-sm hover:bg-green-500 ease-linear transition-all duration-150"
          >
            <MagnifyingGlassIcon class="h-5 w-5" aria-hidden="true" />
          </button>
        </div>
        <div class="w-60 text-right">
          <Menu as="div" class="relative inline-block text-left">
            <div>
              <MenuButton
                class="inline-flex w-full items-center space-x-2 justify-center rounded-full p-1 border-2 border-gray-100 hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
              >
                <div class="rounded-full p-3 bg-blue-950">
                  <ShoppingCartIcon
                    class="h-5 text-gray-200 hover:text-violet-100"
                    aria-hidden="true"
                  />
                </div>
                <span class="text-lg pr-2 font-bold text-blue-950"
                  >Cart (0)</span
                >
              </MenuButton>
            </div>

            <transition
              enter-active-class="transition duration-100 ease-out"
              enter-from-class="transform scale-95 opacity-0"
              enter-to-class="transform scale-100 opacity-100"
              leave-active-class="transition duration-75 ease-in"
              leave-from-class="transform scale-100 opacity-100"
              leave-to-class="transform scale-95 opacity-0"
            >
              <MenuItems
                class="absolute right-0 z-10 mt-2 p-4 w-96 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
              >
                <MenuItem v-slot="{ active }">
                  <button
                    :class="[
                      active ? 'bg-violet-500 text-white' : 'text-gray-800',
                      'group flex w-full items-center rounded-md px-2 py-2 text-sm',
                    ]"
                  >
                    Edit
                  </button>
                </MenuItem>
                <div class="px-1 py-1">
                  <div class="flex justify-between space-x-2">
                    <NuxtLink
                      to="/checkout"
                      :class="[
                        active
                          ? 'bg-yellow-400 text-white'
                          : 'bg-blue-950 text-white hover:bg-yellow-400 hover:text-blue-950',
                        'group flex w-full justify-center rounded-md px-2 py-2 text-lg font-medium uppercase ease-linear transition-all duration-150',
                      ]"
                    >
                      Finalizar
                    </NuxtLink>
                    <NuxtLink
                      to="/cart"
                      :class="[
                        active
                          ? 'bg-yellow-400 text-blue-950'
                          : 'bg-yellow-400 text-blue-950 hover:bg-blue-950 hover:text-blue-950',
                        'group flex w-full justify-center rounded-md px-2 py-2 text-lg font-medium uppercase ease-linear transition-all duration-150',
                      ]"
                    >
                      Carrinho
                    </NuxtLink>
                  </div>
                </div>
              </MenuItems>
            </transition>
          </Menu>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref } from "vue";
import {
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
} from "@headlessui/vue";
import {
  ArrowPathIcon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
  ShoppingCartIcon,
} from "@heroicons/vue/24/outline";
import {
  ChevronDownIcon,
  PhoneIcon,
  PlayCircleIcon,
  MagnifyingGlassIcon,
} from "@heroicons/vue/20/solid";
import { Menu, MenuButton, MenuItems, MenuItem } from "@headlessui/vue";
import LogoOrganick from "@/assets/images/logo_organick.svg";

const products = [
  {
    name: "Analytics",
    description: "Get a better understanding of your traffic",
    to: "/analytics",
    icon: ChartPieIcon,
  },
  {
    name: "Engagement",
    description: "Speak directly to your customers",
    to: "/engagement",
    icon: CursorArrowRaysIcon,
  },
  {
    name: "Security",
    description: "Your customers’ data will be safe and secure",
    to: "/security",
    icon: FingerPrintIcon,
  },
  {
    name: "Integrations",
    description: "Connect with third-party tools",
    to: "/integrations",
    icon: SquaresPlusIcon,
  },
  {
    name: "Automations",
    description: "Build strategic funnels that will convert",
    to: "/automations",
    icon: ArrowPathIcon,
  },
];
const callsToAction = [
  { name: "Watch demo", to: "watch_demo", icon: PlayCircleIcon },
  { name: "Contact sales", to: "/comtact", icon: PhoneIcon },
];

const mobileMenuOpen = ref(false);
</script>
