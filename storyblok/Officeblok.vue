<template>
  <div v-editable="blok" class="dark:bg-gray-800 pb-10">
   <div class="max-w-screen-xl mx-auto md:pt-36">
     <h3 class="text-center dark:text-white text-3xl p-4">{{blok.title}}</h3>
     <div
       class="flex md:flex-row flex-col bg-white rounded-lg shadow-md dark:bg-gray-600 dark:border-gray-700 gap-2"
     >
       <div class="md:w-1/2 dark:border border-gray-600 rounded dark:bg-gray-700">
         <img class="rounded h-[793px] object-cover" :src="blok.photo1.filename" loading="lazy" />
         <h3 class="text-black dark:text-white text-center text-xl p-4">{{blok.photo1text}}</h3>
       </div>
       <div class="md:w-1/2 dark:border border-gray-600 rounded dark:bg-gray-700">
         <img class="rounded h-[793px] object-cover" :src="blok.photo2.filename" loading="lazy" />
         <h3 class="text-black dark:text-white text-center text-xl p-4">{{blok.photo1text}}</h3>
       </div>
     </div>
   </div>
 </div>
</template>
<script setup>
defineProps({ blok: Object });
</script>