<template>
  <div id="app">
    <div v-if="dataIsLoading" style="margin-top: 48vh; height: 3rem; text-align: center; color: #fff">
      Loading...
    </div>
    <div v-else style="display: none;" :style="{display: dataIsLoading ? 'none' : 'block !important'}">
        
          <div id="fancytop">
              <svg viewBox="0 0 500 10" preserveAspectRatio="none">
                  <rect width="500" height="10" style="fill: #fff;opacity: .07;transform: rotate(-2deg);transform-origin: bottom left;" x="0" y="0"></rect>
                  <rect style="fill: #fff;opacity: .04;transform: rotate(1deg);transform-origin: bottom right;" y="0" x="0" height="10" width="500"></rect>
              </svg>
          </div>
          
          <HeroSection id="hero" :imgurl="'https://portfolio.simplyoliveapps.com/site/src/assets/images/hero.jpg'">
              <div style="">
                  <h1 style="font-size: 3em;">{{data.bio.firstname}} {{data.bio.lastname}}</h1>
                  <h4>{{data.bio.subtitle}}</h4>
                  <hr>
                  <ContactLinks :links="data.contact" style="font-size: 1.5em"></ContactLinks>
              </div>
          </HeroSection>

          <BannerSection>
            <div style="display: flex; flex-wrap: wrap; align-items: center; justify-content: space-between">
              <div style="width: 70%;">
                <h2>Hey there!</h2>
                <p style="font-size: 1.2em;">{{data.bio.intro}} Feel free to say hi to me!</p>
              </div>
              <div>
                  <a target="blank" :href="data.contact.email.url" class="btn btn-primary shadow-sm btn-lg">👋 Say Hi!</a>
              </div>
            </div>
          </BannerSection>

          <BannerSection id="skills" class="bg-shade" style="text-align: center">
            <h2>What I Love To Do</h2>
            <div class="flex-grid-container lg">
              <div class="icon-tile flex-grid-item">
                <div class="icon-tile-icon"><i class="fa fa-laptop-code"></i></div>
                <div class="icon-tile-label">Web & Mobile Development</div>
              </div>
              <div class="icon-tile flex-grid-item">
                <div class="icon-tile-icon"><i class="fa fa-cubes"></i></div>
                <div class="icon-tile-label">Quality Software Architecture</div>
              </div>
              <div class="icon-tile flex-grid-item">
                <div class="icon-tile-icon"><i class="fa fa-database"></i></div>
                <div class="icon-tile-label">Design Servers and APIs</div>
              </div>
              <div class="icon-tile flex-grid-item">
                <div class="icon-tile-icon"><i class="fa fa-palette"></i></div>
                <div class="icon-tile-label">UI/UX Design</div>
              </div>
              <div class="icon-tile flex-grid-item">
                <div class="icon-tile-icon"><i class="fa fa-lightbulb"></i></div>
                <div class="icon-tile-label">Creative Problem Solving</div>
              </div>
              <div class="icon-tile flex-grid-item">
                <div class="icon-tile-icon"><i class="fa fa-graduation-cap"></i></div>
                <div class="icon-tile-label">Learn New Things</div>
              </div>
            </div>
          </BannerSection>
          
          <BannerSection id="apps">
            <h2>My Work</h2>
            <br>
            <div id="liveapps">
              <h4>Solo Projects</h4>
              <ImageSortedAppList :list="appCategory('solo')"></ImageSortedAppList>
              <br>
              <h4>Collaborative Projects</h4>
              <ImageSortedAppList :list="appCategory('solo',false)"></ImageSortedAppList>
            </div>
          </BannerSection>

          <BannerSection class="bg-shade">
            <div style="display: flex; flex-wrap: wrap; align-items: center; justify-content: space-between">
              <div style="width: 70%;">
                <h2>Let's work together!</h2>
              </div>
              <div>
                  <p><a target="blank" :href="data.contact.email.url" class="btn btn-secondary shadow-sm btn-lg">Email Me!</a></p>
              </div>
            </div>
            <ContactLinks :links="data.contact" style="font-size: 1.5em"></ContactLinks>
          </BannerSection>
      </div>
  </div>
</template>

<script>
import HeroSection from './components/HeroSection.vue'
import BannerSection from './components/BannerSection.vue'
import ContactLinks from './components/ContactLinks.vue'
import AppCard from './components/AppCard.vue'
import ImageSortedAppList from './components/ImageSortedAppList.vue'
import AppList from './components/AppList.vue'

