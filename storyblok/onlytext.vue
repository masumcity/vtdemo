<template>
  <div v-editable="blok">
    <div class="px-12 py-6 text-black dark:text-gray-200">
      {{ blok.text }}
    </div>
  </div>
</template>

<script setup>
defineProps({ blok: Object });
</script>
