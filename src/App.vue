<script setup>
import { RouterLink, RouterView } from 'vue-router'

// <RouterLink to="/">Home</RouterLink> -> for routing
// <RouterView /> -> to view usual page stuff.. nuxt is more convenient, but this gives me normal vue experience, even if the wiser option would be to use nuxt
</script>

<template>

  <RouterView /> 
</template>

<style>
  html, body{
    margin: 0;
    padding: 0;
  }
</style>
