import React from 'react'
import './App.css'
import About from './components/About/About'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Layout from './Layouts/Layout'
import Portfolio from './components/Portfolio/Portfolio'
import Contact from './components/Contact/Contact'

export default function App() {

  let routes = createBrowserRouter([
    {
      path: '/', element: <Layout/>, children: [
        {index: true, element: <About/>},
        {path: '/about', element: <About/>},
        {path: '/portfolio', element: <Portfolio/>},
        {path: '/contact', element: <Contact/>},
      ]
    }
  ])
  return (
    <>
      <RouterProvider router={routes} />
    </>
  )
}

