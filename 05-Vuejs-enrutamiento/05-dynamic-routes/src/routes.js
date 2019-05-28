import Home from './components/Home'
import Contacto from './components/Contacto'
import Usuario from './components/Usuario'

export const routes = [
    {
        path: '/',
        component: Home
    },
    {
        path: '/contacto',
        component: Contacto
    },
    {
        path: '/usuario/:id',
        component: Usuario
    }
]
