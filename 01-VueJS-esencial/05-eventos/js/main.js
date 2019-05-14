const vm = new Vue({
    el: 'main',
    data: {
        nuevaTarea: null,
        tareas: [
            'Aprender Vue.js',
            'aprender ES6',
            'Publicar algo todos los días'
        ]
    },
    methods: {
        agregarTarea() {
            // this, hace referencia a la instancia Vue
            this.tareas.unshift(this.nuevaTarea);
            this.nuevaTarea = null        
        }
    }
})