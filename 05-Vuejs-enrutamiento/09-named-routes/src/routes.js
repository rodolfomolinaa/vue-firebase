import Home from './components/Home'
import Equipo from './components/Equipo'
import Usuario from './components/Usuario'
import UsuarioFotos from './components/UsuarioFotos'
import UsuarioBio from './components/UsuarioBio'


export const routes = [
    {
        path: '/',
        component: Home
    },
    {
        path: '/equipo/:id',
        component: Equipo,        
        children: [
            {
                path: '',
                name: 'equipo',
                component: Usuario,                
                children: [
                    {
                        path: 'fotos',
                        name: 'fotos',
                        component: UsuarioFotos
                    },
                    {
                        path: 'bio',
                        name: 'bio',
                        component: UsuarioBio
                    }
                ]
            }
        ]
    }
]
