<template>
  <div v-editable="blok" :class="blok.bgcolor">
    <div class="mx-auto max-w-screen-xl px-4 py-32">
      <div class="px-12 py-6 text-black dark:text-gray-200">
        <div v-html="richtext"></div>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({ blok: Object });
const richtext = computed(() => renderRichText(props.blok.text));
</script>
