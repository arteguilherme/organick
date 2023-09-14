<script setup>
import { ArrowRightCircleIcon } from "@heroicons/vue/20/solid";
const props = defineProps({
  team: { type: Object, required: true },
});
</script>
<template>
  <div
    class="rounded-3xl bg-slate-50 hover:drop-shadow-2xl hover:bg-white transition duration-150 ease-out hover:ease-in"
  >
    <img
      class="rounded-t-3xl"
      :src="`@/assets/images/${team.imageSrc}`"
      :alt="team.name"
    />
    <div class="p-6">
      <h2 class="text-blue-950 text-2xl font-semibold">{{ team.name }}</h2>
      <div class="flex justify-between items-center">
        <span class="small-text text-xl text-green-600">
          {{ team.role }}
        </span>
        <div class="flex space-x-3 items-center">
          <NuxtLink
            v-for="network in team.socialNetwork"
            :to="network.link"
            target="_blank"
          >
            <Icon
              :name="`uil:${network.name}`"
              class="text-2xl text-blue-950 hover:text-green-600 transition duration-150 ease-out hover:ease-in"
            />
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>
