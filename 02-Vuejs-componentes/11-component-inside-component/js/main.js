Vue.component('password', {
    props: ['password'],
    template: `<input :value="password" @input="comprobarPassword($event.target.value)" ref="pass">`,
    methods: {
        comprobarPassword(password) {
            if (this.noValidas.includes(password)) {
                this.$refs.pass.value = password = '';
            }
            this.$emit('input', password);
        }
    },
    data() {
        return {
            noValidas: ['abc', 'admin', '123456', 'root']
        }
    }
})

new Vue({
    el: 'main',
    data: {
        password: 'es3Es653]!*&__'
    },
});