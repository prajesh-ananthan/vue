<template>
    <p v-if='announcement' class="alert alert-info">{{ announcement }}</p>
    <p v-else class="alert alert-info">No announcements yet.</p>
</template>

<script>
import { eventBus } from "./main";

export default {
  data() {
    return {
      announcement: null
    };
  },
  created() {
    eventBus.$on("articleWasShared", data => {
      this.announcement = data.article.title + " was shared on " + data.media + "!";
    });
  }
};
</script>
