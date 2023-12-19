<template>
  <div v-editable="blok" class="w-full rounded">
    <img
      :src="blok.image.filename"
      :alt="blok.alt"
      class="object-cover h-96 w-full rounded-lg"
    />
  </div>
</template>

<script setup>
defineProps({ blok: Object });
</script>
