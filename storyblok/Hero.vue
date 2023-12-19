<template>
  <section v-editable="blok" :class="blok.bgcolor" :id="blok.id">
    <div
      class="mx-auto max-w-screen-xl px-4 py-32 lg:flex"
    >
      <div class="mx-auto max-w-3xl text-center">
        <h1
          class="text-3xl font-extrabold sm:text-5xl dark:text-white text-black"
        >
          {{ blok.title1 }} <br />

          <span class="sm:block text-gray-800 dark:text-gray-200"> {{ blok.title2 }} </span>
        </h1>

        <p class="mx-auto mt-4 max-w-screen-xl sm:text-xl sm:leading-relaxed text-black dark:text-gray-200">
          {{ blok.text }}
        </p>

        <div class="mt-8 flex flex-wrap justify-center gap-4">
          <nuxt-link
            v-if="blok.button1text"
            :to="blok.button1link"
            class="block w-full rounded border border-gray-600 bg-gray-600 px-12 py-3 text-sm font-medium text-white hover:bg-gray-800 hover:text-white focus:ring active:text-opacity-75 sm:w-auto"
          >
            {{ blok.button1text }}
          </nuxt-link>

          <nuxt-link
            v-if="blok.button2text"
            :to="blok.button2text"
            class="block w-full rounded border border-gray-600 px-12 py-3 text-sm font-medium dark:text-white hover:bg-gray-800 hover:text-white sm:w-auto"
          >
          {{ blok.button2text }}
          </nuxt-link>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup>
defineProps({ blok: Object });
</script>
