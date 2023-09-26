<script setup></script>
<template>
  <div class="mx-auto max-w-7xl px-6 py-12 sm:py-16">
    <div
      class="bg-[url(https://res.cloudinary.com/arteguilherme/image/upload/v1694694187/organick/Newsletter_w5ojlj.jpg)] bg-cover bg-center p-10 sm:py-20 sm:px-16 rounded-3xl"
    >
      <div
        class="mx-auto grid max-w-2xl grid-cols-1 gap-x-36 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2"
      >
        <div class="text-5xl text-white font-bold">
          Subscribe to our Newsletter
        </div>
        <div class="space-x-2 mt-6">
          <input
            id="email-address"
            name="email"
            type="email"
            autocomplete="email"
            required
            class="sm:w-80 flex-auto rounded-xl text-lg p-4 text-white"
            placeholder="Your Email Address"
          />
          <button
            type="submit"
            class="flex-none rounded-xl bg-blue-950 text-xl px-10 py-4 font-medium text-white hover:bg-yellow-400 hover:text-blue-950 transition duration-150 ease-out hover:ease-in"
          >
            Subscribe
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
