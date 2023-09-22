<script setup>
import { PhotoIcon, UserCircleIcon } from "@heroicons/vue/24/solid";
import {
  Combobox,
  ComboboxInput,
  ComboboxButton,
  ComboboxOptions,
  ComboboxOption,
  TransitionRoot,
} from "@headlessui/vue";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/vue/20/solid";
import { useForm } from "vee-validate";

definePageMeta({
  layout: "admin",
});

const visible = [
  { id: 1, name: "Show" },
  { id: 2, name: "Hide" },
];

const image = reactive({
  fileName: "",
  preview: null,
  preset: process.env.VUE_APP_UPLOAD_PRESET,
  formData: null,
  cloudName: process.env.VUE_APP_CLOUD_NAME,
  success: "",
});

const handleFileChange = (event) => {
  const file = event.files[0];
  image.fileName = file.name;
  image.formData = new FormData();
  image.formData.append("upload_preset", image.preset);

  let reader = new FileReader();
  reader.readAsDataURL(file);

  reader.onload = (e) => {
    image.preview = e.target.result;
    image.formData.append("file", image.preview);
  };
};

let selected = ref(visible[0]);
let query = ref("");

let filteredVisible = computed(() =>
  query.value === ""
    ? visible
    : visible.filter((item) =>
        item.name
          .toLowerCase()
          .replace(/\s+/g, "")
          .includes(query.value.toLowerCase().replace(/\s+/g, ""))
      )
);

const categoryStore = useCategoryStore();
const category = ref({});

const { handleSubmit } = useForm({
  initialValues: category,
});

const submitCategory = handleSubmit(async (values) => {
  if (!category.value._id) {
    await categoryStore.create(values);
  } else {
  }
});
</script>
<template>
  <NuxtLayout>
    <h1 class="text-2xl font-bold mb-4">Create Category</h1>
    <div class="container m-auto grid grid-cols-3 gap-4">
      <div class="rounded-md col-span-2">
        <form @submit="submitCategory">
          <div class="space-y-12 p-4 shadow-md border border-gray-100">
            <div class="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div class="col-span-full">
                <label
                  for="category-title"
                  class="block text-sm font-medium leading-6 text-gray-900"
                  >Category Title</label
                >
                <div class="mt-2">
                  <input
                    v-model="category.name"
                    roles="required"
                    type="text"
                    name="category-title"
                    id="category-title"
                    autocomplete="category-title"
                    class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div class="col-span-full">
                <label
                  for="summary"
                  class="block text-sm font-medium leading-6 text-gray-900"
                  >Product Short Description</label
                >
                <div class="mt-2">
                  <textarea
                    v-model="category.description"
                    roles="required"
                    id="summary"
                    name="summary"
                    rows="3"
                    class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
            </div>
          </div>

          <div
            class="flex items-center justify-end gap-x-4 p-4 border-t border-gray-900/10"
          >
            <button
              type="button"
              class="w-full px-4 py-2 rounded-md bg-red-600 hover:bg-red-500 text-lg text-white ease-linear transition-all duration-150"
            >
              Cancel
            </button>
            <button
              type="submit"
              class="w-full px-4 py-2 rounded-md bg-blue-950 hover:bg-blue-900 text-lg text-white ease-linear transition-all duration-150"
            >
              Save
            </button>
          </div>
        </form>
      </div>
      <div>
        <div class="shadow-md border border-gray-100 rounded-md col-span-1">
          <div class="p-4 border-b border-gray-900/10">
            <h1 class="font-medium">Publish</h1>
          </div>
          <div class="p-4">
            <div class="col-span-full">
              <label
                for="cover-photo"
                class="block text-sm font-medium leading-6 text-gray-900"
                >Cover photo</label
              >
              <img v-if="image.preview" v-bind:src="image.preview" />

              <div
                class="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10"
                @dragover.prevent
                @dragenter.prevent
                @dragstart.prevent
                @drop.prevent="handleFileChange($event.dataTransfer)"
                v-else
              >
                <div class="text-center">
                  <PhotoIcon
                    class="mx-auto h-12 w-12 text-gray-300"
                    aria-hidden="true"
                  />
                  <div class="mt-4 flex text-sm leading-6 text-gray-600">
                    <label
                      for="file-upload"
                      class="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                    >
                      <span>Upload a file</span>
                      <input
                        id="file-upload"
                        name="file-upload"
                        type="file"
                        class="sr-only"
                        @change="handleFileChange($event.target)"
                      />
                    </label>
                    <p class="pl-1">or drag and drop</p>
                  </div>
                  <p class="text-xs leading-5 text-gray-600">
                    PNG, JPG up to 10MB
                  </p>
                </div>
              </div>
            </div>
            <div class="mt-4">
              <label for="visible" class="font-medium text-gray-900"
                >Visible</label
              >
              <Combobox v-model="selected">
                <div class="relative mt-1">
                  <div
                    class="relative w-full cursor-default overflow-hidden rounded-lg bg-white text-left shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-teal-300 sm:text-sm"
                  >
                    <ComboboxInput
                      class="w-full border-none py-2 pl-3 pr-10 text-sm leading-5 text-gray-900 focus:ring-0"
                      :displayValue="(item) => item.name"
                      @change="query = $event.target.value"
                    />
                    <ComboboxButton
                      class="absolute inset-y-0 right-0 flex items-center pr-2"
                    >
                      <ChevronUpDownIcon
                        class="h-5 w-5 text-gray-400"
                        aria-hidden="true"
                      />
                    </ComboboxButton>
                  </div>
                  <TransitionRoot
                    leave="transition ease-in duration-100"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                    @after-leave="query = ''"
                  >
                    <ComboboxOptions
                      class="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm"
                    >
                      <div
                        v-if="filteredVisible.length === 0 && query !== ''"
                        class="relative cursor-default select-none py-2 px-4 text-gray-700"
                      >
                        Nothing found.
                      </div>

                      <ComboboxOption
                        v-for="item in filteredVisible"
                        as="template"
                        :key="item.id"
                        :value="item"
                        v-slot="{ selected, active }"
                      >
                        <li
                          class="relative cursor-default select-none py-2 pl-10 pr-4"
                          :class="{
                            'bg-teal-600 text-white': active,
                            'text-gray-900': !active,
                          }"
                        >
                          <span
                            class="block truncate"
                            :class="{
                              'font-medium': selected,
                              'font-normal': !selected,
                            }"
                          >
                            {{ item.name }}
                          </span>
                          <span
                            v-if="selected"
                            class="absolute inset-y-0 left-0 flex items-center pl-3"
                            :class="{
                              'text-white': active,
                              'text-teal-600': !active,
                            }"
                          >
                            <CheckIcon class="h-5 w-5" aria-hidden="true" />
                          </span>
                        </li>
                      </ComboboxOption>
                    </ComboboxOptions>
                  </TransitionRoot>
                </div>
              </Combobox>
            </div>
          </div>
        </div>
      </div>
    </div>
  </NuxtLayout>
</template>
