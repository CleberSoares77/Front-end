import {Navigate} from 'react-router-dom'
import { Auth } from './Auth'

export const Protected = ({children}) =>{
    if(!Auth){
        return <Navigate to='/' />
    }

    return children
}