<template>
  <div class="article">
      <h1>{{ title }}</h1>
      
      <p>Published on {{ published | moment }}</p>
      <p>Shares: {{ shares }}</p>
      <p class="lead">{{ content }}</p>
      
      <app-social-sharing @articleWasShared="shared"></app-social-sharing>
      <br><br>
      <appAuthor></appAuthor>
      <br>
      <!-- Bind properties from child component to the parent component with ':' symbol -->
      <!-- <appAuthor2 :firstName="author.firstName" :lastName="author.lastName"></appAuthor2> -->
      <appAuthor2 :author="author"></appAuthor2>

  
      
  </div>
</template>

<script>
/*
To add a new component at App.vue file:
=======================================
1) Create component
2) Register the component at main.js
3) Call the component at App.vue

To add a component in another component:
========================================
1) Create component
2) Import the component in the current component
3) Call the component at the template
*/

import moment from "moment";
import Author from "./Author.vue";
import Social from "./Social.vue";

// Importing firstName and lastName by properties
import AuthorTwo from "./AuthorTwo.vue";

export default {
  data() {
    return {
      title: "10 Reasons Why I love Vue.js",
      published: new Date(),
      content:
        "Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum",
      author: {
        firstName: "Prajesh",
        lastName: "Ananthan"
      },
      shares: 0
    };
  },
  methods: {
    shared: function(event) {
      this.shares++;
      console.log(event);
    }
  },
  filters: {
    moment: function(value) {
      return moment(value).format("MMMM Do");
    }
  },
  components: {
    appAuthor: Author,
    appAuthor2: AuthorTwo,
    appSocialSharing: Social
  }
};
</script>