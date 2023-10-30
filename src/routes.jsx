import{
    createBrowserRouter
}from 'react-router-dom'

import { Protected } from './hooks/Protected'

import {HomePage} from './pages/HomePage'
import { LoginPage } from './pages/LoginPage'
import { CadastroPage } from './pages/HomePage/CadastroPage'

const myRouter = createBrowserRouter([
    {
        path: '/',
        element: <HomePage/>
    },
    {
        path: '/login',
        element:<LoginPage/>
    },
    {
        path: '/Cadastro',
        element:<CadastroPage/>
           
    }
])

export default myRouter