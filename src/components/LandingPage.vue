<template>
  <div>
    <!-- Body -->
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
      <section class="section-features">
          <div class="columns level">
            <div class="column is-one-third">
              <div class="feature-block">
                <img src="../assets/podcasts.svg" class="feature-img" alt="Podcasts">
                <h3 class="feature-h3">Podcasts</h3>
                <p class="feature-p">Interesting podcasts are really hard to find nowadays. Not anymore</p>
              </div>
            </div>
            <div class="column is-one-third">
              <div class="feature-block">
                <img src="../assets/articles.svg" class="feature-img" alt="Articles">
                <h3 class="feature-h3">Articles & Discussions</h3>
                <p class="feature-p">Get latest articles from the most prominent resources</p>
              </div>
            </div>
            <div class="column is-one-third">
              <div class="feature-block">
                <img src="../assets/people.svg" class="feature-img" alt="Podcasts">
                <h3 class="feature-h3">People</h3>
                <p class="feature-p">Read more about famous people in your field and get inspired by their work</p>
              </div>
            </div>
            </div>
      </section>
    </div>
  </div>
  <!-- End Body -->
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
