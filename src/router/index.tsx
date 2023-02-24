import { Navigate, RouteObject } from 'react-router-dom'

import Discover from '@/pages/discover'
import Focus from '@/pages/focus'
import Mine from '@/pages/mine'

const routes: RouteObject[] = [
  {
    path: '/',
    element: <Navigate to='/discover' />,
  },
  {
    path: '/discover',
    element: <Discover />,
  },
  {
    path: '/focus',
    element: <Focus />
  },
  {
    path: '/mine',
    element: <Mine />
  }
]

export default routes
