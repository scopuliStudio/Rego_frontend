<template>
  <div id="app">
    <!-- <LandingPage /> -->
    <Main />
  </div>
</template>

<script>
import Main from './components/Dashboard.vue'
import LandingPage from './components/LandingPage.vue'

export default {
  name: 'app',
  components: {
    Dashboard,
    LandingPage,
  }
}







</script>