export default {
  name: 'App',
  components: {
    HeroSection,
    BannerSection,
    ContactLinks,
    AppCard,
    AppList,
    ImageSortedAppList
  },
  data() { return {
      dataIsLoading: true,
      data: null,
      logos: null,
  }},

  beforeMount() {
      this.getData();
  },
  
  methods: {
      async getData() {
          this.dataIsLoading = true;
          this.data = portfolioData;
          this.logos = logos;
          
          setTimeout(()=> {
              this.dataIsLoading = false;
          }, 50);
      },

      filterApps(filterFunc, list=null) {
          if (!list) list = this.data.apps;
          return list?.filter(filterFunc);
      },
      appCategory(tag, positive=true, list=null) {
        if (!list) list = this.data.apps;
        if (!positive) return this.filterApps(app=>app.tags.indexOf(tag)==-1, list)
        else return this.filterApps(app => app.tags.indexOf(tag)>-1, list)
      }
  },

  computed: {
  }
}
</script>

<style>
:root {
    font-size: 15px;  
    --tint: #5297FF;
    --primary: #3073D9;
    --shade: #335484;
    --accent: hsl(50, 69%, 45%);
    --accent-light: hsl(50, 70%, 58%);
    --accent-dark: hsl(50, 96%, 28%);
    --light: #e0e0ef;
    --grey: #888;
    --dark: #111;
    --text-on-primary: white;
    --text-on-accent: white;
    --text-on-shade: white;
    --text-on-dark: var(--light);
    --max-content-width: 1200px;
}

body {
    margin: 0;
    background-color: var(--shade);
}

             
.fixed-diff {
 position: fixed;
 mix-blend-mode: difference;
 color: #fff;
}

.under-fixed-diff {
    background-color: #fff;
}

.max-content-width {
    max-width: var(--max-content-width);
    margin: 0 auto;
}

.text-primary {
    color: var(--primary) !important;
}
.bg-primary {
    background-color: var(--primary) !important;
    color: var(--text-on-primary)
}
.bg-dark {
    background-color: var(--dark) !important;
    color: var(--text-on-dark)
}

body [class*="primary"] {
    background: var(--primary) !important;
    color: var(--text-on-primary);
}
body [class*="secondary"] {
    background: var(--accent-light) !important;
    color: var(--text-on-accent);
}
body [class*="shade"] {
    background: var(--shade) !important;
    color: var(--text-on-shade);
}

.btn {
    cursor: pointer;
}
.btn:hover {
    filter: brightness(.9);
}

.btn[class*="primary"] {
    border-color: var(--primary) !important;
}
.btn[class*="secondary"] {
    border-color: var(--accent) !important;
}
.btn[class*="outline"] {
    background: transparent !important;
}
.btn[class*="outline"][class*="primary"] {
    background: transparent !important;
    color: var(--primary);
}

body hr {
    width: 5rem;
    border-top: 1px solid #fff;
    mix-blend-mode: difference;
    margin: 2rem auto;
}





.flex-grid-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
}

.flex-grid-container.lg .flex-grid-item {
    width: 10rem;
    height: 10rem;
    margin: .5rem;
}

.flex-grid-container.lg .icon-tile-icon {
    font-size: 4rem;
}






section:not(.hero-wrapper):not([class*="bg-"]) h2 {
    color: var(--shade);
}

section:not(.hero-wrapper) h4 {
    color: var(--accent);
}




#topBar {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 5;
}
.top-bar-content {
    padding: .75rem;
    display: flex;
    justify-content: space-between;
}
#topBar a {
    color: #fff;
    text-decoration: none;
    margin-right: .3em;
}
#topBar i {
    font-size: 1.5em;
}





#fancytop{
    position: fixed;
    background-color: transparent;
    box-shadow: inset 0 3rem 3rem -3rem #fff8;
    width: 100%;
    height: 4rem;
    z-index: 1;
}

#fancytop svg {position: absolute;width: 100%;height: 100%;}

.section-wrapper {
    width: 100%;
}

.section-content-wrapper {
    padding: 3rem;
}


.hero-wrapper {
    min-height: 40vh;
    background-size: cover;
    background-position: center center;
    box-shadow: inset 0 100vh 0 #0008, inset 0 0 10rem 1rem #000;
    display: flex;
    flex-direction: row;
    align-items: stretch;
}

.hero-wrapper .section-content-wrapper {
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    flex-wrap: wrap;
    flex-grow: 1;
}

.hero-wrapper hr {
    margin-left: 0;
}







#skills .icon-tile-icon {
    color: var(--accent-light);
}


#apps .flex-grid-item {
  width: calc(32% - 2rem);
  max-width: 400px;
  min-width: 250px;
  margin: 1rem;
  flex-grow: 1;
}
</style>
