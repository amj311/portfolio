<template>
  <div id="app">
    <div v-if="dataIsLoading" style="margin-top: 48vh; height: 3rem; text-align: center; color: #fff">
            Loading...
        </div>
        <div v-else style="display: none;" :style="{display: dataIsLoading ? 'none' : 'block !important'}">
            
            <div id="topBar" class="fixed-diff">
                <div class="top-bar-content">
                    <div class="menu-button">
                        <a><i class="fa fa-bars"></i></a>
                    </div>
                    <div class="contact-nav-group">
                        <ContactLinks :links="data.contact"></ContactLinks>
                    </div>
                </div>
            </div>

            <div class="under-fixed-diff">
                <div id="fancytop">
                    <svg viewBox="0 0 500 10" preserveAspectRatio="none">
                        <rect width="500" height="10" style="fill: #fff;opacity: .1;transform: rotate(-1.5deg);transform-origin: bottom left;" x="0" y="0"></rect>
                        <rect style="fill: #fff;opacity: .07;transform: rotate(1deg);transform-origin: bottom right;" y="0" x="0" height="10" width="500"></rect>
                    </svg>
                </div>
                
                <HeroSection :imgurl="'http://portfolio.simplyoliveapps.com/filter-diff/src/assets/images/hero.jpg'">
                    <div style="width: 75%; margin-right: 2rem;">
                        <h1 style="font-size: 3em;">{{data.bio.firstname}} {{data.bio.lastname}}</h1>
                        <h4>{{data.bio.subtitle}}</h4>
                        <hr>
                        <p style="font-size: 1.2em;">Hey there! {{data.bio.intro}} Feel free to say hi to me!</p>
                    </div>
                    <div>
                        <a target="blank" :href="data.contact.email.url" class="btn btn-primary shadow btn-lg">👋 Say Hi!</a>
                    </div>
                </HeroSection>

                <BannerSection></BannerSection>
                <BannerSection class="bg-shade">
                    <div>not me!</div>
                </BannerSection>
                <BannerSection ></BannerSection>
                <BannerSection ></BannerSection>
                <BannerSection ></BannerSection>
                <BannerSection ></BannerSection>
                <BannerSection ></BannerSection>
                <BannerSection ></BannerSection>
                <BannerSection ></BannerSection>

            </div>
        </div>
  </div>
</template>

<script>
import HeroSection from './components/HeroSection.vue'
import BannerSection from './components/BannerSection.vue'
import ContactLinks from './components/ContactLinks.vue'

export default {
  name: 'App',
  components: {
    HeroSection,
    BannerSection,
    ContactLinks
  },
  data() { return {
      dataIsLoading: true,
      data: null,
  }},

  beforeMount() {
      this.getData();
  },
  
  methods: {
      async getData() {
          this.dataIsLoading = true;
          let data = await fetch("https://portfolio.simplyoliveapps.com/portfolio-data.json").then(
              res => res.json()
          )
          console.log(data)
          this.data = data;
          
          setTimeout(()=> {
              this.dataIsLoading = false;
          }, 50);
      }
  }
}
</script>

<style>
:root {
    --tint: #5297FF;
    --primary: #3073D9;
    --shade: #335484;
    --accent: #D9A030;
    --light: #e0e0ef;
    --grey: #888;
    --dark: #111;
    --text-on-primary: white;
    --text-on-shade: white;
    --text-on-dark: var(--light);
    --max-content-width: 80rem;
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
    background-color: #efefef;
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



section:not(.hero-wrapper) h2 {
    color: var(--shade);
}

section:not(.hero-wrapper) h4 {
    color: var(--tint);
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
    position: absolute;
    background-color: transparent;
    box-shadow: inset 0 3rem 3rem -3rem #fff8;
    width: 100%;
    height: 3rem;
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
    min-height: 50vh;
    background-size: cover;
    background-position: center center;
    box-shadow: inset 0 100vh 0 #0008, inset 0 0 10rem 1rem #000;
    display: flex;
    flex-direction: row;
    align-items: stretch;
}

.hero-wrapper .section-content-wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    flex-grow: 1;
}

.hero-wrapper hr {
    margin-left: 0;
}
</style>
