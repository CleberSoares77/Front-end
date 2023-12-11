import{
    createBrowserRouter
}from 'react-router-dom'

import { Protected } from './hooks/Protected'

import { HomePage } from './pages/HomePage'
import { LoginPage } from './pages/LoginPage'
import { CadastroPage } from './pages/CadastroPage'
import { TelaPrincipalPage } from './pages/TelaPrincipalPage'
import { Empresa } from './pages/EmpresaPage'
import { EsqueceuSenhaPage } from './pages/EsqueceuSenhaPage'
import { PaginaEmpresa } from './pages/PaginaEmpresaPage'
import { PaginaLoginEmpresa } from './pages/PaginaLoginEmpresa'

const myRouter = createBrowserRouter([

    {
        path: '/',
        element:<TelaPrincipalPage/>
           
    }, 
    {
        path: '/login',
        element: <HomePage/>
    },
    {
        path: '/entrar',
        element:<LoginPage/>
    },
    {
        path: '/Cadastro',
        element:<CadastroPage/>
           
    },
    {
        path: '/Empresa',
        element:<Empresa/>
           
    },
    {
        path: '/redefinir',
        element: <EsqueceuSenhaPage/>
    },
    {
        path: '/cadastroEmpresa',
        element:<PaginaEmpresa/>
           
    },
    {
        path: '/index',
        element:<PaginaLoginEmpresa/>
           
    }
])

export default myRouter