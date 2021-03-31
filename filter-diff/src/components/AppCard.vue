<template>
  <div class="app-card card shadow-sm" style="">
  <div class="preview-wrapper" v-if="app.previewUrl">
    <div class="preview-spacer"></div>
    <img class="preview-img" :src="app.previewUrl" alt="Preview of app">
  </div>
  <div class="card-body">
    <h5 class="card-title">{{app.title}}</h5>
    <p class="card-text">{{app.summary}}</p>

    <p class="card-text stack-icons">
      <span>Stack: </span>
      <span v-for="tech in app.stack" :key="tech" class="stack-icon" :title="tech">
        <i v-if="logos[tech]" :style="{backgroundImage: `url(${logos[tech]})`}"></i>
      </span>
    </p>
    <div class="source-links">
      <a v-if="app.liveUrl" :href="app.liveUrl" target="blank" class="btn btn-primary card-link">See It</a>
      <a v-if="app.repoUrl" :href="app.repoUrl" target="blank" class="card-link"><i class="fa fa-code"></i></a>
      <a v-if="app.npmUrl" :href="app.npmUrl" target="blank" class="card-link"><i class="fab fa-npm"></i></a>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'AppdCard',
  props: ['app', 'logos']
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
:root {
  --stack-icon-size: 1.25em;
}

.app-card {
  overflow: hidden;
}

.preview-wrapper {
    position: relative;
    width: 100%;
    overflow: hidden;
    border-bottom: 1px solid #0002;
}

img.preview-img {
    position: absolute;
    top: 0;
    object-fit: cover;
    width: 100%;
}

.preview-spacer {
    padding-top: 45%;
}

.stack-icon i {
    display: inline-block;
    width: var(--stack-icon-size);
    height: var(--stack-icon-size);
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
}

p.card-text.stack-icons {
    display: flex;
    align-items: center;
}

span.stack-icon {
    display: inline-block;
    margin-left: .5em;
    line-height: 1em;
    height: var(--stack-icon-size);
    width: var(--stack-icon-size);
}
</style>
