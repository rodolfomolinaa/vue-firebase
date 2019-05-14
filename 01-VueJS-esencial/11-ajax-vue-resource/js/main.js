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
            this.$http.get('https://randomuser.me/api/?results=20')
                .then(respuesta => {
                    this.personas = respuesta.body.results
                })
        }
    }
})