import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import { App } from 'app/App'

import { About } from 'pages/About'
import { Home } from 'pages/Home'
import { Information } from 'pages/Information'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/about',
        element: <About />
      },
      {
        path: '/info',
        element: <Information />
      }
    ]
  }
])

export const Router = () => {
  return <RouterProvider router={router} />
}
