Vue.component("banner-section", {
    template: "#section-template",
})

Vue.component("hero", {
    template: "#hero-template",
    props: ['imgurl']
})

Vue.component("contact-links", {
    template: "#contact-links-template",
    props: ['links']
})


const app = new Vue({
    el: "#app",

    data: {
        dataIsLoading: true,
        data: portfolio,
    },

    beforeMount() {
        this.getData();
    },
    
    methods: {
        async getData() {
            this.dataIsLoading = true;
            
            setTimeout(()=> {
                this.dataIsLoading = false;
            }, 50);
        }
    }

})