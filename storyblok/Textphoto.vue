<template>
  <div v-editable="blok" class="lg:w-1/3 w-full p-4">
    <a href="#">
      <div class="flex relative">
        <img
          alt="gallery"
          class="absolute inset-0 w-full h-full object-cover object-center"
          :src="blok.photo.filename"
        />
        <div
          class="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-gray-700 opacity-0 hover:opacity-90"
        >
          <h2
            class="tracking-widest text-sm title-font font-medium text-white mb-1"
          >
            {{ blok.title }}
          </h2>
          <h1
            class="title-font text-lg font-bold text-white hover:text-indigo-100 mb-3"
          >
            {{ blok.subtitle }}
          </h1>
          <p class="leading-relaxed text-white">
            {{ blok.text }}
          </p>
        </div>
      </div>
    </a>
  </div>
</template>

<script setup>
defineProps({ blok: Object });
</script>
