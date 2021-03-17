let files = [
  {tag: 'folder', name: 'dir1', files: [
    {tag: 'file', name: 'fileA'},
    {tag: 'file', name: 'fileB'},
    {tag: 'folder', name: 'dir1a', files: [
      {tag: 'file', name: 'fileAA'},
      {tag: 'file', name: 'fileBB'}
    ]}
  ]},
  {tag: 'folder', name: 'dir2'},
  {tag: 'file', name: 'file1'}
]
Vue.component('tree',{
  template: `
  <div class='tree'>
    <div v-for="file in files">
      <folder v-if="file.tag == 'folder'" :file='file'></folder>
      <div v-else class='file'>
        {{file.name}}
      </div>
    </div>
  </div>
  `,
  props: ['children'],
  data(){
    return {
      files: this.children || files
    }
  }
})
Vue.component('folder',{
  template: `
  <div class='folder' v-bind:class="{ active: isOpen }">
    <div v-on:click="toggleExpand()">
      {{file.name}}/
      <small v-if="isOpen && !file.files">(empty)</small>
    </div>
    <tree v-if='isOpen && file.files' :children='file.files'></tree>

  </div>
  `,
  props: ['file'],
  methods: {
    toggleExpand: function(){
      this.isOpen = !this.isOpen
    }
  },
  data: function(){
    return {
      isOpen: false
    }
  }
})
new Vue({
  el: '#app'
})