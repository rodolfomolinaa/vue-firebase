Vue.prototype.$http = axios;

new Vue({
    el: 'main',
    mounted() {
        this.cargarPersonas();
    },
    data: {
        personas: []
    },
    methods: {
        cargarPersonas() {
            // Vue resources
            // this.$http.get('https://randomuser.me/api/?results=20')
            //     .then(response => {
            //         this.personas = response.body.results
            //     })

            axios.get('https://randomuser.me/api/?results=20')
                .then(response => {
                    console.log(response.data.results)
                    this.personas = response.data.results;
                })
        }
    }
})