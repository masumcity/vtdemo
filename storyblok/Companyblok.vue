<template>
  <div v-editable="blok" :class="blok.bgstyle" :id="blok.id">
    <div class="max-w-screen-xl mx-auto flex flex-col md:flex-row">
      <div class="w-full" :class="{ 'md:w-4/5':blok.video.filename }">
        <h1
          class="mb-4 text-2xl font-extrabold text-gray-900 md:text-3xl dark:text-white py-3"
        >
          {{ blok.first }} <br />
          {{ blok.second }}
        </h1>
        <p
          class="mb-6 text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-200"
        >
          {{ blok.text }}
        </p>
        <nuxt-link
          v-if="blok.buttontext"
          :to="blok.learnmore.cached_url"
          class="inline-flex justify-center items-center py-3 text-base font-medium text-center text-black dark:text-white dark:hover:text-gray-300 rounded-lg hover:text-gray-600"
        >
          {{ blok.buttontext }}
          <svg
            class="ml-2 -mr-1 w-5 h-5"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </nuxt-link>
        <div class="flex flex-col md:flex-row">
          <div
            v-if="blok.number1"
            class="text-black dark:text-white border-r-2 dark:border-gray-800 text-center py-12 flex-1"
          >
            <h3 class="md:text-8xl text-4xl font-extrabold p-4">
              {{ blok.number1 }}
            </h3>
            <p class="text-xl">{{ blok.text1 }}</p>
          </div>
          <div
            v-if="blok.number2"
            class="text-black dark:text-white border-r-2 dark:border-gray-800 text-center py-12 flex-1"
          >
            <h3 class="md:text-8xl text-4xl font-extrabold p-4">
              {{ blok.number2 }}
            </h3>
            <p class="text-xl">{{ blok.text2 }}</p>
          </div>
          <div
            v-if="blok.number3"
            class="text-black dark:text-white border-r-2 dark:border-gray-800 text-center py-12 flex-1"
          >
            <h3 class="md:text-8xl text-4xl font-extrabold p-4">
              {{ blok.number3 }}
            </h3>
            <p class="text-xl">{{ blok.text3 }}</p>
          </div>
          <div
            v-if="blok.number4"
            class="text-black dark:text-white text-center py-12 flex-1"
          >
            <h3 class="md:text-8xl text-4xl font-extrabold p-4">
              {{ blok.number4 }}
            </h3>
            <p class="text-xl">{{ blok.text4 }}</p>
          </div>
        </div>
      </div>
      <video-player
        v-if="blok.video.filename"
        class="md:w-1/5 w-full bg-[#212022]"
        :src="blok.video.filename"
        autoplay="muted"
        :loop="true"
        :volume="0.6"
      />
    </div>
  </div>
</template>

<script setup>
import { VideoPlayer } from "@videojs-player/vue";
import "video.js/dist/video-js.css";
defineProps({ blok: Object });
</script>

<style>
#vjs_video_3_html5_api {
  background-color: #212022;
}
</style>
