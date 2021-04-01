<template>
<div>
  <div class="flex-grid-container">
    <div v-for="app in list" :key="app.title" class="flex-grid-item">
      <AppCard :app="app"></AppCard>
    </div>
  </div>
</div>
</template>

<script>
import AppCard from './AppCard.vue'

export default {
  name: 'ImageSortedAppList',
  props: ['list'],
  components: {
    AppCard
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>
