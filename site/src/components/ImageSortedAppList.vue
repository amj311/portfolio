<template>
<div>
  <AppList :list="withImage"></AppList>
  <AppList :list="withoutImage"></AppList>
</div>
</template>

<script>
import AppList from './AppList.vue'

export default {
  name: 'ImageSortedAppList',
  props: ['list'],
  components: {
    AppList
  },
  computed: {
    withImage() {
      return this.list.filter(a => a.previewUrl)
    },
    withoutImage() {
      return this.list.filter(a => !a.previewUrl)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>
