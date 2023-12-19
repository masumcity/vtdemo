<template>
  <div v-editable="blok" class="dark:bg-gray-700">
    <div class="max-w-screen-xl mx-auto">
      <div
        class="grid-cols-3 py-20 space-y-2 lg:space-y-0 lg:grid lg:gap-3 lg:grid-rows-3"
      >
        <div class="w-full rounded bg-gradient-to-r dark:from-gray-700 dark:via-gray-800 dark:to-gray-900 from-gray-300 via-gray-400 to-gray-500">
          <img :src="blok.pic1.filename" loading="lazy" class="mx-auto"/>
        </div>
        <div class="w-full col-span-2 row-span-2 rounded bg-gradient-to-r dark:from-gray-700 dark:via-gray-800 dark:to-gray-900 from-gray-300 via-gray-400 to-gray-500">
          <img :src="blok.pic2.filename" loading="lazy" class="mx-auto"/>
        </div>
        <div class="w-full rounded bg-gradient-to-r dark:from-gray-700 dark:via-gray-800 dark:to-gray-900 from-gray-300 via-gray-400 to-gray-500">
          <img :src="blok.pic3.filename" loading="lazy" class="mx-auto"/>
        </div>
        <div class="w-full rounded bg-gradient-to-r dark:from-gray-700 dark:via-gray-800 dark:to-gray-900 from-gray-300 via-gray-400 to-gray-500">
          <img :src="blok.pic4.filename" loading="lazy" class="mx-auto"/>
        </div>
        <div class="w-full rounded bg-gradient-to-r dark:from-gray-700 dark:via-gray-800 dark:to-gray-900 from-gray-300 via-gray-400 to-gray-500">
          <img :src="blok.pic5.filename" loading="lazy" class="mx-auto"/>
        </div>
        <div class="w-full rounded bg-gradient-to-r dark:from-gray-700 dark:via-gray-800 dark:to-gray-900 from-gray-300 via-gray-400 to-gray-500">
          <img :src="blok.pic6.filename" loading="lazy" class="mx-auto" />
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
defineProps({ blok: Object });
</script>
