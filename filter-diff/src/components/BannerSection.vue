<template>
  <section class="section-wrapper">
      <div class="section-content-wrapper max-content-width">
          <slot>
              <h2>I'm a section!</h2>
              <h4>This is a subtitle for a section</h4>
          </slot>
      </div>
  </section>
</template>

<script>
export default {
  name: 'BannerSection',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
