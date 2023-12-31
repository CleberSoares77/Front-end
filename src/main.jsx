import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  RouterProvider
} from 'react-router-dom'

import { ChakraProvider } from '@chakra-ui/react'

//import './index.css'

import myRouter from './routes.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <ChakraProvider>
    <React.StrictMode>
      <RouterProvider router={myRouter}/>
    </React.StrictMode>
  </ChakraProvider>,
)
