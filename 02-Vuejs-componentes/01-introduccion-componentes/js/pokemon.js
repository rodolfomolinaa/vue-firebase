Vue.component('mi-componente', {
    props: ['pokemones'],
    template:
        `
    <ul>
        <li v-for="pokemon in pokemones"> {{pokemon.name}} </li>
    </ul>
    `
})

new Vue({
    el: 'main',
    mounted() {
        axios.get('https://pokeapi.co/api/v2/pokemon/ditto/')
            .then(response => {
                this.pokemonesAjax = response.data;
                console.log('pokemones', this.pokemonesAjax);
                console.log('type', typeof this.pokemonesAjax.length);
            });
    },
    data: {
        pokemonesAjax: []
    }
})