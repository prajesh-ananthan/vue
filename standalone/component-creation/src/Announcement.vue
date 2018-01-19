<template>
    <div class="alert alert-info">{{ announcement }}</div>
</template>
<script>
export default {
  data() {
    return {
      announcement: "The site will be down for 10 minutes!"
    };
  }
};
</script>