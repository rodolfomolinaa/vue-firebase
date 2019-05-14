Vue.component('lista-tareas', {
    template:
        `
        <div>
        <h1>
            <slot></slot>
        </h1>
        <ul>
            <tarea v-for="tarea in tareas" :tarea="tarea"></tarea>
        </ul>
    </div>
        `,
    data() {
        return {
            tareas: [
                'Finalizar sección Componentes',
                'Iniciar workflow con Vue CLI y webpack',
                'Terminar de estudiar la documentación de Vuex',
                'Seguir jugando con Vue Router y grabar el primer vídeo',
            ]

        }
    }
})

Vue.component('tarea', {
    props: ['tarea'],
    template:
        `
        <li> {{tarea}} </li>
        `
})

Vue.component('contacto', {
    template:
        `
        <div>
            <a href="mailto:juan@email.com">juan@email.com</a>
            <hr>
        </div>
        `
});

Vue.component('bio', {
    template:
        `
        <div>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error esse a illum animi recusandae tempora enim incidunt officiis repellendus debitis laborum libero, odit dolor optio rerum totam, praesentium molestias ipsa!
            </p>
        </div>
        `
})

new Vue({
    el: 'main',
    data: {
        seleccionado: 'lista-tareas'
    }
})

