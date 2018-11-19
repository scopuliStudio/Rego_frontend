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

    <section class="connected-sources">
      <div class="container">
        <div class="sources-intro">
          <h4 class="sources-title">Current Sources</h4>
          <p>We are working on adding more and more sources</p>
        </div>
          <div class="columns">
            <div class="column is-one-third" style="margin-top: 45px;">
              <div class="source-container">
                <img class="source-img" src="../assets/reddit.svg" alt="Reddit">
              </div>
              <p class="source-p">Find discussions from Reddit</p>
            </div>
            <div class="column is-one-third" style="margin-top: 45px;">
              <div class="source-container">
                <img class="source-img" src="../assets/twitter.svg" alt="Twitter">
              </div>
              <p class="source-p">Get quick new from Twitter</p>
            </div>
            <div class="column is-one-third" style="margin-top: 45px;">
              <div class="source-container">
                <img class="source-img" src="../assets/medium.svg" alt="Medium">
              </div>
              <p class="source-p">Read articles from Medium</p>
            </div>
          </div>

      </div>
    </section>
    <section class="repeat-start">
     <div class="container">
      <div class="footer-start">
          <h3 class="footer-title"><span>Read</span> latest <span>Articles</span></h3>
          <button class="start-btn" id="v2-btn">
          Start
          </button>
      </div>
      </div>
    </section>
    <footer>
      <div class="container">
          <div class="columns level">
            <div class="column is-half">
              <div class="footer-logo">
                REGO
              </div>
            </div>
            <div class="column is-half" >
                <ul class="footer-navbar">
                  <li><a href="#" class="footer-navitem">Home</a></li>
                   <li><a href="#" class="footer-navitem">About</a></li>
                    <li><a href="#" class="footer-navitem">Contact</a></li>
                     <li><a href="#" style="color: #4a4a4a">© Copyright 2018</a></li>
                </ul>
            </div>
          </div>
      </div>
    </footer>
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
