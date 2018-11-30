<template>
  <div class="rego-container">
    <navbar/>
    <div>
      <h2>{{response_name}}</h2>
      <h2>{{description}}</h2>
    </div>
    <div class="columns is-mobile">
      <div class="column is-one-third" v-for="item in reddit_list">
        <div class="box">
          <h1>{{item.author}}</h1>
          <p>{{item.title}}</p>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
  import Navbar from "../components/navigation.vue";
  import Footer from '../components/footer.vue'
  import axios from "axios";
  
  export default {
    components: {
      Navbar,
      Footer
    },
    data: function() {
      return {
        reddit_list: [],
        askhn_list: [],
        podcasts_list: [],
        response_name: "UI UX Desginer",
        description: "One stop resouce for everything"
      };
    },
    created() {
      this.runReddit();
    },
    methods: {
      runReddit: function() {
        let that = this;
        that.askhn_list = [];
        axios
          .get(
            "https://api.pushshift.io/reddit/search/submission/?q=" +
            that.input_value
          )
          .then(response => {
            that.reddit_list = response.data.data;
          });
      },
      runAskhn: function() {
        let that = this;
        that.reddit_list = [];
        axios
          .get(
            "http://hn.algolia.com/api/v1/search?query=" +
            that.input_value +
            "&tags=story"
          )
          .then(response => {
            that.askhn_list = response.data.hits;
            console.log(that.askhn_list);
          });
      },
      runPeople: function() {}
    }
  };
</script>

<style>
  html {
    background-color: #fcfcfc;
    font-family: "Muli", sans-serif;
    font-size: 16px;
  }
  
  .rego-container {
    width: 90%;
    margin: 0 auto;
  }
  
  img {
    width: 200px;
  }
  
  .title-container {
    margin-top: 60px;
    margin-bottom: 40px;
  }
  
  .rego {
    margin-right: 25px;
    display: inline;
    color: #101010;
    font-family: "Muli", sans-serif;
    font-size: 2.5em;
    font-weight: 600;
    letter-spacing: 0.2px;
    line-height: 60px;
    text-align: center;
  }
  
  .front-end-developer {
    display: inline;
    text-transform: uppercase;
    opacity: 0.76;
    color: #8c8c8c;
    font-family: "Muli", sans-serif;
    font-size: 2.5em;
    font-weight: 600;
    letter-spacing: 0.2px;
    line-height: 60px;
    text-align: center;
  }
</style>
