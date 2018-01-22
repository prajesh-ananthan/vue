<template>
  <small>Written by {{ firstName }} {{ lastName }}</small>
</template>

<script>
export default {
    props: ['firstName', 'lastName']
}
</script>