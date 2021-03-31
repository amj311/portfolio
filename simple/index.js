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
        data: null,
    },

    beforeMount() {
        this.getData();
    },
    
    methods: {
        async getData() {
            this.dataIsLoading = true;
            let data = await fetch("../portfolio-data.json").then(
                res => res.json()
            )
            console.log(data)
            this.data = data;
            
            setTimeout(()=> {
                this.dataIsLoading = false;
            }, 50);
        }
    }

})