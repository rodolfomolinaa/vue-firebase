import Home from './components/Home'
import Equipo from './components/Equipo'
import EquipoRodolfo from './components/EquipoRodolfo'


export const routes = [
    {
        path: '/',
        component: Home
    },
    {
        path: '/equipo',
        component: Equipo,
        children: [
            {
                path: 'rodolfo',
                component: EquipoRodolfo
            }
        ]
    }
]
