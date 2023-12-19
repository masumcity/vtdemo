<template>
  <div class="bg-white dark:bg-gray-700">
    <div
      class="relative mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8 lg:pt-16"
    >
      <StoryblokComponent v-if="story" :blok="story.content" class="px-0" />
    </div>
  </div>
</template>

<script setup>
const story = await useAsyncStoryblok("product", { version: "draft" });
</script>
