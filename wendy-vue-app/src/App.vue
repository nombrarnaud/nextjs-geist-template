<template>
  <div id="app" class="min-h-screen">
    <Navbar />
    <RouterView />
    <Footer />
  </div>
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router'
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'
</script>

<style>
#app {
  margin: 0;
  padding: 0;
  max-width: none;
}

body {
  margin: 0;
  padding: 0;
}
</style>
