<template>
  <div class="contact-links-group">
      <a :href="links.email.url" :title="links.email.display" target="blank"><i class="fa fa-envelope"></i></a>
      <a :href="links.linkedin.url" :title="links.linkedin.display" target="blank"><i class="fab fa-linkedin"></i></a>
      <a :href="links.github.url" :title="links.github.display" target="blank"><i class="fab fa-github"></i></a>
      <a :href="links.twitter.url" :title="links.twitter.display" target="blank"><i class="fab fa-twitter"></i></a>
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
.contact-links-group a {
  color: inherit;
  margin-right: .5em;
}
</style>
