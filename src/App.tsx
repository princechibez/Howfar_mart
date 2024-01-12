import React from 'react'
// import RouteRegister from './routeRegistry'
import RouteRegister from './routeRegistry'
import { ProSidebarProvider } from 'react-pro-sidebar'
import { ThemeProvider } from '@mui/material'
import { mui_theme } from './utilities/mui_themes'

function App() {

  return (
    <React.StrictMode>
      <ProSidebarProvider>
        <ThemeProvider theme={mui_theme}>
          <RouteRegister />
        </ThemeProvider>
      </ProSidebarProvider>
    </React.StrictMode>
  )
}

export default App
