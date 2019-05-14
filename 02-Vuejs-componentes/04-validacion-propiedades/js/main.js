Vue.component('candidato', {
    // props: ['nombre', 'correo', 'imagen'],
    props: {
        nombre: {
            type: [String, Array], // null = -> de cualquier tipo
            required: true
        },
        correo: {
            type: String,
            default: "rodolfo@gmail.com"
        },
        imagen: String,
        location: {
            type: Object,
            default() {
                return {
                    ciudad: "Valencia",
                }
            }
        },
    },
    template: '#candidato-template',
});

new Vue({
    el: 'main',
    mounted() {
        this.obtenerCandidatos();
    },
    data: {
        candidatos: [],
    },
    methods: {
        obtenerCandidatos() {
            axios.get('https://randomuser.me/api/?results=100')
                .then(response => {
                    this.candidatos = response.data.results;
                })
        }
    }
})