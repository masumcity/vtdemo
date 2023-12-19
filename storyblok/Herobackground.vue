<template>
  <div v-editable="blok" class="w-full" :class="blok.bgstyle">
    <a href="#">
      <div class="flex relative">
        <img
          alt="banner"
          class="absolute inset-0 w-full h-full"
          :src="blok.photo.filename"
        />
        <div
          class="max-w-2xl text-center relative z-10 py-32"
          :class="blok.position"
        >
          <h1
            class="text-3xl font-extrabold sm:text-5xl"
            :style="{ color: blok.titlecolor.color }"
          >
            {{ blok.title }} <br />

            <span class="sm:block" :style="{ color: blok.subtitlecolor.color }">
              {{ blok.subtitle }}
            </span>
          </h1>

          <p
            class="mx-auto mt-4 max-w-screen-xl sm:text-xl sm:leading-relaxed"
            :style="{ color: blok.textcolor.color }"
          >
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
    </a>
  </div>
</template>

<script setup>
const thisblok = defineProps({ blok: Object });
</script>
