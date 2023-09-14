<script setup></script>
<template>
  <Header />
  <div class="relative isolate overflow-hidden bg-blue-950 py-10 sm:py-10">
    <img
      src="https://res.cloudinary.com/arteguilherme/image/upload/v1694694201/organick/BannerQuality_fktkkt.jpg"
      alt=""
      class="absolute inset-0 -z-10 h-full w-full object-cover md:object-center"
    />
    <div class="mx-auto max-w-screen-2xl px-2 sm:px-6 lg:px-8">
      <div class="flex justify-center items-center h-[10rem]">
        <h2 class="text-5xl font-extrabold text-blue-950">Services</h2>
      </div>
    </div>
  </div>
  <div class="overflow-hidden py-16 sm:py-16">
    <div class="mx-auto max-w-7xl">
      <img src="https://res.cloudinary.com/arteguilherme/image/upload/v1694694207/organick/Colhendo_yrycpk.jpg" alt="" class="w-full" />
      <div class="mx-auto max-w-4xl">
        <h2 class="text-5xl font-bold text-blue-950 py-12">
          Organic Store Services
        </h2>
        <p class="text-lg text-gray-600">
          t is a long established fact that a reader will be distracted by the
          readable content of a page when looking a layout. The point of using
          Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using 'Content here, content here', making it
          look like readable English.<br /><br />Many desktop publishing
          packages and web page editors now use Lorem Ipsum as their default
          model text, and auncover many web sites still in their infancy.
          Various versions have evolved over the years
        </p>
        <figure class="md:flex my-16 space-x-8">
          <img
            class="md:w-[20rem] rounded-2xl mx-auto drop-shadow-md"
            src="https://res.cloudinary.com/arteguilherme/image/upload/v1694694192/organick/Plantando_ejhysz.jpg"
            alt=""
          />
          <div
            class="pt-6 md:p-8 text-center bg-slate-100 rounded-2xl flex items-center md:text-left"
          >
            <blockquote>
              <h2 class="text-2xl font-medium text-blue-950">Why Organic</h2>
              <p class="text-lg text-gray-600">
                Sed ut perspiciatis unde omnis iste natus error sit voluptat.
                page editors now use Lorem Ipsum as their default model text,
                and auncover.
              </p>
            </blockquote>
          </div>
        </figure>
        <figure class="md:flex my-16 space-x-8">
          <div
            class="pt-6 md:p-8 text-center bg-slate-100 rounded-2xl flex items-center md:text-left"
          >
            <blockquote>
              <h2 class="text-2xl font-medium text-blue-950">
                Speciality Produce
              </h2>
              <p class="text-lg text-gray-600">
                Sed ut perspiciatis unde omnis iste natus error sit voluptat.
                page editors now use Lorem Ipsum as their default model text,
                and auncover.
              </p>
            </blockquote>
          </div>
          <img
            class="md:w-[20rem] rounded-2xl mx-auto drop-shadow-md"
            src="https://res.cloudinary.com/arteguilherme/image/upload/v1694694186/organick/Muda_j6uhjf.jpg"
            alt=""
          />
        </figure>
        <h2 class="text-4xl font-bold text-blue-950 pb-6">We farm your land</h2>
        <p class="text-lg text-gray-600">
          t is a long established fact that a reader will be distracted by the
          readable content of a page when looking a layout. The point of using
          Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using 'Content here, content here', making it
          look like readable English.
        </p>
        <div class="grid grid-cols-2 gap-4 pt-14">
          <div class="bg-slate-100 p-4 rounded-full">
            <div class="flex flex-row items-center space-x-8">
              <span
                class="bg-green-600 text-white text-2xl w-16 h-16 flex items-center justify-center font-medium rounded-full"
                >01</span
              >
              <div class="text-2xl font-medium text-blue-950">
                Best quality support
              </div>
            </div>
          </div>
          <div class="bg-slate-100 p-4 rounded-full">
            <div class="flex flex-row items-center space-x-8">
              <span
                class="bg-green-600 text-white text-2xl w-16 h-16 flex items-center justify-center font-medium rounded-full"
                >02</span
              >
              <div class="text-2xl font-medium text-blue-950">
                Money back guarantee
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <Newsletter />
  <Footer />
</template>
