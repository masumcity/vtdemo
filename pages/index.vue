<template>
  <StoryblokComponent v-if="story" :blok="story.content" class="!px-0" />
</template>

<script setup>
const story = await useAsyncStoryblok("home", { version: "draft" });
</script>
