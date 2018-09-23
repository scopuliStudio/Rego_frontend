<template>
    <div class="rego-container">
      <div class="nav">
      <div class="title-container">
      <h2 class='rego'>REGO</h2>
      <h2 class='front-end-developer'>Front End Developer</h2>
      </div>

      <div class="nav-links">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </div>
      </div>
<!--       <hr style="clear:both;"/> -->
      <div>
        <a v-on:click="runReddit()">Articles</a>
        <a v-on:click='runAskhn()'>Discussions</a>
        <a >People</a>
      </div>
      <div>
        <el-row :gutter='20' v-if='reddit_list'>
          <el-col :span='8' v-for="item in reddit_list">
            <a :href="item.url">
            <el-card :body-style="{ padding: '0px' }">
              <img src='https://media.wired.com/photos/5a55a95af41e4c2cd9ee6cd8/191:100/pass/Medium-logo-canvas.jpg'>
              <div style="padding: 14px;">
                <span>{{item.title}}</span>
                <span>{{item.fulllink}}</span>
                <h3>By {{item.author}}</h3>
                <div class="bottom clearfix">
                  <el-button disabled type="text" class="button">Link</el-button>
              </div>
            </div>
            </el-card>
            <div>
              
            </div>
            </a>
          </el-col>
        </el-row>
        <el-row :gutter='20' v-if='askhn_list'>
          <el-col :span='8' v-for="item in askhn_list">
            <a :href="item.url">
            <el-card :body-style="{ padding: '0px' }">
              <img src='https://media.wired.com/photos/5a55a95af41e4c2cd9ee6cd8/191:100/pass/Medium-logo-canvas.jpg'>
              <div style="padding: 14px;">
                <span>{{item.title}}</span>
                <span>{{item.fulllink}}</span>
                <h3>By {{item.author}}</h3>
                <div class="bottom clearfix">
                  <el-button disabled type="text" class="button">Link</el-button>
              </div>
            </div>
            </el-card>
            <div>
              
            </div>
            </a>
          </el-col>
        </el-row>
      </div>
    </div>
</template>

<script>
import axios from "axios";
export default {
  data: function() {
    return {
      reddit_list: [],
      askhn_list: [],
      podcasts_list: []
    };
  },
  created() {
  },
  methods: {
    runReddit: function(){
      let that = this;
      that.askhn_list = []
      axios
      .get("https://api.pushshift.io/reddit/search/submission/?q=javascript")
      .then(response => {
        that.reddit_list = response.data.data;
      });
    },
    runAskhn: function(){
      let that = this;
      that.reddit_list = [];
      axios
      .get("http://hn.algolia.com/api/v1/search?query=vuejs&tags=story")
      .then(response => {
        that.askhn_list = response.data.hits;
        console.log(that.askhn_list);
      });
    }
  }
};
</script>
<style>
html {
  background-color: #FCFCFC;
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

