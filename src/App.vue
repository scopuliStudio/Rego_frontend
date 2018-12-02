<template>
  <div id="app">
    <component :is='currentComp'></component>
    <!-- <component :is='landing'></component> -->
  </div>
</template>

<script>
import LandingPage from './components/LandingPage.vue'
import Dashboard from './components/Dashboard.vue'

export default {
  name: 'app',
  components: {
    LandingPage,
    Dashboard
  },
  data(){
    return{
      dashboard: Dashboard,
      // landing: LandingPage,
    }
  },
  computed: {
    currentComp() {
      return 'Dashboard'
    }

  }
}

</script>