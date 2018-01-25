<template>
    <div>
        <h3>Share {{ article.title }} with your friends</h3>
        <button class="btn btn-primary" @click="share('Facebook')">Share on Facebook</button>
        <button class="btn btn-primary" @click="share('Twitter')">Share on Twitter</button>
    </div>
</template>
<script>
export default {
  props: {
    article: {
      type: Object,
      required: true
    }
  },
  methods: {
    share() {
      this.$emit("articleWasShared", {
        media: 'Facebook'
      });
    }
  }
};
</script>
