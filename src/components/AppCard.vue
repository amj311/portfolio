<template>
  <div class="app-card card shadow-sm" style="">
  <div class="preview-wrapper" v-if="app.previewUrl">
    <img class="preview-img" :src="app.previewUrl" :alt="`Preview of ${app.title}`" />
	<div class="preview-opener" @click="expanded = true;"><i class="fa fa-expand" /></div>
  </div>
  <div class="card-body">
    <h5 class="card-title">{{app.title}}</h5>
    <p class="card-text">{{app.summary}}</p>

    <p class="card-text stack-icons">
      <span>Stack: </span>
      <span v-for="tech in app.stack" :key="tech" class="stack-icon" :title="tech">
        <i v-if="logos[tech]" :style="{backgroundImage: `url(/logos/${logos[tech]})`}"></i>
      </span>
    </p>
	<div style="flex-grow: 1;" />
    <div class="source-links">
      <a v-if="app.repoUrl" :href="app.repoUrl" target="blank" class="card-link"><i class="fa fa-code"></i></a>
      <a v-if="app.npmUrl" :href="app.npmUrl" target="blank" class="card-link"><i class="fab fa-npm"></i></a>
      <a v-if="app.liveUrl" :href="app.liveUrl" target="blank" class="btn btn-primary card-link shadow-sm">See It</a>
    </div>
  </div>

	<div v-if="expanded" class="preview-expanded" @click="expanded = false">
	    <img class="preview-img" :src="app.previewUrl" :alt="`Preview of ${app.title}`" @click.stop />
		<div class="preview-closer"><i class="fa fa-times" /></div>
	</div>

</div>
</template>

<script>
import { logos } from '../data/logos';

export default {
  name: 'AppdCard',
  props: ['app'],
  data() { return  {
    logos,
	expanded: false,
  }},
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
:root {
  --stack-icon-size: 1.25em;
}

.app-card {
  overflow: hidden;
  height: 100%;
}

.card-body {
	display: flex;
	flex-direction: column;
}

.preview-wrapper {
    position: relative;
    width: 100%;
    overflow: hidden;
    border-bottom: 1px solid #0002;
    background-image: url('/loading.gif');
    background-repeat: no-repeat;
    background-position: center;
	aspect-ratio: 1.4;
}

img.preview-img {
    position: absolute;
    top: 0;
    object-fit: cover;
    width: 100%;
}

.preview-opener {
	position: absolute;
	bottom: 0.5rem;
	right: 0.5rem;
	padding: 0.3rem 0.6rem;
	border-radius: 0.5rem;
	cursor: pointer;
	color: #fff;
	display: none;
	background: #222b;
}
.preview-wrapper:hover .preview-opener {
	display: block;
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

.source-links {
  text-align: right;
}

.preview-expanded {
	position: fixed;
	inset: 0;
	background: #000b;
	z-index: 10;
}
.preview-expanded img {
	position: absolute;
	top: 50%;
	left: 50%;
	translate: -50% -50%;
	width: auto;
	max-width: calc(100% - 2rem);
}

.preview-closer {
	position: absolute;
	top: 0.5rem;
	right: 0.5rem;
	padding: 0.3rem 0.6rem;
	border-radius: 0.5rem;
	cursor: pointer;
	color: #fff;
}
</style>
