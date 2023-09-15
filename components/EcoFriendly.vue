<script setup>
const features = [
  {
    id: 1,
    name: "Start with Our Company First",
    description:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptat accusantium doloremque laudantium. Sed ut perspiciatis.",
  },
  {
    id: 2,
    name: "Learn How to Grow Yourself",
    description:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptat accusantium doloremque laudantium. Sed ut perspiciatis.",
  },
  {
    id: 3,
    name: "Farming Strategies of Today",
    description:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptat accusantium doloremque laudantium. Sed ut perspiciatis.",
  },
];
</script>
<template>
  <div class="overflow-hidden bg-white">
    <div class="">
      <div
        class="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2"
      >
        <img
          src="https://res.cloudinary.com/arteguilherme/image/upload/v1694694209/organick/EcoFriendlyImg_anuodk.jpg"
          alt="Product screenshot"
          class="w-[48rem] max-w-none sm:w-[57rem]"
          width="2432"
          height="1442"
        />
        <div class="lg:pr-8 lg:pt-40">
          <div class="lg:max-w-3xl bg-white p-14 rounded-3xl">
            <div class="lg:max-w-lg">
              <span class="text-3xl small-text text-green-600">
                Eco Friendly
              </span>
              <h1
                class="mt-1 text-4xl font-bold tracking-tight text-blue-950 sm:text-5xl"
              >
                Econis is a Friendly Organic Store
              </h1>
            </div>
            <dl
              class="mt-10 max-w-xl space-y-8 text-base leading-7 lg:max-w-none"
            >
              <div
                v-for="feature in features"
                :key="feature.id"
                class="relative"
              >
                <dt class="font-medium text-2xl text-blue-950">
                  {{ feature.name }}
                </dt>
                <dd class="text-lg text-gray-500">{{ feature.description }}</dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
