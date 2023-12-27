import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import routes from './Routes/routes'
import AuthProvider from './provider/authProvider'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Toaster } from 'react-hot-toast'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <DndProvider backend={HTML5Backend}>
    <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <RouterProvider router={routes}></RouterProvider>
      <div><Toaster/></div>
    </AuthProvider></QueryClientProvider></DndProvider>
  </React.StrictMode>
);
