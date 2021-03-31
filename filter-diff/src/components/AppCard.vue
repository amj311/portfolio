<template>
  <section class="app-card card shadow-sm">
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
  name: 'AppdCard',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.section-wrapper {
  background-color: #fff;
}
</style>
