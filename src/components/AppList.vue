<template>
<div>
  <div class="app-grid-container">
    <div v-for="app in list" :key="app.title" class="app-grid-item">
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
.app-grid-container {
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(15rem, 1fr));
	gap: 1rem;
}

.app-grid-item {
	width: 100%;
	height: 100%;
}
</style>
