<template>
  <div v-editable="blok" :style="{ 'background-color': blok.bgstyle.color }" class="py-10">
    <h3 class="text-center text-white text-2xl py-6">{{ blok.title }}</h3>
    <div class="container grid md:grid-cols-3 gap-2 mx-auto md:p-0 p-2">
      <StoryblokComponent
      v-for="blok in blok.photo"
      :key="blok._uid"
      :blok="blok"
    />
    </div>
  </div>
</template>
<script setup>
defineProps({ blok: Object });
</script>
