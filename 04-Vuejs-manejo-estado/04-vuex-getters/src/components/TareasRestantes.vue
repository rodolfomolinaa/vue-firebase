<template>
    <div>
        <h1> {{tareasCompletadas}} tareas completadas </h1>
    </div>
</template>

<script>
import {mapGetters} from 'vuex';
export default {
    // computed: {
        // tareasCompletadas(){
        //     return this.$store.state.tareas.filter(tarea => {
        //         return tarea.completado
        //     }).length            
        // }

        // tareasCompletadas(){
        //     return this.$store.getters.tareasCompletadas
        // }

    // }    

    computed: mapGetters(['tareasCompletadas'])
}
</script>