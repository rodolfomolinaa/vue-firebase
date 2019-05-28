const home = Vue.component('Home', {
    template: '<h2>Home</h2>',
});

const contacto = Vue.component('Contacto', {
    template: '<h2>Contacto</h2>',
});

const routes = [
    { path: '/', component: home },
    { path: '/contacto', component: contacto },

];

const router = new VueRouter({
    routes
});

const vm = new Vue({
    el: 'main',
    router
})