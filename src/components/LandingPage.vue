<template>
  <div>
    <!-- Body -->
    <Navbar />
    <div class="banner">
      <img src="../assets/banner.svg" class="landing-banner" alt="Banner">
    </div>
    <div class="container">
      <div class="hero-container">
        <h1 class="hero-text">The way to discover great <span class="anim-typewriter" data-wait="1000" data-words='["articles", "podcasts", "people"]'></span> <span class="break-text"> you were looking for</span></h1>
        <button class="start-btn" @click="modal_launch" @keyup.esc='modal_close'>
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
            <p class="source-p">Get quick news from Twitter</p>
          </div>
          <div class="column is-one-third" style="margin-top: 45px;">
            <div class="source-container">
              <img class="source-img" src="../assets/medium.svg" alt="Medium">
            </div>
            <p class="source-p">Read articles from Medium</p>
          </div>
        </div>
        <div class="modal" v-bind:class="{'is-active':isActive}">
          <div class="modal-background"></div>
          <div class="modal-content">
                          <!-- Kod Modalki -->
            <div class="box" @keyup.esc='modal_close'>
              <div>
                <h2>Who are you</h2>
              </div>
              <div class='control'>
                <div class="columns">
                  <div class='column'>
                    <label class="radio">
                              <input type="radio" name="answer">
                              Ux Ui Designer
                            </label>
                  </div>
                  <div class='column'>
                    <label class="radio">
                              <input type="radio" name="answer">
                              Back-end Developer
                            </label>
                  </div>
                </div>
                <div class='columns'>
                  <div class="column">
                    <label class="radio">
                              <input type="radio" name="answer">
                             Front-end Developer
                            </label>
                  </div>
                  <div class="column">
                    <label class="radio">
                              <input type="radio" name="answer">
                              IT enthusiast
                            </label>
                  </div>
                </div>
                <a class='button is-rounded is-danger is-focused'>Ok</a>
              </div>
            </div>
          </div>
          <button @click="modal_close" class="modal-close"></button>
        </div>
      </div>
    </section>
    <section class="repeat-start">
      <div class="container">
        <div class="footer-start">
          <h3 class="footer-title">Get latest content</h3>
          <button class="start-btn" id="v2-btn" @click="modal_launch" @keyup.esc='modal_close'>
                                                          Start
                                                          </button>
        </div>
      </div>
    </section>
    <Footer />
  </div>
  <!-- End Body -->
</template>

<script>
  import Navbar from '../components/navigation.vue'
  import Footer from '../components/footer.vue'
  // import Modal from '../components/Modal.vue'
  
  
  export default {
    components: {
      Navbar,
      Footer,
      // Modal
    },
    data: function() {
      return {
        isActive: false
      }
    },
    created: function() {
      const AnimWriter = function(txtElement, words, wait = 1000) {
        this.txtElement = txtElement;
        this.words = words;
        this.txt = '';
        this.wordIndex = 0;
        this.wait = parseInt(wait, 10);
        this.type();
        this.isDeleting = false;
  
      }
      // Type Method
      AnimWriter.prototype.type = function() {
        // Curren index of words
        const current = this.wordIndex % this.words.length;
        // Get full text of current word
        const fullTxt = this.words[current];
  
        // Check if deleting
        if (this.isDeleting) {
          // Remove char
          this.txt = fullTxt.substring(0, this.txt.length - 1);
        } else {
          // Add char
          this.txt = fullTxt.substring(0, this.txt.length + 1);
        }
  
        this.txtElement.innerHTML = `<span class="txt">${this.txt}</span>`;
  
        // Type Speed
        let typeSpeed = 300;
        if (this.isDeleting) {
          typeSpeed /= 2;
        }
  
  
        // if words is complete 
        if (!this.isDeleting && this.txt === fullTxt) {
          // Make pause at the End
          typeSpeed = this.wait;
          // Set delete to True
          this.isDeleting = true;
        } else if (this.isDeleting && this.txt === '') {
          this.isDeleting = false;
          // Move to the next word
          this.wordIndex++;
          // Pause before start typing
          typeSpeed = 500;
        }
  
        setTimeout(() => this.type(), typeSpeed)
      }
  
      // Init on DOM Load
  
      document.addEventListener("DOMContentLoaded", init);
      // Init App
  
      function init() {
        const txtElement = document.querySelector('.anim-typewriter');
        const words = JSON.parse(txtElement.getAttribute('data-words'));
        const wait = txtElement.getAttribute('data-wait');
        new AnimWriter(txtElement, words, wait);
      }
  
  
    },
    methods: {
      modal_launch: function() {
        this.isActive = true;
      },
      modal_close: function() {
        this.isActive = false;
      }
    },
  
  }
</script>
