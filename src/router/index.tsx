import { Navigate, RouteObject } from 'react-router-dom'

import Discover from '@/pages/discover'
import Search from '@/pages/search'
import Rank from '@/pages/rank'
import Sheet from '@/pages/sheet'

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
    path: '/search',
    element: <Search />
  },
  {
    path: '/rank',
    element: <Rank />
  },
  {
    path: '/sheet',
    element: <Sheet />
  }
]

export default routes
