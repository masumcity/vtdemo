<template>
  <li v-editable="blok">
    <nuxt-link
      v-if="blok.status"
      :to="blok.link"
      class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
    >
      <svg
        class="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M13 5l7 7-7 7M5 5l7 7-7 7"
        ></path>
      </svg>
      <span class="ml-3"> {{ blok.name }} </span>
    </nuxt-link>
  </li>
</template>
<script setup>
defineProps({ blok: Object });
</script>
