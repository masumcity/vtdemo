<template>
  <aside v-editable="blok" class="w-full py-6" aria-label="Sidebar">
    <div class="overflow-y-auto py-4 px-3 bg-gray-50 rounded dark:bg-gray-800">
      <ul class="space-y-2">
        <StoryblokComponent
          v-for="blok in blok.rows"
          :key="blok._uid"
          :blok="blok"
        />
      </ul>
    </div>
  </aside>
</template>

<script setup>
defineProps({ blok: Object });
</script>
