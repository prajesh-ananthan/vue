<template>
  <div>
      <h2>Contact Us</h2>
       <slot name="top"></slot>

      <form>

          <div class="form-group">
              <label for="yourName">Your name</label>
              <input type="text" class="form-control" id="yourName" placeholder="Enter your name">
          </div>

          
          <div class="form-group">
              <label for="emailAddress">Your name</label>
              <input type="text" class="form-control" id="emailAddress" placeholder="Enter your email address">
          </div>

          <slot name="bottom"></slot>

          <button type="submit" class="btn btn-primary">Send</button>
      </form>
  </div>
</template>

<script>
export default {

};
</script>
