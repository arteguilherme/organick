<script setup></script>
<template>
  <aside class="fixed bg-blue-950 text-white w-64 min-h-screen p-4">
    <div
      class="w-full pr-3 flex flex-col gap-y-1 text-gray-500 fill-gray-500 text-sm"
    >
      <div class="font-medium pl-4 text-gray-400 text-xs text-[11px] uppercase">
        Menu
      </div>
      <div
        class="w-full flex items-center gap-x-1.5 group select-none cursor-pointer"
      >
        <div
          class="w-1 rounded-xl h-8 bg-transparent transition-colors duration-200 relative overflow-hidden"
        >
          <div
            class="absolute top-0 left-0 w-full h-[102%] group-hover:translate-y-0 translate-y-0 bg-green-600 transition-all duration-300"
          ></div>
        </div>
        <NuxtLink
          class="bg-blue-900 group-hover:bg-blue-900 w-full group-active:scale-95 self-stretch pl-2 rounded flex items-center space-x-2 transition-all duration-200 text-gray-300 hover:text-gray-200 text-sm"
          to="#"
        >
          <Icon
            name="uil:home"
            class="h-5 w-5 !text-green-600 group-hover:text-green-600 dark:text-blue-900 transition-colors duration-200"
          />
          <span class="font-medium">Home</span>
        </NuxtLink>
      </div>
      <div
        class="w-full flex items-center gap-x-1.5 group select-none cursor-pointer"
      >
        <div
          class="w-1 rounded-xl h-8 bg-transparent transition-colors duration-200 relative overflow-hidden"
        >
          <div
            class="absolute top-0 left-0 w-full h-[102%] translate-y-full group-hover:translate-y-0 bg-green-600 transition-all duration-300"
          ></div>
        </div>
        <NuxtLink
          class="group-hover:bg-blue-900 w-full group-active:scale-95 self-stretch pl-2 rounded flex items-center space-x-2 transition-all duration-200 text-gray-300 hover:text-gray-200 text-sm"
          to="#"
        >
          <Icon
            name="uil:building"
            class="h-5 w-5 !text-green-600 group-hover:text-green-600 dark:text-blue-900 transition-colors duration-200"
          />
          <span class="font-medium">Discovery</span>
        </NuxtLink>
      </div>
      <div
        class="w-full flex items-center gap-x-1.5 group select-none cursor-pointer"
      >
        <div
          class="w-1 rounded-xl h-8 bg-transparent transition-colors duration-200 relative overflow-hidden"
        >
          <div
            class="absolute top-0 left-0 w-full h-[102%] translate-y-full group-hover:translate-y-0 bg-green-600 transition-all duration-300"
          ></div>
        </div>
        <NuxtLink
          class="group-hover:bg-blue-900 w-full group-active:scale-95 self-stretch pl-2 rounded flex items-center space-x-2 transition-all duration-200 text-gray-300 hover:text-gray-200 text-sm"
          to="#"
        >
          <Icon
            name="fluent-emoji-high-contrast:busts-in-silhouette"
            class="h-5 w-5 !text-green-600 group-hover:text-green-600 dark:text-blue-900 transition-colors duration-200"
          />
          <span class="font-medium">Friends</span>
        </NuxtLink>
      </div>
      <div
        class="w-full flex items-center gap-x-1.5 group select-none cursor-pointer"
      >
        <div
          class="w-1 rounded-xl h-8 bg-transparent transition-colors duration-200 relative overflow-hidden"
        >
          <div
            class="absolute top-0 left-0 w-full h-[102%] translate-y-full group-hover:translate-y-0 bg-green-600 transition-all duration-300"
          ></div>
        </div>
        <NuxtLink
          class="group-hover:bg-blue-900 w-full group-active:scale-95 self-stretch pl-2 rounded flex items-center space-x-2 transition-all duration-200 text-gray-300 hover:text-gray-200 text-sm"
          to="#"
        >
          <Icon
            name="uil:clock"
            class="h-5 w-5 !text-green-600 group-hover:text-green-600 dark:text-blue-900 transition-colors duration-200"
          />
          <span class="font-medium">Coming soon</span>
        </NuxtLink>
      </div>
    </div>
    <div
      class="w-full pr-3 pt-4 flex flex-col gap-y-1 text-gray-500 fill-gray-500 text-sm"
    >
      <div class="font-medium pl-4 text-gray-400 text-xs text-[11px] uppercase">
        Profile
      </div>
      <div
        class="w-full flex items-center gap-x-1.5 group select-none cursor-pointer"
      >
        <div
          class="w-1 rounded-xl h-8 bg-transparent transition-colors duration-200 relative overflow-hidden"
        >
          <div
            class="absolute top-0 left-0 w-full h-[102%] translate-y-full group-hover:translate-y-0 bg-green-600 transition-all duration-300"
          ></div>
        </div>
        <NuxtLink
          class="group-hover:bg-blue-900 w-full group-active:scale-95 self-stretch pl-2 rounded flex items-center space-x-2 transition-all duration-200 text-gray-300 hover:text-gray-200 text-sm"
          to="#"
        >
          <Icon
            name="uil:pen"
            class="h-5 w-5 !text-green-600 group-hover:text-green-600 dark:text-blue-900 transition-colors duration-200"
          />
          <span class="font-medium">edit profile</span>
        </NuxtLink>
      </div>
      <div
        class="w-full flex items-center gap-x-1.5 group select-none cursor-pointer"
      >
        <div
          class="w-1 rounded-xl h-8 bg-transparent transition-colors duration-200 relative overflow-hidden"
        >
          <div
            class="absolute top-0 left-0 w-full h-[102%] translate-y-full group-hover:translate-y-0 bg-green-600 transition-all duration-300"
          ></div>
        </div>
        <NuxtLink
          class="group-hover:bg-blue-900 w-full group-active:scale-95 self-stretch pl-2 rounded flex items-center space-x-2 transition-all duration-200 text-gray-300 hover:text-gray-200 text-sm"
          to="#"
        >
          <Icon
            name="fa6-solid:gear"
            class="h-5 w-5 !text-green-600 group-hover:text-green-600 dark:text-blue-900 transition-colors duration-200"
          />
          <span class="font-medium">Settings</span>
        </NuxtLink>
      </div>
      <div
        class="w-full flex items-center gap-x-1.5 group select-none cursor-pointer"
      >
        <div
          class="w-1 rounded-xl h-8 bg-transparent transition-colors duration-200 relative overflow-hidden"
        >
          <div
            class="absolute top-0 left-0 w-full h-[102%] translate-y-full group-hover:translate-y-0 bg-green-600 transition-all duration-300"
          ></div>
        </div>
        <NuxtLink
          class="group-hover:bg-blue-900 w-full group-active:scale-95 self-stretch pl-2 rounded flex items-center space-x-2 transition-all duration-200 text-gray-300 hover:text-gray-200 text-sm"
          to="#"
        >
          <Icon
            name="fa6-solid:arrow-right-from-bracket"
            class="h-5 w-5 !text-green-600 group-hover:text-green-600 dark:text-blue-900 transition-colors duration-200"
          />
          <span class="font-medium">log out</span>
        </NuxtLink>
      </div>
    </div>
  </aside>
</template>
