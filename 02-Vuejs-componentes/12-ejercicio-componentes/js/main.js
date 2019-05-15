

Vue.component('usuarios', {
    template: '#usuarios-template',
    mounted() {
        axios.get('https://randomuser.me/api/?results=200')
            .then(response => {
                console.log('response', response);
                const listado = response.data.results.map(usuario => {
                    return {
                        name: `${usuario.name.title} ${usuario.name.first} ${usuario.name.last}`,
                        correo: `${usuario.email}`,
                        foto: `${usuario.picture.medium}`,
                    }
                });
                this.usuarios = listado;
            });
    },
    data() {
        return {
            usuarios: [],
            busqueda: '',
        }
    },
    computed: {
        filtrarUsuarios() {
            return this.usuarios.filter(usuario => {
                return usuario.name.includes(this.busqueda);
            });
        }
    }

});

Vue.component('usuario', {
    props: ['data'],
    template: `#usuario-template`
});

new Vue({
    el: 'main',
})