<template>
  <section :class="blok.bgstyle" class="text-gray-600 body-font">
    <div class="container px-5 py-24 mx-auto">
      <div class="flex flex-wrap -m-4">
        <StoryblokComponent
          v-for="blok in blok.columns"
          :key="blok._uid"
          :blok="blok"
        />
      </div>
    </div>
  </section>
</template>
<script setup>
defineProps({ blok: Object });
</script>
