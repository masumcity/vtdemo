<template>
  <section
    v-editable="blok"
    class="relative bg-cover bg-center bg-no-repeat"
    :class="`dark:bg-[url('${blok.blackbanner.filename}')] bg-[url('${blok.whitebanner.filename}')]`"
  >
    <div class="absolute inset-0"></div> 
    <div
      class="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8"
    >
      <div class="max-w-xl text-center sm:text-left">
        <h1
          class="text-3xl font-extrabold sm:text-5xl text-gray-800 dark:text-gray-200"
        >
        <img :src="blok.whitebanner.filename" />
       
          {{ blok.name }}

          <strong class="block font-extrabold dark:text-gray-200 text-gray-800">
            {{ blok.name2 }}
          </strong>
        </h1>

        <p
          class="mt-4 max-w-lg sm:text-xl sm:leading-relaxed text-gray-800 dark:text-gray-200"
        >
          {{ blok.text }}
        </p>

        <div class="mt-8 flex flex-wrap gap-4 text-center">
          <nuxt-link
            :to="blok.learnmore.cached_url"
            class="block w-full rounded bg-white px-12 py-3 text-sm font-medium text-gray-600 shadow hover:text-gray-700 focus:outline-none focus:ring active:text-gray-500 sm:w-auto"
          >
            {{ blok.buttonname }}
          </nuxt-link>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
defineProps({ blok: Object });

</script>
