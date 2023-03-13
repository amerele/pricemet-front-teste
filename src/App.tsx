import { useState, useEffect } from 'react'
import Header from './components/header'
import { Outlet } from "react-router-dom";

import { ChakraProvider } from '@chakra-ui/react'

function App() {

  return (
  <>
  <ChakraProvider>
    <Header />
    <Outlet />
  </ChakraProvider>
  </>
  )
}

export default App
