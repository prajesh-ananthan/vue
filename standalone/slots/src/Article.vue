<template>
  <div class="article">
      <h1>{{ title }}</h1>
      
      <p>Published on {{ published | moment }}</p>
      <p>Shares: {{ shares }}</p>
      <p class="lead">{{ content }}</p>
      
      <app-social-sharing :article="$data" @articleWasShared="shared"></app-social-sharing>
      <br>
      <!-- Pass author object from parent to child -->
      <appAuthor :author="author"></appAuthor>
      <app-contact>
        <p slot="top">Please contact us as one of our representives will get back to you</p>
        <p slot="bottom">Please do not submit any sensitive information.</p>
      </app-contact>
  
      
  </div>
</template>

<script>

import moment from "moment";
import Social from "./Social.vue";
import Contact from "./Contact.vue"
import Author from "./Author.vue";

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
    appSocialSharing: Social,
    appContact: Contact
  }
};
</script>