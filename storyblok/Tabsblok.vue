<template>
  <section :class="blok.bgstyle">
    <div class="py-4 px-4 mx-auto max-w-screen-xl lg:px-6">
      <div
        class="text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:text-gray-400 dark:border-gray-700"
      >
        <ul class="flex flex-wrap -mb-px">
          <StoryblokComponent
            v-for="blok in blok.tabs"
            :key="blok._uid"
            :blok="blok"
          />
        </ul>
      </div>
    </div>
  </section>
</template>
<script setup>
defineProps({ blok: Object });
</script>
