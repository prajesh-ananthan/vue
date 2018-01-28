<template>
    <div>
        <h3>Share {{ article.title }} with your friends</h3>
        <button class="btn btn-primary" @click="share('Facebook')">Share on Facebook</button>
        <button class="btn btn-primary" @click="share('Twitter')">Share on Twitter</button>
    </div>
</template>
<script>
// Import event bus from main.js
// The declaration of the eventbus is done there
import { eventBus } from "./main";

export default {
  props: {
    article: {
      type: Object,
      required: true
    }
  },
  methods: {
    share(media) {
    console.log(this.article);
      eventBus.$emit("articleWasShared", {
        article: this.article,
        media: media
      });

    //   this.$emit("articleWasShared", {
    //     media: media
    //   });
    }
  }
};
</script>
