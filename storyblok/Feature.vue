<template>
  <div
    v-editable="blok"
    class="w-full text-center overflow-hidden"
    :class="blok.bgstyle"
  >
    <img
      :src="blok.image.filename"
      :alt="blok.image.alt"
      class="w-full h-48 xl:h-72 object-cover"
    />
    <div class="px-12 py-6">
      <h3 class="text-2xl text-gray-600 dark:text-gray-200 font-bold">
        {{ blok.name }}
      </h3>
    </div>
  </div>
</template>

<script setup>
defineProps({ blok: Object });
</script>
