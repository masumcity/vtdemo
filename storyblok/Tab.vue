<template>
  <li v-editable="blok" class="mr-2">
    <a
      :href="blok.link"
      class="inline-block p-4 rounded-t-lg border-b-2 border-transparent hover:text-gray-600 dark:hover:text-gray-300 dark:text-gray-200"
    >
      {{ blok.name }}
    </a>
  </li>
</template>
<script setup>
defineProps({ blok: Object });
</script>
