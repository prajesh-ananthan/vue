<template>
  <small>Written by {{ author.firstName }} {{ author.lastName }}</small>
</template>

<script>
import { eventBus } from "./main";

export default {
  // Validating passed data from Article.vue
  props: {
    author: {
      type: Object,
      required: true
    }
  },
  created() {
    eventBus.$on("articleWasShared", data => {
      alert("Someone has shared the article on " + data.media + "!");
    });
  }
};
</script>