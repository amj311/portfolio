<template>
  <div class="contact-links-group">
      <a :href="links.email.url" :title="links.email.display"><i class="fa fa-envelope"></i></a>
      <a :href="links.linkedin.url" :title="links.linkedin.display"><i class="fab fa-linkedin"></i></a>
      <a :href="links.github.url" :title="links.github.display"><i class="fab fa-github"></i></a>
      <a :href="links.twitter.url" :title="links.twitter.display"><i class="fab fa-twitter"></i></a>
  </div>
</template>

<script>
export default {
  name: 'ContactLinks',
  props: ['links']
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
