<template>
  <ul>
    <li v-for="user in users">{{ user }}</li>
  </ul>
</template>

<script setup>
import jsons from "~/assets/demo.json";

const users = jsons;


</script>
