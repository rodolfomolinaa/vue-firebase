Vue.component('mis-tareas', {
    // props: ['tareas'],
    template:
        `
        <ul>
            <li v-for="tarea in tareas"> {{tarea.title}} </li>
        </ul>
        `,

    mounted() {
        axios.get('https://jsonplaceholder.typicode.com/todos')
            .then(response => {
                this.tareas = response.data;
            })
    },
    data() {
        return {
            tareas: [],
        }
    }
});

new Vue({
    el: 'main',
    // mounted() {
    //     axios.get('https://jsonplaceholder.typicode.com/todos')
    //         .then(response => {
    //             this.tareasAjax = response.data;
    //         })
    // },
    // data: {
    //     tareasAjax: [],
    //     tareasLocales: [
    //         { title: 'Hacer la compra' },
    //         { title: 'Aprender Vue' },
    //         { title: 'Hacer la compra' },
    //     ]
    // }
})