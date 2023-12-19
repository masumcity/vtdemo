<template>
  <div v-editable="blok">
    <div
      v-if="blok.icon.filename"
      class="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-gray-300 lg:h-12 lg:w-12 dark:bg-gray-200"
    >
      <img
        :src="blok.icon.filename"
        class="dark:invert-0 w-5 h-5 text-primary-600 lg:w-6 lg:h-6 dark:text-gray-200"
      />
    </div>
    <h3 class="mb-2 text-xl font-bold dark:text-white">{{ blok.title }}</h3>
    <p class="text-gray-500 dark:text-gray-200">
      {{ blok.text }}
    </p>
  </div>
</template>
<script setup>
defineProps({ blok: Object });
</script>
