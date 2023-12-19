<template>
  <div class="bg-white dark:bg-gray-700">
    <div
      class="relative mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8 lg:pt-16"
    >
      <h3 class="text-black dark:text-gray-200 text-4xl uppercase">
        {{ cooling }}
      </h3>
      <div
        class="grid-cols-3 py-10 space-y-2 lg:space-y-0 lg:grid lg:gap-3 lg:grid-rows-3"
      >
        <div v-for="casing in data?.data">
          <nuxt-link
            :to="'/' + name + '/' + casing.slug"
            class="block overflow-hidden rounded border border-gray-600 dark:border-gray-200"
          >
            <div class="h-64 sm:h-72">
              <img
                :src="casing.thumbnail"
                :alt="casing.name"
                class="inset-0 object-cover w-full h-full opacity-100 hover:-scale-x-100"
              />
            </div>

            <div class="relative p-6 h-96">
              <span
                class="whitespace-nowrap bg-gray-800 px-3 py-1.5 text-xs font-medium text-gray-200"
              >
                {{ casing.category?.name }}
              </span>

              <h3
                class="mt-4 text-lg font-medium text-gray-900 dark:text-gray-200"
              >
                {{ casing.name }}
              </h3>

              <form class="mt-4 absolute bottom-5">
                <button
                  class="block w-full p-4 text-sm font-medium transition bg-gray-800 text-gray-200 hover:scale-105"
                >
                  Learn More
                </button>
              </form>
            </div>
          </nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const route = useRoute();
const cat = route.params.name;
const name = "cooling";

const { data } = await useAsyncData("products", () =>
  $fetch("https://admindash.comcitybd.com/api/brands/Value-Top/60?id[]=21")
);
</script>
