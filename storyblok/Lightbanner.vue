<template>
  <div :class="blok.bgstyle">
    <div
      v-editable="blok"
      class="max-w-screen-xl mx-auto rounded-[5px] text-center overflow-hidden"
    >
      <div class="px-12 py-6">
        <h3 class="text-3xl text-gray-800 dark:text-gray-200 font-bold uppercase p-3">
          {{ blok.title }}
        </h3>
        <p class="p-5 text-xl font-bold dark:text-gray-200">{{ blok.subtitle }}</p>
        <p class="dark:text-gray-200">{{ blok.text }}</p>
      </div>
      <img
        :src="blok.image.filename"
        :alt="blok.image.alt"
        class="mx-auto md:h-[32rem] pb-6 w-full md:w-auto"
      />
    </div>
  </div>
</template>

<script setup>
defineProps({ blok: Object });
</script>
