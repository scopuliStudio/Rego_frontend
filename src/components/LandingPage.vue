<template>
  <div> <!-- Body -->
    <Navbar />
     <div class="banner">
      <img src="../assets/banner.svg" class="landing-banner" alt="Banner">
    </div>
    <div class="container">
    <div class="hero-container">
      <h1 class="hero-text">The way to discover great content <span class="break-text">you were looking for</span></h1>
      <button class="start-btn">
        Get Started
      </button>
    </div>
    </div>
  </div>
</template>

<style>
</style>

<script>
import Navbar from '../components/navigation.vue'
export default {
   components: {
    Navbar,
  }
  
}
</script>
