import Home from './components/Home'
import Equipo from './components/Equipo'
import Usuario from './components/Usuario'
import UsuarioFotos from './components/UsuarioFotos'
import UsuarioBio from './components/UsuarioBio'
import Contacto from './components/Contacto'
import Error404 from './components/Error404'

export const routes = [
    {
        path: '/',
        name: 'home',
        component: Home
    },
    {
        path: '/prueba',
        alias: '/otraprueba',
        redirect: { name: 'home' },
        component: Home
    },
    {
        path: '/equipo/:id',
        component: Equipo,
        children: [
            {
                path: '',
                name: 'equipo',
                components: {
                    default: Usuario,
                    bio: UsuarioBio,
                    fotos: UsuarioFotos
                },
            }
        ]
    },
    // {
    //     path: '/contacto/:newsletter',
    //     name: 'contacto',
    //     component: Contacto
    // },
    {
        path: '/contacto/',
        name: 'contacto',
        component: Contacto,
        props: {newsletter:true}
    },
    {
        path: '*',
        component: Error404,
    },
]
