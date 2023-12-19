<template>
  <div v-editable="blok" :class="blok.bgstyle">
    <div class="max-w-screen-xl mx-auto">
      <p class="dark:text-black md:text-3xl text-2xl md:w-2/3 w-full">
        {{blok.text}}
      </p>

      <p class="md:mt-20 mt-10 text-2xl p-4 text-black">{{blok.name}}</p>
    </div>
  </div>

  <div class="relative">
    <div class="absolute md:-top-80 -top-60 w-full">
      <div class="max-w-screen-xl mx-auto">
        <img :src="blok.photo.filename" loading="lazy" class="w-full"/>
      </div>
    </div>
  </div>
  <div class="dark:bg-gray-600 md:py-72 py-10 "></div>

</template>
<script setup>
defineProps({ blok: Object });
</script>